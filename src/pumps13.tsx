import { useSelector } from "react-redux";
import { RootState} from "./store";

export const Pumps13 = () => {
  
  const productivity = useSelector(
    (state: RootState) => state.pumps[5].productivity
  );
  const power = useSelector((state: RootState) => state.pumps[5].power);
  const pressure = useSelector((state: RootState) => state.pumps[5].pressure);
  
  const name = useSelector((state: RootState) => state.pumps[5].name1);
  
  const serviceLife = useSelector(
    (state: RootState) => state.pumps[5].serviceLife
  );
  const varanty = useSelector((state: RootState) => state.pumps[5].varanty);
  const info= useSelector((state: RootState) => state.pumps[5].opicanie);

  const img2 = useSelector((state: RootState) => state.pumps[5].img2);

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
        <div className="main_info">
        <div className="info">{info}</div>   
        </div>
        
        {/* <button onClick={handleIncrement}>Click me</button> */}
        {/* <p>{count}</p> */}
        {/* <List /> */}
      </div>
    </>
  );
};
