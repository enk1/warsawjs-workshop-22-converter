import examples from "./examples";

test("Add function should add numers 0 ", () => {
  expect(examples.add(1, 2)).toBe(3);
});

test("Print 'Hello world!'", () => {
  expect(examples.greeting("Jakub")).toEqual("Hello world Jakub!");
});

test("Print always float with 2 digits prcision", () => {
  expect(examples.rounding(2.12345)).toEqual("2.12");
});
test("10 nr fibonacci", () => {
  expect(examples.fibo(10)).toEqual(55);
});
test("0 nr fibonacci", () => {
  expect(examples.fibo(0)).toEqual(0);
});
