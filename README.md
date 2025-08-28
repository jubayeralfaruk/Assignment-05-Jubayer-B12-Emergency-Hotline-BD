## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
### Answer:
- getElementById() selects a single element by Id and getElementsByClassName() Selects all elements by Class.
- querySelector() selects the first element matching a css selector and querySelectorAll() selects all elements matching a css selector.

## 2. How do you create and insert a new element into the DOM?
### Answer:
- First of all you create a element. This way ➡ document.createElement(tagName).
- Then I select an element from HTML, then I put my new element inside it.
- Finally, I use appendChild to put my new element inside the HTML element I selected. This way ➡ selectElement.appendChild(createElement)

## 3. What is Event Bubbling and how does it work?
### Answer:
- Event bubbling means an event starts on the element we click. 
- Then goes up to its parent, then grandparent, and finally the document.

## 4. What is Event Delegation in JavaScript? Why is it useful?
### Answer:
- Event Delegation means attaching one event listener to a parent to handle events from its children.
- It is useful because of event bubbling and is useful for less code, dynamic elements, and better performance.

## 5. What is the difference between preventDefault() and stopPropagation() methods?
### Answer:
- preventDefault() is used to disable the default behavior of HTML elements (like form submission) that have default actions.
- If we don’t want the event to bubble up to the parent element when we click on a child, we use stopPropagation().
- This is the different of preventDefault() and stopPropagation()