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