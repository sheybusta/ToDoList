import { makeAddButton } from "./add-button.js";

describe("creates a trash-button with trash favicon", () => {
  describe("creates trash button", () => {
    const actual = makeAddButton();

    it("is as button", () => {
      expect(actual.nodeName).toEqual("BUTTON");
    });
    it('has "fas fa-trash" favicon', () => {
      // eslint-disable-next-line prettier/prettier
      expect(actual.innerHTML).toEqual("<i class=\"fas fa-plus\"></i>");
    });
    it('has class "trash-btn"', () => {
      expect(actual.className).toEqual("add-btn");
    });
  });
});
