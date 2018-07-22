import Converter from "./Converter";
import mocks from "./mocks";

describe("Converter", () => {
  const conversionTable = mocks.currenciesTable;
  const mock = new Converter(conversionTable);
  test("converts source to target", () => {
    expect(mock.convert("pln", "usd", 100)).toBe("359.00");
    expect(mock.convert("pln", "pln", "100.00")).toBe("100.00");
    expect(mock.convert("pln", "yen", "100.00")).toBeNull();
    expect(mock.convert("yen", "usd", 100.0)).toBeNull();
  });
});
