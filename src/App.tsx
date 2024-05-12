
import "./App.css";
import { Pumps2 } from "./pump2";
import { Pumps } from "./pumps";


function App() {
 

  return (
    <>
      <div className="pumps">
        {/* <div>
          <h2>Насос циркуляционный STI CR 25/4-130</h2>
          <img
            src="https://moscow.elfgroup.ru/upload/resize_cache/iblock/818/390_390_2/4_130.jpg"
            alt="STI CR 25/4-130"
          />
        </div>
        <div className="description">
          <div className="description2 ">
            <div>Диаметр условный (DN)</div>{"25 "}
            <div className="colorP">....................25</div>
          </div>
          <div className="description2">
            <div>Производительность, л./мин.</div>{" "}
            <div className="colorP">..............39</div>
          </div>
          <div className="description2">
            <div>Мощность, Вт.</div>{" "}
            <div className="colorP">............................79</div>
          </div>
          <div className="description2">
            <div>Напор, м.вод.ст.</div>{" "}
            <div className="colorP">..........................4</div>
          </div>
          <div className="description2">
            <div>Строительная длина</div>{" "}
            <div className="colorP">......................130</div>
          </div>
          <div className="description2">
            <div>Количество скоростей</div>{" "}
            <div className="colorP">......................3</div>
          </div>
          <div className="description2">
            <div>Срок службы, лет</div>{" "}
            <div className="colorP">..........................5</div>
          </div>
          <div className="description2">
            <div>Срок гарантии производителя, лет</div>{" "}
            <div className="colorP">..........2</div>
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
        </div> */}
       <div> <Pumps /></div>
      <div> <Pumps2 /></div>
      </div>
      
    </>
  );
}

export default App;
