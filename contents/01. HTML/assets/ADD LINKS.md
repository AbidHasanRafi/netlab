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