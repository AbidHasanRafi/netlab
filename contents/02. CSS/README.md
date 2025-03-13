## Getting Started
CSS এর পূর্ণরূপ হচ্ছে Cascading Style Sheets, এটি একটি স্টাইলশিট ল্যাঙ্গুয়েজ যা HTML বা XML ফাইল প্রেজেন্ট করার জন্য ব্যবহার করা হয়। স্ক্রিনে, পেপারে, স্পিচ বা অন্য কোনো মিডিয়ায় এলিমেন্টসগুলো কিভাবে রেন্ডার হবে তা CSS এর মাধ্যমে ডিফাইন করা যায়। `W3C specifications` অনুযায়ী CSS `open web` এর কোর ল্যাঙ্গুয়েজগুলোর মধ্যে অন্যতম। 

HTML ফাইলের ক্ষেত্রে তিনভাবে CSS ডিফাইন করা যায়ঃ এক্সটার্নাল CSS, ইন্টার্নালাল CSS এবং ইনলাইন CSS। প্রথমে একটি `index.html` ফাইল তৈরী করে নেয়া যাকঃ
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>Getting Started with CSS</p>
</body>
</html>
```
এক্সটার্নাল CSS এর ক্ষেত্রে, CSS এর জন্য আলাদা ফাইল (`style.css`) তৈরী করে সেটি `<link>` এলিমেন্টের মাধ্যমে CSS ফাইলের রেফারেন্স ব্যবহার করে HTML ফাইলের `<head>` সেকশনের মধ্যে ডিফাইন করা যায়।
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css"> <!-- এক্সটার্নাল CSS ফাইল -->
</head>
<body>
    <p>Getting Started with CSS</p>
</body>
</html>
```
এক্সটার্নাল CSS ফাইলটি ঠিকঠাক লিংক হয়েছে কিনা বুঝার জন্য একটি সিম্পল স্টাইল ইমপ্লিমেন্ট করে টেস্ট করা যায়। CSS কোডের ক্ষেত্রে যে এলিমেন্টে স্টাইল এপ্লাই করতে হয় সেই এলিমেন্টের ট্যাগ-নেমকে সিলেক্টর হিসেবে ব্যবহার করতে হয় এবং এর পাশাপাশি একটি কার্লি-ব্রেস এর মাঝে ডিক্লেয়ার্ড স্টাইলিং কোড লিখতে হয়। এখানে, HTML ফাইলের `<p>` এলিমেন্টের টেক্সটের রং নিল করতে নিচের উদাহরণটি `style.css` ফাইলে দেখানো হলোঃ
```css
/* style.css ফাইল */
p {
    color: blue;
}
```
ইন্টার্নাল CSS এর ক্ষেত্রে, HTML ফাইলের `<head>` সেকশনের মধ্যে `<style>` এলিমেন্টের ভিতর CSS কোড ডিফাইন করা যায়।
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- ইন্টার্নাল CSS -->
    <style>
        p {
            color: blue;
        }
    </style>
</head>
<body>
    <p>Getting Started with CSS</p>
</body>
</html>
```
ইনলাইন CSS এর ক্ষেত্রে, HTML ফাইলের কতিপয় এলিমেন্টের মধ্যে `style` এট্রিবিউট ব্যবহার করে এর ভ্যালু হিসেবে CSS কোড ডিফাইন করা যায়।
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- ইনলাইন CSS -->
    <p style="color: blue">Getting Started with CSS</p>
</body>
</html>
```
এক্সটার্নাল CSS, ইন্টার্নালাল CSS এবং ইনলাইন CSS এর মধ্যে এক্সটার্নাল CSS ডেভেলপারদের মাঝে বেশি জনপ্রিয়। এখন CSS রুলসেটের এনাটমি সম্পর্কে জানার পালা!

উপরোক্ত CSS ফাইলের নিল রঙের টেক্সটের CSS কোডটি ব্যবচ্ছেদ করে দেখা যাকঃ
```css
p {
    color: blue;
}
```
এখানে, `p` হচ্ছে সিলেক্টর (selector), `color` হচ্ছে প্রোপার্টি (Property) ও `blue` হচ্ছে প্রোপার্টি ভ্যালু (Property value)। `color: blue` অংশকে একসাথে ডিক্লেয়ারেশন (Declaration) অংশ বলা হয়। এইপুরো ফাইলের স্ট্রাকচারটিকে বলা হয় `ruleset`।

