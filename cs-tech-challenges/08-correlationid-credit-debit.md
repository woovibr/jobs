# Ticket #08 — `correlationID` é ignorado em `/subaccount/{id}/credit` e `/debit`

**Canal:** chat in-app
**Cliente:** FreelaHub (fictício) — marketplace, equipe de eng forte
**Quem fala:** Customer H, eng sênior, integrando subcontas
**Prioridade percebida pelo cliente:** média/alta (não tem dinheiro parado, mas tem auditoria pendente)

---

## Mensagem do cliente

> Olá. Estamos implementando idempotência client-side em tasks de fila que chamam operações internas de subconta: `credit_subaccount`, `debit_subaccount`, e `transfer` entre subcontas.
>
> Precisamos de auditoria forense que vincule essas movimentações ao registro de domínio do nosso lado, via o `correlationID` que enviamos no payload.
>
> Investigamos:
>
> 1. `GET /api/v1/transaction` — lista só operações Pix externas. `type=INTERNAL_TRANSFER` retorna array vazio.
> 2. `GET /api/v1/subaccount/{pixKey}/statement` — só retorna `balance, description, id, operationType, time, type, value`. Sem `correlationID`. Sem `description` quando `operationType=TRANSFER_CREDIT`.
> 3. Tentei `/movement`, `/account/movements`, `/main-account/statement` — todos 404 ou 400.
>
> Pergunta: existe endpoint que retorne o `correlationID` para `credit_subaccount` e `debit_subaccount`? Ou alternativa pra reconciliação forense pós-incidente?
