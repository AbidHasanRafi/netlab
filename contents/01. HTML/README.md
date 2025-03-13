# Chapter 01: HTML
**Table of Contents**
- [Getting Started](#getting-started)
- [Head Elements](#head-elements)
- [Text Basics](#text-basics)
- [List Types](#list-types)
- [Add Links](#add-links)
- [Add Images](#add-images)
- [Semantic Tags](#semantic-tags)
- [Create Tables](#create-tables)
- [Forms and Input](#forms-and-input)

## Getting Started
HTML এর পূর্ণরূপ হচ্ছে HyperText Markup Language, এটি ওয়েবের প্রাথমিক উপাদান যা ওয়েব কন্টেন্টের স্ট্রাকচারকে ডিফাইন করে। "HyperText" দ্বারা এক বা একাধিক ওয়েবসাইটের মধ্যে এক ওয়েবপেজের সাথে আরেক ওয়েবপেজের লিংকগুলোকে বোঝানো হয়ে থাকে।

ওয়েব ব্রাউজারে বিভিন্ন লেখা (Text), ছবি (Photo) বা অন্যান্য কন্টেন্ট দেখানোর জন্য HTML কিছু ট্যাগ(Tag) ব্যবহার করে থাকে। HTML মার্কআপের অন্যতম কিছু এলিমেন্ট হলোঃ `<head>`, `<title>`, `<body>`, `<header>`, `<footer>`, `<article>`, `<section>`, `<p>`, `<div>`, `<span>`, `<img>`, `<aside>`, `<audio>`, `<canvas>`, `<datalist>`, `<details>`, `<embed>`, `<nav>`, `<output>`, `<progress>`, `<video>`, `<ul>`, `<ol>`, `<li>` ইত্যাদি। HTML এলিমেন্টকে ওয়েবের অন্যান্য কন্টেন্ট থেকে আলাদা রাখার জন্য "ট্যাগ" ব্যবহার করা হয় যা "<" ও ">" দ্বারা আবদ্ধ থাকে। এলিমেন্টগুলো কেস সেন্সিটিভ নয় অর্থাৎ এগুলোকে বড় হাতের কিংবা ছোট হাতের অক্ষর দিয়ে লেখা যায়।

HTML কোড সাধারণত HTML ফাইলে লেখা হয় যার এক্সটেনশন হিসেবে `.html` ব্যবহার করা হয়। নিচে `index.html` নামের ফাইলে বেসিক HTML-এর গঠন দেখানো হলোঃ
```html
<html>

</html>
```
এখানে আমরা `<html>` ও `</html>` এলিমেন্ট ব্যবহার করেছি যা দ্বারা পর্যায়ক্রমে ওপেনিং ও ক্লোজিং ট্যাগ বুঝায়। বেশকিছু সেলফ ক্লোজিং ট্যাগ-বাদে প্রায় প্রত্যেক HTML ট্যাগের জন্য ওপেনিং ও ক্লোজিং ট্যাগ দিয়ে কতিপয় ট্যাগের শুরু ও শেষ বুঝানো হয়ে থাকে। ট্যাগ শুরু করার ক্ষেত্রে `<>` এবং শেষ করার ক্ষেত্রে `</>` ব্যবহার করা হয়। HTML পেজের যাবতীয় কন্টেন্ট `<html>` ও `</html>` ট্যাগের মাঝে লেখা। এর দুটি বিশেষ অংশ রয়েছে যার মধ্যে একটি অংশ হচ্ছে `<head>` যা ওয়েবপেজে দেখানো হয়না কিন্তু পেজের বিভিন্ন ইনফরমেশন ও মেটাডাটা (metadata) ডিফাইন করতে এর মধ্যে বিভিন্ন ট্যাগ ব্যবহার করা হয় এবং অপর অংশটি হচ্ছে `<body>` এলিমেন্ট যা ওয়েবপেজে দেখানো হয়। এছাড়া HTML ফাইলের যেকোনো অংশে নোট নেয়ার জন্য `<!--` ও `-->` এর মাঝে কমেন্ট লেখা যায় যা HTML ইগনোর করে এবং ওয়েবপেজে দৃশ্যমান হয়না।
```html
<html>
    <head>
        <!-- এই অংশটি ওয়েবপেজে দৃশ্যমান হয় না -->
    </head>
    <body>
        <!-- এই অংশটি ওয়েবপেজে দৃশ্যমান হয় -->
    </body>
</html>
```
HTML-এর `<head>` এর মধ্যে কতিপয় ওয়েবপেজের টাইটেল ডিফাইন করার জন্য `<title>` এলিমেন্ট ও ক্যারেক্টার এনকোডিং এর জন্য `<meta>` এলিমেন্ট ব্যবহার করতে হয়। পেজের কন্টেন্ট ল্যাঙ্গুয়েজ ডিফাইন করতে `<html>` এলিমেন্টের মাঝে `lang` এট্রিবিউট ডিফাইন করতে হয়। এট্রিবিউট সাধারণত ওপেনিং ট্যাগ বা সেলফ কোজিং ট্যাগে ডিফাইন করা হয়। পরিশেষে, একটি এরর-মুক্ত HTML ফাইলের স্ট্রাকচার তৈরী করার জন্য HTML ডকুমেন্ট ভার্সন একটি ট্যাগের মাঝে উল্লেখ করতে হয় যা সাধারণত `<html>` এলিমেন্টের উপরে লেখা হয়। নিচে এমন একটি পরিপূর্ণ এরর-মুক্ত HTML ফাইলের স্ট্রাকচার দেখানো হলোঃ
```html
<!DOCTYPE html>
<html lang="en">
    <head>
         <meta charset="UTF-8">
         <title>This is title</title>
    </head>
    <body>
    </body>
</html>
```

## Head Elements
ওয়েবপেজের অথর (author) ও পেজের বিবরণ (description) বর্ননা করার জন্য `<head>` এর মধ্যে `<meta>` এলিমেন্টের মধ্যে `name` ও `content` এট্রিবিউট ব্যবহার যায়।
```html
<!DOCTYPE html>
<html lang="en">
    <head>
         <meta charset="UTF-8">
         <meta name="author" content="Abid Hasan Rafi">
         <meta name="description" content="This is description">
         <title>This is title</title>
    </head>
    <body>
    </body>
</html>
```
এছাড়া পেজের favicon (সাধারণত ব্রাউজারে কতিপয় ওয়েবসাইটের ট্যাবের দেখা যায়) ডিফাইন করার জন্য `<link>` এলিমেন্টের মাঝে `rel` (রিলেশন), `href` (হাইপারটেক্সট-রেফারেন্স) ও `type` এট্রিবিউট ব্যবহার করা হয়। নিচে এগুলোর ব্যবহার দেখানো হলোঃ
```html
<!DOCTYPE html>
<html lang="en">
    <head>
         <meta charset="UTF-8">
         <meta name="author" content="Abid Hasan Rafi">
         <meta name="description" content="This is description">
         <link rel="icon" href="reference-icon.png" type="image/x-icon">
         <title>This is title</title>
    </head>
    <body>
    </body>
</html>
```
ওয়েবপেজের স্টাইলের জন্য কোনো এক্সটার্নাল `CSS` ফাইল, ফন্ট অথবা বিভিন্ন ফাইল যুক্ত করার ক্ষেত্রেও `<link>` এলিমেন্ট ব্যবহার করা হয়।

## Text Basics
HTML ফাইলে অনেক টেক্সট কন্টেন্ট থাকে, যেখানে প্রায়শই বিভিন্ন ধরনের হেডিং ব্যবহার করতে হয়। এজন্য HTML-এ ছয় ধরনের হেডিং (`<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`) এলিমেন্ট ডিফাইন করা আছে যা পর্যায়ক্রমে বড় থেকে ছোট। যেমনঃ 
```html
<!DOCTYPE html>
<html lang="en">
    <head>
         <meta charset="UTF-8">
         <meta name="author" content="Abid Hasan Rafi">
         <meta name="description" content="This is description">
         <link rel="icon" href="reference-icon.png" type="image/x-icon">
         <title>This is title</title>
    </head>
    <body>
        <h1>This is heading 1</h1>
        <h2>This is heading 2</h2>
        <h3>This is heading 3</h3>
        <h4>This is heading 4</h4>
        <h5>This is heading 5</h5>
        <h6>This is heading 6</h6>
    </body>
</html>
```
HTML ফাইলে বর্ণনামূলক টেক্সট ডিফাইন করার জন্য `<p>` (প্যারাগ্রাফ) এলিমেন্ট ব্যবহার করা হয়। যেমনঃ
```html
<!DOCTYPE html>
<html lang="en">
    <head>
         <meta charset="UTF-8">
         <meta name="author" content="Abid Hasan Rafi">
         <meta name="description" content="This is description">
         <link rel="icon" href="reference-icon.png" type="image/x-icon">
         <title>This is title</title>
    </head>
    <body>
        <h1>This is the heading</h1>
        <p>This the description</p>
    </body>
</html>
```
হেডিং-এর নিচে অনুভূমিক রেখা ডিফাইন করতে `<hr>` (হরিজন্টাল রুল) এলিমেন্ট ব্যবহার করা যায়। এখানে কোনো ক্লোজিং ট্যাগের প্রয়োজন পড়ে না।
```html
<!DOCTYPE html>
<html lang="en">
    <head>
         <meta charset="UTF-8">
         <meta name="author" content="Abid Hasan Rafi">
         <meta name="description" content="This is description">
         <link rel="icon" href="reference-icon.png" type="image/x-icon">
         <title>This is title</title>
    </head>
    <body>
        <h1>This is the heading</h1>
        <hr>
        <p>This the description</p>
    </body>
</html>
```
HTML ফাইলে টেক্সট কন্টেন্টে একাধিক স্পেস (white space) দিলেও সেটি নগন্য (white space collapsing) হিসেবে বিবেচিত হয় এবং কিছু IDE-এর ক্ষেত্রে এটি রিফর্মেট হয়ে শুধুমাত্র একটি স্পেস ডিফাইন করে। এখানে কন্টেন্টের মাঝে যদি লাইন ব্রেক করার প্রয়োজন পড়ে সেক্ষেত্রে `<br>` (ব্রেক) এলিমেন্ট ব্যবহার করতে হয়। এখানে কোনো ক্লোজিং ট্যাগের প্রয়োজন পড়ে না।
```html
<!DOCTYPE html>
<html lang="en">
    <head>
         <meta charset="UTF-8">
         <meta name="author" content="Abid Hasan Rafi">
         <meta name="description" content="This is description">
         <link rel="icon" href="reference-icon.png" type="image/x-icon">
         <title>This is title</title>
    </head>
    <body>
        <h1>This is the heading</h1>
        <hr>
        <p>
            This is a line...
            <br>
            This is another line...
        </p>
    </body>
</html>
```
ব্লক (block) টাইপ এলিমেন্ট যেমনঃ `<h1>`, `<p>` ইত্যাদি স্বয়ংক্রিয়ভাবে আলাদা লাইনে শুরু হয় এবং ইনলাইন (inline) এলিমেন্ট যেমনঃ `<em>` (ইম্ফেসিস), `<strong>` ইত্যাদি স্বয়ংক্রিয়ভাবে একই লাইনে শুরু হয়ে থাকে। এগুলো কন্টেন্টের মাঝে কোনো অতিরিক্ত লাইন যুক্ত করেনা এবং সাধারণত কন্টেন্টের সিমেনটিক মিনিং প্রকাশের জন্য ব্যবহার করা হয়। যেমনঃ
```html
<!DOCTYPE html>
<html lang="en">
    <head>
         <meta charset="UTF-8">
         <meta name="author" content="Abid Hasan Rafi">
         <meta name="description" content="This is description">
         <link rel="icon" href="reference-icon.png" type="image/x-icon">
         <title>This is title</title>
    </head>
    <body>
        <h1>This is the heading</h1>
        <hr>
        <p>
            This is an <em>important</em> line! It is <strong>super</strong> important!
        </p>
    </body>
</html>
```
HTML ফাইলে অনেক সময় কিছু entity ব্যবহার করা হয়ে থাকে যেমনঃ যদি কন্টেন্টের মাঝে অতিরিক্ত স্পেসের প্রয়োজন হয় সেক্ষেত্রে `&nbsp;` entity ব্যবহার করা হয়। যেমনঃ
```html
<!DOCTYPE html>
<html lang="en">
    <head>
         <meta charset="UTF-8">
         <meta name="author" content="Abid Hasan Rafi">
         <meta name="description" content="This is description">
         <link rel="icon" href="reference-icon.png" type="image/x-icon">
         <title>This is title</title>
    </head>
    <body>
        <h1>This is the heading</h1>
        <hr>
        <p>
            This is an <em>important</em> line!
            <br>
            &nbsp;&nbsp;&nbsp;...It is <strong>super</strong> important!
        </p>
    </body>
</html>
```
এছাড়াও আমরা copyright চিহ্ন, less than চিহ্ন ও greater than চিহ্নের জন্য পর্যায়ক্রমে `&copy;`, `&lt;` ও `&gt;` entity ব্যবহার করতে পারি।
```html
<!DOCTYPE html>
<html lang="en">
    <head>
         <meta charset="UTF-8">
         <meta name="author" content="Abid Hasan Rafi">
         <meta name="description" content="This is description">
         <link rel="icon" href="reference-icon.png" type="image/x-icon">
         <title>This is title</title>
    </head>
    <body>
        <h1>This is the heading</h1>
        <hr>
        <p>
            five is graeter than four (5 &gt; 4)
            <br>
            five is less than six (5 &gt; 6)
            <br>
            &copy; All rights reserved.
        </p>
    </body>
</html>
```
HTML ফাইলে মাঝে মাঝে অনেক বিররণীতে শব্দের abbreviation (সংক্ষিপ্ত রূপ) ব্যবহার হয়ে থাকে যেখানে সিমেনটিক মিনিং এর জন্য `<abbr>` ইনলাইন এলিমেন্ট `title` এট্রিবিউট-সহ ব্যবহার করা যায়। ব্রাউজারে উক্ত abbreviation এর উপর মাউস কার্সার নিয়ে গেলে `title` এর টেক্সটগুলো টুলটিপ হিসেবে দেখা যায়।
```html
<!DOCTYPE html>
<html lang="en">
    <head>
         <meta charset="UTF-8">
         <meta name="author" content="Abid Hasan Rafi">
         <meta name="description" content="This is description">
         <link rel="icon" href="reference-icon.png" type="image/x-icon">
         <title>This is title</title>
    </head>
    <body>
        <h1>This is the heading</h1>
        <hr>
        <p>
            <abbr title="HyperText Markup Language">HTML</abbr> is the building block of a webpage.
        </p>
    </body>
</html>
```
বিররণীতে ঠিকানা যুক্ত করা থাকলে সিমেনটিক মিনিং এর জন্য `<address>` এলিমেন্ট ব্যবহার করা যায়।
```html
<!DOCTYPE html>
<html lang="en">
    <head>
         <meta charset="UTF-8">
         <meta name="author" content="Abid Hasan Rafi">
         <meta name="description" content="This is description">
         <link rel="icon" href="reference-icon.png" type="image/x-icon">
         <title>This is title</title>
    </head>
    <body>
        <h1>This is the heading</h1>
        <hr>
        <p>
            <address>
                Home no: 5/block-A <br>
                Mohimaganj Road <br>
                Gobindaganj, Gaibandha.
            <address>
        </p>
    </body>
</html>
```

## List Types
HTML-এর এই সেকশনে তিন ধরনের লিস্ট নিয়ে আলোচনা করা হবেঃ ordered list, unordered list, এবং description list। প্রত্যেক লিস্টের ভিতরে বিভিন্ন লিস্ট উপাদান থাকে, সেই উপাদান গুলোকে `<li>` (লিস্ট আইটেম) এলিমেন্টের ভিতরে লেখা হয়। লিস্টের আইটেমগুলোকে যদি অর্ডার বা ক্রমানুযায়ী সাজাতে হয় তখন সাধারণত `<ol>` (অর্ডারড লিস্ট) এলিমেন্ট ব্যবহার করতে হয়। এই `<ol>` এলিমেন্টের ভিতরে লিস্ট আইটেমগুলী ডিফাইন করতে `<li>` এলিমেন্ট ট্যাগ ব্যবহার করা হয়ে থাকে।
```html
<!DOCTYPE html>
<html lang="en">
    <head>
         <meta charset="UTF-8">
         <meta name="author" content="Abid Hasan Rafi">
         <meta name="description" content="This is description">
         <link rel="icon" href="reference-icon.png" type="image/x-icon">
         <title>This is title</title>
    </head>
    <body>
        <p>This is my list:</p>
        <ol>
            <li>Item 01</li>
            <li>Item 02</li>
            <li>Item 03</li>
        </ol>
    </body>
</html>
```
অর্ডার বা ক্রমানুযায়ী সাজাতে না হলে সাধারণত `<ul>` (আন-অর্ডারড লিস্ট) এলিমেন্ট ব্যবহার করতে হয়। এলিমেন্টের ভিতরে লিস্ট আইটেমগুলী ডিফাইন করতে `<li>` এলিমেন্ট ট্যাগ ব্যবহার করা হয়ে থাকে।
```html
<!DOCTYPE html>
<html lang="en">
    <head>
         <meta charset="UTF-8">
         <meta name="author" content="Abid Hasan Rafi">
         <meta name="description" content="This is description">
         <link rel="icon" href="reference-icon.png" type="image/x-icon">
         <title>This is title</title>
    </head>
    <body>
        <p>This is my list:</p>
        <ul>
            <li>Item 01</li>
            <li>Item 02</li>
            <li>Item 03</li>
        </ul>
    </body>
</html>
```
HTML ফাইলে বর্ণনামূলক লিস্ট তৈরী করতে `<dl>` (ডেসক্রিপশন লিস্ট) এলিমেন্ট ব্যবহার করা হয়। তবে এখানে লিস্টের উপাদান ডিফাইন করতে `<dt>` (ডেসক্রিপশন টার্ম) এলিমেন্ট ও  `<dd>` (ডেসক্রিপশন ডিটেইল) এলিমেন্ট ব্যবহার করা হয়ে থাকে।
```html
<!DOCTYPE html>
<html lang="en">
    <head>
         <meta charset="UTF-8">
         <meta name="author" content="Abid Hasan Rafi">
         <meta name="description" content="This is description">
         <link rel="icon" href="reference-icon.png" type="image/x-icon">
         <title>This is title</title>
    </head>
    <body>
        <p>This is my list:</p>
        <dl>
            <dt>Description Term 1</dt>
            <dd>This is the description detail of the first term.</dd>

            <dt>Description Term 2</dt>
            <dd>This is the description detail of the second term.</dd>
        </dl>
    </body>
</html>
```

## Add Links
ওয়েবসাইটে একটি ওয়েবপেজের সাথে অপর কোনো ওয়েবপেজের সংযোগ তৈরী করতে হাইপার-লিংক ব্যবহার করতে হয়। পূর্বের আলোচনায় `<head>` এলিমেন্টের ভিতরে ফেভ-আইকন যুক্ত করতে আমরা `<link>` এলিমেন্টের ব্যবহার করেছিলাম, কিন্তু ওয়েবপেজের মধ্যে কানেকশন তৈরী করতে এটি ব্যবহার করা হয় না। এই ধরনের কানেকশনের জন্য `<a>` (অ্যাংকর) এলিমেন্ট ব্যবহার করতে হয়। এখানে যে টেক্সটিতে হাইপার-লিংক যুক্ত করা হবে সেটি `<a>` ও `</a>` ট্যাগের মাঝে লিখতে হয় এবং রেফারেন্স লিংক যুক্ত করার জন্য `<a>` এলিমেন্টের ওপেনিং ট্যাগের মধ্যে `href` এট্রিবিউট ব্যবহার করতে হয়। 
```html
<!DOCTYPE html>
<html lang="en">
    <head>
         <meta charset="UTF-8">
         <meta name="author" content="Abid Hasan Rafi">
         <meta name="description" content="This is description">
         <link rel="icon" href="reference-icon.png" type="image/x-icon">
         <title>This is title</title>
    </head>
    <body>
        <p>Open browser and click to go to Google.</p>
        <br>
        <a href="https://google.com/">click here</a>
    </body>
</html>
```
এই ধরনের হাইপার-লিংক গুলো `absolute` রেফারেন্সকে নির্দেশ করে যেখানে কতিপয় রেফারেন্স করা ওয়েবপেজটি সম্পূর্ণ ভিন্ন একটি সার্ভারে থাকে। যদি রেফারেন্স করা ওয়েব এলিমেন্ট একই সার্ভারে থাকে সেক্ষেত্রে `<a>` এলিমেন্ট `relative` রেফারেন্সকে নির্দেশ করে থাকে। যদি `about.html` নামে একটি HTML ফাইল একই ডাইরেক্টরি বা সার্ভারে থাকে সেক্ষেত্রে এটিকে `<a>` এলিমেন্ট ব্যবহার করে `index.html` ফাইলে রেফারেন্স করা যাবে।
```html
<!DOCTYPE html>
<html lang="en">
    <head>
         <meta charset="UTF-8">
         <meta name="author" content="Abid Hasan Rafi">
         <meta name="description" content="This is description">
         <link rel="icon" href="reference-icon.png" type="image/x-icon">
         <title>This is title</title>
    </head>
    <body>
        <p>Open browser and click to open about me.</p>
        <br>
        <a href="/about.html">click here</a>
    </body>
</html>
```
একই ওয়েবপেজের এক অংশ থেকে অন্য অংশকে রেফারেন্স করতেও `<a>` এলিমেন্ট ব্যবহার করা যায়। এ ধরনের রেফারেন্সকে `internal` রেফারেন্স বলা হয়। ওয়েবপেজের কন্টেন্টগুলোকে বিভিন্ন সেকশনে সাজানো যায়, যার সিমেনটিক অর্থ প্রকাশে `<section>` এলিমেন্ট ব্যবহার করা হয়। এখানে `<section>` এলিমেন্টের ইউনিক পরিচয় প্রকাশে `id` এট্রিবিউট ব্যবহার করা হয়ে থাকে। এই `id` এট্রিবিউটের ভ্যালুকে `<a>` এলিমেন্টের `href` এট্রিবিউট রেফারেন্স হিসেবে ব্যবহার করে হাইপার-লিংক তৈরী করতে পারে। রেফারেন্স করার সময় `id` এট্রিবিউটের ভ্যালুর সামনে `#` (হ্যাশ-ট্যাগ) ব্যবহার করতে হয়। HTML ফাইলে কনভেনশনালি নেভিগেশন অংশ ব্যবহারের ক্ষেত্রে সিমেনটিক অর্থ প্রকাশের জন্য `nav` এলিমেন্ট ব্যবহার করা হয়।
```html
<!DOCTYPE html>
<html lang="en">
    <head>
         <meta charset="UTF-8">
         <meta name="author" content="Abid Hasan Rafi">
         <meta name="description" content="This is description">
         <link rel="icon" href="reference-icon.png" type="image/x-icon">
         <title>This is title</title>
    </head>
    <body>
        <nav>
            <a href="#section-01">go to section 01</a><br>
            <a href="#section-02">go to section 02</a><br>
            <a href="#section-03">go to section 03</a><br>
        </nav>
        <br>
        <section id="section-01">
            <h3>This is section 01</h3>
            <p>These are the contents of section 01</p>
        </section>
        <hr>
        <section id="section-02">
            <h3>This is section 02</h3>
            <p>These are the contents of section 02</p>
        </section>
        <hr>
        <section id="section-03">
            <h3>This is section 03</h3>
            <p>These are the contents of section 03</p>
        </section>
    </body>
</html>
```
ডাউনলোড অপারেশন যুক্ত করার ক্ষেত্রেও আমরা `<a>` এলিমেন্ট ব্যবহার করতে পারি, এক্ষেত্রে `<a>` এলিমেন্টের ওপেনিং ট্যাগের মধ্যে `download` এট্রিবিউট যুক্ত করতে হয়। একই ডাইরেক্টরি বা সার্ভার থেকে `photo.png` ফাইল ডাউনলোড করতে গেলে নিম্নের উদাহরণটি ব্যবহার করা যেতে পারেঃ
```html
<!DOCTYPE html>
<html lang="en">
    <head>
         <meta charset="UTF-8">
         <meta name="author" content="Abid Hasan Rafi">
         <meta name="description" content="This is description">
         <link rel="icon" href="reference-icon.png" type="image/x-icon">
         <title>This is title</title>
    </head>
    <body>
        <a href="/photo.png" download>Download Photo</a>
    </body>
</html>
```
হাইপার-লিংক ব্যবহার করে ইমেইল এড্রেস এবং মোবাইল/টেলিফোন নাম্বার এক্সেস করার ক্ষেত্রে `<a>` এলিমেন্টের `href` এট্রিবিউটের মধ্যে যথাক্রমে ইমেইল এড্রেসের সামনে `mailto:` এবং মোবাইল/টেলিফোন নাম্বারের সামনে `tel:` যুক্ত করতে হয়।
```html
<!DOCTYPE html>
<html lang="en">
    <head>
         <meta charset="UTF-8">
         <meta name="author" content="Abid Hasan Rafi">
         <meta name="description" content="This is description">
         <link rel="icon" href="reference-icon.png" type="image/x-icon">
         <title>This is title</title>
    </head>
    <body>
        <a href="mailto:user-name@gmail.com">Contact Me</a>
        <br>
        <a href="tel:+8801510-000000">Call Me</a>
    </body>
</html>
```
কোনো `absolute` রেফারেন্স করা ওয়েবপেজকে ব্রাউজারে নতুন ট্যাবে ওপেন করার ক্ষেত্রে `target` এট্রিবিউটের ভ্যালু `_blank` ব্যবহার করতে হয়।
```html
<!DOCTYPE html>
<html lang="en">
    <head>
         <meta charset="UTF-8">
         <meta name="author" content="Abid Hasan Rafi">
         <meta name="description" content="This is description">
         <link rel="icon" href="reference-icon.png" type="image/x-icon">
         <title>This is title</title>
    </head>
    <body>
        <p>Open Google</p>
        <br>
        <a href="https://google.com/" target="_blank">Click Here</a>
    </body>
</html>
```
এছাড়া মূল ওয়েবপেজে ফিরে যেতে বা ব্রাউজারে লোড করতে `<a>` এলিমেন্টের `href` এট্রিবিউটের মধ্যে `/` ভ্যালু ব্যবহার করা হয়।
```html
<!DOCTYPE html>
<html lang="en">
    <head>
         <meta charset="UTF-8">
         <meta name="author" content="Abid Hasan Rafi">
         <meta name="description" content="This is description">
         <link rel="icon" href="reference-icon.png" type="image/x-icon">
         <title>This is title</title>
    </head>
    <body>
        <p>Go to Home</p>
        <br>
        <a href="/">Click Here</a>
    </body>
</html>
```
## Add Images
HTML ফাইল টেক্সট কন্টেন্টের পাশাপাশি মাল্টিমিডিয়া কন্টেন্ট প্রেসেস করে ওয়েবসাইটের ওয়েবপেজে ডিফাইন করে এবং এই ধরনের কন্টেন্টের মধ্যে অন্যতম একটি বড় অংশজুড়ে আছে ইমেজ কন্টেন্ট। HTML-এ ইমেজ যুক্ত করার জন্য `<img>` এলিমেন্ট ব্যবহার করা হয়, যার দুটি ইনিশিয়াল এট্রিবিউট হচ্ছে `src` ও `alt`। `src` এট্রিবিউট ইমেজটির রেফারেন্স (absolute reference বা relative reference) ডিফাইন করতে ব্যবহৃত হয়, স্ক্রীনরিডারের জন্য বা কোনো কারনে ইমেজটি ওয়েবপেজে প্রদর্শিত না হলে তার অল্টারনেটিভ হিসেবে একটি টেক্সট দেখানো হয় যা `alt` এট্রিবিউটে ডিফাইন করা হয়। `<img>` এলিমেন্টের কোনো ক্লোজিং ট্যাগ নেই অর্থাৎ এটি একটি সেলফ ক্লোজিং এলিমেন্ট।
```html
<!DOCTYPE html>
<html lang="en">
    <head>
         <meta charset="UTF-8">
         <meta name="author" content="Abid Hasan Rafi">
         <meta name="description" content="This is description">
         <link rel="icon" href="reference-icon.png" type="image/x-icon">
         <title>This is title</title>
    </head>
    <body>
        <img src="/image.png" alt="This is an image">
    </body>
</html>
```
`<img>` এলিমেন্টের মধ্যে টাইটেল এট্রিবিউটও ব্যবহার করা যায় যেখানে ডিফাইন করা টেক্সটটি ছবির উপর মাউস কার্সার নিয়ে গেলে টুলটিপ আকারে দেখা যায়।
```html
<!DOCTYPE html>
<html lang="en">
    <head>
         <meta charset="UTF-8">
         <meta name="author" content="Abid Hasan Rafi">
         <meta name="description" content="This is description">
         <link rel="icon" href="reference-icon.png" type="image/x-icon">
         <title>This is title</title>
    </head>
    <body>
        <img src="/image.png" alt="This is an image" title="This is a great image!">
    </body>
</html>
```
HTML ওয়েবপেজ লোডিং-এর সময় `cumulative layout shift` এর জন্য `<img>` এলিমেন্টে ব্যবহৃত দুটি এট্রিবিউট হচ্ছে `height` এবং `width` যা ইমেজের দৈর্ঘ্য ও প্রস্থের আকৃতি ডিফাইন করতে ব্যবহৃত হয়।
```html
<!DOCTYPE html>
<html lang="en">
    <head>
         <meta charset="UTF-8">
         <meta name="author" content="Abid Hasan Rafi">
         <meta name="description" content="This is description">
         <link rel="icon" href="reference-icon.png" type="image/x-icon">
         <title>This is title</title>
    </head>
    <body>
        <img src="/image.png" alt="This is an image" title="This is a great image!" width="300" height="400">
    </body>
</html>
```
ওয়েবপেজে ইমেজ লোডিং-এর স্বতস্ফুর্ততার জন্য `<img>` এলিমেন্টে `loading` এট্রিবিউট ব্যবহার করা যায়, প্রাথমিক অবস্থায় এট্রিবিউটটি ডিফাইন না করলেও `eager` ভ্যালু স্টেটে থাকে, তবে এর আরেকটি জনপ্রিয় ভ্যালু হচ্ছে `lazy`।
```html
<!DOCTYPE html>
<html lang="en">
    <head>
         <meta charset="UTF-8">
         <meta name="author" content="Abid Hasan Rafi">
         <meta name="description" content="This is description">
         <link rel="icon" href="reference-icon.png" type="image/x-icon">
         <title>This is title</title>
    </head>
    <body>
        <img src="/image.png" alt="This is an image" title="This is a great image!" width="300" height="400" loading="lazy">
    </body>
</html>
```
ইমেজ ইমপ্লিমেন্টেশন আরো স্ট্যান্ডার্ড করার জন্য `<img>` এলিমেন্টকে `<figure>` এলিমেন্টের ভিতরে রাখা যায়, এবং ইমেজের ক্যাপশন যুক্ত করার জন্য `<figcaption>` এলিমেন্ট ব্যবহার করা যায়।
```html
<!DOCTYPE html>
<html lang="en">
    <head>
         <meta charset="UTF-8">
         <meta name="author" content="Abid Hasan Rafi">
         <meta name="description" content="This is description">
         <link rel="icon" href="reference-icon.png" type="image/x-icon">
         <title>This is title</title>
    </head>
    <body>
        <figure>
            <img src="/image.png" alt="This is an image" title="This is a great image!" width="300" height="400" loading="lazy">
            <figcaption>My Image</figcaption>
        </figure>
    </body>
</html>
```
ইমেজ ছাড়াও অন্যান্য উপাদানের জন্য `<figure>` এলিমেন্ট ব্যবহার হয়ে থাকে। কোনো কম্পিউটার কোড কন্টেন্ট দেখানোর জন্যে `<figure>` এলিমেন্টের ভিতরে আমরা `<code>` এলিমেন্ট ব্যবহার করে সেটি ব্রাউজারে দেখাতে পারি।
```html
<!DOCTYPE html>
<html lang="en">
    <head>
         <meta charset="UTF-8">
         <meta name="author" content="Abid Hasan Rafi">
         <meta name="description" content="This is description">
         <link rel="icon" href="reference-icon.png" type="image/x-icon">
         <title>This is title</title>
    </head>
    <body>
        <figure>
            <figcaption>A sample of html code:</figcaption>
            <code>
                &lt;h1&gt; This is a heading &lt;/h1&gt;
            </code>
        </figure>
    </body>
</html>
```
## Semantic Tags
ডকুমেন্টস অর্গানাইজড রাখা অনেক গুরুত্বপূর্ণ, এবং HTML ডকুমেন্টসও এর ব্যতিক্রম নয়। এই সেকশনে আমরা সিমেনটিক লেআউট ব্যবহার করে HTML ডকুমেন্ট অর্গানাইগ করা সম্পর্কে জানতে পারবো। HTML ফাইলের `<body>` এলিমেন্টের ভিতরে অংশকে তিনটি বিশেষ ভাগে চিন্তা করা যায়, এগুলো হলোঃ `<header>`, `<main>` ও `<footer>`। `<header>` এলিমেন্ট দ্বারা ওয়েবপেজের দৃশ্যমান অংশের হেডার (মাথা) অংশটি সিমেনটিক ভাবে ডিফাইন করা যায়। একটি ওয়েবপেজে এক/একাধিক `<header>` এলিমেন্ট থাকতে পারে।
```html
<!DOCTYPE html>
<html lang="en">
    <head>
         <meta charset="UTF-8">
         <meta name="author" content="Abid Hasan Rafi">
         <meta name="description" content="This is description">
         <link rel="icon" href="reference-icon.png" type="image/x-icon">
         <title>This is title</title>
    </head>
    <body>
        <header>
            <h1>This is a heading</h1>
            <nav>
                <a href="#section-01">go to section 01</a><br>
                <a href="#section-02">go to section 02</a><br>
                <a href="#section-03">go to section 03</a><br>
            </nav>
        </header>
    </body>
</html>
```
হেডার এলিমেন্টের পর ওয়েবপেজের মূল অংশকে সিমেনটিকভাবে ডিফাইন করতে `<main>` এলিমেন্ট ব্যবহার করা হয়। তবে খেয়াল রাখতে হবে যে, একটি ওয়েবপেজে শুধুমাত্র একটি `<main>` এলিমেন্ট থাকতে পারে, একই পেজে এটি একাধিক বার ব্যবহার করা যায় না।
```html
<!DOCTYPE html>
<html lang="en">
    <head>
         <meta charset="UTF-8">
         <meta name="author" content="Abid Hasan Rafi">
         <meta name="description" content="This is description">
         <link rel="icon" href="reference-icon.png" type="image/x-icon">
         <title>This is title</title>
    </head>
    <body>
        <header>
            <h1>This is a heading</h1>
            <nav>
                <a href="#section-01">go to section 01</a><br>
                <a href="#section-02">go to section 02</a><br>
                <a href="#section-03">go to section 03</a><br>
            </nav>
        </header>
        <hr>
        <main>
            <section id="section-01">
                <h3>This is section 01</h3>
                <p>These are the contents of section 01</p>
            </section>
            <hr>
            <section id="section-02">
                <h3>This is section 02</h3>
                <p>These are the contents of section 02</p>
            </section>
            <hr>
            <section id="section-03">
                <h3>This is section 03</h3>
                <p>These are the contents of section 03</p>
            </section>
        </main>
    </body>
</html>
```
ওয়েবপেজের মূল অংশকে সিমেনটিকভাবে ডিফাইন করতে `<footer>` এলিমেন্ট ব্যবহার করা হয়। হেডার এলিমেন্টের মতো একটি ওয়েবপেজে এক/একাধিক `<footer>` এলিমেন্ট থাকতে পারে।
```html
<!DOCTYPE html>
<html lang="en">
    <head>
         <meta charset="UTF-8">
         <meta name="author" content="Abid Hasan Rafi">
         <meta name="description" content="This is description">
         <link rel="icon" href="reference-icon.png" type="image/x-icon">
         <title>This is title</title>
    </head>
    <body>
        <header>
            <h1>This is a heading</h1>
            <nav>
                <a href="#section-01">go to section 01</a><br>
                <a href="#section-02">go to section 02</a><br>
                <a href="#section-03">go to section 03</a><br>
            </nav>
        </header>
        <hr>
        <main>
            <section id="section-01">
                <h3>This is section 01</h3>
                <p>These are the contents of section 01</p>
            </section>
            <hr>
            <section id="section-02">
                <h3>This is section 02</h3>
                <p>These are the contents of section 02</p>
            </section>
            <hr>
            <section id="section-03">
                <h3>This is section 03</h3>
                <p>These are the contents of section 03</p>
            </section>
        </main>
        <hr>
        <footer>
            <p>
                &copy; All rights reserved.
            </p>
        </footer>
    </body>
</html>
```
একটি ওয়েবপেজে একাধিক ন্যাভিগেশন (`<nav>`) এলিমেন্ট থাকতে পারে, যেমনঃ `<nav>` এলিমেন্ট হেডার এবং ফুটার উভয় অংশে পেজ নেভিগেটের জন্য থাকতে পারে, আবার মাঝে মাঝে মেইন সেকশনেও মেন্যু আইটেম ডিফাইন করার জন্য এটি ব্যবহৃত হয়। এজন্য `<nav>` এলিমেন্টকে আলাদা করতে `aria-label` এট্রিবিউট ব্যবহার করে ইউনিকভাবে লেবেল করা যায়।
```html
<!DOCTYPE html>
<html lang="en">
    <head>
         <meta charset="UTF-8">
         <meta name="author" content="Abid Hasan Rafi">
         <meta name="description" content="This is description">
         <link rel="icon" href="reference-icon.png" type="image/x-icon">
         <title>This is title</title>
    </head>
    <body>
        <header>
            <h1>This is a heading</h1>
            <nav aria-label="primary-navigation">
                <a href="#section-01">go to section 01</a><br>
                <a href="#section-02">go to section 02</a><br>
                <a href="#section-03">go to section 03</a><br>
            </nav>
        </header>
        <hr>
        <main>
            <section id="section-01">
                <h3>This is section 01</h3>
                <p>These are the contents of section 01</p>
            </section>
            <hr>
            <section id="section-02">
                <h3>This is section 02</h3>
                <p>These are the contents of section 02</p>
            </section>
            <hr>
            <section id="section-03">
                <h3>This is section 03</h3>
                <p>These are the contents of section 03</p>
            </section>
        </main>
        <hr>
        <footer>
            <nav aria-label="secondary-navigation">
                <a href="#section-01">go to section 01</a><br>
                <a href="#section-02">go to section 02</a><br>
                <a href="#section-03">go to section 03</a><br>
            </nav>
            <p>
                &copy; All rights reserved.
            </p>
        </footer>
    </body>
</html>
```
এছাড়া `<nav>` এলিমেন্টে `aria-labelledby` এট্রিবিউট ব্যবহার করে এবং একই ভ্যালু এর একনিষ্ঠ এলিমেন্টের `id` হিসেবে ব্যবহার করে পরষ্পর লিংক করা যায়।
```html
<!DOCTYPE html>
<html lang="en">
    <head>
         <meta charset="UTF-8">
         <meta name="author" content="Abid Hasan Rafi">
         <meta name="description" content="This is description">
         <link rel="icon" href="reference-icon.png" type="image/x-icon">
         <title>This is title</title>
    </head>
    <body>
        <header>
            <h1>This is a heading</h1>
            <nav aria-labelledby="primary-navigation">
                <h2 id="primary-navigation">Primary Navigation</h2>
                <a href="#section-01">go to section 01</a><br>
                <a href="#section-02">go to section 02</a><br>
                <a href="#section-03">go to section 03</a><br>
            </nav>
        </header>
        <hr>
        <main>
            <section id="section-01">
                <h3>This is section 01</h3>
                <p>These are the contents of section 01</p>
            </section>
            <hr>
            <section id="section-02">
                <h3>This is section 02</h3>
                <p>These are the contents of section 02</p>
            </section>
            <hr>
            <section id="section-03">
                <h3>This is section 03</h3>
                <p>These are the contents of section 03</p>
            </section>
        </main>
        <hr>
        <footer>
            <nav aria-labelledby="secondary-navigation">
                <h2 id="secondary-navigation">Secondary Navigation</h2>
                <a href="#section-01">go to section 01</a><br>
                <a href="#section-02">go to section 02</a><br>
                <a href="#section-03">go to section 03</a><br>
            </nav>
            <p>
                &copy; All rights reserved.
            </p>
        </footer>
    </body>
</html>
```
HTML ফাইলে আর্টিকেলের মতো কোনো নির্দিষ্ট টপিক বিশিষ্ট পার্ট থাকলে সিমেনটিক মিনিং ডিফাইন করতে এখানে `<article>` এলিমেন্ট ব্যবহার করা যায়।
```html
<!DOCTYPE html>
<html lang="en">
    <head>
         <meta charset="UTF-8">
         <meta name="author" content="Abid Hasan Rafi">
         <meta name="description" content="This is description">
         <link rel="icon" href="reference-icon.png" type="image/x-icon">
         <title>This is title</title>
    </head>
    <body>
        <header>
            <h1>This is a heading</h1>
            <nav aria-label="primary-navigation">
                <a href="#article-01">go to article 01</a><br>
                <a href="#article-02">go to article 02</a><br>
                <a href="#article-03">go to article 03</a><br>
            </nav>
        </header>
        <hr>
        <main>
            <article id="article-01">
                <h3>This is article 01</h3>
                <p>These are the contents of article 01</p>
                <section>
                    <h3>This is section heading</h3>
                    <figure>
                        <img src="/image.png" alt="This is an image" title="This is a great image!" width="300" height="400" loading="lazy">
                        <figcaption>My Image</figcaption>
                    </figure>
                    <p>This is the section content</p>
                </section>
            </article>
            <hr>
            <article id="article-02">
                <h3>This is article 02</h3>
                <p>These are the contents of article 02</p>
                <section>
                    <h3>This is section heading</h3>
                    <figure>
                        <img src="/image.png" alt="This is an image" title="This is a great image!" width="300" height="400" loading="lazy">
                        <figcaption>My Image</figcaption>
                    </figure>
                    <p>This is the section content</p>
                </section>
            </article>
            <hr>
            <article id="article-03">
                <h3>This is article 03</h3>
                <p>These are the contents of article 03</p>
                <section>
                    <h3>This is section heading</h3>
                    <figure>
                        <img src="/image.png" alt="This is an image" title="This is a great image!" width="300" height="400" loading="lazy">
                        <figcaption>My Image</figcaption>
                    </figure>
                    <p>This is the section content</p>
                </section>
            </article>
        </main>
        <hr>
        <footer>
            <nav aria-label="secondary-navigation">
                <a href="#article-01">go to article 01</a><br>
                <a href="#article-02">go to article 02</a><br>
                <a href="#article-03">go to article 03</a><br>
            </nav>
            <p>
                &copy; All rights reserved.
            </p>
        </footer>
    </body>
</html>
```
HTML ফাইলে সাইডবার-এ (তেমন গুরুত্বপূর্ণ নয় এমন কন্টেন্ট) যদি কোনো কন্টেন্ট রাখতে হয় সেক্ষেত্রে সিমেনটিক ডেফিনিশনের জন্য `<aside>` এলিমেন্ট ব্যবহার করা যায়। এছাড়া কন্টেন্ট বিবরণী বা সারাংশ টাইপ অংশগুলির সিমেনটিক ডেফিনিশনের জন্য `<details>` `<summary>` এলিমেন্ট ব্যবহার করা যায়।
```html
<!DOCTYPE html>
<html lang="en">
    <head>
         <meta charset="UTF-8">
         <meta name="author" content="Abid Hasan Rafi">
         <meta name="description" content="This is description">
         <link rel="icon" href="reference-icon.png" type="image/x-icon">
         <title>This is title</title>
    </head>
    <body>
        <header>
            <h1>This is a heading</h1>
        </header>
        <hr>
        <main>
            <aside>
                <details>
                    <summary>
                        This is the summary
                    </summary>
                    <p>This is the content of the summary.</p>
                </details>
            </aside>
        </main>
        <hr>
        <footer>
            <p>
                &copy; All rights reserved.
            </p>
        </footer>
    </body>
</html>
```
কন্টেন্টের কোথাও হাইলাইট করতে `<mark>` এলিমেন্ট ব্যবহার করা যায় এবং কন্টেন্টে সময় উল্লেখ করা থাকলে সিমেনটিক মিনিং রক্ষার্থে `datetime` এট্রিবিউট-সহ `time` এলিমেন্ট ব্যবহার করা যায়। 
```html
<!DOCTYPE html>
<html lang="en">
    <head>
         <meta charset="UTF-8">
         <meta name="author" content="Abid Hasan Rafi">
         <meta name="description" content="This is description">
         <link rel="icon" href="reference-icon.png" type="image/x-icon">
         <title>This is title</title>
    </head>
    <body>
        <header>
            <h1>This is a heading</h1>
        </header>
        <hr>
        <main>
            <aside>
                <details>
                    <summary>
                        This is the <mark>important</mark> summary
                    </summary>
                    <p>
                        This is the content of the summary. The time is <time datetime="14:00">2 PM</time>. 
                        It's <time datetime="PT2H">2 hours</time> past the middle of the day time.
                    </p>
                </details>
            </aside>
        </main>
        <hr>
        <footer>
            <p>
                &copy; All rights reserved.
            </p>
        </footer>
    </body>
</html>
```
HTML ফাইলে অনেক আগে থেকে `<div>` (block element) ও `<span>` (inline element) এলিমেন্ট ব্যবহার করা হয়ে থাকে, কিন্তু এদের কোনো সিমেনটিক ডেফিনিশন নেই। এজন্য ওয়েবপেজের সিমেনটিক ডেফিনিশন রক্ষার্থে এগুলো ব্যবহার না করাই ভালো।

## Create Tables
HTML ফাইলে অনেক ইনফরমেশন টেবিল আকারে দেখানোর প্রয়োজন পড়ে। একটি টেবিল অনেকগুলো সারি ও কলামের সমষ্টিতে তৈরী করা হয়। ওয়েবপেজে টেবিল তৈরী করতে `<table>` এলিমেন্ট ব্যবহার করা হয়। টেবিল এলিমেন্টের মধ্যে প্রত্যেকটি সারি ডিফাইন করতে `tr` (টেবিল রো) এলিমেন্ট এবং প্রত্যেক সারির মধ্যে ইনফরমেশন রাখতে `td` (টেবিল ডাটা) এলিমেন্ট ব্যবহার করা হয়।
```html
<!DOCTYPE html>
<html lang="en">
    <head>
         <meta charset="UTF-8">
         <meta name="author" content="Abid Hasan Rafi">
         <meta name="description" content="This is description">
         <link rel="icon" href="reference-icon.png" type="image/x-icon">
         <title>This is title</title>
    </head>
    <body>
        <header>
            <h1>This is a heading</h1>
        </header>
        <hr>
        <main>
            <table>
                <tr>
                    <td>Data 01</td>
                    <td>Data 02</td>
                    <td>Data 03</td>
                </tr>
            </table>
        </main>
        <hr>
        <footer>
            <p>
                &copy; All rights reserved.
            </p>
        </footer>
    </body>
</html>
```
টেবিলের হেডার সারি যুক্ত করার জন্য `tr` এলিমেন্টের মধ্যে `th` এলিমেন্ট ব্যবহার করতে হয়।
```html
<!DOCTYPE html>
<html lang="en">
    <head>
         <meta charset="UTF-8">
         <meta name="author" content="Abid Hasan Rafi">
         <meta name="description" content="This is description">
         <link rel="icon" href="reference-icon.png" type="image/x-icon">
         <title>This is title</title>
    </head>
    <body>
        <header>
            <h1>This is a heading</h1>
        </header>
        <hr>
        <main>
            <table>
                <tr>
                    <th>Heading 01</th>
                    <th>Heading 02</th>
                    <th>Heading 03</th>
                </tr>
                <tr>
                    <td>Data 01</td>
                    <td>Data 02</td>
                    <td>Data 03</td>
                </tr>
                <tr>
                    <td>Data 04</td>
                    <td>Data 05</td>
                    <td>Data 06</td>
                </tr>
            </table>
        </main>
        <hr>
        <footer>
            <p>
                &copy; All rights reserved.
            </p>
        </footer>
    </body>
</html>
```
টেবিলের একটি সারিকে দুই কলাম পরিমাণ প্রস্থ এসাইন করতে `td` এলিমেন্টের ওপেনিং ট্যাগে `colspan` এট্রিবিউট ব্যবহার করা যায়। একইভাবে, একটি সারিকে দুই সারি পরিমাণ দৈর্ঘ্য এসাইন করতে `td` এলিমেন্টের ওপেনিং ট্যাগে `rowspan` এট্রিবিউট ব্যবহার করা যায়।
```html
<!DOCTYPE html>
<html lang="en">
    <head>
         <meta charset="UTF-8">
         <meta name="author" content="Abid Hasan Rafi">
         <meta name="description" content="This is description">
         <link rel="icon" href="reference-icon.png" type="image/x-icon">
         <title>This is title</title>
    </head>
    <body>
        <header>
            <h1>This is a heading</h1>
        </header>
        <hr>
        <main>
            <table>
                <tr>
                    <th>Heading 01</th>
                    <th>Heading 02</th>
                    <th>Heading 03</th>
                </tr>
                <tr>
                    <td rowspan="2">Data 01</td>
                    <td>Data 02</td>
                    <td>Data 03</td>
                </tr>
                <tr>
                    <td colspan="2">Data 04</td>
                </tr>
            </table>
        </main>
        <hr>
        <footer>
            <p>
                &copy; All rights reserved.
            </p>
        </footer>
    </body>
</html>
```
টেবিলে সিমেনটিক ডেফিনিশন সহ ইনফরমেশনগুলোর জন্য টেবিলের ক্যাপশন জেনারেট করতে `<caption>` এলিমেন্ট ব্যবহার করা যায়।
```html
<!DOCTYPE html>
<html lang="en">
    <head>
         <meta charset="UTF-8">
         <meta name="author" content="Abid Hasan Rafi">
         <meta name="description" content="This is description">
         <link rel="icon" href="reference-icon.png" type="image/x-icon">
         <title>This is title</title>
    </head>
    <body>
        <header>
            <h1>This is a heading</h1>
        </header>
        <hr>
        <main>
            <table>
                <caption> This is the table caption <caption>
                <tr>
                    <th>Heading 01</th>
                    <th>Heading 02</th>
                    <th>Heading 03</th>
                </tr>
                <tr>
                    <td rowspan="2">Data 01</td>
                    <td>Data 02</td>
                    <td>Data 03</td>
                </tr>
                <tr>
                    <td colspan="2">Data 04</td>
                </tr>
            </table>
        </main>
        <hr>
        <footer>
            <p>
                &copy; All rights reserved.
            </p>
        </footer>
    </body>
</html>
```
টেবিলের পুরো স্ট্রাকচারের হেড, বডি ও ফুট সেকশনগুলো সিমেনটিকভাবে ডিফাইন করার জন্য `<thead>`, `<tbody>` ও `<tfoot>` এলিমেন্ট ব্যবহার করা যায়।
```html
<!DOCTYPE html>
<html lang="en">
    <head>
         <meta charset="UTF-8">
         <meta name="author" content="Abid Hasan Rafi">
         <meta name="description" content="This is description">
         <link rel="icon" href="reference-icon.png" type="image/x-icon">
         <title>This is title</title>
    </head>
    <body>
        <header>
            <h1>This is a heading</h1>
        </header>
        <hr>
        <main>
            <table>
                <thead>
                    <caption> This is the table caption <caption>
                    <tr>
                        <th>Heading 01</th>
                        <th>Heading 02</th>
                        <th>Heading 03</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td rowspan="2">Data 01</td>
                        <td>Data 02</td>
                        <td>Data 03</td>
                    </tr>
                    <tr>
                        <td colspan="2">Data 04</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="3">Footer descriptions</td>
                    </tr>
                </tfoot>
            </table>
        </main>
        <hr>
        <footer>
            <p>
                &copy; All rights reserved.
            </p>
        </footer>
    </body>
</html>
```
সিমেনটিক ডেফিনিশনের জন্য টেবিলের মধ্যে টেবিল-হেডার এলিমেন্টগুলো কতিপয় টেবিলে কোন রিলেশনে আছে সেটির ইন্ডিকেটর হিসেবে `scope` এট্রিবিউট ব্যবহার করা যায় যার ভ্যালু `col` অথবা `row` হয়ে থাকে। এছাড়া `id` এট্রিবিউট ব্যবহার করেও টেবিলে রিলেশন ইন্ডিকেট করা যায়।
```html
<!DOCTYPE html>
<html lang="en">
    <head>
         <meta charset="UTF-8">
         <meta name="author" content="Abid Hasan Rafi">
         <meta name="description" content="This is description">
         <link rel="icon" href="reference-icon.png" type="image/x-icon">
         <title>This is title</title>
    </head>
    <body>
        <header>
            <h1>This is a heading</h1>
        </header>
        <hr>
        <main>
            <table>
                <thead>
                    <caption> This is the table caption <caption>
                    <tr>
                        <th>&nbsp;</th>
                        <th scope="col">Heading 01</th>
                        <th scope="col">Heading 02</th>
                        <th scope="col">Heading 03</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Side Heading</th>
                        <td rowspan="2">Data 01</td>
                        <td>Data 02</td>
                        <td>Data 03</td>
                    </tr>
                    <tr>
                        <th scope="row">Side Heading</th>
                        <td colspan="2">Data 04</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="4">Footer descriptions</td>
                    </tr>
                </tfoot>
            </table>
        </main>
        <hr>
        <footer>
            <p>
                &copy; All rights reserved.
            </p>
        </footer>
    </body>
</html>
```
## Forms and Input
ইউজারদের থেকে ইনফরমেশন কালেক্ট করার জন্য HTML ফাইলে ফর্ম ও ইনপুট ফিল্ড ব্যবহার করা হয়। ফর্ম তৈরী করার জন্য `<form>` এলিমেন্ট ব্যবহার করতে হয়, এবং ফর্মটি যে রেফারেন্স লিংকে সাবমিট করবে সেটি `action` এট্রিবিউটে এসাইন করে দিতে হয়। `<form>` এলিমেন্টে থেকে ইনফরমেশন পাওয়ার জন্য কতিপয় এলিমেন্টে `method` এট্রিবিউটের ভ্যালু `get` হিসেবে এসাইন করে দিতে হয়।
```html
<!DOCTYPE html>
<html lang="en">
    <head>
         <meta charset="UTF-8">
         <meta name="author" content="Abid Hasan Rafi">
         <meta name="description" content="This is description">
         <link rel="icon" href="reference-icon.png" type="image/x-icon">
         <title>This is title</title>
    </head>
    <body>
        <header>
            <h1>This is a heading</h1>
        </header>
        <hr>
        <main>
            <form action="https://host-url.com/get" method="get"></form>
        </main>
        <hr>
        <footer>
            <p>
                &copy; All rights reserved.
            </p>
        </footer>
    </body>
</html>
```
ফর্মের ইনপুট ফিল্ডের আগে কি ধরনের ইনফরমেশন ইনপুট করতে হবে তার লেবেল ডিফাইন করতে `<label>` এলিমেন্ট `for` এট্রিবিউটসহ এসাইন করা যায়। অতঃপর `<input>` এলিমেন্ট ব্যবহার করে `type`, `name` ও `id` এট্রিবিউটসহ ইনপুট ফিল্ড ওয়েবপেজে ডিফাইন করা যায়। এখানে `type` এট্রিবিউট দ্বারা ইনপুট ফিল্ড কোন ধরনের কন্টেন্ট ধারণ করবে তা নির্দিষ্ট করে ডিফাইন করা যায়।  খেয়াল রাখতে হবে যে, `<label>` এলিমেন্টের `for` এট্রিবিউটের ভ্যালু এবং এর কোরেসপন্ডিং `<input>` এলিমেন্টের `id` এট্রিবিউটের ভ্যালু যেনো একই হয়। `<input>` এলিমেন্টের কোনো ক্লোজিং ট্যাগ থাকে না।
```html
<!DOCTYPE html>
<html lang="en">
    <head>
         <meta charset="UTF-8">
         <meta name="author" content="Abid Hasan Rafi">
         <meta name="description" content="This is description">
         <link rel="icon" href="reference-icon.png" type="image/x-icon">
         <title>This is title</title>
    </head>
    <body>
        <header>
            <h1>This is a heading</h1>
        </header>
        <hr>
        <main>
            <form action="https://host-url.com/get" method="get">
                <label for="name">Name: </label>
                <input type="text" name="name" id="name">
            </form>
        </main>
        <hr>
        <footer>
            <p>
                &copy; All rights reserved.
            </p>
        </footer>
    </body>
</html>
```
ইনপুট ফিল্ডে কি ধরনের ইউজার ডাটা ইনপুট করতে হবে তা আরো ভালোভাবে ক্লেরিফাই করতে `<input>` এলিমেন্টে `placeholder` এট্রিবিউট ব্যবহার করা হয়। এছাড়াও পূর্বে ইনপুট করা ভ্যালু গুলো স্বয়ংক্রীয়ভাবে পুনরায় ইনপুট ফিল্ডে ব্যবহারের সুবিধার্তে `autocomplete` এট্রিবিউট ব্যবহার করা হয়।
```html
<!DOCTYPE html>
<html lang="en">
    <head>
         <meta charset="UTF-8">
         <meta name="author" content="Abid Hasan Rafi">
         <meta name="description" content="This is description">
         <link rel="icon" href="reference-icon.png" type="image/x-icon">
         <title>This is title</title>
    </head>
    <body>
        <header>
            <h1>This is a heading</h1>
        </header>
        <hr>
        <main>
            <form action="https://host-url.com/get" method="get">
                <label for="name">Name: </label>
                <input type="text" name="name" id="name" placeholder="Enter Name" autocomplete="on">
            </form>
        </main>
        <hr>
        <footer>
            <p>
                &copy; All rights reserved.
            </p>
        </footer>
    </body>
</html>
```
কোনো ইনপুট ফিল্ড ফিল-আপ করার বাধ্যবাধকতা ডিফাইন করার জন্য `required` এট্রিবিউট ব্যবহার করা হয়। এই এট্রিবিউটের আলাদা করে ভ্যালু এসাইন করা গেলেও তার কোনো প্রয়োজন পরে না।
```html
<!DOCTYPE html>
<html lang="en">
    <head>
         <meta charset="UTF-8">
         <meta name="author" content="Abid Hasan Rafi">
         <meta name="description" content="This is description">
         <link rel="icon" href="reference-icon.png" type="image/x-icon">
         <title>This is title</title>
    </head>
    <body>
        <header>
            <h1>This is a heading</h1>
        </header>
        <hr>
        <main>
            <form action="https://host-url.com/get" method="get">
                <label for="name">Name: </label>
                <input type="text" name="name" id="name" placeholder="Enter Name" autocomplete="on" required>
            </form>
        </main>
        <hr>
        <footer>
            <p>
                &copy; All rights reserved.
            </p>
        </footer>
    </body>
</html>
```
ফর্মযুক্ত কোনো ওয়েবপেজ লোড করার সময় ফর্মের ইনপুট ফিল্ডে ফোকাস করার জন্য `autofocus` এট্রিবিউট ব্যবহার করা হয়। তবে খেয়াল রাখতে হবে, একটি ফর্মে শুধুমাত্র একটি ইনপুট ফিল্ডেই এই এট্রিবিউটটি ব্যবহার করা যায়। `autofocus` এট্রিবিউটে কোনো ধরনের ভ্যালু এসাইন করতে হয়না।
```html
<!DOCTYPE html>
<html lang="en">
    <head>
         <meta charset="UTF-8">
         <meta name="author" content="Abid Hasan Rafi">
         <meta name="description" content="This is description">
         <link rel="icon" href="reference-icon.png" type="image/x-icon">
         <title>This is title</title>
    </head>
    <body>
        <header>
            <h1>This is a heading</h1>
        </header>
        <hr>
        <main>
            <form action="https://host-url.com/get" method="get">
                <label for="name">Name: </label>
                <input type="text" name="name" id="name" placeholder="Enter Name" autocomplete="on" required autofocus>
            </form>
        </main>
        <hr>
        <footer>
            <p>
                &copy; All rights reserved.
            </p>
        </footer>
    </body>
</html>
```
ফর্মের মধ্যে প্রয়োজন অনুযায়ী আরো লেবেলসহ ইনপুট ফিল্ড যুক্ত করা যায়। ইনপুট ফিল্ডে টেলিফোন নাম্বার যুক্ত করার ক্ষেত্রে `pattern` এট্রিবিউট ব্যবহার করে নাম্বারের প্যাটার্ন ডিফাইন করে দেয়া যায়।
```html
<!DOCTYPE html>
<html lang="en">
    <head>
         <meta charset="UTF-8">
         <meta name="author" content="Abid Hasan Rafi">
         <meta name="description" content="This is description">
         <link rel="icon" href="reference-icon.png" type="image/x-icon">
         <title>This is title</title>
    </head>
    <body>
        <header>
            <h1>This is a heading</h1>
        </header>
        <hr>
        <main>
            <form action="https://host-url.com/get" method="get">
                <p>
                    <label for="name">Name: </label>
                    <input type="text" name="name" id="name" placeholder="Enter Name" autocomplete="on" required autofocus>
                </p>
                <p>
                    <label for="telephone">Contact No: </label>
                    <input type="tel" name="telephone" id="telephone" placeholder="555-555-5555" autocomplete="on" required pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}">
                </p>
            </form>
        </main>
        <hr>
        <footer>
            <p>
                &copy; All rights reserved.
            </p>
        </footer>
    </body>
</html>
```
নিউমেরিক ভ্যালুর ক্ষেত্রে বছরের সাল ইনপুট ডিফাইন করার সময় ম্যাক্সিমাম ভ্যালু, মিনিমাম ভ্যালু, স্টার্টিং ভ্যালু ও ইন্টারভেলের জন্য যথাক্রমে `max`, `min`, `value` ও `step` এট্রিবিউট এসাইন করা যায়।
```html
<!DOCTYPE html>
<html lang="en">
    <head>
         <meta charset="UTF-8">
         <meta name="author" content="Abid Hasan Rafi">
         <meta name="description" content="This is description">
         <link rel="icon" href="reference-icon.png" type="image/x-icon">
         <title>This is title</title>
    </head>
    <body>
        <header>
            <h1>This is a heading</h1>
        </header>
        <hr>
        <main>
            <form action="https://host-url.com/get" method="get">
                <p>
                    <label for="name">Name: </label>
                    <input type="text" name="name" id="name" placeholder="Enter Name" autocomplete="on" required autofocus>
                </p>
                <p>
                    <label for="telephone">Contact No: </label>
                    <input type="tel" name="telephone" id="telephone" placeholder="555-555-5555" autocomplete="on" required pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}">
                </p>
                <p>
                    <label for="year">Favourite Year: </label>
                    <input type="number" name="year" id="year" min="1990" max="2050" step="10" value="2000">
                </p>
            </form>
        </main>
        <hr>
        <footer>
            <p>
                &copy; All rights reserved.
            </p>
        </footer>
    </body>
</html>
```
ফর্মের ভিতরে অপশন বিশিষ্ট কোনো ইনপুট ফিল্ড যুক্ত করার ক্ষেত্রে `name` ও `id` এট্রিবিউটসহ `<select>` এলিমেন্টের ভিতরে `value` এট্রিবিউট সহ `<option>` এলিমেন্ট ব্যবহার করা যায়। বাই-ডিফল্ট যে অপশনটি শুরুতে দেখাবে সেটি ম্যানুয়ালি এসাইন করে দেয়ার জন্য `selected` এট্রিবিউট ব্যবহার করা হয়। ইনপুট ফিল্ডের অপশনগুলোকে আরও ক্যাটাগরি অনুযায়ী সাজানোর ক্ষেত্রে `label` এট্রিবিউট-সহ `<optgroup>` এলিমেন্টের ভিতরে কতিপয় ক্যাটাগরির `<option>` এলিমেন্ট ব্যবহার করতে হয়।
```html
<!DOCTYPE html>
<html lang="en">
    <head>
         <meta charset="UTF-8">
         <meta name="author" content="Abid Hasan Rafi">
         <meta name="description" content="This is description">
         <link rel="icon" href="reference-icon.png" type="image/x-icon">
         <title>This is title</title>
    </head>
    <body>
        <header>
            <h1>This is a heading</h1>
        </header>
        <hr>
        <main>
            <form action="https://host-url.com/get" method="get">
                <p>
                    <label for="name">Name: </label>
                    <input type="text" name="name" id="name" placeholder="Enter Name" autocomplete="on" required autofocus>
                </p>
                <p>
                    <label for="telephone">Contact No: </label>
                    <input type="tel" name="telephone" id="telephone" placeholder="555-555-5555" autocomplete="on" required pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}">
                </p>
                <p>
                    <label for="year">Favourite Year: </label>
                    <input type="number" name="year" id="year" min="1990" max="2050" step="10" value="2000">
                </p>
                <p>
                    <label for="options">choose your option: </label>
                    <select name="options" id="options">
                        <optgroup label="Greek Word Options">
                            <option value="alpha">Alpha</option>
                            <option value="beta" selected>Beta</option>
                            <option value="gamma">Gamma</option>
                        </optgroup>
                        <optgroup label="Numeric Options">
                            <option value="one">One</option>
                            <option value="two">Two</option>
                            <option value="three">Three</option>
                        </optgroup>
                        <option value="other">Other</option>
                    </select>
                </p>
            </form>
        </main>
        <hr>
        <footer>
            <p>
                &copy; All rights reserved.
            </p>
        </footer>
    </body>
</html>
```
একাধিক অপশন সিলেক্ট করার জন্য `<select>` এলিমেন্টে `multiple` এট্রিবিউট ও ভ্যালু-সহ `size` এট্রিবিউট ডিফাইন করতে হয়।
```html
<!DOCTYPE html>
<html lang="en">
    <head>
         <meta charset="UTF-8">
         <meta name="author" content="Abid Hasan Rafi">
         <meta name="description" content="This is description">
         <link rel="icon" href="reference-icon.png" type="image/x-icon">
         <title>This is title</title>
    </head>
    <body>
        <header>
            <h1>This is a heading</h1>
        </header>
        <hr>
        <main>
            <form action="https://host-url.com/get" method="get">
                <p>
                    <label for="name">Name: </label>
                    <input type="text" name="name" id="name" placeholder="Enter Name" autocomplete="on" required autofocus>
                </p>
                <p>
                    <label for="telephone">Contact No: </label>
                    <input type="tel" name="telephone" id="telephone" placeholder="555-555-5555" autocomplete="on" required pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}">
                </p>
                <p>
                    <label for="year">Favourite Year: </label>
                    <input type="number" name="year" id="year" min="1990" max="2050" step="10" value="2000">
                </p>
                <p>
                    <label for="options">choose your option: </label>
                    <select name="options" id="options" multiple size="3">
                        <optgroup label="Greek Word Options">
                            <option value="alpha">Alpha</option>
                            <option value="beta" selected>Beta</option>
                            <option value="gamma">Gamma</option>
                        </optgroup>
                        <optgroup label="Numeric Options">
                            <option value="one">One</option>
                            <option value="two">Two</option>
                            <option value="three">Three</option>
                        </optgroup>
                        <option value="other">Other</option>
                    </select>
                </p>
            </form>
        </main>
        <hr>
        <footer>
            <p>
                &copy; All rights reserved.
            </p>
        </footer>
    </body>
</html>
```
আরো একটি ভিন্ন উপায়ে ওয়েবপেজে অপশন বিশিষ্ট ইনপুট ফিল্ড যুক্ত করা যায়। এক্ষেত্রে `<label>` এলিমেন্ট ডিফাইন করার পর `<select>` এলিমেন্টের পরিবর্তে অতিরিক্ত `list` এট্রিবিউটসহ `input` এলিমেন্ট ব্যবহার করা হয়। অতঃপর `id` এট্রিবিউটসহ `datalist` এলিমেন্ট ডিফাইন করতে হয় যেখানে খেয়াল রাখতে হবে যে, `id` এট্রিবিউট ও `input` এলিমেন্টের `list` এট্রিবিউটের ভ্যালু যেন একই থাকে। পরিশেষে, `datalist` এলিমেন্টের ভিতরে `value` এট্রিবিউট সহ `<option>` এলিমেন্ট ব্যবহার করতে হয়।
```html
<!DOCTYPE html>
<html lang="en">
    <head>
         <meta charset="UTF-8">
         <meta name="author" content="Abid Hasan Rafi">
         <meta name="description" content="This is description">
         <link rel="icon" href="reference-icon.png" type="image/x-icon">
         <title>This is title</title>
    </head>
    <body>
        <header>
            <h1>This is a heading</h1>
        </header>
        <hr>
        <main>
            <form action="https://host-url.com/get" method="get">
                <p>
                    <label for="name">Name: </label>
                    <input type="text" name="name" id="name" placeholder="Enter Name" autocomplete="on" required autofocus>
                </p>
                <p>
                    <label for="telephone">Contact No: </label>
                    <input type="tel" name="telephone" id="telephone" placeholder="555-555-5555" autocomplete="on" required pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}">
                </p>
                <p>
                    <label for="year">Favourite Year: </label>
                    <input type="number" name="year" id="year" min="1990" max="2050" step="10" value="2000">
                </p>
                <p>
                    <label for="options">choose your option: </label>
                    <input type="text" name="options" id="options" list="greek-options">
                    <datalist id="greek-options">
                        <option value="alpha">Alpha</option>
                        <option value="beta">Beta</option>
                        <option value="gamma">Gamma</option>
                    </datalist>
                </p>
            </form>
        </main>
        <hr>
        <footer>
            <p>
                &copy; All rights reserved.
            </p>
        </footer>
    </body>
</html>
```
HTML ফাইলে ফর্মকে আরও অর্গানাইজ করতে ফর্মকে বিভিন্ন সেকশনে ডিফাইন করতে `<fieldset>` এলিমেন্ট ব্যবহার করা যায়। প্রত্যেক এলিমেন্টে টাইটেল/ক্যাপশন দেয়ার ক্ষেত্রে `<fieldset>` এর ভিতর `<legend>` এলিমেন্ট ব্যবহার করতে হয়। 
```html
<!DOCTYPE html>
<html lang="en">
    <head>
         <meta charset="UTF-8">
         <meta name="author" content="Abid Hasan Rafi">
         <meta name="description" content="This is description">
         <link rel="icon" href="reference-icon.png" type="image/x-icon">
         <title>This is title</title>
    </head>
    <body>
        <header>
            <h1>This is a heading</h1>
        </header>
        <hr>
        <main>
            <form action="https://host-url.com/get" method="get">
                <fieldset>
                    <legend>Personal Informations</legend>
                    <p>
                        <label for="name">Name: </label>
                        <input type="text" name="name" id="name" placeholder="Enter Name" autocomplete="on" required autofocus>
                    </p>
                    <p>
                        <label for="telephone">Contact No: </label>
                        <input type="tel" name="telephone" id="telephone" placeholder="555-555-5555" autocomplete="on" required pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}">
                    </p>
                </fieldset>
                <br>
                <fieldset>
                    <legend>Choosing Informations</legend>
                    <p>
                        <label for="year">Favourite Year: </label>
                        <input type="number" name="year" id="year" min="1990" max="2050" step="10" value="2000">
                    </p>
                    <p>
                        <label for="options">choose your option: </label>
                        <input type="text" name="options" id="options" list="greek-options">
                        <datalist id="greek-options">
                            <option value="alpha">Alpha</option>
                            <option value="beta">Beta</option>
                            <option value="gamma">Gamma</option>
                        </datalist>
                    </p>
                </fieldset>
            </form>
        </main>
        <hr>
        <footer>
            <p>
                &copy; All rights reserved.
            </p>
        </footer>
    </body>
</html>
```
ফর্মের ভিতরে রেডিও-টাইপ অপশনের জন্য `<input>` এলিমেন্টের `type` এট্রিবিউটের ভ্যালু `radio` দিয়ে ডিফাইন করা যায়। একাধিক অপশনের ক্ষেত্রে যেকোনো একটি সিলেক্ট ফাংশনালিটির জন্য `<input>` এলিমেন্টগুলোর `name` এট্রিবিউটের ভ্যালু একই রাখতে হয়।
```html
<!DOCTYPE html>
<html lang="en">
    <head>
         <meta charset="UTF-8">
         <meta name="author" content="Abid Hasan Rafi">
         <meta name="description" content="This is description">
         <link rel="icon" href="reference-icon.png" type="image/x-icon">
         <title>This is title</title>
    </head>
    <body>
        <header>
            <h1>This is a heading</h1>
        </header>
        <hr>
        <main>
            <form action="https://host-url.com/get" method="get">
                <fieldset>
                    <legend>Favourite Fruites</legend>
                    <p>
                        <input type="radio" name="fruit" id="mango" value="mango">
                        <label for="mango">Mango</label>
                    </p>
                    <p>
                        <input type="radio" name="fruit" id="jackfruit" value="jackfruit">
                        <label for="jackfruit">Jackfruit</label>
                    </p>
                    <p>
                        <input type="radio" name="fruit" id="banana" value="banana">
                        <label for="banana">Banana</label>
                    </p>
                </fieldset>
            </form>
        </main>
        <hr>
        <footer>
            <p>
                &copy; All rights reserved.
            </p>
        </footer>
    </body>
</html>
```
ফর্মের ভিতরে চেকবক্স-টাইপ অপশনের জন্য `<input>` এলিমেন্টের `type` এট্রিবিউটের ভ্যালু `checkbox` দিয়ে ডিফাইন করা যায়।
```html
<!DOCTYPE html>
<html lang="en">
    <head>
         <meta charset="UTF-8">
         <meta name="author" content="Abid Hasan Rafi">
         <meta name="description" content="This is description">
         <link rel="icon" href="reference-icon.png" type="image/x-icon">
         <title>This is title</title>
    </head>
    <body>
        <header>
            <h1>This is a heading</h1>
        </header>
        <hr>
        <main>
            <form action="https://host-url.com/get" method="get">
                <fieldset>
                    <legend>Favourite Seasons</legend>
                    <p>
                        <input type="checkbox" name="seasons" id="summer" value="summer">
                        <label for="summer">Summer</label>
                    </p>
                    <p>
                        <input type="checkbox" name="seasons" id="autumn" value="autumn">
                        <label for="autumn">Autumn</label>
                    </p>
                    <p>
                        <input type="checkbox" name="seasons" id="winter" value="winter">
                        <label for="winter">Winter</label>
                    </p>
                </fieldset>
            </form>
        </main>
        <hr>
        <footer>
            <p>
                &copy; All rights reserved.
            </p>
        </footer>
    </body>
</html>
```
ফর্মে বিবরণী-টাইপের কোনো ফিল্ডের ক্ষেত্রে `name`, `id`, `cols` ও `rows` এট্রিবিউট সহ `<textarea>` এলিমেন্ট দ্বারা ডিফাইন করা যায়। ইউজারের বোঝার সুবিধার্তে এখানে `placeholder` এট্রিবিউটও ব্যবহার করা যেতে পারে।
```html
<!DOCTYPE html>
<html lang="en">
    <head>
         <meta charset="UTF-8">
         <meta name="author" content="Abid Hasan Rafi">
         <meta name="description" content="This is description">
         <link rel="icon" href="reference-icon.png" type="image/x-icon">
         <title>This is title</title>
    </head>
    <body>
        <header>
            <h1>This is a heading</h1>
        </header>
        <hr>
        <main>
            <form action="https://host-url.com/get" method="get">
                <fieldset>
                    <legend>Comments</legend>
                    <label for="comment">Your Comment</label>
                    <textarea name="comment" id="comment" cols="30" rows="10" placeholder="Type your comment here"></textarea>
                </fieldset>
            </form>
        </main>
        <hr>
        <footer>
            <p>
                &copy; All rights reserved.
            </p>
        </footer>
    </body>
</html>
```
ফর্মকে সাবমিট করার জন্য `type` এট্রিবিউট-সহ `<button>` এলিমেন্ট ব্যবহার করা যায়। এখানে `type` এট্রিবিউটের ভ্যালুতে `submit` এসাইন করে দিতে হয় ও ফর্ম রিসেট করার জন্য `type` এট্রিবিউটের ভ্যালুতে `reset` এসাইন করে দিতে হয়।
```html
<!DOCTYPE html>
<html lang="en">
    <head>
         <meta charset="UTF-8">
         <meta name="author" content="Abid Hasan Rafi">
         <meta name="description" content="This is description">
         <link rel="icon" href="reference-icon.png" type="image/x-icon">
         <title>This is title</title>
    </head>
    <body>
        <header>
            <h1>This is a heading</h1>
        </header>
        <hr>
        <main>
            <form action="https://host-url.com/get" method="get">
                <fieldset>
                    <legend>Comments</legend>
                    <label for="comment">Your Comment</label>
                    <textarea name="comment" id="comment" cols="30" rows="10" placeholder="Type your comment here"></textarea>
                </fieldset>
                <button type="submit">Submit</button>
                <button type="reset">Reset</button>
            </form>
        </main>
        <hr>
        <footer>
            <p>
                &copy; All rights reserved.
            </p>
        </footer>
    </body>
</html>
```
ফর্মের রেফারেন্স লিংক ওভার-রাউট করতে সাবমিট বাটনে `formaction` এট্রিবিউট ব্যবহার করে এর ভ্যালু হিসেবে ওভার-রাইট করা রেফারেন্স লিংক এসাইন করা যায়। এখানে মেথড ডিফাইন করতে `formmethod` এট্রিবিউট ব্যবহার করতে হয়।
```html
<!DOCTYPE html>
<html lang="en">
    <head>
         <meta charset="UTF-8">
         <meta name="author" content="Abid Hasan Rafi">
         <meta name="description" content="This is description">
         <link rel="icon" href="reference-icon.png" type="image/x-icon">
         <title>This is title</title>
    </head>
    <body>
        <header>
            <h1>This is a heading</h1>
        </header>
        <hr>
        <main>
            <form action="https://host-url.com/get" method="get">
                <fieldset>
                    <legend>Comments</legend>
                    <label for="comment">Your Comment</label>
                    <textarea name="comment" id="comment" cols="30" rows="10" placeholder="Type your comment here"></textarea>
                </fieldset>
                <button type="submit">Submit</button>
                <button type="submit" formaction="https://overwritten-url.com/get" formmethod="post">Post</button>
                <button type="reset">Reset</button>
            </form>
        </main>
        <hr>
        <footer>
            <p>
                &copy; All rights reserved.
            </p>
        </footer>
    </body>
</html>
```