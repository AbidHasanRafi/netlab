## Testing GraphQL APIs 

GraphQL APIs এর testing একটি গুরুত্বপূর্ণ প্রক্রিয়া, যা নিশ্চিত করে যে আপনার API সঠিকভাবে কাজ করছে এবং ক্লায়েন্টের কাছে সঠিক ডেটা পৌঁছাচ্ছে। GraphQL এর nature এবং structure REST API থেকে আলাদা, তাই এর testing পদ্ধতিও একটু ভিন্ন হতে পারে। 

এখানে GraphQL API testing সম্পর্কে বিস্তারিত আলোচনা করা হলো, যার মাধ্যমে আপনি সঠিকভাবে API এর কার্যকারিতা পরীক্ষা করতে পারবেন।


### ১. Unit Testing

Unit Testing হল একটি ছোট কোড অংশ (function বা method) এর সঠিকতা পরীক্ষা করার পদ্ধতি। GraphQL API testing এ unit tests দিয়ে মূলত resolver গুলোর কার্যকারিতা পরীক্ষা করা হয়। Resolvers হল functions যা নির্দিষ্ট data retrieve বা mutation এর কাজ করে।

#### Unit Testing এর জন্য কিছু পরামর্শ:
- Resolver Functions: প্রত্যেকটি resolver function এর জন্য unit test তৈরি করুন। এই test গুলি দিয়ে আপনি যাচাই করতে পারবেন যে resolver সঠিকভাবে ডেটা ফেরত দিচ্ছে কিনা এবং error handling ঠিকভাবে হচ্ছে কিনা।
- Mocking: Unit tests এ আপনি সাধারণত mocking ব্যবহার করবেন, অর্থাৎ external resources (যেমন ডাটাবেস, API) এর পরিবর্তে mock data ব্যবহার করবেন।

উদাহরণ (Jest দিয়ে unit test):

```javascript
test('should return user data', async () => {
  const mockUser = { id: 1, name: 'John', email: 'john@example.com' };
  const resolver = getUserResolver; // resolver function
  const result = await resolver(mockUser);
  expect(result.name).toBe('John');
});
```

এখানে `getUserResolver` একটি resolver function এবং এটি mock user data নিয়ে test করা হচ্ছে।


### ২. Integration Testing

Integration Testing হল একটি প্রক্রিয়া যার মাধ্যমে আপনার GraphQL API এর বিভিন্ন components একসাথে কাজ করছে কিনা তা পরীক্ষা করা হয়। যেমন, resolver, schema, এবং ডাটাবেস ইন্টারঅ্যাকশন।

#### Integration Testing এর জন্য কিছু পরামর্শ:
- End-to-End Testing: API এর end-to-end flow পরীক্ষা করতে integration tests ব্যবহার করুন। এটি নিশ্চিত করবে যে সমস্ত components একত্রে সঠিকভাবে কাজ করছে এবং ডেটা সঠিকভাবে ক্লায়েন্টে পৌঁছাচ্ছে।
- Database Testing: ডাটাবেসের সাথে সঠিকভাবে ইন্টারঅ্যাক্ট করছে কিনা, ডেটা সঠিকভাবে insert বা update হচ্ছে কিনা তা পরীক্ষা করতে হবে।

উদাহরণ (Jest + Supertest):

```javascript
const request = require('supertest');
const app = require('../app'); // GraphQL server

test('should fetch user by id', async () => {
  const response = await request(app)
    .post('/graphql')
    .send({
      query: '{ user(id: 1) { id name email } }',
    });

  expect(response.status).toBe(200);
  expect(response.body.data.user.id).toBe(1);
  expect(response.body.data.user.name).toBe('John');
});
```

এখানে, Supertest ব্যবহার করে একটি real GraphQL endpoint তে query পাঠানো হয়েছে এবং response যাচাই করা হয়েছে।


### ৩. Query and Mutation Testing

GraphQL এ queries এবং mutations হচ্ছে প্রধান operations। Queries ডেটা fetch করতে ব্যবহৃত হয়, এবং mutations ডেটা modify করতে ব্যবহৃত হয়। তাই, GraphQL API এর testing এ এসব operations সঠিকভাবে কাজ করছে কিনা তা পরীক্ষা করা অত্যন্ত গুরুত্বপূর্ণ।

#### Query Testing:
- Query Output Verification: একটি query চালিয়ে সেটির output সঠিকভাবে আসছে কিনা তা পরীক্ষা করতে হবে। 
- Edge Cases: edge cases এর উপরেও query গুলি পরীক্ষা করতে হবে যেমন, যখন invalid parameters দেওয়া হয়।

#### Mutation Testing:
- Data Modification: Mutation গুলি পরীক্ষা করতে হবে যাতে সেগুলি সঠিকভাবে ডেটা update বা delete করে।
- Error Handling: যখন invalid data বা permission সমস্যা হয়, তখন error handling ঠিকভাবে কাজ করছে কিনা পরীক্ষা করতে হবে।

