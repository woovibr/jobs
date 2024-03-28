# Woovi Leaky Bucket Challenge
How would you develop a leaky bucket with nodejs, koa-js and typescript?

This challenge has as focus implement a leaky bucket strategy similar to the leaky bucket from BACEN.

## Deliverables
- [ ] A node js http server
- [ ] A multi tenancy strategy to be owner of requests, for example, you could have users, and it user it will have 10 tokens
- [ ] Implement an authentication of user with Bearer Token
- [ ] This token is must be sent in the request Authorization
- [ ] A mutation that simulates a consult of a pix key
- [ ] A leaky bucket strategy completed

### Leaky Bucket Strategy
- The consult start with 10 tokens of consult.
- Each request will consume 1 token. If success it keep your token, it failed it must decrease 1 token from tokens.
- Every hour 1 token is added to the total number of tokens available for request
- 10 is the max limit of tokens
- Simulate requests validating token strategy with Jest to show that leaky bucket it works
- Generate a postman of the API to be consumed

### Bonus
- [ ] It use GraphQL in the Node Server
- [ ] A frontend that simulates an initiation o pix transaction
- [ ] It will fill two fields: pix key and value
- [ ] It must request the backend GraphQL
- [ ] It must use React and Relay at frontend
