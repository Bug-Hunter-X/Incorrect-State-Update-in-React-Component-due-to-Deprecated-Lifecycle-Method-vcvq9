# Incorrect State Update in React Component

This repository demonstrates a common error in React components: using the deprecated `componentWillReceiveProps` lifecycle method to update state based on prop changes.  The provided `BuggyComponent.js` showcases the problem, while `FixedComponent.js` presents the correct solution using `getDerivedStateFromProps`.

**Problem:**
The use of `componentWillReceiveProps` leads to unexpected behavior and errors, particularly in React versions 16.3 and above.

**Solution:**
The preferred solution is to utilize `getDerivedStateFromProps` or, in some cases, `componentDidUpdate`.  This update provides a more robust and future-proof approach to handling prop changes.

This example highlights the importance of staying updated with React's lifecycle methods and adopting best practices.