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