import { state } from "../store/store";

const { client } = require("@/sanity/lib/client");


export const fetchBanners = async () => {
  try {
    const banners =
      await client.fetch(`* [_type == "banner" ]
      {
        imageMobile,
        imageDesktop,
}
      `);
    state.banners = banners;
  } catch (error) {
    console.log(error);
  }
};