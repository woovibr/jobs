# Sandbox Practical Exercises — hands-on API & webhook

The 11 tickets above test how you **investigate and communicate** about a problem. This part
tests whether you can actually **operate** the API and webhooks yourself — no fictional
scenario, real calls against `app.woovi-sandbox.com`.

Do as many as you have time for. For each one, tell us what you did, what you observed, and
paste the actual request/response (redact your `appID`/secret). We care about what you saw
happen, not a perfect score.

## Setup

1. Create a sandbox account at `app.woovi-sandbox.com` and generate an `appID`.
2. Have a way to receive a webhook: [webhook.site](https://webhook.site), a Postman mock, or a
   local server exposed with ngrok/localtunnel.

## Exercises

**1. Create a charge, pay it for real, capture the webhook**
Create a charge via `POST /api/v1/charge`, pay the generated QR code in the sandbox (it mirrors
production end-to-end), and register your webhook endpoint for `OPENPIX:CHARGE_COMPLETED`.
Paste the payload you received.

**2. Validate the webhook signature**
Woovi signs webhook deliveries. Implement (or pseudocode) verifying that signature before
trusting the payload, and describe what happens today if you skip that check.

**3. Force a delivery failure and observe the retry**
Take your webhook endpoint down (or make it return 500) while a payment confirms, bring it back
up, and use the manual "resend webhook" action in the sandbox panel to recover the event.
Explain the retry behavior you observed. What does this imply for a system that treats the
webhook as its only source of truth for "did this get paid"?

**4. Real idempotency, not just the theory**
Send the exact same `POST /charge` twice with the same `correlationID` — confirm the second call
does not create a new charge. Then make the same webhook event arrive twice (a natural retry, or
a manual resend) and show how your own processing avoids double-crediting the customer.

**5. Reproduce ticket #11's split scenario live**
Create a subaccount in the sandbox, then create a charge with a `splits` array where the values
you send don't add up cleanly to the charge total (mirror the ticket). Compare the response the
API actually gives you against what you expected, and explain the discrepancy.

**6. A 400 you can actually read**
Trigger at least two different validation errors on purpose (a malformed `taxID`, a missing
required field, an invalid enum value like `frequency: "QUARTERLY"` from ticket #02). Paste the
raw error body and explain what each field in it means — not just "it returned 400".

**7. Pagination and filtering on a list endpoint**
Call `GET /charge` with `skip`/`limit` and a status or date filter, and reconcile the result
against the charges you created in the exercises above.

## Why this pairs with the tickets

Exercises 3 and 4 mirror ticket #01 (webhook didn't arrive) and ticket #08 (forensic
reconciliation via `correlationID`) almost exactly. If you want a strong signal, do the written
response to those two tickets first, then come back and do exercises 3–5 for real — consistency
(or the lack of it) between the two tells us a lot.
