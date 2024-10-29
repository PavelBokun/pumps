import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import image1 from './assets/nasos_tsirkulyatsionnyy_sti_25_6_500.jpg';
import image130 from './assets/4_130.jpg'
import image32 from './assets/nasos_tsirkulyatsionnyy_sti_32_8_500_.jpg'
import image40 from './assets/TT000017721_1.jpg'
import image250 from './assets/up250p_litso.jpg'
import image400 from './assets/up400p_litso.jpg'
import image550 from './assets/up550p_litso_500.jpg'
import imageV from './assets/TT000018054_1.jpg'
import imageN from './assets/TT000018055_1.jpg'



// Define the initial state interface
type PumpsType = {
  name: string;
  name1?: string;
  name2?: string;
  name3?: string;
  name4?: string;
  name5?: string;
  name6?: string;
  name7?: string;
  name8?: string;
  name9?: string;
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
  constructionLength?: number;
  constructionLength1?: number;
  constructionLength2?: number;
  constructionLength3?: number;
  constructionLength4?: number;
  constructionLength5?: number;
  constructionLength6?: number;
  constructionLength7?: number;
  constructionLength8?: number;
  constructionLength9?: number;
  numberOfSpeeds?: number;
  serviceLife: number;
  varanty: number;
  img: string;
  img1?: string;
  img2?: string;
  img3?: string;
  img4?: string;
  img5?: string;
  img6?: string;
  img7?: string;
  img8?: string;
  img9?: string;

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
    img: image130,
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
    img:image1,
      table:
      "https://moscow.elfgroup.ru/upload/medialibrary/49a/2c6yulnkykyf15krb5w0d1hmo508pvgb/nasos_cirkulyacionnyj_sti_cr_560.png",
  },
  {
    name: "Насос циркуляционный STI CR 32/4-180",
    name1: "Насос циркуляционный STI CR 32/10-220",
    name2: "Насос циркуляционный STI CR 32/12-220",
    name3: "Насос циркуляционный STI CR 40/10-220F",
    name4: "Насос циркуляционный STI CR 40/12-220F",
    name5: "Насос циркуляционный STI CR 40/14-250F",
    name6: " Насос циркуляционный STI CR 50/10-220F",
    name7: " Насос циркуляционный STI CR 50/12-220F",
    name8: " Насос циркуляционный STI CR 50/14-250F",
    name9: " Насос циркуляционный STI CR 50/14-280F",

    price: 90,
    quantity: 50,
    diametr: 32,
    id: 3,
    productivity: 32,
    power: 60,
    pressure: 4,
    constructionLength: 180,
    constructionLength1: 220,
    constructionLength2: 220,
    constructionLength3: 220,
    constructionLength4: 220,
    constructionLength5: 250,
    constructionLength6: 220,
    constructionLength7: 220,
    constructionLength8: 250,
    constructionLength9: 280,
    numberOfSpeeds: 3,
    serviceLife: 5,
    varanty: 2,
    img: image32,
    img1: image32,
    img2: image40,
    img3: image40,
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
    img: image250,
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
    img: image250,
    img2: image400,
    img3: image550,
    table:
      "https://moscow.elfgroup.ru/upload/medialibrary/49a/2c6yulnkykyf15krb5w0d1hmo508pvgb/nasos_cirkulyacionnyj_sti_cr_560.png",
  },
  {
    name: " Насос вибрационный STI VD 0.42/60 - 16 (нижн. забор.)",
    name1: "Насос вибрационный STI VU 0.42/60 - 16 (верх. забор.)",

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
    serviceLife: 2,
    varanty: 1,
    img: imageN,
    img2: imageV,
    table: "",
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
