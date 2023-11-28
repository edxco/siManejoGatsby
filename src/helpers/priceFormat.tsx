import React from "react";

const priceFormat = (price: number) => {
  let MXPesos = new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return MXPesos.format(price);
};

export default priceFormat;
