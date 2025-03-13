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