import Converter from "./Converter";
import Mocks from "./mocks";

describe("Converter", () => {
  const conversionTable = Mocks.currenciesTable;
  const rateList = document.querySelector("section.rate ul");

  const wjsConverter = new Converter(conversionTable, rateList);

  test("converts source to target", () => {
    expect(wjsConverter.convert("pln", "usd", 100)).toBe("359.00");
    expect(wjsConverter.convert("PLN", "USD", 100)).toBe("359.00");
    expect(wjsConverter.convert("pln", "pln", "100.00")).toBe("100.00");
    expect(wjsConverter.convert("pln", "yen", "100.00")).toBeNull();
    expect(wjsConverter.convert("yen", "usd", 100.0)).toBeNull();
  });
});
