# Technical Customer Support Challenge - Woovi / OpenPix

11 fictional customer support tickets, drawn from real patterns we see at Woovi (webhooks, conciliação, refunds, MED, DICT, subcontas, 2FA, BaaS, API integration).

Pick up each ticket as if it had just landed in your inbox. For each one, write your response covering:

- **Your understanding of the problem** — what is the customer really asking?
- **Your investigation plan** — where do you look (internal tools, docs, Bacen, code, people) and in what order?
- **Hypotheses** — 2–4 possible root causes, ranked, with what would confirm each.
- **The reply you would send to the customer** — written as if you were sending it.
- **Internal follow-ups** — bug? doc gap? feature request? where do you register it?

We care more about **how you investigate and communicate** than whether you happen to know the answer by heart.

## Tickets

1. [Webhook não chegou após pagamento confirmado](./01-webhook-nao-chegou.md)
2. [Pix Automático trimestral some entre painel e API](./02-pix-automatico-trimestral.md)
3. [Pay-out FAILED com `error.code` e `providerRejectedReason` vazios](./03-payout-failed-sem-motivo.md)
4. [Cobrança PIX acima do contrato — cliente quer auditar](./04-cobranca-acima-do-contrato.md)
5. [Boleto pago via Pix QR não dá baixa no DDA do banco](./05-boleto-pix-sem-baixa-dda.md)
6. [Reembolso Pix aparece no extrato sem `endToEndId` nem nome](./06-reembolso-extrato-sem-identificacao.md)
7. [Reivindicação de chave Pix recebida — confirmar ou cancelar?](./07-reivindicacao-chave-pix.md)
8. [`correlationID` é ignorado em `/subaccount/{id}/credit` e `/debit`](./08-correlationid-credit-debit.md)
9. [Cliente perdeu acesso ao 2FA / autenticador](./09-cliente-perdeu-2fa.md)
10. [BaaS: saldo travado em subcontas, operação parada](./10-baas-saldo-travado-subcontas.md)
11. [`/charge` retorna sucesso mas o split não foi aplicado como esperado](./11-charge-request-invalido.md)

## Submission

Send your responses (Markdown, one file per ticket or one consolidated file) to **sibelius@woovi.com** with subject `CS Tech Challenge - <your name>`.
