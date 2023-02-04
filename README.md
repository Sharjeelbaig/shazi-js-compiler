# shazi-js-compiler
<div style="display:flex;">
<img src="https://user-images.githubusercontent.com/29815204/216791449-9ed66c18-e000-4d83-a6a5-db25d26d9c56.png" />
<img src="https://user-images.githubusercontent.com/29815204/216790673-d6cb58bf-4be3-45f2-b7df-d233ad7f1363.gif" />
</div>
WITH JAVASCRIPT'S MIGHT, THE WEB DOTH SHINE BRIGHT, EACH LINE A STEP, TO ENDLESS DELIGHT. THATS THE REASON YOU HAVE TO USE SHAZI JS COMPILER MODULE, TO COMPILE JAVASCRIPT'S CODE

# shazi-js-compiler
shazi-js-compiler is a JavaScript utility module that provides a convenient way to execute and evaluate code and view its output in the console. It can be useful for debugging and testing purposes.

## Installation
To install shazi-js-compiler, simply run the following command in your terminal:

```
npm install shazi-js-compiler
```

## Usage
To use shazi-js-compiler, you first need to import it in your project:

```javascript
import compile from 'shazi-js-compiler';
```

The compile function takes two arguments: input and setOutputs. input is a string that represents the code to be executed and evaluated, and 
setOutputs is a function that is used to set the outputs of the evaluation.

Here is an example of using the compile function:

```javascript
const [outputs, setOutputs] = useState([]);

compile('console.log(1 + 2)', setOutputs);

console.log(outputs);
// outputs: [3]
```

The compile function works by temporarily replacing the console.log function with a custom function that adds the outputs to an array. The original console.log function is then restored after the evaluation is complete.

#### "WARNING"
This module uses eval function of javascript, eval function is a powerful and dangerous tool in JavaScript. It allows for arbitrary code execution, which can lead to security vulnerabilities and unpredictable behavior in your code.

In case of an error during evaluation, the error message will be added to the outputs array.

## Conclusion
shazi-js-compiler is a simple and flexible utility that can be used to evaluate and debug JavaScript code. By providing a convenient way to view the outputs of code evaluation, it can save time and effort during development. Try it out and see for yourself!


