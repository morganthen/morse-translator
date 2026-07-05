/* eslint-disable no-undef */
import lettersToMorseFn from "./alphanumToMorseFn";

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
  it("Should handle punctuations and sypported symbols", () => {
    expect(lettersToMorseFn("hello world!")).toBe(
      ".... . .-.. .-.. --- / .-- --- .-. .-.. -.. -.-.--",
    );
    expect(lettersToMorseFn("f--b@r")).toBe(
      "..-. -....- -....- -... .--.-. .-.",
    );
  });
  it("Should handle invalid or unsupported characters", () => {
    expect(lettersToMorseFn("f**b@r")).toBe("..-. # # -... .--.-. .-.");
    expect(lettersToMorseFn("***")).toBe("# # #");
  });

  it("Should handle empty strings", () => {
    expect(lettersToMorseFn("")).toBe("");
  });

  it("Should handle numbers", () => {
    expect(lettersToMorseFn("123")).toBe(".---- ..--- ...--");
  });
});
