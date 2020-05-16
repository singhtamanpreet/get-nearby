import React, { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";
import { CustomCard } from "../../globals/partials/atoms/CustomCard";
import ITEM from "../../globals/assets/images/item.png";
import { Row, Col } from "antd";

export const Details = (props) => {
  const { match } = props;
  const { params } = match;
  const [data, setdata] = useState({ items: [] });
  const isSearch = params.feature === "search" ? true : false;

  useEffect(() => {
    if (!isSearch) {
      Axios.get(
        `http://localhost:8080/store/getAll?pin=${params.param}&&storeType=${params.feature}`
      ).then((res) => {
        const data = res.data;
        const itemDetails = data.filter((item) => item._id === params.id);
        if (itemDetails.length > 0) {
          setdata(itemDetails[0]);
        }
      });
    } else {
      Axios.get(`http://localhost:8080/store/search/${params.param}`).then(
        (res) => {
          const data = res.data;
          const itemDetails = data.filter((item) => item._id === params.id);
          if (itemDetails.length > 0) {
            setdata(itemDetails[0]);
          }
        }
      );
    }
  }, []);
  return (
    <div>
      <h1>Items</h1>
      {data.items.map((item) => {
        const { name, amount, status } = item;
        return (
          <CustomCard
            icon={
              <Row type="flex" justify="center">
                <img className="icon" src={ITEM} alt={item.status} />
                <Col span={24}>
                  <p style={{ display: "flex", justifyContent: "center" }}>
                    {status}
                  </p>
                </Col>
              </Row>
            }
          >
            <div>
              <h4>{name}</h4>
              <p>Quantity: {amount}</p>
            </div>
          </CustomCard>
        );
      })}
    </div>
  );
};
