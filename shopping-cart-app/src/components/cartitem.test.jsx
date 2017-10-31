import CartItem from './CartItem';

describe("CartItem", () => {
  describe("getDefaultProps", () => {
    it("should return item name", () => {
      //arrange
      let item = new CartItem();

      //act
      let actualProps = item.getDefaultProps();

      //assert
      expect(actualProps.item.name).toBe("default item");
    });
  });
});
