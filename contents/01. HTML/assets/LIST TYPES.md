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