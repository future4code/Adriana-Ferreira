import { useEffect, useState } from "react";
import axios from "axios";

const useRequestDetail = (initialState, url) => {
  const [data, setData] = useState(initialState);

  const getData = () => {
    axios
      .get(url)
      .then((res) => {
         setData(res.data.results);
      })
      .catch((err) => alert(err));
  };

  useEffect(() => {
    getData();
  }, [url]);

  return data;
};

export default useRequestDetail;
