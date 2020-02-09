# User *React*ions

## Introduction

In this section, we will examine the extremely popular JavaScript framework, [React.js](https://reactjs.org/)&mdash;states, components, and JSX. Afterwards, we'll continue with our previous section's project by adding React functionality.

> *Note*: The official React.js tutorial, like its parent social media company, is **hot garbage**. It uses several examples that are now considered deprecated. Use our suggested list from [here](https://github.com/blockchainpsu/blockchain-essentials-spring2020/wiki/Full-Stack-Development#additional-information) instead.

We will cover the following: 

- [What is React?](#What-is-React)
  - [Components](#Components)
    - [Component Hierarchy](#Component-Hierarchy)
  - [State](#State)
    - [Rules of State](#Rules-of-State)
  - [Writing in JSX](#Writing-in-JSX)
- [Adding React to a RESTful API](#Adding-React-to-a-RESTful-API) 

## What is React?

React works by managing **states** within carefully-defined **components** that render certain interfaces for the frontend. Let's examine how each of these play together to create something more.

### Components

**Components** define what React should do and return what React should display on the screen when the website loads, or under certain conditions. Most of the time, we'll see components defined as functions.

```javascript
// Make sure to import React
import React from 'react'

const ExampleComponent = (props) => {
  //...
}
```

The `props` are *properties* (parameters) of the component that will be crucial during their creation. 

Example components could include a website's navigation bar, its body, a table, a list of elements, et cetera. Very importantly, some of these components can fit within other components.

#### Component Hierarchy

By React convention, it's smarter to **compartmentalize** your components rather than rewrite something over and over again. This saves you development time, makes your code easier to read, and allows you to perform edits to all component elements quickly.

For example, look at the following pseudocode:

```javascript
const List = (props) => {
  return  (
    element1(content=c1)
    element2(content=c2)
    element3(content=c3)
    element4(content=c4)
    //...
    elementn(content=cn)
  )
}
```

I have *n* elements within my `List` component that will display when I render `List`. Each element is a separate entity. If *n* is small, then maybe I can manage them all. But if *n* is, say, 1000, then it becomes costly to edit all of my elements, in terms of development time. 

Now let's see an example where I take advantage of components.

```javascript
const Element = (props) => {
   // do something ...
}

const List = (props) => {
  return  (
    Element(content=c1)
    Element(content=c2)
    Element(content=c3)
    Element(content=c4)
    //...
    Element(content=cn) // nth Element
  )
}
```

By creating a new component, I can now change all of my Elements at once by editing my Element component. This saves time during debugging and the development cycle, and makes it more obvious where my Elements are coming from.

If you know about functional programming methods, such as `map`, this becomes even simpler:

```javascript
const Element = (props) => {
   // do something ...
}

const List = (props) => {
  const contents = [ c1, c2, c3, ..., cn ]  // assuming contents are in an array

  return  (
    contents.map((content, i) => Element(content=content, key=i))    
  )
}
```

### State

**State** refers to React objects that hold a certain value that can change throughout the use of an interface without requiring the reload of a page. 

States used to be defined within classes, but have since evolved with the introduction of **React Hooks**, which *hook* React functionality into function-defined components. 

Let's take a look at a quick example below: 

```javascript
// Notice that you must import the useState hook
import React, { useState } from 'react'

const StatefulComponent = () => {
  const [ state, setState ] = useState('')

  return (
    <p>{state}</p>
  )
}
```

When I call `useState()`, you can see that I simultaneously define two variables: `state` and `setState`. The first, `state`, is the actual **state** object itself; it holds a value that will change depending on what the developer needs. The second is a setter function for the state; when called, it will set the value of `state` to whatever its parameters are. 

`useState('')` initializes `state` as an empty string in the above case. Likewise, we can initialize `state` with many data types:

```javascript
//...
const [ int, setInt ] = useState(0)
const [ bool, setBool ] = useState(false)
const [ arr, setArr ] = useState([])
const [ state, setState ] = useState(null)
```

#### Rules of State

React defines several conventions in regards to states that help (or hurt, depending on your perspective) clean programming practices. 

For one, **states should never be mutated directly**. Their value should only be changed by using the setter function once the user interacts with the UI somehow. 

Secondly, when using hooks in React, **always put their declaration at the top of a React function**. In every example in the course, you'll see this rule practiced. Having a set priority ensures that hooks are always consistently called in the same order, so the state of the hooks is preserved.

### Writing in JSX

When we `return` React components, they must define a structure of what to create on the interface. Up until now, this page has used pseudocode to demonstrate what such an effect may look like. In reality, it's much closer to a very familiar markup language.

Enter **JSX**, a JavaScript syntax extension that allows a developer to define the structure of a web page while sowing snippets of JavaScript in between. 

JSX is extremely similar to HTML, down to the same tags, but has some key differences. For one, you can put in JavaScript code in JSX simply by enclosing the JavaScript snippet within curly brackets, like so: `{js code goes here}`. 

Consider the following components:

```javascript
const InnerComponent = (props) => <h3>Hi, {props.name}!</h3>

const OuterComponent = (props) => {
  const names = props.name  

  return (
    <div>
      <h3>Hi, {names[0]}!</h3>
      <h3>Hi, {names[1]}!</h3>
      <h3>Hi, {names[2]}!</h3>
      // ...
    </div>
  )
}
```

You can see how JSX works in our return statements here, and it should be easy to understand if you've worked with HTML before. Note that **return statements must always be wrapped by a `<div></div>` or `<></>` in JSX**, or else the code won't accept your return statement.

But we can also see that this code snippet is a cry for help. This author is miserable and doesn't know how to use functional programming rules correctly, and if for some reason, the client wants to use `<h2>` instead of `<h3>`, he's a goner. So let's use our `InnerComponent` to help simplify the process.

To return components within components, JSX wraps the component declaration like so: `<ComponentName one={one} two={two} ... />`, which is a self-closing tag that carries `props` through with added arguments like `props.one=one`, in this case. 

Combined with components and the `map` function, we can make the previous snippet a little nicer:

```javascript
const InnerComponent = (props) => <h3>Hi, {props.name}!</h3>

const OuterComponent = (props) => {
  const names = props.name  

  return (
    <div>
      {names.map((name, i) => <InnerComponent name={name} key={i} />}
    </div>
  )
}
```

Also note that when repetitive processes are used (`map`, `<li>`, `<tr>`, etc), JSX requires a `key` property to be included in the Component.

So that wraps up our analysis of JSX. Up next, we'll see a practical example of creating a simple application with React.

## Adding React to a RESTful API