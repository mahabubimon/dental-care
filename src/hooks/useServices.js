import { useEffect, useState } from "react";

const useServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://mahabubimon.github.io/json-fake-data/dentalCareServices.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return {services};
};

export default useServices;
