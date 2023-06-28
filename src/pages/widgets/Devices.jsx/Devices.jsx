import React, { useEffect } from "react";
import { useGlobalContext } from "../../../context/context";

function Devices() {
  const { setApiData } = useGlobalContext();

  useEffect(() => {
    const getDevices = async () => {
      try {
        const deviceData = await fetch("http://127.0.0.1:3001/service/device");
        const data = await deviceData.json();
        console.log(data);
        setApiData(data);
      } catch (err) {
        console.log(err);
      }
    };
    getDevices();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div>Devices</div>;
}

export default Devices;
