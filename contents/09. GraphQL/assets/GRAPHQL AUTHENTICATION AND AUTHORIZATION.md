## GraphQL Authentication and Authorization

Authentication এবং Authorization দুটি গুরুত্বপূর্ণ বিষয় যা যেকোনো ওয়েব অ্যাপ্লিকেশনের সুরক্ষা ও নিরাপত্তা নিশ্চিত করতে ব্যবহৃত হয়। এই দুটি বিষয় GraphQL এর ক্ষেত্রেও খুব গুরুত্বপূর্ণ, কারণ GraphQL API-এর মাধ্যমে একাধিক ব্যবহারকারী ডেটা অ্যাক্সেস করতে পারে এবং তাদের জন্য সঠিকভাবে ডেটা বা ফিচার অ্যাভেইলেবল রাখতে হবে।

এটি সুনির্দিষ্টভাবে যেভাবে কাজ করে তা বুঝতে হলে, প্রথমে Authentication এবং Authorization এর মৌলিক ধারণা এবং GraphQL এর সাথে এর ব্যবহারের পদ্ধতি জানতে হবে।


### ১. Authentication: পরিচিতি

Authentication হল একটি প্রক্রিয়া যার মাধ্যমে একটি ব্যবহারকারী বা ক্লায়েন্টের পরিচয় যাচাই করা হয়। এটি নিশ্চিত করে যে, যে ব্যক্তি বা সিস্টেম অনুরোধ পাঠাচ্ছে, সে আসলেই কে তা সঠিকভাবে শনাক্ত করা হয়েছে। সাধারণত ব্যবহারকারীদের লগইন করার সময় তাদের username এবং password দেওয়া হয়, যা সার্ভারে যাচাই করা হয়। সফলভাবে যাচাই হলে, সার্ভার ব্যবহারকারীকে একটি token প্রদান করে, যা পরবর্তীতে ব্যবহারকারীর সকল অনুরোধে ব্যবহৃত হয়।

#### Authentication এর উদাহরণ:

ধরা যাক, একটি সিস্টেমে user এবং admin নামে দুটি রোল রয়েছে। ব্যবহারকারী যখন সিস্টেমে লগইন করে, সার্ভার তাদের দেওয়া তথ্য যাচাই করে। সঠিক হলে, সার্ভার ব্যবহারকারীকে একটি JWT (JSON Web Token) প্রদান করে, যা ক্লায়েন্ট পরবর্তীতে সকল GraphQL API কলের সাথে পাঠাতে পারে।

#### Authentication এর জন্য ব্যবহৃত প্রযুক্তি:
- JWT (JSON Web Token): এটি একটি ওপেন স্ট্যান্ডার্ড যা নিরাপদে তথ্য আদান-প্রদান করার জন্য ব্যবহৃত হয়। এটি মূলত ব্যবহারকারীর আইডেন্টিটি এবং অনুমোদন চেক করতে ব্যবহার করা হয়।
- OAuth: একটি এক্সটেনশন যা তৃতীয় পক্ষের সিস্টেমের মাধ্যমে অ্যাক্সেস প্রদান করে।
- Sessions: স্টেটফুল অথেন্টিকেশন পদ্ধতি, যেখানে সার্ভার সাইডে সেশন তৈরি হয় এবং ব্যবহারকারীর অনুরোধের সাথে একটি সেশন আইডি পাঠানো হয়।


### ২. Authorization: পরিচিতি

Authorization হল প্রক্রিয়া যার মাধ্যমে একটি ব্যবহারকারী বা ক্লায়েন্টের কাছে কোন ডেটা বা অ্যাক্সেসের অনুমতি দেওয়া হবে তা নির্ধারণ করা হয়। অর্থাৎ, authentication এর মাধ্যমে যখন একটি ব্যবহারকারী বা ক্লায়েন্ট শনাক্ত হয়, তখন authorization এর মাধ্যমে সে কতটুকু ডেটা বা ফিচারের অ্যাক্সেস পাবে, তা নির্ধারিত হয়। এটি নিরাপত্তার একটি অপরিহার্য অংশ, কারণ সঠিকভাবে অনুমতি না দিলে, অ্যাপ্লিকেশনটি বিপজ্জনক হতে পারে।

