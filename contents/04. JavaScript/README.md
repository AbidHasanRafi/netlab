# Chapter 04: JavaScript

**Table of Contents**

- [Basics of JavaScript](#basics-of-javascript)
- [Basic Programming Constructs](#)
- [Logical and Control Structures](#)
- [Functions and Scope](#)
- [Advanced Concepts](#)
- [Practical Programs](#)
- [Objects and Classes](#)
- [Advanced Object Handling](#)
- [Asynchronous Programming and APIs](#)
- [DOM Manipulation](#)
- [Final Concepts](#)

## Basics of JavaScript

জাভাস্ক্রিপ্ট হচ্ছে একটি প্রোগ্রামিং ল্যাঙ্গুয়েজ যেটি ব্যবহার করে ডাইন্যামিক এবং ফাংশনাল ওয়েবসাইট তৈরী করা যায়। জাভাস্ক্রিপ্ট সাধারণত ওয়েব ব্রাউজারে রান করা যায়। যখন কোনো ইউজার ওয়েবসাইট ব্যবহার করবে তখন জাভাস্ক্রিপ্টের মাধ্যমে আমরা কোনো ইউজারের একশনের উপর রেস্পন্স-সহ সেটিকে পরিবর্তনও করতে পারবো।

জাভাস্ক্রিপ্টে কোনো কিছু আউটপুট কিংবা প্রিন্ট করতে `console.log()` ব্যবহার করা হয়। এখানে, কোনো টেক্সট আউটপুট করতে `log()` ফাংশনের মধ্যে `"` `"`(double quotes), `'` `'`(single quotes) বা `` ` `` `` ` `` (template literals) এর মাঝে টেক্সট লিখতে হয়। প্রত্যেক জাভাস্ক্রিপ্ট স্টেটমেন্টকে সাধারণত `;` এর মাধ্যমে শেষ করতে হয় তবে এর কোনো বাধ্যবাধকতা নেই।

```js
console.log("Hello, World! This is Development.js!");
```

ব্রাউজারে `window.alert()` ব্যবহার করে আমরা একটি পপ-আপ দেখাতে পারি।

```js
window.alert("Hello, World! This is Development.js!");
```

জাভাস্ক্রিপ্টকে ব্যাখ্যা করা জন্য এবং এর পঠনযোগ্যতা বৃদ্ধিতে কমেন্ট ব্যবহার করা হয়। একটি সিঙ্গেল লাইন কমেন্ট করতে `//` এবং একাধিক লাইন কমেন্ট করতে `/*` `*/` ব্যবহার করা হয়।

```js
//  সিঙ্গেল লাইন কমেন্ট

/*
    মাল্টি-লাইন কমেন্ট
*/
```

জাভাস্ক্রিপ্টে কোনো ভ্যালু কিংবা এক্সপ্রেশন ধরে রাখতে ভ্যারিয়েবল ব্যবহার করা হয়। ভ্যারিয়েবল ব্যবহার করতে প্রথমে `var`, `let` বা `const` কিওয়ার্ডের পর যেকোনো এপ্রোপ্রিয়েট (কিওয়ার্ড ব্যতিত) নেম ব্যবহার করে এটিকে ডিক্লেয়ার করতে হয়, অতঃপর এসাইনমেন্ট অপারেটর `=` ব্যবহার করে সেখানে ভ্যালু বা এক্সপ্রেশন এসাইন করতে হয়। একই সাথে ডিক্লেয়ার এবং এসাইনমেন্ট করলে সেটিকে ইনিশিয়ালাইজেশন বলা হয়।

```js
let a; // declaration
a = 24; // assignment
let a = 24; // initialization
```

টেক্সটের মাঝে কোনো ভ্যারিয়েবলের প্লেসহোল্ডার করার ক্ষেত্রে `console.log()` এর লগ-ফাংশনের মাঝে অবশ্যই টেমপ্লেট লিটারেলস ব্যবহার করে ভ্যারিয়েবল ইনসার্টের জায়গায় `${}` ব্যবহার করতে হয়।

```js
let year = 2024;
console.log(`The year is ${year}!`);
```

কোনো ভ্যারিয়েবলের ডেটা-টাইপ বের করতে `typeof` কিওয়ার্ড এর সাথে ভ্যারিয়েবলটি প্রিসিড করে ব্যবহার করা যায়।

```js
let n = 24;
let s = "DJs";
let b = true;

console.log(typeof n);
// output: number

console.log(typeof s);
// output: string

console.log(typeof b);
// output: boolean
```

জাভাস্ক্রিপ্টে অ্যারিথমেটিক অপারেশনের জন্য বিভিন্ন অ্যারিথমেটিক অপারেটর (যেমনঃ `+`, `-`, `*`, `/`, `%`, `**` ইত্যাদি) ব্যবহার করা হয়।

```js
let a = 25;
let b = 5;

let summation = a + b;
console.log(`Summation = ${summation}`);

let subtract = a - b;
console.log(`Subtraction = ${subtract}`);

let multiply = a * b;
console.log(`Multiplication = ${multiply}`);

let division = a / b;
console.log(`Division = ${division}`);

let remainder = a % b;
console.log(`Remainder = ${remainder}`);

let exponential = b ** 2;
console.log(`Exponential = ${exponential}`);
```

অনেক সময় একই ভ্যারিয়েবলের উপর কোনো অপারেশন করে সেটি ঐ ভ্যারিয়েবলেই এসাইন করতে হয়। এক্ষেত্রে এমরা অগমেন্টেড এসাইনমেন্ট অপারেটর ব্যবহার করতে পারি।

```js
let a = 5;

// Arithmetic Operation
a = a + 5;
a = a - 5;
a = a * 5;
a = a / 5;

// Arithmetic Operation Using Augmented Assignment Operator
a += 5;
a -= 5;
a *= 5;
a /= 5;
```

ইনক্রিমেন্ট/ডিক্রিমেন্ট করতে আমরা ইনক্রিমেন্ট বা ডিক্রিমেন্ট অপারেটর ব্যবহার করে থাকি। এটি ভ্যারিয়েবলের ভ্যালুকে ১ পরিমাণ ইনক্রিমেন্ট/ডিক্রিমেন্ট করে থাকে।

```js
let a = 5;

a++;
console.log(a);
// output: 6

a--;
console.log(a);
// output: 5
```

একাধিক অপারেটর একই লাইনে ব্যবহার হলে কোনটির অপারেশন প্রাধান্য পাবে সেটি অপারেটর প্রেসিডেন্সের মাধ্যমে বুঝা যায়, নিচে এগুলো দেখানো হলোঃ
১. parenthesis ()
২. exponents
৩. multiplication, division & modulo
৪. addition & subtraction

একই প্রেসিডেন্সি অপারেটর এক লাইনে থাকলে আগে বাম থেকে শুরু করে ডান দিকে অপারেশন এক্সিকিউট হবে।

জাভাস্ক্রিপ্টে সাধারণত দুটি উপায়ে ইউজার ইনপুট নেয়া যায়।

০১. উইন্ডো প্রম্পট ব্যবহার করেঃ

```js
let input;
input = window.prompt("What's your name? ");
window.alert(`Hi, ${input}!`);
```

০২. এইচটিএমএল টেক্সট বক্স ব্যবহার করেঃ

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>User Input Example</title>
  </head>
  <body>
    <label for="userInput">Enter your name: </label>
    <input type="text" id="userInput" placeholder="name..." />
    <button onclick="logInput()">Submit</button>
    <script src="script.js"></script>
  </body>
</html>
```

```js
const input = document.getElementById("userInput").value;
console.log(input);
```

জাভাস্ক্রিপ্টে টাইপ কনভার্সন ব্যবহার করে একটি ভ্যালুর ডেটাটাইপ (`string`, `number`, `boolean`) পরিবর্তন করা যায়। নিউমেরিক স্ট্রিং ভ্যালুকে `Number()` ফাংশনের মাধ্যমে ব্যবহার করে `number` ডেটাটাইপে কনভার্ট করা যায়। একইভাবে, স্ট্রিং এবং বুলিয়ান টাইপে কোনো ভ্যালুকে কনভার্ট করতে `String()` ও `Boolean()` ফাংশন ব্যবহার করা যায়।

```js
let a = "25";
let b = 25;
let c = "exist";

a = Number(a);
b = String(b);
c = Boolean(c);

console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);
```

জাভাস্ক্রিপ্টে `const` কিওয়ার্ড ব্যবহার করেও ভ্যারিয়েবল ডিক্লেয়ার করা যায় কিন্তু এক্ষেত্রে ভ্যারিয়েবলটি এসাইন করার পর পুনরায় পরিবর্তন করা যায় না। `const` কিওয়ার্ড ব্যবহার করার পর পুনরায় ভ্যালু এসাইন করার চেষ্টা করলে TypeError দেখা যায়।