উদাহরণ:

```javascript
test('should fetch user by name', async () => {
  const response = await request(app)
    .post('/graphql')
    .send({
      query: '{ user(name: "John") { id name email } }',
    });

  expect(response.status).toBe(200);
  expect(response.body.data.user.name).toBe('John');
});

test('should create new user', async () => {
  const response = await request(app)
    .post('/graphql')
    .send({
      query: 'mutation { createUser(name: "Jane", email: "jane@example.com") { id name email } }',
    });

  expect(response.status).toBe(200);
  expect(response.body.data.createUser.name).toBe('Jane');
});
```

এখানে, একটি query এবং একটি mutation এর testing দেখানো হয়েছে।


### ৪. Mocking External Services

GraphQL API গুলি অনেক সময় external services (যেমন third-party APIs, databases, অথবা file systems) এর সাথে যোগাযোগ করে থাকে। এই external services এর কাজ পরীক্ষা করার জন্য mock করা দরকার, যাতে করে testing এর সময় আসল services ব্যবহার না করতে হয় এবং ফলস/incorrect data পাওয়া না যায়।

#### Mocking এর জন্য কিছু টুল:
- Jest Mocks: Jest এর mocking ফিচার ব্যবহার করে আপনি সহজে external services mock করতে পারেন।
- Sinon.js: Sinon একটি popular library যা স্পাই, স্টাব এবং mock করার জন্য ব্যবহৃত হয়।

উদাহরণ (Jest mock):

```javascript
jest.mock('../services/userService');
const userService = require('../services/userService');

test('should fetch user from service', async () => {
  userService.getUser.mockResolvedValue({ id: 1, name: 'John', email: 'john@example.com' });

  const response = await request(app)
    .post('/graphql')
    .send({
      query: '{ user(id: 1) { id name email } }',
    });

  expect(response.body.data.user.name).toBe('John');
});
```

এখানে, `userService.getUser` কে mock করা হয়েছে, যাতে real service না ব্যবহার করে test করা যায়।


### ৫. Error Handling and Edge Cases

GraphQL API testing এ error handling এবং edge cases পরীক্ষা করা অত্যন্ত গুরুত্বপূর্ণ। আপনাকে নিশ্চিত করতে হবে যে, সঠিকভাবে error messages return হচ্ছে এবং invalid inputs এর জন্য proper validation করা হচ্ছে।

#### Error Handling এর জন্য কিছু পরামর্শ:
- Invalid Inputs: যখন incorrect বা missing data দেওয়া হয়, তখন সঠিক error messages পাঠানো উচিত।
- Permission Issues: authorization errors (যেমন unauthorized access) সঠিকভাবে handle হচ্ছে কিনা তা পরীক্ষা করুন।
- Server Errors: সার্ভার বা ডাটাবেসের সমস্যা হলে সঠিক server error ফেরত দেওয়া উচিত।

উদাহরণ:

```javascript
test('should return error for invalid user id', async () => {
  const response = await request(app)
    .post('/graphql')
    .send({
      query: '{ user(id: 999) { id name email } }',
    });

  expect(response.status).toBe(200);
  expect(response.body.errors).toBeDefined();
  expect(response.body.errors[0].message).toBe('User not found');
});
```

এখানে, invalid user id দেওয়া হলে error message যাচাই করা হয়েছে।


### ৬. End-to-End Testing (E2E)

End-to-End (E2E) Testing হল পুরো application flow এর testing, যেখানে frontend এবং backend উভয়ই একসাথে পরীক্ষা করা হয়। এতে আপনি দেখতে পারেন যে, API সম্পূর্ণভাবে কাজ করছে এবং ক্লায়েন্ট সঠিকভাবে API থেকে ডেটা পাচ্ছে।

#### E2E Testing এর জন্য টুলস:
- Cypress: Cypress ব্যবহার করে আপনি frontend এবং GraphQL API এর ইন্টিগ্রেটেড testing করতে পারেন।
- Puppeteer: Puppeteer ব্যবহার করে automated testing করা যায়, যেখানে frontend এবং GraphQL API এর কাজ একসাথে পরীক্ষা করা যায়।


GraphQL API এর testing অত্যন্ত গুরুত্বপূর্ণ এবং এটি বিভিন্ন স্তরে করা উচিত, যেমন unit testing, integration testing, mutation and query testing, error handling, এবং end-to-end testing। এর মাধ্যমে আপনি নিশ্চিত করতে পারবেন যে আপনার API সঠিকভাবে কাজ করছে এবং ক্লায়েন্টকে নির্ভুল ও সঠিক ডেটা পাচ্ছে। Testing এর সঠিক পদ্ধতি গ্রহণ করলে API এর performance এবং reliability অনেক বেশি বাড়ানো যায়।