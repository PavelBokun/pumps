import "./App.css";
import { Pumps10 } from "./pump10";
import { Pumps11 } from "./pump11";
import { Pumps12 } from "./pump12";
import { Pumps2 } from "./pump2";
import { Pumps3 } from "./pump3";
import { Pumps4 } from "./pump4";
import { Pumps5 } from "./pump5";
import { Pumps6 } from "./pump6";
import { Pumps7 } from "./pump7";
import { Pumps8 } from "./pump8";
import { Pumps9 } from "./pump9";
import { Pumps } from "./pumps";
import { Pumps13 } from "./pumps13";
import { Table } from "./table";

function App() {
  return (
    <>
      <div className="ardonix">
        <div>
          <img
            src="https://ardonix.by/upload/CNext/3cd/2yovbfb8ye2h54l3bg6b4syu01nsk5i4/logo_ardonix.png"
            // width="500"
            alt=""
          />
        </div>
        <div
          style={{
            color: "darkblue",
            fontSize: "45px",
            fontWeight: "bold",
            paddingLeft: "50px",
          }}
        >
          +375 29 304 22 00 Павел
        </div>
          
      </div>

      <div className="pumps">
        <div className="pump">
          {" "}
          <Pumps />
        </div>
        <div className="pump">
          {" "}
          <Pumps2 />
        </div>
        <div className="pump">
          <Pumps3 />
        </div>
        <div className="pump">
          <Pumps4 />
        </div>
        <div className="pump">
          <Pumps5 />
        </div>
        <div className="pump">
          <Pumps6 />
        </div>
        <div className="pump">
          <Pumps7 />
        </div>
        <div className="pump">
          <Pumps8 />
        </div>
        <div className="pump">
          <Pumps9 />
        </div>
        <div className="pump">
          <Pumps10 />
        </div>
        <div className="pump">
          <Pumps11 />
        </div>
        <div className="pump">
          <Pumps12 />
        </div>
        <div className="pump">
          <Pumps13 />
        </div>
        <div>
          {" "}
          <Table />{" "}
        </div>
      </div>
    </>
  );
}

export default App;
