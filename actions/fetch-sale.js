import { state } from "../store/store";

const { client } = require("@/sanity/lib/client");

export const fetchSale = async () => {
  try {
    const sale = await client.fetch(`* [_type == "sale" ]
      {
        name,
        percentageOff
}
      `);
    state.sale = sale[0];
  } catch (error) {
    console.log(error);
  }
};
