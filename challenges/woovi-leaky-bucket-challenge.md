# Woovi Leaky Bucket Challenge
How would you develop a leaky bucket with nodejs, koa-js and typescript?

This challenge has as focus to implement a leaky bucket strategy similar to the leaky bucket from BACEN.

## Deliverables
- [ ] A node js http server
- [ ] A multi tenancy strategy to be owner of requests. For example, you could have users, and each user will have 10 tokens
- [ ] Implement an authentication of users with a Bearer Token
- [ ] This token must be sent in the request Authorization
- [ ] A mutation that simulates a query of a pix key
- [ ] A leaky bucket strategy completed

### Leaky Bucket Strategy
- The query starts with 10 query tokens.
- Each request must consume 1 token. If success it keeps your token, if failed it must decrease 1 token from tokens.
- Every hour 1 token is added to the total number of tokens available for request
- 10 is the max limit of tokens
- Simulate requests validating token strategy with Jest to show that the leaky bucket works
- Generate a postman of the API to be consumed

### Bonus
- [ ] It uses GraphQL in the Node Server
- [ ] A frontend that simulates the initiation of a pix transaction
- [ ] It will fill two fields: pix key and value
- [ ] It must request the backend GraphQL
- [ ] It must use React and Relay at the frontend
