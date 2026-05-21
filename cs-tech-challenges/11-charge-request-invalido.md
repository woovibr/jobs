# Ticket #11 — `/charge` retorna sucesso mas o split não foi aplicado como esperado

**Canal:** WhatsApp (grupo de integração)
**Cliente:** NexoPay (fictício) — plataforma de pagamentos para PMEs, recém integrada
**Quem fala:** Customer K, dev júnior responsável pela integração
**Prioridade percebida pelo cliente:** alta

---

## Mensagem do cliente

> Oi, tudo bem? Estou criando uma cobrança com split pela API e está retornando 200, mas os valores do split na resposta estão completamente diferentes do que enviei. Não entendo o que aconteceu.
>
> Enviei isso no Postman (Body → raw → JSON):
>
> ```json
> {
>   "correlationID": "text&22miSubaccount",
>   "value": 500,
>   "autoApprove": true,
>   "splits": [
>     {
>       "pixKey": "19818133730",
>       "splitType": "SPLIT_SUB_ACCOUNT",
>       "value": 510
>     }
>   ]
> }
> ```
>
> E recebi isso:
>
> ```json
> {
>   "charge": {
>     "value": 500,
>     "identifier": "4789705be66e447f943bb9b2fa5d00d0",
>     "correlationID": "text&22miSubaccount",
>     "transactionID": "4789705be66e447f943bb9b2fa5d00d0",
>     "status": "ACTIVE",
>     "splits": [
>       {
>         "value": 100,
>         "pixKey": "5de114c8-64e2-452f-be92-77c14c4b93de",
>         "splitType": "SPLIT_PARTNER",
>         "sourceAccount": "69c19679b6a68b533ed203d0",
>         "destinationAccount": "6823414a524ed520d3518dd6"
>       },
>       {
>         "value": 50,
>         "pixKey": "19818133730",
>         "splitType": "SPLIT_SUB_ACCOUNT",
>         "sourceAccount": "69c19679b6a68b533ed203d0",
>         "pixKeyType": "CPF"
>       }
>     ],
>     "expiresIn": 86400,
>     "createdAt": "2026-05-21T15:47:27.294Z"
>   }
> }
> ```
>
> Eu mandei `value: 510` no split e veio `value: 50`. E apareceu um `SPLIT_PARTNER` que eu nem coloquei. O que está acontecendo?

---

## O que sabemos a mais

- A API retornou HTTP 200, mas a cobrança retornada **não foi criada agora** — ela já existia.
- O `correlationID` `"text&22miSubaccount"` já havia sido usado em uma criação anterior. Quando um `correlationID` já existe, a API ignora o payload recebido e devolve a cobrança existente — mesmo que o novo payload tenha erros.
- O payload enviado tem um erro que teria causado falha em uma cobrança nova: `value` do split (`510`) maior que o `value` da cobrança (`500`).
- O cliente provavelmente não percebeu que estava reutilizando um `correlationID` já usado, e interpretou o 200 como confirmação de que a nova cobrança foi criada com os parâmetros que enviou.

---

## Sequência do que aconteceu

1. Em algum momento anterior, o cliente criou uma cobrança com `correlationID: "text&22miSubaccount"` com splits diferentes (SPLIT_PARTNER + SPLIT_SUB_ACCOUNT com value 50).
2. Tentou criar uma nova cobrança com o **mesmo** `correlationID`, mas com parâmetros diferentes (split value 510).
3. A API detectou que o `correlationID` já existe e devolveu a cobrança original — sem criar nada novo e sem retornar erro.
4. O cliente recebeu 200 e achou que a cobrança foi criada com o novo payload.

---

## O desafio

Como CS Tech, descreva:

1. **O que está errado no entendimento do cliente?** A cobrança foi criada agora ou não? O que o 200 significa neste contexto?

2. **Como você confirma** que o `correlationID` já existia antes dessa chamada?
   - APM (`traces-apm-*`) — busque pelo `correlationID` e ordene por `@timestamp asc`. Quantas chamadas existem? Qual foi a primeira?
   - O `createdAt` da cobrança retornada bate com o horário da chamada atual?

3. **Qual o erro secundário** no payload que teria impedido a criação de uma cobrança nova?

4. **Qual é a resposta que você manda em até 5 minutos**, antes de confirmar tudo no APM?

5. **Como você explica o comportamento** de forma clara para um dev júnior — por que a API retorna 200 em vez de erro quando o `correlationID` já existe?

6. Tem alguma melhoria de DX que esse comportamento sugere? Onde você registraria?

---

## Onde buscar informação

- APM (`traces-apm-*`) — busque por `labels.correlationID: "text&22miSubaccount"` ordenado por `@timestamp asc` para ver o histórico completo de chamadas com esse `correlationID`.
- `developers.woovi.com/docs/apis/charges` — comportamento do `correlationID` quando já existe: a API é idempotente por design.
- O campo `createdAt` na resposta é a prova mais rápida: se não bate com o horário da chamada, a cobrança é antiga.

---

## Pegadinhas conhecidas

- A API de `/charge` é **idempotente por `correlationID`**: se já existe uma cobrança com aquele ID, ela é retornada independentemente do payload enviado — sem erro, sem aviso.
- O 200 não significa "cobrança criada agora". Significa "existe uma cobrança ativa com esse `correlationID`". O cliente precisa verificar o `createdAt` para saber se é nova ou existente.
- O `value` dentro de `splits` não pode ser maior que o `value` da cobrança — esse erro teria aparecido se o `correlationID` fosse novo, mas foi mascarado pelo comportamento de idempotência.
- Clientes que testam repetidamente com o mesmo `correlationID` nunca veem os erros do payload — a API sempre devolve a cobrança original.

---

## O que **não** queremos ler na sua resposta

- "O payload parece correto, o 200 indica sucesso."
- "Conforme nossa documentação, o `correlationID` deve ser único."
- Uma resposta que não explica por que o split retornado é diferente do enviado.
- Qualquer coisa que deixe o cliente ainda confuso sobre se a cobrança foi criada agora ou não.