যেমন, একজন user শুধুমাত্র তার নিজের প্রোফাইলের তথ্য দেখতে পারবে, কিন্তু একজন admin পুরো সিস্টেমের ডেটা দেখতে এবং ম্যানেজ করতে পারবে।


### ৩. GraphQL-এ Authentication এবং Authorization

#### ১. Authentication এর প্রয়োগ

GraphQL API-তে authentication সাধারণত ক্লায়েন্টের সাথে সংযোগ শুরু হওয়ার আগে নিশ্চিত করা হয়। একাধিক পদ্ধতিতে authentication পরিচালনা করা যায়, তবে সবচেয়ে সাধারণ পদ্ধতিটি হল JWT ব্যবহার। 

##### JWT (JSON Web Token) Authentication Example:

1. Login (Authentication): ব্যবহারকারী যখন তাদের লগইন তথ্য (যেমন, username ও password) প্রদান করে, সার্ভার তাদের যাচাই করে। যাচাই সফল হলে, সার্ভার একটি JWT প্রদান করে, যা ক্লায়েন্ট পরবর্তী সময়ের জন্য API-এর অনুরোধের সাথে পাঠাতে পারে।
   
   Request:
   ```graphql
   mutation {
     login(username: "user", password: "password") {
       token
     }
   }
   ```

2. Sending JWT with Requests: একবার লগইন করার পরে, ক্লায়েন্ট তাদের JWT টোকেন HTTP হেডারে পাঠায়, যেন সার্ভার এই টোকেন দিয়ে নিশ্চিত করতে পারে যে, এটি অনুমোদিত ব্যবহারকারী।

   Example Request with JWT Token:
   ```bash
   Authorization: Bearer <JWT_TOKEN>
   ```

3. Server-side Verification: সার্ভার JWT টোকেন যাচাই করে এবং নিশ্চিত করে যে, এটি বৈধ। যদি টোকেনটি বৈধ হয়, তাহলে সার্ভার ক্লায়েন্টকে অনুরোধ করা ডেটা প্রদান করে। 
   
   Example Server-side Authentication Code (Node.js using Apollo Server):
   ```javascript
   const { ApolloServer, gql } = require('apollo-server');
   const jwt = require('jsonwebtoken');

   const server = new ApolloServer({
     typeDefs,
     resolvers,
     context: ({ req }) => {
       const token = req.headers.authorization || '';
       if (token) {
         try {
           const user = jwt.verify(token.split(' ')[1], 'secret-key');
           return { user };
         } catch (e) {
           throw new AuthenticationError('Your session has expired. Please log in again.');
         }
       }
     }
   });
   ```

#### ২. Authorization এর প্রয়োগ

GraphQL-এ Authorization সাধারণত resolver-এর মধ্যে নিয়ন্ত্রিত হয়। যখন ব্যবহারকারীর শনাক্তকরণ (Authentication) সফল হয়, তখন তাদের দেয়া অনুমতি অনুযায়ী তাদের অ্যাক্সেস সীমিত করা হয়। 

##### Authorization Example:

1. Role-based Access Control (RBAC): একটি সিস্টেমে বিভিন্ন ব্যবহারকারীর বিভিন্ন ভূমিকা থাকতে পারে, যেমন admin, user, guest ইত্যাদি। প্রত্যেকটি রোলের আলাদা আলাদা অনুমতি থাকতে পারে।

   Example Role-based Authorization Code (Node.js with Apollo Server):
   ```javascript
   const { AuthenticationError, ForbiddenError } = require('apollo-server');

   const resolvers = {
     Query: {
       getUserData: (parent, args, context) => {
         // Check if user is authenticated
         if (!context.user) {
           throw new AuthenticationError('You need to login first');
         }
         
         // Check user role (authorization)
         if (context.user.role !== 'admin') {
           throw new ForbiddenError('You are not authorized to view this data');
         }
         
         // If authorized, return user data
         return getUserDataFromDatabase();
       },
     },
   };
   ```

