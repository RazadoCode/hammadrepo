import { state } from "../store/store";

const { client } = require("@/sanity/lib/client");


export const fatchCategories = async () => {
  try {
    const categories =
      await client.fetch(`* [_type == "category" ]
      {
        name,
        image,
        _id
}
      `);
    state.categories = categories;
  } catch (error) {
    console.log(error);
  }
};