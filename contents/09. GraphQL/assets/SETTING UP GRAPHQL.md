# Setting Up GraphQL

GraphQL সেটআপ একটি প্রাথমিক কিন্তু গুরুত্বপূর্ণ পদক্ষেপ যা আপনাকে একটি কার্যকরী GraphQL API তৈরি করার সুযোগ প্রদান করে। এটি সার্ভার সাইডে কিভাবে GraphQL কনফিগার করবেন, কিভাবে সেটআপ করবেন এবং ক্লায়েন্টের সাথে যুক্ত করবেন, তার একটি পূর্ণাঙ্গ গাইডলাইন হতে পারে। 

এখন চলুন, ধাপে ধাপে GraphQL সেটআপ প্রক্রিয়া ব্যাখ্যা করি:


### ১. প্রয়োজনীয় টুলস এবং প্যাকেজ ইনস্টলেশন

GraphQL সেটআপ শুরু করার আগে, আপনাকে কিছু প্রয়োজনীয় টুলস এবং প্যাকেজ ইনস্টল করতে হবে। সাধারণত, আমরা Node.js এবং npm বা Yarn ব্যবহার করে এই কাজটি করব। GraphQL API তৈরি করার জন্য সবচেয়ে জনপ্রিয় সার্ভার লাইব্রেরি হলো Apollo Server, এবং ক্লায়েন্ট সাইডে কাজ করার জন্য Apollo Client ব্যবহৃত হয়। আমরা Apollo Server ব্যবহার করে GraphQL সার্ভার সেটআপ করব।

#### ধাপ ১: Node.js ইনস্টলেশন

প্রথমেই, আপনাকে আপনার সিস্টেমে Node.js এবং npm বা Yarn ইনস্টল করতে হবে। আপনি Node.js এর অফিসিয়াল ওয়েবসাইট থেকে Node.js ইনস্টল করতে পারবেন।

