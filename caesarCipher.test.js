import caesarCipher from "./caesarCipher";

test("caesar cipher with a shift of 3", () => {
  expect(caesarCipher("Cairo", 3)).toBe("fdlur");
});

test("caesar cipher with a shift of 4", () => {
  expect(caesarCipher("Cairo", 4)).toBe("gemvs");
});

test("caesar cipher with a shift of 20", () => {
  expect(caesarCipher("Egypt Cairo", 20)).toBe("yasjn wucli");
});
