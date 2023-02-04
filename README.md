# shazi-js-compiler
| Shazi | Shazi js compiler |
| --- | --- |
| ![](https://user-images.githubusercontent.com/29815204/216791449-9ed66c18-e000-4d83-a6a5-db25d26d9c56.png) | ![](https://user-images.githubusercontent.com/29815204/216790673-d6cb58bf-4be3-45f2-b7df-d233ad7f1363.gif) |

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
***
# By Sharjeel Baig
| Hire Me |
| --- |
| <p align="center"><img src="https://user-images.githubusercontent.com/29815204/216791900-bb61bfc9-778d-4922-963d-8cbce5245bc4.jpg" height="150" /></p>|
|A highly motivated and dedicated individual seeking opportunities to showcase my skills and make a positive impact.|

| Social Media | Icon | Link |
| --- | --- | --- |
| GitHub | <img src="https://user-images.githubusercontent.com/29815204/216792812-7e5d388a-036e-43ae-8043-709a3df008a4.svg" height="50" /> | https://github.com/Sharjeelbaig |
| LinkedIn | <img src="https://user-images.githubusercontent.com/29815204/216792924-06db8bf3-7fdd-45fe-bbed-a0a3b3697a45.png" height="50" /> | https://www.linkedin.com/in/sharjeel-baig-250858222/ |
| Facebook | <img src="https://user-images.githubusercontent.com/29815204/216792990-ae5b4e93-20d3-49e7-a753-cf42e16f97ed.png" height="50" /> | https://www.facebook.com/sharjeel.baig.58/ |