2. Field-level Authorization: কখনও কখনও একটি নির্দিষ্ট ফিল্ডের জন্য অনুমতি প্রদান করতে হয়। যেমন একটি অ্যাপ্লিকেশন যদি জানায় যে, শুধুমাত্র admin-রা কিছু বিশেষ ডেটা দেখতে পারবেন, তাহলে সেই ফিল্ডের জন্য `resolve` ফাংশনে প্রয়োজনীয় অনুমতি চেক করা যেতে পারে।

   Example Field-level Authorization:
   ```javascript
   Query: {
     userData: (parent, args, context) => {
       if (!context.user) {
         throw new AuthenticationError('You must be logged in');
       }
       if (context.user.role !== 'admin') {
         throw new ForbiddenError('You are not authorized to access this data');
       }
       return { name: "admin data" };
     },
   },
   ```


### ৪. Authorization এবং Authentication এর মধ্যে পার্থক্য

Authentication এবং Authorization-এর মধ্যে কিছু মৌলিক পার্থক্য রয়েছে:

- Authentication নিশ্চিত করে যে, ব্যবহারকারী কে এবং তাদের সনাক্তকরণ সফল কি না।
- Authorization নিশ্চিত করে যে, একটি অনুমোদিত ব্যবহারকারী কী ধরনের ডেটা বা ফিচার অ্যাক্সেস করতে পারবে।

Authentication আগে ঘটে এবং এটি Authorization প্রক্রিয়ার জন্য একটি পূর্বশর্ত।


### ৫. নিরাপত্তা চ্যালেঞ্জ এবং সমাধান

GraphQL ব্যবহার করে নিরাপত্তা নিশ্চিত করার জন্য কিছু চ্যালেঞ্জ এবং তাদের সমাধান আছে:

- Token Expiry: JWT-এর টোকেনগুলি কিছু নির্দিষ্ট সময় পর এক্সপায়ার হয়ে যায়, তাই টোকেনের মেয়াদ শেষ হওয়ার আগে refresh token ব্যবহার করা উচিত।
- Over-fetching Data: GraphQL-এ ডেটা কাস্টমাইজডভাবে এক্সপোজ করা যেতে পারে, তবে এটি নিশ্চিত করতে হবে যে, শুধু প্রয়োজনীয় ডেটা ক্লায়েন্টকে দেয়া হচ্ছে।
- Access Control: সঠিকভাবে access control পলিসি বাস্তবায়ন করা উচিত যাতে শুধুমাত্র অনুমোদিত ব্যবহারকারীরাই প্রয়োজনীয় ডেটা অ্যাক্সেস করতে পারে।



GraphQL-এ Authentication এবং Authorization হলো সুরক্ষিত ডেটা অ্যাক্সেস নিশ্চিত করার মূল উপাদান। Authentication ব্যবহারকারীর পরিচয় যাচাই করার প্রক্রিয়া, এবং Authorization এটি নিশ্চিত করে যে, অনুমোদিত ব্যবহারকারী সঠিকভাবে ডেটা অ্যাক্সেস করছে। JWT এবং OAuth এর মতো প্রযুক্তি ব্যবহার করে, GraphQL API-তে এই দুটি প্রক্রিয়া বাস্তবায়ন করা যেতে পারে। এই পদ্ধতিগুলি ওয়েব অ্যাপ্লিকেশনগুলির নিরাপত্তা বাড়াতে গুরুত্বপূর্ণ ভূমিকা পালন করে।