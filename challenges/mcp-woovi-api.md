# AI Engineer Code Challenge - MCP Server for Woovi API

## Overview
Build a Model Context Protocol (MCP) server that exposes Woovi/OpenPix API capabilities to AI assistants like Claude. This challenge evaluates your ability to design clean tool interfaces, handle API integration, and create developer-friendly AI tooling.

---

## Context

The [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) is an open standard that enables AI models to interact with external tools and data sources. Woovi provides a powerful [REST API](https://developers.openpix.com.br/) for managing Pix payments, charges, customers, and more.

Your goal is to bridge these two worlds — making Woovi's financial API accessible to AI assistants through a well-designed MCP server.

---

## Challenge Requirements

### Core Tools (Required)

Build an MCP server that exposes the following tools:

**Charge Management**
- `create_charge` — Create a new Pix charge with amount, customer info, and optional metadata
- `get_charge` — Retrieve charge details by correlation ID
- `list_charges` — List charges with filters (status, date range, pagination)

**Customer Management**
- `create_customer` — Register a new customer (name, taxID, email, phone)
- `get_customer` — Retrieve customer details
- `list_customers` — Search and list customers

**Transactions & Balance**
- `get_transactions` — List transactions with filters
- `get_balance` — Retrieve current account balance

**Refunds**
- `create_refund` — Initiate a refund for a charge
- `get_refund` — Check refund status

### MCP Resources (Required)

Expose the following as MCP resources:
- Account balance (real-time)
- API documentation snippets for each endpoint
- Webhook event schema definitions

### MCP Prompts (Required)

Create reusable prompts:
- `daily_summary` — Generate a summary of today's transactions, charges, and balance
- `customer_report` — Analyze a customer's payment history
- `reconciliation_check` — Compare expected vs received payments

---

## Technical Requirements

### Must Use
- TypeScript or Python
- Official MCP SDK (`@modelcontextprotocol/sdk` or `mcp` Python package)
- Woovi/OpenPix API (use sandbox/test environment)
- Proper error handling with meaningful error messages
- Input validation with Zod or Pydantic schemas

### Architecture
- Clean separation between MCP tool definitions and API client logic
- API client should be reusable outside of MCP context
- Configuration via environment variables (API key, base URL)
- Structured logging for debugging

### Security
- Never expose API keys through MCP tool responses
- Validate and sanitize all inputs before API calls
- Rate limiting awareness — handle 429 responses gracefully
- Mask sensitive data (taxID, partial phone) in responses when appropriate

---

## Evaluation Criteria

### 1. Tool Design
- Are tool names intuitive and consistent?
- Are parameter descriptions clear enough for an AI to use correctly?
- Do tools return well-structured, useful responses?
- Are error messages actionable?

### 2. Code Quality
- Clean architecture with proper separation of concerns
- Type safety throughout the codebase
- Comprehensive error handling (API errors, network failures, validation)
- Well-documented code and API client

### 3. Developer Experience
- Easy setup (single command to start)
- Clear README with configuration instructions
- Example conversations showing tool usage
- Works with Claude Desktop or another MCP client

### 4. Robustness
- Handles API rate limits and retries
- Graceful degradation when API is unavailable
- Proper timeout handling
- Pagination support for list operations

---

## Deliverables

1. **Source Code**
   - GitHub repository with clean commit history
   - Well-organized project structure
   - README with setup and usage instructions

2. **Configuration**
   - MCP server configuration file (for Claude Desktop or similar)
   - Environment variable template (`.env.example`)

3. **Documentation**
   - Tool catalog with descriptions and example inputs/outputs
   - Architecture diagram showing data flow
   - Demo video or screenshots of the MCP server working with an AI assistant

4. **Tests**
   - Unit tests for API client and tool handlers
   - Integration tests using mock API responses

---

## Bonus Points

- **Webhook Support**: Implement an SSE transport that pushes real-time payment notifications
- **Caching Layer**: Cache frequently accessed data (balance, customer info) with TTL
- **Multi-Account**: Support switching between multiple Woovi accounts
- **Custom Analytics Tools**: Tools that aggregate data and provide business insights
- **OAuth Flow**: Implement OAuth-based authentication instead of static API keys
- **Streaming Responses**: Use MCP streaming for large data exports
- **Composable Tools**: Tools that can be chained (e.g., find customer → list their charges → calculate totals)

---

## References

- [Model Context Protocol Docs](https://modelcontextprotocol.io/)
- [MCP TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk)
- [MCP Python SDK](https://github.com/modelcontextprotocol/python-sdk)
- [Woovi/OpenPix API Docs](https://developers.openpix.com.br/)
- [Woovi API Playground](https://developers.openpix.com.br/api)

---

## Submission Guidelines

Submit:
1. GitHub repository link (public)
2. README explaining your approach, design decisions, and trade-offs
3. Working demo with Claude Desktop or another MCP-compatible client
4. Send to sibelius@woovi.com or DM on X [https://x.com/sseraphini](https://x.com/sseraphini)
