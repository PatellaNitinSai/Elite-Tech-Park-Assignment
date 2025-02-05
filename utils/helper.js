exports.calculateDiscount = (priceOld, priceNew) => {
    if (priceOld <= 0) throw new Error("Invalid original price");
    return ((priceOld - priceNew) / priceOld) * 100;
  };
  