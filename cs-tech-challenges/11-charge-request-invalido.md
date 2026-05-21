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
