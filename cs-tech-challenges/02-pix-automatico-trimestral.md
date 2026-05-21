# Ticket #02 — Pix Automático trimestral some entre painel e API

**Canal:** chat in-app
**Cliente:** Helix SaaS (fictício) — SaaS B2B
**Quem fala:** Customer B, CTO
**Prioridade percebida pelo cliente:** média (mas com cara de "isso é bug, não é?")

---

## Mensagem do cliente

> Oi, time. Estou cadastrando uma assinatura de Pix Automático aqui no painel e na hora de escolher a frequência aparece **Trimestral** como opção. Selecionei e segui o fluxo até o final, sem erro.
>
> Aí fui replicar via API e o enum de `frequency` na doc lista só `WEEKLY`, `MONTHLY`, `SEMIANNUALLY` e `ANNUALLY`. Mandei `QUARTERLY` mesmo assim, deu 400 com `invalid enum value`.
>
> O que está certo, painel ou API? Preciso fechar a integração até sexta. Anexo dois prints: um da doc e um do painel mostrando "Trimestral" selecionado.
