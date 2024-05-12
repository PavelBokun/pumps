import { useDispatch, useSelector } from "react-redux";
import { RootState, increment } from "./store";

export const Pumps2 = () => {
  const diam = useSelector((state: RootState) => state.pumps[1].diametr);
  const productivity = useSelector(
    (state: RootState) => state.pumps[1].productivity
  );
  const power = useSelector((state: RootState) => state.pumps[1].power);
  const pressure = useSelector((state: RootState) => state.pumps[1].pressure);
  const constructionLength = useSelector(
    (state: RootState) => state.pumps[1].constructionLength
  );
  const name = useSelector((state: RootState) => state.pumps[1].name);
  const numberOfSpeeds = useSelector(
    (state: RootState) => state.pumps[1].numberOfSpeeds
  );
  const serviceLife = useSelector(
    (state: RootState) => state.pumps[1].serviceLife
  );
  const varanty = useSelector((state: RootState) => state.pumps[1].varanty);
  const img2 = useSelector((state: RootState) => state.pumps[1].img);
  const dispatch = useDispatch();
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
        <div>
          <img src={img2} alt="" />
          
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
            Цена :{" "}
          </div>{" "}
          <div style={{ color: "red", fontWeight: "bold", fontSize: "20px" }}>
            {" "}
            90 pуб.{" "}
          </div>
        </div>
        {/* <button onClick={handleIncrement}>Click me</button> */}
        {/* <p>{count}</p> */}
      </div>
    </>
  );
};
