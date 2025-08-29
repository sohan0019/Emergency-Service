1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

getElementByID  -  It only selects the specific element by its unique ID.
getElementsByClassName  -  It selects every elements with the same class name. We can edit all the tags with same class name altogether.
querySelector  -  It only selects the first element tag that matches with the specified CSS selector.
querySelectorAll  -  It selects all the element tags that matches with the specified CSS selector.


2. How do you **create and insert a new element into the DOM**?

Select parent first:  const divContainer = document.getElementById('div-container');
Create new element:  const newDiv = document.createElement('div');
Insert new element:  divContainer.appendChild(newDiv);


3. What is **Event Bubbling** and how does it work?

Event bubbling is the process through which an event like click transmits from the element it was triggered on, up through its parent elements in the DOM tree.

When an event occurs, it first triggers the target element. Then it bubbles up to its parent, then goes up to its parent's parent, until it reaches the root.


4. What is **Event Delegation** in JavaScript? Why is it useful?

Event Delegation is attaching a single event listener to a parent so that we can manage the events for all of its child elements. It is more useful because it is an efficient way where we don't need to write event listener for every single child individually rather we write a single event listener to its parents. 


5. What is the difference between **preventDefault() and stopPropagation()** methods?

preventDefault()  -  It stops the default behavior of an event like preventing a form from submitting.
stopPropagation()  -  It stops event from bubbling up the DOM tree to parent elements, like stopping a click on a child from triggering a click on its parent.
