# AI Engineer Code Challenge - WhatsApp AI Agent for Woovi

## Overview
Build an intelligent WhatsApp AI agent that connects to a user's Woovi account, enabling them to check balances, view statements, make Pix transfers, track receivables, and get business indicators — all through natural conversation. Think of it as a personal AI financial assistant, similar to Maggie, but for Woovi merchants.

---

## Context

Merchants using Woovi need quick access to their payment data throughout the day. Instead of opening a dashboard, they should be able to message their AI assistant on WhatsApp and get instant answers. The agent should understand natural language in Portuguese and English, handle multi-step flows (like confirming a Pix transfer), and provide actionable insights.

---

## Challenge Requirements

### Core Capabilities

**1. Account & Balance**
- "Qual meu saldo?" / "What's my balance?" — Show current available balance
- "Quanto recebi hoje?" — Total received today
- "Qual meu saldo disponível vs bloqueado?" — Available vs pending balance

**2. Statement & Transactions**
- "Mostra meu extrato de hoje" — Today's transactions
- "Extrato da última semana" — Last 7 days with summary
- "Mostra as últimas 5 transações" — Recent transactions list
- "Quanto recebi em janeiro?" — Monthly totals

**3. Pix Operations**
- "Cria uma cobrança de R$ 50 para João" — Create a Pix charge
- "Gera um QR code de R$ 100" — Generate Pix QR code
- Return the QR code image and copy-paste code via WhatsApp

**4. Receivables & Charges**
- "Quantas cobranças estão pendentes?" — Pending charges count and total
- "Quem não pagou ainda?" — List overdue charges with customer info
- "Status da cobrança #12345" — Check specific charge status

**5. Business Indicators**
- "Como estão minhas vendas essa semana?" — Sales summary with comparison to last week
- "Qual meu ticket médio?" — Average transaction value
- "Qual dia da semana vende mais?" — Day-of-week analysis
- "Taxa de conversão das cobranças" — Charge conversion rate (paid vs created)

### Conversation Flow Requirements

**Multi-Step Confirmation**
- Pix operations must require explicit confirmation before execution
- Show details clearly before asking "Confirma? (Sim/Não)"
- Support cancellation at any step

**Context Awareness**
- Remember context within a conversation session
- "E ontem?" (after showing today's balance) should show yesterday's
- "Manda de novo" should repeat the last response

**Error Handling**
- Friendly messages for API errors
- "Não encontrei essa cobrança" instead of raw error codes
- Suggest alternatives when intent is unclear

---

## Technical Requirements

### Architecture

```
WhatsApp (Twilio/Meta Cloud API/Evolution API)
    ↓
Webhook Receiver (Express/Fastify)
    ↓
Message Router
    ↓
AI Agent (LLM + Tool Calling)
    ├── Woovi API Client
    ├── Conversation Memory
    └── Response Formatter (WhatsApp-friendly)
    ↓
WhatsApp Reply
```

### Must Use
- Node.js or Python
- LLM with tool/function calling (Claude, GPT, or open-source)
- WhatsApp Business API (Twilio, Meta Cloud API, or Evolution API)
- Woovi/OpenPix API for financial data
- Conversation session management (Redis, in-memory, or database)

### AI Agent Design
- Use tool/function calling pattern — the LLM decides which Woovi API to call
- Define clear tool schemas with descriptions the LLM can reason about
- Multi-step tool orchestration (e.g., find customer → create charge → return QR code)
- Conversation memory with session timeout (30 min inactivity)

### Security (Critical)
- User authentication — verify WhatsApp number is linked to a Woovi account
- Confirmation required for any financial operation (create charge, etc.)
- Rate limiting per user (prevent abuse)
- Audit log of all operations performed through the agent
- Never expose full API keys, tokens, or sensitive internal data
- PII handling — mask CPF/CNPJ in logs

### Message Formatting
- Use WhatsApp-compatible formatting (*bold*, _italic_, ```code```, lists)
- Keep messages concise — split long responses into multiple messages
- Use emojis appropriately for visual cues (✅ ❌ 💰 📊)
- Send images for QR codes, charts for indicators

---

## Evaluation Criteria

### 1. Agent Intelligence
- Does the agent correctly understand user intents in natural language?
- Can it handle ambiguous requests and ask for clarification?
- Does it maintain context across a conversation?
- How well does it handle Portuguese and English?

### 2. Tool Design
- Are the Woovi API tools well-defined for LLM consumption?
- Does the agent choose the right tools for each request?
- Can it chain multiple tool calls to answer complex questions?

### 3. User Experience
- Are responses clear, concise, and well-formatted for WhatsApp?
- Is the confirmation flow for financial operations intuitive?
- Does it recover gracefully from errors?
- Is the response time acceptable (<5 seconds)?

### 4. Security & Reliability
- Is user authentication properly implemented?
- Are financial operations properly guarded with confirmations?
- Is there audit logging?
- Does it handle API failures gracefully?

---

## Deliverables

1. **Source Code**
   - GitHub repository with clean architecture
   - README with setup instructions (WhatsApp API + Woovi API)
   - Environment configuration template

2. **Agent Configuration**
   - Tool definitions with schemas
   - System prompt for the AI agent
   - Conversation flow diagrams

3. **Demo**
   - Video walkthrough showing:
     - Balance inquiry
     - Statement query
     - Charge creation with confirmation flow
     - Business indicator query
     - Error handling scenario

4. **Tests**
   - Unit tests for tool handlers
   - Integration tests for conversation flows
   - Test scenarios for edge cases (invalid inputs, API failures)

---

## Bonus Points

- **Voice Messages**: Process WhatsApp voice messages using speech-to-text
- **Proactive Alerts**: Send notifications for large payments received, daily summaries
- **Charts & Visualizations**: Generate and send chart images for indicators
- **Multi-Account**: Support merchants with multiple Woovi accounts
- **Spending Predictions**: Use historical data to predict upcoming revenue
- **Export to PDF**: Generate and send PDF reports via WhatsApp
- **Group Support**: Allow the agent to work in WhatsApp groups (for teams)
- **Onboarding Flow**: Guide new users through setup and linking their account
- **Webhook Integration**: Real-time notifications when payments are received

---

## References

- [Woovi/OpenPix API Docs](https://developers.openpix.com.br/)
- [Meta WhatsApp Cloud API](https://developers.facebook.com/docs/whatsapp/cloud-api/)
- [Twilio WhatsApp API](https://www.twilio.com/docs/whatsapp)
- [Evolution API](https://doc.evolution-api.com/)
- [Vercel AI SDK](https://sdk.vercel.ai/)
- [LangChain Tool Calling](https://docs.langchain.com/)

---

## Submission Guidelines

Submit:
1. GitHub repository link (public)
2. Demo video showing complete conversation flows
3. README with architecture decisions and setup guide
4. Send to sibelius@woovi.com or DM on X [https://x.com/sseraphini](https://x.com/sseraphini)
