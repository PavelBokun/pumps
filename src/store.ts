import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

// Define the initial state interface
type PumpsType = {
  name: string;
  price: number;
  quantity: number;
  diametr: number;
  id: number;
  productivity: number;
  power: number;
  pressure: number;
  constructionLength: number;
  numberOfSpeeds: number;
  serviceLife: number;
  varanty: number;
  img: string;
  table: string;
};

// Define the initial state
const initialState: PumpsType[] = [
  {
    name: "Насос циркуляционный STI CR 25/4-130",
    price: 90,
    quantity: 50,
    diametr: 25,
    id: 1,
    productivity: 39,
    power: 79,
    pressure: 4,
    constructionLength: 130,
    numberOfSpeeds: 3,
    serviceLife: 5,
    varanty: 2,
    img: "https://moscow.elfgroup.ru/upload/resize_cache/iblock/818/390_390_2/4_130.jpg",
    table:
      "https://moscow.elfgroup.ru/upload/medialibrary/49a/2c6yulnkykyf15krb5w0d1hmo508pvgb/nasos_cirkulyacionnyj_sti_cr_560.png",
  },
  {
    name: "Насос циркуляционный STI CR 25/4-180",
    price: 90,
    quantity: 50,
    diametr: 25,
    id: 2,
    productivity: 39,
    power: 79,
    pressure: 4,
    constructionLength: 180,
    numberOfSpeeds: 3,
    serviceLife: 5,
    varanty: 2,
    img: "https://moscow.elfgroup.ru/upload/resize_cache/iblock/31a/390_390_2/nasos_tsirkulyatsionnyy_sti_25_6_500.jpg",
    table:
      "https://moscow.elfgroup.ru/upload/medialibrary/49a/2c6yulnkykyf15krb5w0d1hmo508pvgb/nasos_cirkulyacionnyj_sti_cr_560.png",
  },
  {
    name: "Насос циркуляционный STI CR 32/4-180",
    price: 90,
    quantity: 50,
    diametr: 32,
    id: 3,
    productivity: 32,
    power: 60,
    pressure: 4,
    constructionLength: 180,
    numberOfSpeeds: 3,
    serviceLife: 5,
    varanty: 2,
    img: "https://moscow.elfgroup.ru/upload/resize_cache/iblock/9cc/xcx2quhnepilnsxl8yru3c3vgtgyldn9/390_390_2/nasos_tsirkulyatsionnyy_sti_32_8_500_.jpg",
    table:
      "https://moscow.elfgroup.ru/upload/medialibrary/49a/2c6yulnkykyf15krb5w0d1hmo508pvgb/nasos_cirkulyacionnyj_sti_cr_560.png",
  },
];

// Create a counter slice
const counterSlice = createSlice({
  name: "pumps",
  initialState,
  reducers: {
    increment(state, action: PayloadAction<number>) {
      state.forEach((pump) => {
        pump.quantity += action.payload;
      });
    },
  },
});

// Extract the actions and reducer from the slice
export const { increment } = counterSlice.actions;
//  export default counterSlice.reducer;

// Configure the store
const store = configureStore({
  reducer: {
    pumps: counterSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
