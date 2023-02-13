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
      let document = undefined;
      const originalConsoleLog = console.log;
      console.log = (...args) => setOutputs(prevOutputs => [...prevOutputs, args.join(" ")]);
      const code = `(function() {
        var document;
        ${input};
      })();`;
      typeof eval === "function" && eval(code);
      console.log = originalConsoleLog;
    } catch (error) {
      setOutputs(prevOutputs => [error.message]);
    }
  };
  module.exports = {compile,compileSafe};
  