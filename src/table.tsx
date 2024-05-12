import { useSelector } from "react-redux";
import { RootState } from "./store";

 export const Table=()=>{
  const table = useSelector((state: RootState) => state.pumps[1].table);

    return(
        <div><img src={table}/></div>
    )
}