- Node.js ইনস্টল করতে [Node.js অফিসিয়াল ওয়েবসাইট](https://nodejs.org/en/) থেকে ডাউনলোড করুন এবং ইনস্টলেশন প্রক্রিয়া সম্পন্ন করুন।

#### ধাপ ২: প্রজেক্ট তৈরি করা

এখন আপনি একটি নতুন প্রজেক্ট তৈরি করুন যেখানে আপনি আপনার GraphQL API তৈরি করবেন। এই কাজটি করতে টার্মিনাল/কমান্ড প্রম্পটে নিচের কমান্ডটি ব্যবহার করতে পারেন:

```bash
mkdir graphql-server
cd graphql-server
npm init -y
```

এটি আপনার জন্য একটি নতুন Node.js প্রজেক্ট তৈরি করবে। এরপর npm init কমান্ডটি দিয়ে আপনার প্রজেক্টের প্যাকেজ জেনারেট হবে।

#### ধাপ ৩: Apollo Server ইনস্টল করা

এখন আমরা Apollo Server ইনস্টল করব। Apollo Server হলো একটি GraphQL সার্ভার লাইব্রেরি যা সহজে GraphQL সার্ভার সেটআপ করতে সহায়তা করে।

নিচের কমান্ডটি দিয়ে Apollo Server ইনস্টল করুন:

```bash
npm install apollo-server graphql
```

এটি Apollo Server এবং graphql প্যাকেজ দুটি ইনস্টল করবে, যা GraphQL API তৈরি করতে প্রয়োজনীয়।


### ২. Apollo Server সেটআপ

এখন যে প্যাকেজগুলো ইনস্টল করা হয়েছে, তা দিয়ে একটি সহজ GraphQL সার্ভার তৈরি করবো।

#### ধাপ ১: সার্ভার কোড লেখা

আপনার প্রজেক্ট ডিরেক্টরির মধ্যে একটি নতুন server.js ফাইল তৈরি করুন এবং নিচের কোডটি যোগ করুন:

```javascript
const { ApolloServer, gql } = require('apollo-server');

// একটি সাধারণ স্কিমা তৈরি করুন
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// রেজলভার তৈরি করুন
const resolvers = {
  Query: {
    hello: () => 'Hello, World!',
  },
};

// ApolloServer সেটআপ করা
const server = new ApolloServer({ typeDefs, resolvers });

// সার্ভার চালু করা
server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
```

এই কোডটি একটি সাধারন GraphQL সার্ভার তৈরি করবে যা একটি `hello` কুয়েরি রিটার্ন করবে এবং এর রেসপন্স হবে `'Hello, World!'`। এখানে আমরা একটি Query টাইপ এবং একটি রেজলভার তৈরি করেছি। 

#### ধাপ ২: সার্ভার রান করা

এখন আপনার সার্ভারটি চালানোর জন্য নিচের কমান্ডটি রান করুন:

```bash
node server.js
```

এটি আপনাকে একটি URL প্রদান করবে, যেমন `http://localhost:4000/`, যেখানে আপনার GraphQL সার্ভার চলতে থাকবে। আপনি GraphQL Playground বা GraphiQL ব্যবহার করে এন্ডপয়েন্টে গিয়ে কুয়েরি করতে পারবেন।


### ৩. GraphQL Playground ব্যবহার করা

GraphQL Playground একটি GUI (Graphical User Interface) টুল যা GraphQL কুয়েরি পরীক্ষার জন্য ব্যবহৃত হয়। আপনি সার্ভার চালু করার পরে, আপনি GraphQL Playground ব্যবহার করে সহজেই কুয়েরি পাঠাতে এবং ডেটা পরীক্ষা করতে পারেন।

এটি সাধারণত নিম্নলিখিত URL-এ চলে আসে:

```
http://localhost:4000/
```

এখানে আপনি আপনার কুয়েরি লিখে পরীক্ষা করতে পারবেন। যেমন:

```graphql
{
  hello
}
```

এটি রিটার্ন করবে:

```json
{
  "data": {
    "hello": "Hello, World!"
  }
}
```


### ৪. ডাটাবেসের সাথে সংযোগ স্থাপন

আপনার GraphQL API যদি ডাটাবেস থেকে ডেটা নিয়ে কাজ করে, তাহলে আপনাকে ডাটাবেস কনফিগারেশনও করতে হবে। উদাহরণস্বরূপ, আপনি MongoDB, PostgreSQL বা অন্য কোনো ডাটাবেস ব্যবহার করতে পারেন।

এখানে একটি সহজ MongoDB সংযোগের উদাহরণ দেওয়া হল:

#### ধাপ ১: MongoDB প্যাকেজ ইনস্টল করা

```bash
npm install mongoose
```

#### ধাপ ২: MongoDB মডেল তৈরি করা

```javascript
const mongoose = require('mongoose');

// MongoDB সংযোগ স্থাপন
mongoose.connect('mongodb://localhost:27017/graphqlDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// MongoDB Schema
const Book = mongoose.model('Book', {
  title: String,
  author: String,
});

// Query রেজলভার
const resolvers = {
  Query: {
    books: async () => await Book.find(),
  },
};
```

এখন আপনি books কুয়েরি চালিয়ে MongoDB থেকে ডেটা রিটার্ন করতে পারবেন।


### ৫. Apollo Client সাইড ইন্টিগ্রেশন

আপনি যদি React অ্যাপ্লিকেশন ব্যবহার করেন, তবে Apollo Client ব্যবহার করে GraphQL API ইন্টিগ্রেট করতে পারেন। এর জন্য প্রথমে Apollo Client ইনস্টল করুন:

```bash
npm install @apollo/client graphql
```

এখন, আপনার React অ্যাপ্লিকেশনে Apollo Client ইন্টিগ্রেট করতে হবে। উদাহরণস্বরূপ:

```javascript
import React from 'react';
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';

// Apollo Client সেটআপ
const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h1>Hello GraphQL</h1>
      </div>
    </ApolloProvider>
  );
}

export default App;
```

এখন আপনার React অ্যাপ্লিকেশন GraphQL API এর সাথে ইন্টিগ্রেটেড এবং কুয়েরি পাঠানোর জন্য প্রস্তুত।


GraphQL সেটআপ প্রক্রিয়া খুবই সহজ এবং দ্রুত। আপনি যদি সঠিকভাবে Apollo Server এবং Apollo Client ব্যবহার করেন, তবে আপনি খুব সহজেই GraphQL API তৈরি করতে পারবেন। এর মাধ্যমে ডেটা ফেচিং আরও দক্ষ, নিয়ন্ত্রিত এবং উন্নত হবে। উপরোক্ত ধাপগুলো অনুসরণ করে আপনি সহজেই আপনার GraphQL API এবং ক্লায়েন্ট সাইড ইন্টিগ্রেশন সম্পন্ন করতে পারবেন, যা আধুনিক ওয়েব অ্যাপ্লিকেশন ডেভেলপমেন্টের জন্য উপযুক্ত।