## Selectors
CSS ফাইলে সাধারনত তিন ধরনের সিলেক্টর ব্যবহৃত হয়ে থাকেঃ এলিমেন্ট সিলেক্টর (element selector), আইডি সিলেক্টর (id selector), এবং ক্লাস সিলেক্টর (class selector)। 
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>This is Selectors heading!</h1>
    <article>
        <h3>This is first Article</h3>
        <p class="paragraph" id="first">First Article <span>Description</span></p>
    </article>
    <article>
        <h3>This is second Article</h3>
        <p class="paragraph" id="second">Second Article Description</p>
    </article>
    <article>
        <h3>This is third Article</h3>
        <p class="paragraph" id="third">Third Article Description</p>
    </article>
</body>
</html>
```
এখানে, যেকোনো এলিমেন্ট-নেম'কে এলিমেন্ট সিলেক্টর হিসেবে ব্যবহার করা যায়। ক্লাস সিলেক্টর এর ক্ষেত্রে `.` এর সাথে `class` এট্রিবিউটের ভ্যালু ডিফাইন করে সিলেক্টর হিসেবে ব্যবহার করা যায়। এখানে মনে রাখা ভালো একাধিক এলিমেন্টের মাঝে গ্রুপ স্টাইলিং এর ক্ষেত্রে একই ভ্যালুসহ `class` এট্রিবিউট ব্যবহার করা যায়। যেহেতু, একই ভ্যালু-বিশিষ্ট `id` এট্রিবিউট একাধিক এলিমেন্টে ব্যবহার করা যায় না এজন্য স্পেসিফিক এলিমেন্টের স্টাইলিং এর ক্ষেত্রে `id` এট্রিবিউট ব্যবহার করতে হয়। এক্ষেত্রে, `#` এর সাথে `id` এট্রিবিউটের ভ্যালু ডিফাইন করে সিলেক্টর হিসেবে ব্যবহার করা যায়। নিচের উদাহরণে উপরোক্ত HTML ফাইলে এলিমেন্ট সিলেক্টর (element selector), ক্লাস সিলেক্টর (class selector), এবং আইডি সিলেক্টর (id selector)-এর ব্যবহার দেখানো হলোঃ
```css
/* এলিমেন্ট সিলেক্টর (element selector) */
article {
    color: gray;
}

/* ক্লাস সিলেক্টর (class selector) */
.paragraph {
    color: black;
}

/* আইডি সিলেক্টর (id selector) */
#third {
    font-style: italic;
}
```
এখানে, `article` সিলেক্টর এর মাধ্যমে article এলিমেন্টের সকল এলিমেন্টের টেক্সট কালার gray এসাইন করা হয়েছে। `.paragraph` সিলেক্টর এর মাধ্যমে সকল paragraph ক্লাস-যুক্ত এলিমেন্টের টেক্সট কালার black এসাইন করা হয়েছে। পরিশেষে, `#third` সিলেক্টর এর মাধ্যমে শুধুমাত্র third আইডি-যুক্ত এলিমেন্টের ফন্ট স্টাইল italic এসাইন করা হয়েছে।

একাধিক সিলেক্টরে একই স্টাইল ডিক্লেয়ারেশনের ক্ষেত্রে `,` (কমা) ব্যবহার করে কতিপয় সিলেক্টরগুলিকে গ্রুপ করতে পারি।
```css
article {
    color: gray;
}

.paragraph {
    color: black;
}

#third {
    font-style: italic;
}

/* গ্রুপ সিলেক্টর */
h1, h3 {
    text-transform: uppercase;
}
```
কোনো এলিমেন্টের মাঝে অন্য কোনো এলিমেন্ট নেস্টেড থাকলে সেটি সিলেক্টর হিসেবে ডিফাইন করতে প্রথমে প্যারেন্ট এলিমেন্ট-নেম তারপর স্পেস দিয়ে চাইল্ড এলিমেন্ট-নেম ডিফাইন করতে হয়।
```css
article {
    color: gray;
}

.paragraph {
    color: black;
}

#third {
    font-style: italic;
}

h1, h3 {
    text-transform: uppercase;
}

/* চাইল্ড সিলেক্টর */
p span {
    background-color: aqua;
}
```
HTML ফাইলের প্রত্যেকটি এলিমেন্টকে সিলেক্ট করতে ইউনিভার্সাল সিলেক্টর ব্যবহার করা যায়। `*`-কে সিলেক্টর হিসেবে ব্যবহার করে ইউনিভার্সাল সিলেক্টর ডিফাইন করা যায়।
```css
/* ইউনিভার্সাল সিলেক্টর */
* {
    font-family: 'Courier New', Courier, monospace;
}

article {
    color: gray;
}

.paragraph {
    color: black;
}

#third {
    font-style: italic;
}

h1, h3 {
    text-transform: uppercase;
}

p span {
    background-color: aqua;
}
```

