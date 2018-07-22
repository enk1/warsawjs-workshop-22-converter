const examples = {
  add: (a, b) => {
    return a + b;
  },
  greeting: name => {
    return `Hello world ${name}!`;
  },
  rounding: x => {
    return Number.parseFloat(x).toFixed(2);
  },
  fibo: x => {
    return x < 2 ? x : examples.fibo(x - 1) + examples.fibo(x - 2);
  }
};

export default examples;
