import { useSelector } from "react-redux";
import { RootState} from "./store";
import { List } from "./package";

export const Pumps9 = () => {
  const diam = useSelector((state: RootState) => state.pumps[3].diametr);
  const productivity = useSelector(
    (state: RootState) => state.pumps[3].productivity
  );
  const power = useSelector((state: RootState) => state.pumps[3].power);
  const pressure = useSelector((state: RootState) => state.pumps[3].pressure);
  const constructionLength = useSelector(
    (state: RootState) => state.pumps[3].constructionLength
  );
  const name = useSelector((state: RootState) => state.pumps[3].name);
  const numberOfSpeeds = useSelector(
    (state: RootState) => state.pumps[3].numberOfSpeeds
  );
  const serviceLife = useSelector(
    (state: RootState) => state.pumps[3].serviceLife
  );
  const varanty = useSelector((state: RootState) => state.pumps[3].varanty);
  const img2 = useSelector((state: RootState) => state.pumps[3].img);
  const price = useSelector((state: RootState) => state.pumps[4].price1);
  const info = useSelector((state: RootState) => state.pumps[4].opicanie);

//   const dispatch = useDispatch();
  // const handleIncrement = () => {
  //     dispatch(increment(5));
  //   }
  return (
    <>
      <div></div>
      <div
        className="description"
        style={{ border: "1px solid black", borderRadius: "10px" }}
      >
        <div>
          <h2>{name}</h2>
          
        </div>
        
        <div className="img">
         <img  src={img2} alt="" /> 
         
        </div>

        <div className="description2 ">
          <div>Диаметр условный (DN)</div>
          <div className="colorP">{`_____${diam}`}</div>
        </div>
        <div className="description2">
          <div>Производительность, л./мин.</div>{" "}
          <div className="colorP">{productivity}</div>
        </div>
        <div className="description2">
          <div>Мощность, Вт.</div> <div className="colorP">{power}</div>
        </div>
        <div className="description2">
          <div>Напор, м.вод.ст.</div> <div className="colorP">{pressure}</div>
        </div>
        <div className="description2">
          <div>Строительная длина</div>{" "}
          <div className="colorP">{constructionLength}</div>
        </div>
        <div className="description2">
          <div>Количество скоростей</div>{" "}
          <div className="colorP">{numberOfSpeeds}</div>
        </div>
        <div className="description2">
          <div>Срок службы, лет</div>{" "}
          <div className="colorP">{serviceLife}</div>
        </div>
        <div className="description2">
          <div>Срок гарантии производителя, лет</div>{" "}
          <div className="colorP">{varanty}</div>
        </div>
        <div className="description3 zoomable-box">
          <div style={{ color: "red", fontWeight: "bold", fontSize: "20px" }}>
            Цена :{`${price} руб.`}
          </div>
          
        </div>
        <div className="info">{info}</div>
        {/* <button onClick={handleIncrement}>Click me</button> */}
        {/* <p>{count}</p> */}
        {/* <List /> */}
      </div>
    </>
  );
};