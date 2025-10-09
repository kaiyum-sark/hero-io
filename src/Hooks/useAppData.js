import axios from "axios";
import { useEffect, useState } from "react";

const useAppData = () => {
  const [appData, setAppData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios("../appData.json")
      .then((data) => {
        setTimeout(() => {
          setAppData(data.data);
          setLoading(false);
        }, 1000);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);
  return { appData, loading, error };
};
export default useAppData;
