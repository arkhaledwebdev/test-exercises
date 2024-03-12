import reverseString from "./reverse_string";

test("reverse a String", () => {
  expect(reverseString("Cairo")).toBe("oriaC");
});

test("reverse a String", () => {
  expect(reverseString("Egypt")).toBe("tpygE");
});
