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