# Ticket #10 — BaaS: saldo travado em subcontas, operação parada

**Canal:** WhatsApp (grupo de integração — cliente BaaS)
**Cliente:** WhitePay BaaS (fictício) — provedor de pagamento white-label
**Quem fala:** Customer J, operações
**Prioridade percebida pelo cliente:** **crítica**, operação parada

---

## Mensagem do cliente

> Pessoal, bom dia. Algo mudou recentemente? Estamos com várias subcontas travadas na conciliação. **Tem como vocês transferirem o saldo dessas subcontas pra conta master enquanto a gente faz os ajustes do nosso lado?**
>
> Especificamente:
> - ~14 subcontas com saldo positivo que não está disponível para saque.
> - O endpoint `/subaccount/{id}/withdraw` retorna `INSUFFICIENT_BALANCE` mesmo com saldo aparecendo no statement.
> - A diferença entre saldo "disponível" e "extrato" é de R$ ~280k somando todas as subcontas afetadas.
>
> Estamos com cliente final cobrando. Precisamos de resposta hoje.
