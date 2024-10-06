import { useEffect, useState } from "react";

export const Pumps14 = () => {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prev) => !prev);
    }, 1500); // меняйте интервал под свои нужды

    return () => clearInterval(interval);
  }, []);

  return isVisible ? (
    <div style={{ visibility: "visible" }} className="endList">
      <div ><h2>Адрес склада: Минск ул. Промышленная 23.</h2></div>
      <div><p className="center">Время работы с 8.30 по 17.30</p></div>
      
    </div>
  ) : (
    <div style={{ visibility: "hidden" }}>
     
    </div>
  );
};
