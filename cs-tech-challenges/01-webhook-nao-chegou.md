# Ticket #01 — Webhook não chegou após pagamento confirmado

**Canal:** WhatsApp (grupo de integração)
**Cliente:** Acme Gateway (fictício) — gateway parceiro, ~R$ 2M / mês processados via Woovi
**Quem fala:** Customer A, dev sênior do lado deles
**Prioridade percebida pelo cliente:** alta

---

## Mensagem do cliente

> Bom dia, pessoal. Estou olhando aqui no console que essas três cobranças aparecem como `COMPLETED`, mas a gente não recebeu o webhook de `OPENPIX:TRANSACTION_RECEIVED` em nenhuma das três. Já passaram mais de 40 minutos.
>
> Charges:
> - `0a1b2c3d4e5f60718293a4b5c6d7e8f9`
> - `1f2e3d4c5b6a7980a1b2c3d4e5f60718`
> - `9988776655443322ffeeddccbbaa1100`
>
> Nosso endpoint de webhook está online, conseguimos receber outras cobranças sem problema. Já cliquei em "reenviar webhook" no dashboard pra primeira charge e aí veio — mas isso não é sustentável. Algum incidente rolando?
>
> Pra contexto: a gente credita o saldo do nosso cliente final assim que recebe o webhook. Enquanto não chega, ele fica reclamando que "pagou e não caiu". Imagina se isso escala.
