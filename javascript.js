const compile = (input, setOutputs) => {
    setOutputs([]);
    try {
      const originalConsoleLog = console.log;
      console.log = (...args) => setOutputs(prevOutputs => [...prevOutputs, args.join(" ")]);
      typeof eval === "function" && eval(input)();
      console.log = originalConsoleLog;
    } catch (error) {
      setOutputs(prevOutputs => error.message === 'eval(...) is not a function' ? prevOutputs : [error.message]);
    }
  };
  const compileSafe = (input, setOutputs) => {
    setOutputs([]);
    try {
      const originalConsoleLog = console.log;
      console.log = (...args) => setOutputs(prevOutputs => [...prevOutputs, args.join(" ")]);
      const parsedInput = JSON.parse(input);
      parsedInput();
      console.log = originalConsoleLog;
    } catch (error) {
      setOutputs(prevOutputs => [error.message]);
    }
  };
  
  module.exports = {compile,compileSafe};
  