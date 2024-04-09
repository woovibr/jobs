## Woovi Challenge - Crud Bank GraphQL Relay
Woovi is a Startup that offer solutions on top of payments such as Pix and Credit Card.

Today we have two products: Woovi and OpenPix
- [Woovi](https://www.woovi.com)
- [OpenPix](https://www.openpix.com.br)

## Challenge
Our challenge is a replica of our day-to-day. The same consists of building a CRUD of a bank based on our technologies.

In addition to technology, the challenge takes you to immersion in a work routine at a startup. When talking about startup, understand that we are one because we are building something new and without definitions previously defined by other people. So our routine is to code reasonably well. But more than that, unlocking the business and making the best decision to deliver what the customer needs.

### Challenge Stack
### [Stack](https://dev.to/woovi/woovi-stack-5fom) - https://dev.to/woovi/woovi-stack-5fom
- Backend: MongoDB, NodeJS, Koajs, GraphQL
- Frontend: React, Relay
- Tests: Jest

### Theme - Bank
The theme of the challenge is to create a simple replica of a bank in which it is possible:
- Create an account
- Login
- Send a transaction
- Receive a transaction
- Refund a transaction
- Calculate the available balance of an account

### Where to start?
- If you are applying to fullstack, you must code the Backend and Frontend.
- If you are applying to Backend, you must code the backend step and the Backend Plus section.
- If you are applying to Frontend, you must code the backend step and the Backend Plus section.

#### Backend
The backend must be a GraphQL API that handles all the required items above.

Stack: NodeJs, KoaJs, MongoDB, GraphQL

Plus: Use Node and Connection from Relay to handle get collection and lists.

#### Login and Register Mutations
- It must have available a Mutation to register a new User.
- This mutation must return the user logged in when successfully.
- It must be available as a Mutation to log in as a User.
- It must handle token authentication for login.
- It must persist the token between requests.
- It must create the token with JWT authentication.
- The token is must be transferred by
- It must create a user with an account

#### User Model
- It must have a first name, tax id (cpf/cnpj field), and password.
- The password must be encrypted.
- It must not be possible to register more than one user with the same tax id.

#### Account Model
- unique ID to be used as idempotency id.
- account number.
- user ID owner of account.
- it must be able to have one account per user.
- it must not be able to duplicate accounts.
- it must have the calculation of balance using a ledger strategy.

#### Transaction Model
- Sender: who is sending the money
- Receiver: who is receiving the money
- It must be idempotent
- Value: in cents or decimal128

#### Deploy
The backend must be deployed where it can be accessible.

#### How to guarantee a better chance of being hired by backend?
- Expose a GraphQL Playground
- Generate a postman JSON to be able to import and make calls to the Backend GraphQL API
- It uses graphql-HTTP
- It has a test with Jest or a Test Runner of choice

### Frontend
- It must have a page to log in or register it.
- Once logged or registered it must return the User logged and show the home page of your challenge.
- It must show the data of the user and account
- It must have an action button to transfer money between accounts
- It must use Shadcn
- It must use Vite with React Router
- It must use [Relay](relay.dev)

#### Deploy
The front end must be deployed where it can be accessible in production to be reviewed by our team.

#### How to guarantee a better chance of being hired by front end?
- Use Shadcn
- Use vite with React Router latest version
- Create a storybook of your UI components
- Create a dash such as a real bank
- It has tested with Jest or a Test Runner of choice

### Deadline
The deadline for delivery is free. However, the sooner the more chances of the vacancy being yours.

### Doubts and Help
- Doubts can be taken directly on the Sibelius Discord channel. Doubts are free and can be taken 24/7. We want to see what your communication skills are like and how to unlock yourself.
- Ask the invite to sibelius@woovi.com or danilo@woovi.com
- Check challenge references here to help you -> [Awesome Woovi Challenge](https://github.com/entria/awesome-woovi-challenge)

### Senior
In addition to CRUD, if you decide to venture into a senior scope you also have the task of designing a subject-based architecture as if we were going to define, plan, design, and implement our next feature core.

- [Woovi Leaky Bucket](https://github.com/woovibr/jobs/blob/main/challenges/woovi-leaky-bucket-challenge.md)

## OpenSource
Your repository must be open-sourced

#### Finishing the challenge
After finishing the challenge, push the GitHub repo, then sent an email to danilo@woovi.com or call on dm twitter to set up a call [https://twitter.com/daniloab_](https://twitter.com/daniloab_)
