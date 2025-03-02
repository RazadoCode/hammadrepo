import { state } from "../store/store";

const { client } = require("@/sanity/lib/client");


export const fetchOnSaleProducts = async () => {
  try {
    const products =
      await client.fetch(`* [_type == "product" && onSale == true ]
      {
        name,
        images,
        _id,
        price,
        onSale,
}
      `);
    state.onSaleProducts = products;
  } catch (error) {
    console.log(error);
  }
};