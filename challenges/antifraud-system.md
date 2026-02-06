# Data Engineer Code Challenge - Real-Time Antifraud System

## Overview
Build a real-time antifraud system for Pix transactions using Kafka for event streaming, ClickHouse for analytics, and Apache Flink for stream processing. The system should detect suspicious patterns, score transactions in real-time, and block fraudulent payments before they complete.

---

## Context

In Brazil's Pix instant payment system, transactions settle in seconds — meaning fraud detection must happen in real-time, before the transaction completes. A robust antifraud system needs to process thousands of transactions per second, evaluate risk using multiple signals, and make blocking decisions in under 100ms.

This challenge simulates building such a system from scratch.

---

## Challenge Requirements

### Phase 1: Event Streaming Infrastructure

**Kafka Setup**
- Create Kafka topics for the transaction pipeline:
  - `transactions.incoming` — Raw incoming Pix transactions
  - `transactions.scored` — Transactions with fraud scores
  - `transactions.blocked` — Blocked fraudulent transactions
  - `transactions.approved` — Approved transactions
  - `alerts.fraud` — Fraud alerts for investigation
- Configure proper partitioning (by account ID for ordering guarantees)
- Implement a transaction event producer/simulator that generates realistic Pix transactions

**Event Schema**
```json
{
  "transaction_id": "uuid",
  "timestamp": "2024-01-15T10:30:00Z",
  "sender_account": "account_id",
  "sender_document": "cpf_hash",
  "receiver_account": "account_id",
  "receiver_document": "cpf_hash",
  "amount_cents": 50000,
  "pix_key_type": "cpf|email|phone|random",
  "device_id": "device_hash",
  "ip_address": "ip_hash",
  "geolocation": { "lat": -23.5505, "lng": -46.6333 },
  "channel": "app|web|api"
}
```

### Phase 2: Stream Processing with Flink

**Real-Time Rules Engine**
Implement the following fraud detection rules using Flink:

1. **Velocity Rules**
   - More than 5 transactions from same account in 1 minute
   - More than 10 transactions from same account in 1 hour
   - More than R$ 5.000 total sent from same account in 1 hour

2. **Amount Anomaly Detection**
   - Transaction amount > 3x the account's average transaction
   - Transaction amount > R$ 10.000 (high-value flag)
   - Multiple round-number transactions in sequence (R$ 1000, R$ 2000, R$ 1000)

3. **Behavioral Patterns**
   - New receiver (first-time transfer to this account)
   - Transaction at unusual hour for this account (e.g., 3 AM when normally active 9-18h)
   - Geolocation jump (transaction from a location > 500km from last transaction within 1 hour)
   - Device change (new device for this account)

4. **Network Analysis**
   - Multiple accounts sending to the same receiver in a short window (mule account detection)
   - Circular transfers (A→B→C→A pattern)

**Scoring**
- Each rule contributes a weighted score (0-100)
- Combined score determines action:
  - 0-30: Approve
  - 31-70: Flag for review
  - 71-100: Block immediately
- Scores and rule triggers must be stored for auditability

### Phase 3: Analytics with ClickHouse

**Store and Query**
- Ingest all scored transactions into ClickHouse
- Design an efficient schema optimized for:
  - Time-series queries (transactions per minute/hour/day)
  - Account-level aggregations
  - Fraud pattern analysis

**Required Dashboards/Queries**
- Real-time transaction throughput (TPS)
- Fraud rate over time (blocked/total)
- Top triggered rules
- Account risk score distribution
- Geographic fraud hotspots
- False positive rate tracking

**Materialized Views**
- Hourly transaction summaries per account
- Rolling averages for anomaly detection baselines
- Rule trigger frequency

### Phase 4: API & Dashboard

**REST API**
- `POST /transactions` — Submit a transaction for scoring
- `GET /transactions/:id/score` — Get fraud score and triggered rules
- `GET /accounts/:id/risk` — Get account risk profile
- `GET /stats/dashboard` — Dashboard metrics
- `POST /rules` — Add/update fraud detection rules
- `POST /feedback` — Mark transaction as fraud/legitimate (feedback loop)

