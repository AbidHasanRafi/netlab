## Advanced GraphQL Features 

GraphQL একটি অত্যন্ত শক্তিশালী API query language যা modern web and mobile applications এর জন্য ডেটা ফেচিং এর ব্যাপক সুবিধা প্রদান করে। তবে, শুধু basic queries এবং mutations এর বাইরে GraphQL এর অনেক advanced features রয়েছে, যেগুলি আমাদের API এর ফিচার এবং পারফরম্যান্সকে আরও শক্তিশালী এবং ইফিসিয়েন্ট করতে সাহায্য করে। এই advanced features গুলি ব্যবহার করে আপনি GraphQL API তে আরও flexibility, optimization এবং কাস্টমাইজেশন আনতে পারেন।

এখানে GraphQL এর কিছু Advanced Features এর বিস্তারিত আলোচনা করা হলো।


### ১. Fragments

Fragments একটি powerful feature যা আপনাকে reusable অংশ (reusable pieces of a query) তৈরি করতে সহায়তা করে। এটি খুবই উপকারী যখন আপনি একাধিক query তে একই ধরনের data ফেচ করেন। Fragment এর মাধ্যমে আপনি কোডকে আরও clean এবং maintainable রাখতে পারেন।

#### Fragments এর ব্যবহার:
- Reusability: একাধিক queries তে একই fields বা objects ব্যবহারের ক্ষেত্রে আপনি fragment ব্যবহার করতে পারেন, যাতে কোড পুনরাবৃত্তি কমে।
- Modularization: Fragment একটি কোড ব্লক হিসেবে কাজ করে এবং আপনি যদি একই field একাধিক বার ব্যবহার করেন, তাহলে বার বার কোড লিখতে হবে না। বরং একটি fragment ব্যবহার করলেই সব query তে সেটি apply হয়ে যাবে।

উদাহরণ:

```graphql
fragment userFields on User {
  id
  name
  email
}

query getUserInfo {
  user(id: 1) {
    ...userFields
  }
}

query getAnotherUserInfo {
  user(id: 2) {
    ...userFields
  }
}
```

এই উদাহরণে `userFields` নামে একটি fragment তৈরি করা হয়েছে যা পুনঃব্যবহারযোগ্য এবং এটি বিভিন্ন query তে ব্যবহার করা হয়েছে।


### ২. Subscriptions

GraphQL এর একটি উল্লেখযোগ্য বৈশিষ্ট্য হলো Subscriptions। এটি আপনাকে real-time data updates করতে সাহায্য করে। যখন server এর data পরিবর্তিত হয় (যেমন new messages, notifications, etc.), তখন client এর কাছে সেই পরিবর্তন realtime এ পৌঁছানো যায়। 

#### Subscriptions এর ব্যবহার:
- Real-time Data Updates: Chat applications, notifications, stock price updates ইত্যাদি ক্ষেত্রে subscriptions অত্যন্ত গুরুত্বপূর্ণ।
- Push Notification: API দিয়ে যখনই নতুন data বা event আসে, তখন সেই event ক্লায়েন্টকে push notification হিসেবে পাঠানো যায়।

উদাহরণ:

```graphql
subscription {
  messageAdded {
    id
    content
    user {
      name
    }
  }
}
```

এখানে `messageAdded` নামে একটি subscription এর মাধ্যমে server এ নতুন message যোগ হলে client এর কাছে এটি real-time এ পৌঁছাবে।


### ৩. Directives

Directives হল special markers বা metadata, যা GraphQL schema এবং queries তে conditional logic প্রয়োগ করার জন্য ব্যবহৃত হয়। GraphQL এ দুটি built-in directive রয়েছে: `@include` এবং `@skip`। এগুলি ব্যবহার করে আপনি dynamically কোন fields বা data include বা skip করতে পারেন।

#### Directives এর ব্যবহার:
- Conditional Data Fetching: এটি বিশেষভাবে উপকারী যখন আপনি কোন নির্দিষ্ট field বা অংশ data কে dynamic ভাবে include বা exclude করতে চান।
  
উদাহরণ:

```graphql
query getUser($showEmail: Boolean!) {
  user(id: 1) {
    name
    email @include(if: $showEmail)
  }
}
```

এখানে, যদি `showEmail` true হয়, তবে email field return হবে। আর false হলে email field skip করা হবে।


### ৪. Batching and DataLoader

একটি জনপ্রিয় সমস্যা যা অনেক সময় GraphQL API তে দেখা যায় তা হলো N+1 Query Problem। যখন একাধিক related resource (যেমন users এবং তাদের posts) কে retrieve করতে হয়, তখন প্রতিটি resource এর জন্য আলাদা আলাদা database query চলে, যা system কে overload করে দিতে পারে।

DataLoader হল একটি library যা query batching এবং caching এর মাধ্যমে এই সমস্যা সমাধান করে। এটি একাধিক database request একত্রে batching করে এবং এর ফলে একক request তে সব data পাওয়া যায়।

