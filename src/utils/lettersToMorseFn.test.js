/* eslint-disable no-undef */
import lettersToMorseFn from "./lettersToMorseFn";

describe("correctly converts letters to morse", () => {
  it("Should correctly return the right morse code", () => {
    expect(lettersToMorseFn("SOS")).toBe("... --- ...");
    expect(lettersToMorseFn("ABC")).toBe(".- -... -.-.");
  });
  it("Should be case insensitive", () => {
    expect(lettersToMorseFn("sOs")).toBe("... --- ...");
    expect(lettersToMorseFn("hEllO")).toBe(".... . .-.. .-.. ---");
  });
  it("Should handle spaces correctly", () => {
    expect(lettersToMorseFn("hi there")).toBe(".... .. / - .... . .-. .");
  });
  it("Should display multiple spaces", () => {
    expect(lettersToMorseFn("   ")).toBe("/ / /");
  });
  it("Should handle invalid characters", () => {
    expect(lettersToMorseFn("f**b@r")).toBe("..-. # # -... # .-.");
  });
});
