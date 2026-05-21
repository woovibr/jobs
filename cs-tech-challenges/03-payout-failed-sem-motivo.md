# Ticket #03 — Pay-out FAILED com `error.code` e `providerRejectedReason` vazios

**Canal:** WhatsApp (grupo de integração)
**Cliente:** PayoutFlow (fictício) — plataforma de payout
**Quem fala:** Customer C, eng de plataforma
**Prioridade percebida pelo cliente:** alta

---

## Mensagem do cliente

> Boa tarde, time. Podem me ajudar a entender o que rolou com esses 6 pay-outs? Em todos a gente fez `POST /api/v1/payment` e logo em seguida o `approve` retornou `status: APPROVED`.
>
> Aí, alguns minutos depois, veio o webhook:
>
> ```json
> {
>   "event": "OPENPIX:MOVEMENT_FAILED",
>   "payment": { "value": 327800, "status": "FAILED", ... },
>   "error": { "code": "", "description": "" }
> }
> ```
>
> Os correlation IDs são:
> - `a1111111-1111-1111-1111-111111111111`
> - `b2222222-2222-2222-2222-222222222222`
> - `c3333333-3333-3333-3333-333333333333`
> - `d4444444-4444-4444-4444-444444444444`
> - `e5555555-5555-5555-5555-555555555555`
> - `f6666666-6666-6666-6666-666666666666`
>
> A motivação da falha vem **vazia** nos 6. Sem `error.code`, sem `providerRejectedReason`, nada. Como a gente classifica isso? Foi limite? Chave inválida? Banco recebedor fora do ar? O cliente final está nos perguntando e a gente não tem o que dizer.
