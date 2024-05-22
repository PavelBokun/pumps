import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the initial state interface
type PumpsType = {
  name: string;
  name1?: string;
  name2?: string;
  name3?: string;
  price: number;
  price1?: number;
  price2?: number;
  price3?: number;
  quantity: number;
  diametr: number;
  id: number;
  productivity: number;
  power: number;
  pressure: number;
  constructionLength: number;
  numberOfSpeeds?: number;
  serviceLife: number;
  varanty: number;
  img: string;
  img2?: string;
  img3?: string;
  table: string;
  opicanie?: string;
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
  {
    name: "Насос дренажный STI UP-250 P ",
    price: 90,
    quantity: 50,
    diametr: 32,
    id: 3,
    productivity: 11,
    power: 250,
    pressure: 8,
    constructionLength: 180,
    numberOfSpeeds: 3,
    serviceLife: 5,
    varanty: 1,
    img: "https://tula.elfgroup.ru/upload/resize_cache/iblock/d8c/390_390_2/up250p_litso.jpg",
    table:
      "https://moscow.elfgroup.ru/upload/medialibrary/49a/2c6yulnkykyf15krb5w0d1hmo508pvgb/nasos_cirkulyacionnyj_sti_cr_560.png",
  },
  {
    name: "Насос дренажный STI UP-250 P ",
    name1: "Насос дренажный STI UP-400 P",
    name2: "Насос фекальный STI FP-550 P",
    opicanie:
      "Погружные дренажные насосы STI серии UP спроектированы и выполнены для перекачивания сточных вод без волокон преимущественно для домашнего использования, постоянного применения с ручным или автоматическим управлением, для осушения затопленных подвалов и гаражей, для выкачивания дренажных колодцев, выкачивания сточных колодцев дождевой воды или из водосточных труб и т.д.",
    price: 90,
    price1: 100,
    price2: 90,
    price3: 90,
    quantity: 50,
    diametr: 32,
    id: 3,
    productivity: 11,
    power: 250,
    pressure: 8,
    constructionLength: 180,
    numberOfSpeeds: 3,
    serviceLife: 5,
    varanty: 1,
    img: "https://tula.elfgroup.ru/upload/resize_cache/iblock/746/390_390_2/up400p_litso.jpg",
    img2: "https://moscow.elfgroup.ru/upload/medialibrary/b10/modelnyy_ryad_drenazhnye_fekalnye_sti.jpg",
    img3: "https://moscow.elfgroup.ru/upload/resize_cache/iblock/51c/390_390_2/fp550p_litso.jpg",
    table:
      "https://moscow.elfgroup.ru/upload/medialibrary/49a/2c6yulnkykyf15krb5w0d1hmo508pvgb/nasos_cirkulyacionnyj_sti_cr_560.png",
  },
  {
    name: " Насос вибрационный STI VD 0.42/60 - 16 (нижн. подкл.)",
    name1: "Насос вибрационный STI VU 0.42/60 - 16 (верх. подкл.)",

    opicanie:
      "Вибрационный насос STI серии VD (U) предназначен для подачи пресной воды, температурой до +35°С из скважин с внутренним диаметром более 100 мм, шахтных колодцев и открытых водоемов с глубины до 3 метров. Принцип работы насоса основан на использовании переменной силы тока, превращенной посредством упругого амортизатора в механические колебания якоря и поршня. Поршень, вибрируя, создает гидравлический удар в стакане. Одновременно клапан закрывает входные отверстия, и вода вытесняется в напорный патрубок. Вода не должна содержать агрессивных примесей. Массовая доля механических примесей не более 0,01 %. Насос способен перекачивать воду на большие расстояния горизонтально (свыше 100 м), т.е. подавать воду из водоемов, расположенных на значительном расстоянии от мест использования воды.",
    price: 90,
    price1: 100,
    quantity: 50,
    diametr: 25,
    id: 3,
    productivity: 25,
    power: 250,
    pressure: 60,
    constructionLength: 180,
    serviceLife: 3,
    varanty: 1,
    img: "https://moscow.elfgroup.ru/upload/resize_cache/iblock/368/umkfi24k6c1i9dwy9vcxncb6yesdlwpf/390_390_2/TT000018055_1.jpg",
    img2: "https://moscow.elfgroup.ru/upload/resize_cache/iblock/880/lybbpmay2ah58vhkxa5qnwg4m7fiayof/390_390_2/TT000018054_1.jpg",
    table:"",
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
