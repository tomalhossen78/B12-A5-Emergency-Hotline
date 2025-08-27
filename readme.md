### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

### Answers :---
1. "getElementById" returns a element by a specific id, "getElementsByClassName" returns a HTML Collection of multiple elements by a specific class name, "querySelector" returns first matching element and "querySelectorAll" returns a nodeList of  all matching elements.

2. To create and insert a new element into the DOM -
  step-1 : select the parentNode
  step-2: create new element using "createElement" function
  step -3: Append the new elemet to ParentNode using "appendChild" functions

3.When a event occurs in DOM it start searching start from root then it childs it childs etc unless capturing target pharase  and after capturing the target pharase it moves it parents its parents etc. which is called Event Bubbling.

4. Event Delegation is a way to decrease use of eventlistener.Using Event Bubbling we traverse the whole dom and we can use eventlistener anywhere then it traverse to target element.That's why we need to use less eventlistener.

5. "preventDefault()" use to prevent browser default reload and "stopPropagation()" use to prevent Event Bubbling.