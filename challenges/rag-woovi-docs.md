# AI Engineer Code Challenge - RAG System for Woovi Documentation

## Overview
Build a Retrieval-Augmented Generation (RAG) system that enables natural language Q&A over Woovi's documentation. The system should ingest documentation from Docusaurus or Docmost, chunk and embed the content, and provide accurate, context-grounded answers about Woovi's APIs, SDKs, and payment flows.

---

## Context

Woovi maintains extensive documentation covering APIs, SDKs, integration guides, webhook events, and payment flows. Developers frequently need to find specific information across hundreds of pages. A RAG system can dramatically improve developer experience by providing instant, accurate answers grounded in official docs.

---

## Challenge Requirements

### Phase 1: Document Ingestion Pipeline

**Source Connectors (implement at least one)**
- Docusaurus site crawler — Scrape and parse Woovi docs from a Docusaurus site
- Docmost API connector — Pull documents from a Docmost instance via API
- Markdown/MDX file loader — Load docs from a local directory of `.md`/`.mdx` files

**Processing Pipeline**
- Parse documents preserving structure (headings, code blocks, tables, links)
- Intelligent chunking strategy that respects document boundaries:
  - Split by sections/headings (not arbitrary character counts)
  - Preserve code blocks intact
  - Maintain parent context (document title, section hierarchy)
- Generate metadata for each chunk:
  - Source URL/path
  - Section hierarchy (breadcrumb)
  - Document category (API, SDK, Guide, FAQ)
  - Last updated timestamp

### Phase 2: Embedding & Vector Store

- Generate embeddings using an embedding model (OpenAI, Cohere, or open-source like `nomic-embed-text`)
- Store embeddings in a vector database:
  - **Required**: Support at least one of: PostgreSQL + pgvector, Qdrant, Pinecone, or ChromaDB
- Implement hybrid search:
  - Semantic search (vector similarity)
  - Keyword/BM25 search for exact matches (API endpoints, error codes)
  - Combined ranking with configurable weights

### Phase 3: Query & Response Generation

- Accept natural language questions
- Retrieve top-k relevant chunks with similarity scores
- Build context-aware prompts with:
  - Retrieved document chunks
  - Source citations
  - Conversation history (multi-turn support)
- Generate responses using an LLM (Claude, GPT, or open-source)
- Include source citations with links to original docs

### Phase 4: API & Interface

Build at least one interface:
- **REST API** with endpoints:
  - `POST /ask` — Ask a question, get an answer with sources
  - `POST /ingest` — Trigger document re-ingestion
  - `GET /sources` — List indexed documents
  - `GET /health` — System health and index stats
- **Chat UI** (optional but recommended):
  - Conversational interface with message history
  - Source links displayed alongside answers
  - Feedback mechanism (thumbs up/down)

---

## Technical Requirements

### Must Use
- Python (LangChain, LlamaIndex) or TypeScript (LangChain.js, Vercel AI SDK)
- A vector database for storing embeddings
- An LLM for response generation
- Proper chunking strategy (not naive character splitting)

### Architecture
- Modular pipeline: ingestion → chunking → embedding → storage → retrieval → generation
- Each stage should be independently testable and replaceable
- Configuration-driven (model selection, chunk size, retrieval parameters)
- Async processing for document ingestion

### Quality & Safety
- Answers must include source citations — no hallucinated information
- System should say "I don't know" when the docs don't contain an answer
- Handle ambiguous queries by asking clarifying questions
- Filter out irrelevant or low-confidence results

---

## Evaluation Criteria

### 1. Retrieval Quality
- Does the system find the right documents for a given question?
- How well does chunking preserve context?
- Does hybrid search improve results over pure semantic search?
- Are irrelevant results filtered out?

### 2. Response Quality
- Are answers accurate and grounded in the source docs?
- Are sources properly cited?
- Does the system handle multi-turn conversations well?
- Does it gracefully handle out-of-scope questions?

### 3. System Design
- Clean separation between pipeline stages
- Easy to swap components (different vector DB, different LLM)
- Scalable to larger document sets
- Proper error handling and logging

### 4. Developer Experience
- Easy setup with clear documentation
- Configurable parameters (chunk size, top-k, model)
- Observable (can see what chunks were retrieved and why)
- Reproducible results

---

## Deliverables

1. **Source Code**
   - GitHub repository with clean project structure
   - README with architecture diagram and setup instructions
   - Environment configuration template

2. **Ingestion Pipeline**
   - Working document loader for at least one source
   - Chunking strategy with configurable parameters
   - Embedding generation and storage

3. **Query System**
   - REST API with the required endpoints
   - Response generation with source citations

4. **Evaluation**
   - Test suite with at least 10 sample questions and expected answers
   - Retrieval quality metrics (precision, recall at k)
   - Response quality assessment

5. **Documentation**
   - Architecture decision records
   - How to add new document sources
   - How to tune retrieval parameters

---

## Bonus Points

- **Evaluation Framework**: Automated evaluation pipeline using RAGAS or similar
- **Streaming Responses**: Stream LLM responses for better UX
- **Document Update Detection**: Only re-ingest changed documents
- **Multi-Language**: Support docs in both Portuguese and English
- **Agentic RAG**: Use tool-calling to decide when to search vs answer from context
- **Reranking**: Use a cross-encoder reranker (Cohere, BGE) for improved retrieval
- **Observability**: Integrate with LangSmith, Langfuse, or similar for tracing
- **GraphRAG**: Build a knowledge graph from docs for relationship-aware retrieval
- **MCP Integration**: Expose the RAG system as an MCP server (combine with MCP challenge!)

---

## Sample Questions for Testing

Your system should handle questions like:
- "How do I create a Pix charge using the API?"
- "What webhook events are fired when a payment is confirmed?"
- "What's the difference between a charge and a transaction?"
- "How do I set up the Node.js SDK?"
- "What error codes can the API return?"
- "How does the split payment feature work?"
- "What are the rate limits for the API?"

---

## References

- [LangChain Docs](https://docs.langchain.com/)
- [LlamaIndex Docs](https://docs.llamaindex.ai/)
- [Vercel AI SDK](https://sdk.vercel.ai/)
- [pgvector](https://github.com/pgvector/pgvector)
- [RAGAS Evaluation Framework](https://docs.ragas.io/)
- [Woovi/OpenPix API Docs](https://developers.openpix.com.br/)
- [Docusaurus](https://docusaurus.io/)
- [Docmost](https://docmost.com/)

---

## Submission Guidelines

Submit:
1. GitHub repository link (public)
2. README with architecture diagram and setup guide
3. Demo video or live deployment showing Q&A in action
4. Evaluation results with sample queries
5. Send to sibelius@woovi.com or DM on X [https://x.com/sseraphini](https://x.com/sseraphini)