**Dashboard (Optional but recommended)**
- Real-time transaction feed with risk coloring
- Fraud metrics and charts
- Rule management interface
- Investigation queue for flagged transactions

---

## Technical Requirements

### Must Use
- **Apache Kafka** — Event streaming (use Docker or Redpanda as lightweight alternative)
- **Apache Flink** — Stream processing (Java/Scala or PyFlink)
- **ClickHouse** — Analytical database
- **Docker Compose** — Full stack orchestration

### Architecture
- Event-driven microservices
- Exactly-once processing semantics where possible
- Backpressure handling
- Graceful failure recovery (checkpointing in Flink)
- Schema registry for event evolution (Avro or Protobuf)

### Performance Targets
- End-to-end latency: < 200ms from transaction ingestion to score
- Throughput: Handle at least 1000 transactions/second
- ClickHouse queries: Dashboard queries < 500ms

---

## Evaluation Criteria

### 1. Stream Processing Design
- Are Flink jobs well-structured and maintainable?
- Is windowing used correctly for time-based rules?
- Are state and checkpoints properly managed?
- Can rules be added/modified without redeploying?

### 2. Fraud Detection Quality
- Do the rules catch realistic fraud patterns?
- Is the scoring system well-calibrated?
- Are there mechanisms to reduce false positives?
- Is there a feedback loop for model improvement?

### 3. Data Engineering
- Is the ClickHouse schema optimized for the query patterns?
- Are Kafka topics properly partitioned and configured?
- Is the system observable (metrics, logs, traces)?
- Can it handle data skew (hot accounts)?

### 4. System Reliability
- Does the system handle failures gracefully?
- Are there dead-letter queues for failed processing?
- Is exactly-once semantics maintained?
- Can the system recover from checkpoint?

---

## Deliverables

1. **Source Code**
   - GitHub repository with monorepo or multi-repo structure
   - `docker-compose.yml` that brings up the entire stack
   - README with architecture diagram

2. **Transaction Simulator**
   - Generates realistic transaction patterns
   - Includes both legitimate and fraudulent scenarios
   - Configurable throughput

3. **Flink Jobs**
   - All fraud detection rules implemented as Flink jobs
   - Scoring aggregation job
   - Well-documented rule configurations

4. **ClickHouse Setup**
   - Schema definitions and migrations
   - Materialized views for dashboards
   - Sample analytical queries

5. **Documentation**
   - Architecture decision records
   - Rule documentation with rationale
   - Performance benchmarks
   - Runbook for operations

---

## Bonus Points

- **ML Model Integration**: Train a simple anomaly detection model on transaction features and integrate with the rules engine
- **Graph Database**: Use Neo4j or similar for network/relationship fraud analysis
- **A/B Testing**: Framework for testing new rules against historical data before deployment
- **Replay System**: Ability to replay historical transactions through new rules
- **Alerting**: Integration with PagerDuty/Slack for critical fraud alerts
- **Feature Store**: Real-time feature computation for ML model inputs
- **Chaos Testing**: Demonstrate system resilience with simulated failures
- **Multi-Region**: Design for multi-region deployment with data locality

---

## References

- [Apache Kafka Documentation](https://kafka.apache.org/documentation/)
- [Apache Flink Documentation](https://flink.apache.org/)
- [ClickHouse Documentation](https://clickhouse.com/docs)
- [Redpanda (Kafka-compatible)](https://redpanda.com/)
- [Banco Central - Pix](https://www.bcb.gov.br/estabilidadefinanceira/pix)

---

## Submission Guidelines

Submit:
1. GitHub repository link (public)
2. `docker-compose up` should bring up the entire system
3. Demo video showing transactions being processed and fraud being detected
4. Performance benchmarks
5. Send to sibelius@woovi.com or DM on X [https://x.com/sseraphini](https://x.com/sseraphini)
