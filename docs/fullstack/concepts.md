# Concepts of Web Development

## Introduction

This page is meant to provide supplementary resources to students new to web development. If you have already have an understanding of HTML, CSS, and JavaScript, you may skip this section.

We will cover the following:

- [How Websites Work](#How-Websites-Work)
  - [First Look: HTML](#First-Look-HTML)
  - [First Look: CSS](#First-Look-HTML)
- [JavaScript](#JavaScript)
  - [Variables](#Variables)
  - [Functions](#Functions)
  - [Learn More](#Learn-More)

## How Websites Work

When you open your browser and go to a certain URL, the browser requests a certain collection of files from a server. These files work together to provide the visual services that you receive from websites. The three main components and file types for websites are the following.

- **HTML**: HyperText Markup Language; foundational file type that defines the structure of the website.
- **CSS**: Cascading Style Sheets; used to customize look and feel of elements defined by HTML files.
- **JavaScript**: Programming language that creates interactivity and dynamic responses in websites. How much interactivity? The sky's the limit.

### First Look: HTML

HTML is structured something similar to the following:

```html
<!DOCTYPE html>
<head>
  <title>Hello World</title>
</head>
<body>
  <h1>Hello World</h1>
  <p>This is a paragraph</p>
</body>
</html>
```

First of all, every HTML document begins with `<!DOCTYPE html>` and ends with `</html>`. Additionally, each document usually has a `head` and `body` tag; `head` usually denotes metadata or other elements that don't necessarily appear in the webpage itself. The `body` is the opposite: it describes elements that appear within the *body* of the webpage. 

Additionally, you may notice that each tag defines an element in the webpage, and must have a matching closing element to indicate the end of said element. The rule holds true for most elements in HTML; for example, `<h1>` (header 1) is ended by `</h1>`, and `<p>` (paragraph) ends with `</p>`.

Other fundamental HTML concepts include...

```html
<!-- This is a comment -->
<div id="example1" class="container">
  <h3>This is a div.</h3>
  <button>Here's a button</button>
</div>
<div id="example2" class="container"></div>
```

Comments (text that isn't processed when rendering a website) are used with the `<!-- comment -->` notation. `div` tags represent an arbitrary section of a website. By itself, they do next to nothing, but when combined with CSS and JavaScript, they become much more powerful. 

Also notice the `id` and `class` sections in both `div`s above. These are ways to identify a certain HTML element in both CSS and JavaScript. The difference is that `id` refers to a singular element, whereas `class` refers to a group of elements.

This is a very surface-level explanation of HTML; the goal of this section is to learn how to read HTML, not what every single element does. For more, refer to the [Mozilla MDN guide](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML).

### First Look: CSS

CSS's syntax looks something like the below:

```css
p {
  stylename: argument;
}

#id {
  stylename: argument;
}

.class {
  stylename: argument;
}
```

Essentially, you take a well-defined element from HTML (`p` in this example), an element ID (denoted by `#{idname}`), or a class of elements (denoted by `.{classname}`) and apply certain customized settings to them.

Oftentimes, when creating different applications, we turn to CSS frameworks to simplify the process of styling the frontend. A very popular example is [Bootstrap](https://getbootstrap.com), which is used in many professional websites to help create easy sections, columns, and more. 

In this workshop, we use [Bulma](https://bulma.io), which is similar to Bootstrap but more simplified and efficient. To look at how to define certain styles, check out their [documentation](https://bulma.io/documentation).

To learn more about CSS, check out another [MDN guide](https://developer.mozilla.org/en-US/docs/Learn/CSS).

## JavaScript

JavaScript is in a league of its own, compared to HTML and CSS.

For one, compared to the previous two, it's a legitimate programming language. The functionality from other popular languages&mdash;Python, Java, C++&mdash;can be found in JavaScript, too. You can declare variables, create functions, and more.

Quick note: Java is to JavaScript as car is to carpet. That is to say, they have nothing to do with each other.

Let's quickly go over two essential parts of JavaScript syntax.

### Variables

Variable declaration is interesting. There are multiple ways to declare variables, but the most common are the following:

```javascript
let x = 5  // for variable variables

const pi = 3.14  // for constant constants
pi = 5  // throws error; trying to change value of a constant

var y = 5  // we don't use this anymore
```

As you can see, `let` is used for variables that will be reassigned values in the future, and `const` is used for constants that will always stay the same. `var` used to be used in JavaScript to declare variables, and sometimes still is, but the use of `var` is now discouraged. Variable definitions are also *weakly typed*; that is, you don't have to explicitly declare what data type each variable is during declaration.

### Functions

Similarly, functions have multiple definitions. However, we only care about the following:

```javascript
const add = (x, y) => {
  console.log(x + y) // prints parameter to the console
  return (x + y)
}

const add2 = (x, y) => {
  return (x + y)
}

// which is equivalent to
const add3 = (x, y) => x + y
```

This is JavaScript's **arrow format**, which has been introduced following the previous explicit `function` operator. Arrow format for function definitions makes code more readable and is also highly encouraged, despite being different from most programming languages. 

While multi-line functions must be bracketed and follow that specific format, we can see above that a single-line function can be reduced to ... a single line. This is similar to Python's lambda functionality, and we'll see this format appear a lot when we go into functional programming in JavaScript.

### Learn More

JavaScript is an extremely versatile language, with lots of third-party library support. If you're looking for something that JavaScript can do, it's almost certain that JavaScript can, in fact, do it.

If you want to learn more about JavaScript, there are a lot of good beginner resources; I suggest going to [the main page](https://github.com/blockchainpsu/blockchain-essentials-spring2020/wiki/Full-Stack-Development) and following any of the suggestions.