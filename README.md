## 1) What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

**Answer:**

- `getElementById()`: It selects an element using its id. It returns only one element. Since IDs are unique it always gives a single element. If no element is found it returns null.

- `getElementsByClassName()`: It selects elements using their class name. It returns a collection of elements like HTMLCollection. Even if only one element has that class, it still returns a collection. The collection is live, meaning it updates automatically if the DOM changes.

- `querySelector()`: It selects the first element that matches a CSS selector. It returns only the first matching element. It can use any CSS selector like id, class, tag, attribute, etc. If nothing matches, it returns null.

- `querySelectorAll()`: It selects all elements that match a CSS selector. It returns a NodeList. The NodeList is not live means it does not update automatically.


## 2) How do you create and insert a new element into the DOM?

**Answer:**

To create and insert a new element into the DOM, we follow three main steps:

- **Create a new element**
  `let div = document.createElement("div");`
  We use `document.createElement("div")` to create a new element, but at this stage it only exists in memory and is not visible on the webpage.

- **Add content and attributes**
  `div.textContent = "This is a new div element";`
  `div.className = "box";`
  `div.id = "myDiv";`
  We can add text using `textContent`, and we can also set attributes like `id`, `className`, or other properties such as `src` for images or `href` for links.

- **Insert the element into the DOM**
  `document.body.appendChild(div);`
  We insert it into the DOM using methods like `appendChild()` to add it at the end of a parent element, `prepend()` to add it at the beginning, or `before()` and `after()` to place it relative to another element.

In this code, first we create a `<div>` element using `createElement()`. Then we add some text using `textContent` and also assign a class and id to it. Finally, we use `appendChild()` to insert the new div into the `<body>` of the document. Once appended, the element becomes visible on the webpage.

## 3) What is Event Bubbling? And how does it work?

**Answer:**

Event Bubbling is a concept in JavaScript where an event starts from the target element (the element on which the event occurs) and then moves upward to its parent elements, continuing up the DOM tree until it reaches the root element like document. This means if you click on a child element inside a parent element, the event will first run on the child and then automatically trigger on the parent and other ancestors if they have event listeners attached. For example, if a button is inside a div and both have click event listeners, clicking the button will first execute the button's event and then the div's event. If we want to prevent this upward movement, we can use `event.stopPropagation()` to stop the bubbling process.

## 4) What is Event Delegation in JavaScript? Why is it useful?

**Answer:**

Event Delegation is a technique in JavaScript where instead of adding event listeners to multiple child elements, we add a single event listener to their parent element and handle the events using event bubbling. Since events bubble up from the target element to its ancestors, the parent can detect which child triggered the event by using `event.target`.

This is useful because it improves performance such as  fewer event listeners are added, reduces memory usage, and makes the code cleaner and easier to manage. It is especially helpful when working with dynamically created elements, because even if new child elements are added later, the parent's event listener will still handle their events without needing to add new listeners again.

## 5) What is the difference between preventDefault() and stopPropagation() methods?

**Answer:**

- `preventDefault()`

  Stops the default browser behavior of an element.

  Example: Prevents a form from submitting or a link from opening a new page.

  It does not stop the event from bubbling to parent elements.

- `stopPropagation()`

  Stops the event from bubbling (or capturing) through the DOM.

  Prevents the event from moving to parent or ancestor elements.

It does not stop the default browser action.