CSS এর ক্যাসকেডিং শব্দার্থ হচ্ছে "নির্ঝর" অর্থ এটি উপর থেকে নিচের দিকে কাজ করে। এজন্য, একই সিলেক্টর একাধিকবার ব্যবহার করলে যেটি সবথেকে নিচে থাকবে সেই স্টাইলটি HTML এলিমেন্টে ডিফাইন হবে।
```css
p {
    color: blue;
}

/* ওভাররাইটিং সিলেক্টর */
p {
    color: red;
}
```
এখানে উপরোক্ত কোডে `<p>` এলিমেন্টের রং "লাল" হবে। কিন্তু `class` এট্রিবিউটকে সিলেক্টর হিসেবে ব্যবহার করলে এলিমেন্ট স্টাইলকে উপরে কিংবা নিচে ডিফাইন করলেও ওভাররাইট করা যায় না।

প্যারেন্ট সিলেক্টরে কিছু কিছু CSS কোড চাইল্ড ইনহেরিট করতে পারে, আবার কিছু কিছু CSS কোড ইনহেরিট করা যায় না (যেমনঃ `border` প্রোপার্টি)। কিছু বিশেষ এলিমেন্ট যেমনঃ HTML ফাইলের ফর্ম এলিমেন্ট সাধারণত CSS প্রোপার্টি ইনহেরিট করে না এক্ষেত্রে আলাদা করে প্রোপার্টি ভ্যালু হিসেবে `inherit` এসাইন করা যায়।
```css
button, input, textarea {
    font: inherit;
}
```
একই সিলেক্টর একাধিকবার ব্যবহার করলে স্টাইল ওভাররাইট করার আরেকটি উপায় হচ্ছে প্রোপার্টি ভ্যালুর সাথে `!important` ব্যবহার করা। তবে, এটি ব্যবহার না করাই শ্রেয়।
```css
/* সিলেক্টর ওভাররাইট */
p {
    color: blue!important;
}

p {
    color: red;
}
```

## Colors
এলিমেন্ট স্টাইলিং-এর অন্যতম একটি বড় অংশ হলো রং (color)। HTML ফাইলের কোনো এলিমেন্টে CSS কোড ব্যবহার করে ব্যাকগ্রাউন্ড কালার এসাইন করার ক্ষেত্রে `background-color` প্রোপার্টি ব্যবহার করা হয়।
```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>This is Selectors heading!</h1>
    <article>
        <h3>This is first Article</h3>
        <p class="paragraph" id="first">First Article Description</p>
    </article>
    <article>
        <h3>This is second Article</h3>
        <p class="paragraph" id="second">Second Article Description</p>
    </article>
    <article>
        <h3>This is third Article</h3>
        <p class="paragraph" id="third">Third Article Description</p>
    </article>
</body>
</html>
```
```css
/* style.css */
body {
    background-color: beige;
}
```
`background` প্রোপার্টি ব্যবহার করেও HTML ফাইলে একই স্টাইল এসাইন করা যায়।
```css
body {
    background: beige;
}
```
HTML ফাইলে ফন্ট কালার এসাইন করতে `color` প্রোপার্টি ব্যবহার করা হয়।
```css
body {
    background: beige;
    color: darkblue;
}
```
RGB (Red, Green, Blue) ভ্যালু ব্যবহার করেও CSS প্রোপার্টিতে কালার এসাইন করা যায়।
```css
body {
    background: beige;

    /* RGB ভ্যালু */
    color: rgb(0, 0, 139);
}
```
RGB ভ্যালুতে ট্রান্সপারেন্সি পরিবর্তনের ক্ষেত্রে RGBA ভ্যালু ব্যবহার করে CSS প্রোপার্টিতে কালার এসাইন করা যায়।
```css
body {
    background: beige;

    /* RGBA ভ্যালু */
    color: rgba(0, 0, 139, 0.5);
}
```
আবার, হেক্সাডেসিমেল (Hexadecimal) ভ্যালু ব্যবহার করেও CSS প্রোপার্টিতে কালার এসাইন করা যায়।
```css
body {
    background: beige;

    /* হেক্সাডেসিমেল ভ্যালু */
    color: #00008bcc;
}
```
HSL (Hue, Saturation, Lightness) ভ্যালু ব্যবহার করেও CSS প্রোপার্টিতে কালার এসাইন করা যায়।
```css
body {
    background: beige;

    /* HSL ভ্যালু */
    color: hsl(240, 100%, 27%);
}
```
HSL ভ্যালুতে ট্রান্সপারেন্সি পরিবর্তনের ক্ষেত্রে HSLA ভ্যালু ব্যবহার করে CSS প্রোপার্টিতে কালার এসাইন করা যায়।
```css
body {
    background: beige;

    /* HSLA ভ্যালু */
    color: hsla(240, 100%, 27%, 0.5);
}
```