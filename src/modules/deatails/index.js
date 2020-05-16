import React, { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";

export const Details = (props) => {
  const { match } = props;
  const { params } = match;
  const [data, setdata] = useState([]);
  useEffect(() => {
    Axios.get(`http://localhost:8080/store/getAll?pin=${params.param}`).then(
      (res) => {
        const data = res.data;
        setdata(data);
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>I am details page</div>;
};
