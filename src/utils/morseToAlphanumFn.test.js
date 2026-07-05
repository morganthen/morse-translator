/* eslint-disable no-undef */
import morseToAlphanumFn from "./morseToAlphanumFn";

describe("correctly translates morse to alpha numeric characters", () => {
  it("Should display the right letters", () => {
    expect(morseToAlphanumFn("... --- ...")).toBe("SOS");
    expect(morseToAlphanumFn("-.-. --.- -..")).toBe("CQD");
    expect(morseToAlphanumFn(".")).toBe("E");
    expect(morseToAlphanumFn("-")).toBe("T");
  });
  it("Should handle trailing spaces", () => {
    expect(morseToAlphanumFn(" ... --- ... ")).toBe("SOS");
  });
  it("Should display the right numbers", () => {
    expect(morseToAlphanumFn(".---- ..--- ...--")).toBe("123");
  });

  it("Should display the right symbols", () => {
    expect(morseToAlphanumFn(".... . -.-- ..--..")).toBe("HEY?");
  });
  it("Should handle empty strings", () => {
    expect(morseToAlphanumFn("")).toBe("");
  });
  it("Should properly display spaces", () => {
    expect(morseToAlphanumFn(".... . -.-- / .... . -.--")).toBe("HEY HEY");
  });
  it("Should handle invalid morse", () => {
    expect(morseToAlphanumFn("....--.-.")).toBe("#");
  });
  it("Should handle multiple spaces", () => {
    expect(morseToAlphanumFn("...   ---   ...")).toBe("S##O##S");
  });

  it("Should handle punctuations", () => {
    expect(morseToAlphanumFn("hello world!")).toBe(
      ".... . .-.. .-.. --- / .-- --- .-. .-.. -.. -.-.--",
    );
  });
});
