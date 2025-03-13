# Apollo Client and Apollo Server

Apollo Client এবং Apollo Server হল দুটি জনপ্রিয় টুল যা GraphQL অ্যাপ্লিকেশন নির্মাণে ব্যবহৃত হয়। Apollo GraphQL এর এক্সটেনশন, যা ব্যবহারকারীদের উন্নত ফিচার এবং সরলীকৃত ডেটা ম্যানেজমেন্ট প্রক্রিয়া প্রদান করে।

Apollo Client হল একটি লাইব্রেরি যা GraphQL কুইরিগুলি ক্লায়েন্ট সাইডে পাঠাতে এবং প্রতিক্রিয়া গ্রহণ করতে সহায়ক। অপরদিকে, Apollo Server হল একটি গ্রাফিক্যাল সার্ভার যা GraphQL স্কিমা এবং রিজলভার দিয়ে সার্ভার সাইডে কাজ করে।

এগুলি একত্রে ব্যবহৃত হলে, একটি শক্তিশালী GraphQL অ্যাপ্লিকেশন তৈরি করা সম্ভব হয় যা ডেটার কার্যকরী এবং দ্রুত লোডিং প্রদান করে।


### ১. Apollo Client: পরিচিতি

Apollo Client একটি শক্তিশালী JavaScript লাইব্রেরি যা React, Angular, Vue.js সহ অন্যান্য ফ্রেমওয়ার্কে GraphQL কোয়েরি করার জন্য ব্যবহৃত হয়। এটি মূলত ক্লায়েন্ট-সাইডের ডেটা ম্যানেজমেন্টের জন্য ব্যবহৃত হয় এবং এটি ডেটা ফেচিং, ক্যাশিং, রিয়েলটাইম আপডেটের মতো বৈশিষ্ট্য সরবরাহ করে।

#### Apollo Client এর প্রধান বৈশিষ্ট্য:

1. GraphQL কোয়েরি: Apollo Client আপনাকে GraphQL কোয়েরি এবং মিউটেশন পাঠানোর মাধ্যমে সিস্টেম থেকে ডেটা ফেচ করতে সাহায্য করে।
2. ক্যাশিং: Apollo Client ক্যাশিংয়ের মাধ্যমে একই ডেটা বারবার ফেচ না করার জন্য ডেটাকে ক্যাশে সংরক্ষণ করে, যার ফলে অ্যাপ্লিকেশনের পারফরম্যান্স উন্নত হয়।
3. রিয়েলটাইম ডেটা: Apollo Client সাবস্ক্রিপশনস ব্যবহারের মাধ্যমে রিয়েলটাইম ডেটা ফেচিং এবং ডেটার পরিবর্তন পর্যবেক্ষণ করতে সহায়ক।
4. এভ্যালুয়েশন: এটি ক্লায়েন্টের অ্যাপ্লিকেশন স্টেট এবং ইউজার ইন্টারফেসের মধ্যে সমন্বয় করার জন্য কাজ করে।

#### Apollo Client ব্যবহার করার ধাপ:

1. ইনস্টলেশন:
   ```bash
   npm install @apollo/client graphql
   ```

2. Apollo Client সেটআপ:
   Apollo Client ব্যবহার করার জন্য প্রথমে ApolloClient ইনস্ট্যান্স তৈরি করতে হয় এবং এটি একটি `HttpLink` এর মাধ্যমে সার্ভারকে সংযুক্ত করে।
   ```javascript
   import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

   const client = new ApolloClient({
     link: new HttpLink({ uri: 'https://your-graphql-endpoint' }),
     cache: new InMemoryCache()
   });
   ```

3. কোয়েরি চালানো:
   Apollo Client এর `useQuery` হুক ব্যবহার করে ডেটা ফেচ করা যায়।
   ```javascript
   import { useQuery, gql } from '@apollo/client';

   const GET_USERS = gql`
     query {
       users {
         id
         name
       }
     }
   `;

   function Users() {
     const { loading, error, data } = useQuery(GET_USERS);

     if (loading) return <p>Loading...</p>;
     if (error) return <p>Error: {error.message}</p>;

     return (
       <div>
         {data.users.map(user => (
           <div key={user.id}>{user.name}</div>
         ))}
       </div>
     );
   }
   ```


### ২. Apollo Server: পরিচিতি

Apollo Server হল একটি ওপেন সোর্স লাইব্রেরি যা Node.js এর সাথে কাজ করে এবং এটি সার্ভার সাইডে GraphQL API তৈরি করতে ব্যবহৃত হয়। Apollo Server GraphQL স্কিমা, রিজলভার এবং অন্যান্য ফিচার দ্বারা সার্ভারে ডেটা প্রসেস করে এবং ক্লায়েন্টদের কাছে এই ডেটা পাঠায়।

#### Apollo Server এর প্রধান বৈশিষ্ট্য:

1. GraphQL স্কিমা: Apollo Server স্কিমা ব্যবহার করে ডেটা মডেলিং এবং গ্রাফ তৈরি করে। স্কিমা হল সেই কাঠামো যা কীভাবে ডেটা ক্লায়েন্টদের কাছে পাওয়া যাবে তা সংজ্ঞায়িত করে।
2. রিজলভার: এটি একটি ফাংশন যা কুইরি বা মিউটেশনের জন্য বাস্তব ডেটা প্রদান করে। যখন ক্লায়েন্ট কোনো কোয়েরি পাঠায়, তখন রিজলভার সেই কুইরির জন্য ডেটা ফেরত দেয়।
3. বিভিন্ন ডেটা সোর্স থেকে ডেটা রিট্রিভাল: Apollo Server বিভিন্ন ডেটা সোর্স যেমন REST API, ডেটাবেস থেকে ডেটা সংগ্রহ করতে পারে।
4. এসওএম (Security, Optimization, and Middleware): Apollo Server অনেক ধরনের মিডলওয়্যার সমর্থন করে যেমন: অথেন্টিকেশন, অথরাইজেশন, লগিং ইত্যাদি।

#### Apollo Server ব্যবহার করার ধাপ:

1. ইনস্টলেশন:
   ```bash
   npm install apollo-server graphql
   ```

2. Apollo Server সেটআপ:
   Apollo Server সেটআপ করতে প্রথমে একটি স্কিমা এবং রিজলভার তৈরি করতে হয়। এরপর সেই স্কিমা এবং রিজলভার ব্যবহার করে একটি Apollo Server ইনস্ট্যান্স তৈরি করা হয়।
   ```javascript
   const { ApolloServer, gql } = require('apollo-server');

   const typeDefs = gql`
     type Query {
       hello: String
     }
   `;

   const resolvers = {
     Query: {
       hello: () => 'Hello, world!',
     },
   };

   const server = new ApolloServer({ typeDefs, resolvers });

   server.listen().then(({ url }) => {
     console.log(`Server ready at ${url}`);
   });
   ```

3. কুইরি প্রক্রিয়া:
   ক্লায়েন্ট যখন সার্ভারে একটি কুইরি পাঠায়, তখন সেই কুইরির জন্য রিজলভার রান করা হয় এবং সেটির রেসপন্স ফেরত আসে।
   ```graphql
   query {
     hello
   }
   ```

4. বিভিন্ন সোর্স থেকে ডেটা ফেচ করা:
   Apollo Server বিভিন্ন সোর্স থেকে ডেটা এনে ক্লায়েন্টকে প্রদান করতে পারে।
   ```javascript
   const resolvers = {
     Query: {
       books: async () => {
         const books = await getBooksFromAPI();
         return books;
       },
     },
   };
   ```


### ৩. Apollo Client এবং Apollo Server এর মধ্যে পার্থক্য

1. কার্যকারিতা: 
   - Apollo Client হল ক্লায়েন্ট-সাইডের একটি লাইব্রেরি যা ডেটা ফেচিং এবং ক্যাশিংয়ের জন্য ব্যবহৃত হয়।
   - Apollo Server হল সার্ভার-সাইডের একটি লাইব্রেরি যা GraphQL API তৈরি এবং পরিচালনা করতে ব্যবহৃত হয়।

2. ব্যবহার:
   - Apollo Client ব্যবহারকারী ইন্টারফেস (UI) থেকে ডেটা ফেচ করতে সাহায্য করে এবং রিয়েলটাইম ডেটা আপডেটের জন্য সাবস্ক্রিপশন ব্যবহৃত হয়।
   - Apollo Server সার্ভারে কোয়েরি, মিউটেশন এবং সাবস্ক্রিপশন পরিচালনা করে এবং বিভিন্ন ডেটা সোর্স থেকে ডেটা ফেচ করে।

3. কনফিগারেশন:
   - Apollo Client সাধারণত ক্লায়েন্ট সাইডে একটি HTTP লিঙ্ক তৈরি করে সার্ভার সংযোগ স্থাপন করে।
   - Apollo Server সার্ভার সাইডে GraphQL স্কিমা এবং রিজলভার সেটআপ করে এবং API এন্ডপয়েন্ট প্রদান করে।



Apollo Client এবং Apollo Server দুটি গুরুত্বপূর্ণ টুল যা GraphQL অ্যাপ্লিকেশন তৈরি ও ব্যবস্থাপনা করতে ব্যবহৃত হয়। Apollo Client ক্লায়েন্ট সাইডের ডেটা ফেচিং, ক্যাশিং এবং রিয়েলটাইম ডেটা আপডেটের জন্য ব্যবহৃত হয়, এবং Apollo Server সার্ভার সাইডে GraphQL API তৈরি এবং পরিচালনা করে। একত্রে ব্যবহৃত হলে, এই দুটি টুল একটি সম্পূর্ণ এবং দক্ষ GraphQL একোসিস্টেম তৈরি করতে সাহায্য করে।