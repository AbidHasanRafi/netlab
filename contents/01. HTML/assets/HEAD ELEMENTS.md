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