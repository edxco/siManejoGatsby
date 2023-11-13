import React from "react";

const priceFormat = (price: number) => {
  let MXPesos = new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
  });

  return MXPesos.format(price);
};

export default priceFormat;
