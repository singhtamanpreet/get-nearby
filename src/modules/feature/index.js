import React, { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";
import OPEN from "../../globals/assets/images/open-store.png";
import CLOSE from "../../globals/assets/images/close-store.png";
import { FEATURE_HEADER_MAPPING } from "../../globals/config/constants";
import { CustomCard } from "../../globals/partials/atoms/CustomCard";
import { Empty, Row, Col } from "antd";
import { DETAILS } from "../../globals/config/urlMapping";

export const Feature = (props) => {
  const { match, history } = props;
  const { params } = match;
  const [data, setdata] = useState([]);
  const isSearch = params.feature === "search" ? true : false;
  useEffect(() => {
    if (!isSearch) {
      Axios.get(`http://localhost:8080/store/getAll?pin=${params.param}`).then(
        (res) => {
          const data = res.data;
          setdata(data);
        }
      );
    } else {
      Axios.get(`http://localhost:8080/store/search/${params.param}`).then(
        (res) => {
          const data = res.data;
          setdata(data);
        }
      );
    }
  }, []);

  return (
    <div>
      <h2>{FEATURE_HEADER_MAPPING[params.feature]}</h2>
      {data.map((item) => {
        const id = item._id;
        let isOpen = item.status === "open" ? true : false;
        if (isSearch) {
          const itemSearched = params.param;
          const itemArray = item.items.filter(
            (subItem) => subItem.name === itemSearched
          );
          if (itemArray.length > 0) {
            isOpen = itemArray[0].status === "available" ? true : false;
          } else {
            isOpen = false;
          }
        }
        const { distance, address, location, storeType } = item;
        const icon = isOpen ? OPEN : CLOSE;

        return (
          <CustomCard
            onClick={() =>
              history.push(
                DETAILS.replace(":feature", params.feature)
                  .replace(":param", params.param)
                  .replace(":id", id)
              )
            }
            key={id}
            icon={<img className="icon" src={icon} alt={item.status} />}
            disabled={!isOpen}
          >
            <div>
              <h4>{storeType}</h4>
              <h5>Distance: {distance}</h5>
              <p>
                Address: {location}, {address}
              </p>
              <h4>Zone:</h4>
              <Row type="flex" align="middle">
                <Col span={8}>Green:</Col>
                <Col span={12}>
                  <div className="green-line" />
                </Col>
              </Row>
            </div>
          </CustomCard>
        );
      })}
      {data.length === 0 && (
        <div>
          <br />
          <br />
          <br />
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        </div>
      )}
    </div>
  );
};