#### DataLoader এর ব্যবহার:
- Batching: একাধিক requests কে একত্রে batch করে ডাটাবেস থেকে একসাথে retrieve করা।
- Caching: একই resource একাধিকবার request করার পর, সেগুলিকে cache করে রাখা যাতে পরবর্তী বার সেগুলি দ্রুত পাওয়া যায়।

উদাহরণ:

```javascript
const DataLoader = require('dataloader');
const userLoader = new DataLoader(keys => batchGetUsers(keys));

const batchGetUsers = async (keys) => {
  const users = await UserModel.find({ id: { $in: keys } });
  return keys.map(key => users.find(user => user.id === key));
};
```

এখানে, `userLoader` ব্যবহার করে একাধিক user কে একসাথে batch করা হয়েছে, যা N+1 Query Problem সমাধান করতে সাহায্য করবে।


### ৫. Union Types

Union Types আপনাকে একটি field-এ একাধিক types return করার সুবিধা দেয়। এর মাধ্যমে, একটি field বিভিন্ন type এর মধ্যে কোনটি একটিই রিটার্ন করতে পারে, এবং client সেই type অনুযায়ী response গ্রহণ করতে পারে।

#### Union Types এর ব্যবহার:
- Flexibility: এই ধরনের types ব্যবহারের মাধ্যমে একাধিক possible return types return করা যেতে পারে।
  
উদাহরণ:

```graphql
union SearchResult = Post | User

query search($term: String!) {
  search(term: $term) {
    ... on Post {
      title
      content
    }
    ... on User {
      name
      email
    }
  }
}
```

এখানে `SearchResult` একটি union type যেটি `Post` বা `User` হতে পারে, এবং client সেগুলির মধ্যে কোনটি পাবে তা নির্ভর করবে query এর উপর।


### ৬. Interfaces

Interfaces GraphQL এর types এর মধ্যে common fields বা structure শেয়ার করতে ব্যবহৃত হয়। এটা polymorphism এর মতো কাজ করে, যেখানে একাধিক concrete type একই interface implement করে।

#### Interfaces এর ব্যবহার:
- Polymorphism: একাধিক type এর মধ্যে common fields শেয়ার করার জন্য interfaces ব্যবহার করা যায়।

উদাহরণ:

```graphql
interface Animal {
  name: String
}

type Dog implements Animal {
  name: String
  breed: String
}

type Cat implements Animal {
  name: String
  color: String
}

query getAnimals {
  animals {
    name
  }
}
```

এখানে `Animal` একটি interface, যেটি `Dog` এবং `Cat` types implement করেছে। ফলে, `getAnimals` query একসাথে দুটি type এর data ফেরত দিতে পারে।


### ৭. Custom Scalar Types

GraphQL এ আপনি Custom Scalar Types তৈরি করতে পারেন, যেগুলি built-in scalar types (যেমন `String`, `Int`, `Boolean` ইত্যাদি) এর বাইরে custom validation logic বা serialization rules এর সাথে কাজ করে।

#### Custom Scalar Types এর ব্যবহার:
- Custom Validation: যেমন email validation, date formatting ইত্যাদি।
- Serialization: custom data structures কে serialize বা deserialize করা।

উদাহরণ:

```graphql
scalar Date

type Event {
  name: String
  date: Date
}

query {
  event(id: 1) {
    name
    date
  }
}
```

এখানে `Date` একটি custom scalar type যা সময়ের সাথে সম্পর্কিত ডেটা ফেরত দেয়।


### ৮. Schema Stitching

Schema Stitching হল একটি advanced technique যার মাধ্যমে আপনি একাধিক GraphQL schema কে একত্রিত করে একটি বৃহৎ schema তৈরি করতে পারেন। এটি অনেক microservices বা বিভিন্ন API এর জন্য একটি একক unified schema তৈরি করতে সাহায্য করে।

#### Schema Stitching এর ব্যবহার:
- Microservices Integration: বিভিন্ন microservices থেকে data মিশিয়ে একটি একক API তৈরি করা।

উদাহরণ:

```javascript
const { mergeSchemas } = require('@graphql-tools/merge');
const schema1 = /* schema from service 1 */;
const schema2 = /* schema from service 2 */;

const stitchedSchema = mergeSchemas({ schemas: [schema1, schema2] });
```

এখানে `mergeSchemas` এর মাধ্যমে দুটি schema একত্রিত করা হয়েছে, যাতে একটি বৃহৎ schema তৈরি হয়।


GraphQL এর advanced features ব্যবহার করে আপনি আপনার API কে আরও শক্তিশালী, ফ্লেক্সিবল এবং ইফিসিয়েন্ট করতে পারেন। এগুলি কেবল performance optimization নয়, বরং একটি নির্দিষ্ট use-case এর জন্য উপযুক্ত solution প্রদান করে। Fragments, Subscriptions, Directives, Batching, Union Types, Interfaces, এবং Schema Stitching এর মতো advanced features দ্বারা আপনি GraphQL এর পুরো potential কে unlock করতে পারবেন এবং আরও scalable ও maintainable applications তৈরি করতে সক্ষম হবেন।