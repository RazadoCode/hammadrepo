import banner from "./schemas/banner";
import category from "./schemas/category";
import customer from "./schemas/customer";
import order from "./schemas/order";
import product from "./schemas/product";
import sale from "./schemas/sale";

export const schema = {
  types: [product, category, banner, order, sale],
}
