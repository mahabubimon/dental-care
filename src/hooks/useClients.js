import { useEffect, useState } from "react";

const useClients = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch("https://mahabubimon.github.io/json-fake-data/dentalCareClients.json")
      .then((res) => res.json())
      .then((data) => setClients(data));
  }, []);

  return { clients };
};

export default useClients;
