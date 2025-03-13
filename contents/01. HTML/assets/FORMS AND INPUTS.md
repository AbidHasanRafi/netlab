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