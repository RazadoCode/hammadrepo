import { state } from "../store/store";

const { client } = require("@/sanity/lib/client");



export const fetchBestSellingProducts = async () => {
  try {
    const products =
      await client.fetch(`* [_type == "product" && bestSelling == true ]
      {
        name,
        images,
        _id,
        price,
        onSale,
}
      `);
    state.bestSellingProducts = products;
  } catch (error) {
    console.log(error);
  }
};