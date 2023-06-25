import React, { useState, useEffect } from "react";

function Devices() {
  const [devices, setDevices] = useState();

  const getDevices = async () => {
    try {
      const deviceData = await fetch("http://127.0.0.1:3001/service/device");
      const data = await deviceData.json();
      console.log(data);
      setDevices(data);
      // document.cookie = `token=${data.token}`;
    } catch (err) {
      console.log(err);
    }
  };
  getDevices();
  return <div>Devices</div>;
}

export default Devices;
