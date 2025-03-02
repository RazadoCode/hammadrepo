import { proxy } from "valtio"

export const state = proxy({

    onSaleProducts:[],
    bestSellingProducts:[],
    banners:[],
    categories:[],
    sale:{},
    userStatus:false,
    username:"",
    password:"",
})