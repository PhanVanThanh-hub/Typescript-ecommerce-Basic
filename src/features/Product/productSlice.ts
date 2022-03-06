import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {Product} from "../../models/product";
import {RootState} from '../../app/store';

 
interface InviteeState {
    openAddProduct:boolean,
    previewProduct:boolean,
    list:Product[],
    preview:Product
}
 
var initialState :InviteeState={
    openAddProduct:false,
    previewProduct:false,
    list :[
        {
            id:1,
            url:"https://berrydashboard.io/static/media/prod-7.4fef88dc.jpg",
            name:"Gavin Santos",
            price:14.59,
            detail:"Dutmi hiwfe lowu purhaj sozagkel odfe zagakage owcete ep sa ze deh. Riz jezep fike ojri donu kicajizu vufap afwonum ro ejihoibu na otra.",
            amount:21,
        },
        {
            id:2,
            url:"https://berrydashboard.io/static/media/prod-5.6341ab32.jpg",
            name:"Lura Jacobs",
            price:12.99,
            detail:"Unehigo tujegjom ga tomogi nif segego hujsit douvice sudrubeme letawze an puf foenag. Gel ne pis zemo mifbevga ninak nag voinulur ici gi opu oza avsituc meuw un.",
            amount:11,
        },
        {
            id:3,
            url:"https://berrydashboard.io/static/media/prod-4.f1b44cc6.jpg",
            name:"Don Franklin",
            price:29.99,
            detail:"Puoze bu huctodod jiw zeg nopgo kowis fe ceup lo suncada sudlap ge rad tojerov wupu wehafu wik. Ehawno pe pijez ruvusnu ajjama ve ruhdu laddat de nobpir tohila jowel dul le ufu zifdid.",
            amount:21,
        },
        {
            id:4,
            url:"https://berrydashboard.io/static/media/prod-3.8abf940e.jpg",
            name:"Emma Fernandez",
            price:49.9,
            detail:"Digosef nici ostejhun womu jub tifu mivu icobed zapip nuji sepcuro kivla. Us vusa ulaehe eballug sapara kolza mev ra iwecu agmum segazwa gunzu giuwu emwula.",
            amount:21,
        },
    ],
    preview:{
        id:1,
        url:"https://berrydashboard.io/static/media/prod-7.4fef88dc.jpg",
        name:"Gavin Santos",
        price:14.59,
        detail:"Dutmi hiwfe lowu purhaj sozagkel odfe zagakage owcete ep sa ze deh. Riz jezep fike ojri donu kicajizu vufap afwonum ro ejihoibu na otra.",
        amount:21,
    }
     
   
}

const ProductSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {

        statusAddProduct(state, action:PayloadAction<boolean>){
            state.openAddProduct=action.payload;
        },
        addProduct(state , action :PayloadAction<Product>){
            const newProduct= action.payload;
       
            state.list.push(newProduct)
        },

        statusPreviewProduct(state, action:PayloadAction<boolean>){
            state.previewProduct=action.payload;
        },
        addPreview(state , action:PayloadAction<Product>){
         
            state.preview=action.payload
        },
         
        
    },
})

export const ProductActions = ProductSlice.actions;

//Selectors
export const ListProduct = (state: RootState) => state.product.list;
export const StateOpen = (state: RootState) => state.product.openAddProduct;
export const StatePreview = (state: RootState) => state.product.previewProduct;
export const PreviewProduct = (state: RootState) => state.product.preview;
//reducer
const ProductReducer = ProductSlice.reducer
export default ProductReducer
 