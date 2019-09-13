const { decodeCipher } = require('./cesarcipher');


test("A should be N", () => {
  expect(decodeCipher("A")).toBe("N");
});


test("Z should be M", () => {
  expect(decodeCipher("Z")).toBe("M");
});

test("F should be S", () => {
  expect(decodeCipher("F")).toBe("S");
});

test("f should be S", () => {
  expect(decodeCipher("f")).toBe("S");
});

test("!!!???... should be !!!???...", () => {
  expect(decodeCipher("!!!???...")).toBe("!!!???...");
});

test("\'-_ should be \'-_", () => {
  expect(decodeCipher("\'-_")).toBe("\'-_");
});

test("SERR CVMMN! should be FREE PIZZA!", () => {
  expect(decodeCipher("SERR CVMMN!")).toBe("FREE PIZZA!");
});

test("FREE PIZZA! should be SERR CVMMN!", () => {
  expect(decodeCipher("FREE PIZZA!")).toBe("SERR CVMMN!");
});
