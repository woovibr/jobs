export type Category = "backend" | "frontend" | "devops" | "fintech" | "architecture" | "ai";

export interface ChallengeMeta {
  slug: string;
  title: string;
  description: string;
  category: Category;
  tags: string[];
}

export const challenges: ChallengeMeta[] = [
  {
    slug: "crud-bank-graphql-relay",
    title: "CRUD Bank GraphQL Relay",
    description:
      "Build a CRUD bank application using GraphQL, React, and Relay with transactions and account management.",
    category: "backend",
    tags: ["nodejs", "graphql", "react", "relay", "mongodb", "api", "testing"],
  },
  {
    slug: "kyc-verification-system",
    title: "KYC Verification System",
    description:
      "Create a production-ready multi-step KYC verification form with React, featuring form validation and responsive design.",
    category: "frontend",
    tags: ["react", "frontend", "design-system", "typescript", "testing"],
  },
  {
    slug: "woovi-leaky-bucket-challenge",
    title: "Leaky Bucket Challenge",
    description:
      "Implement a leaky bucket rate-limiting strategy using Node.js and Koa.js with multi-tenancy authentication.",
    category: "backend",
    tags: ["nodejs", "api", "graphql", "security", "pix", "fintech"],
  },
  {
    slug: "landing-page-design-system",
    title: "Landing Page + Design System",
    description:
      "Create a design system and build a landing page using React/Next.js with static generation.",
    category: "frontend",
    tags: ["react", "design-system", "frontend"],
  },
  {
    slug: "iso8583-simulator",
    title: "ISO 8583 Simulator",
    description:
      "Integrate with ISO 8583 payment protocol simulator for acquire and issuing transaction processing.",
    category: "fintech",
    tags: ["fintech", "integration", "api", "security"],
  },
  {
    slug: "mini-n8n-zapier",
    title: "Mini n8n/Zapier",
    description:
      "Build a mini embedded workflow automation tool using React Flow with API and webhook integration.",
    category: "frontend",
    tags: ["react", "frontend", "architecture", "integration", "automation"],
  },
  {
    slug: "nfse-integration",
    title: "NFS-e Integration",
    description:
      "Simulate or integrate with Brazil's NFS-e (Nota Fiscal de Serviços Eletrônica) system.",
    category: "fintech",
    tags: ["integration", "fintech", "api", "backend"],
  },
  {
    slug: "devops-proxmox",
    title: "DevOps Proxmox Challenge",
    description:
      "Set up Proxmox infrastructure with automated Kubernetes cluster, database replication, and monitoring.",
    category: "devops",
    tags: ["devops", "kubernetes", "docker", "infrastructure", "automation"],
  },
  {
    slug: "report-system",
    title: "Report System",
    description:
      "Build a scalable report generation system using streams for large data exports with MongoDB and S3.",
    category: "backend",
    tags: ["nodejs", "mongodb", "backend", "architecture", "automation"],
  },
  {
    slug: "icom-spi-simulator",
    title: "ICOM/SPI Simulator",
    description:
      "Implement a financial messaging system using ISO 20022 standard messages for Brazil's payment system.",
    category: "fintech",
    tags: ["fintech", "integration", "api", "architecture"],
  },
  {
    slug: "rfc-architecture",
    title: "RFC Architecture + Database Schema",
    description:
      "Design architecture and schema proposals for credit systems on Pix, data lake, and financial monitoring.",
    category: "architecture",
    tags: ["architecture", "backend", "fintech", "pix"],
  },
  {
    slug: "dict-simulator",
    title: "DICT Simulator",
    description:
      "Create the DICT API (Pix key registry) implementation using Node.js and MongoDB.",
    category: "fintech",
    tags: ["nodejs", "mongodb", "api", "pix", "fintech", "backend"],
  },
  {
    slug: "cicd-challenge",
    title: "CI/CD Challenge",
    description:
      "Set up Tekton CD with automated pipelines for staging and production environments.",
    category: "devops",
    tags: ["cicd", "kubernetes", "devops", "automation", "infrastructure"],
  },
  {
    slug: "openfinance-simulator",
    title: "OpenFinance Simulator",
    description:
      "Simulate OpenFinance APIs by building a fintech platform implementing Brazilian Open Finance standards.",
    category: "fintech",
    tags: ["api", "fintech", "backend", "integration"],
  },
  {
    slug: "mcp-woovi-api",
    title: "MCP Server for Woovi API",
    description:
      "Build a Model Context Protocol (MCP) server that exposes Woovi/OpenPix API capabilities to AI assistants like Claude.",
    category: "ai",
    tags: ["ai", "mcp", "api", "typescript", "nodejs", "integration"],
  },
  {
    slug: "rag-woovi-docs",
    title: "RAG System for Woovi Docs",
    description:
      "Build a Retrieval-Augmented Generation system for natural language Q&A over Woovi documentation using vector search and LLMs.",
    category: "ai",
    tags: ["ai", "rag", "llm", "python", "vector-database", "search"],
  },
  {
    slug: "whatsapp-ai-agent",
    title: "WhatsApp AI Agent for Woovi",
    description:
      "Create an intelligent WhatsApp AI agent that connects to Woovi accounts for balance checks, statements, Pix transfers, and business indicators.",
    category: "ai",
    tags: ["ai", "whatsapp", "agent", "nodejs", "api", "pix", "fintech"],
  },
  {
    slug: "antifraud-system",
    title: "Real-Time Antifraud System",
    description:
      "Build a real-time antifraud system for Pix transactions using Kafka, ClickHouse, and Apache Flink for stream processing and fraud detection.",
    category: "ai",
    tags: ["kafka", "clickhouse", "flink", "streaming", "fintech", "pix", "data-engineering"],
  },
];

export const categoryLabels: Record<Category, string> = {
  backend: "Backend",
  frontend: "Frontend",
  devops: "DevOps",
  fintech: "Fintech",
  architecture: "Architecture",
  ai: "AI & Data Engineering",
};

export function getAllTags(): string[] {
  const tagSet = new Set<string>();
  challenges.forEach((c) => c.tags.forEach((t) => tagSet.add(t)));
  return Array.from(tagSet).sort();
}
