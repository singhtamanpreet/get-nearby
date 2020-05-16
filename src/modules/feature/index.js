import React, { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";
import OPEN from "../../globals/assets/images/open-store.png";
import CLOSE from "../../globals/assets/images/close-store.png";
import { FEATURE_HEADER_MAPPING } from "../../globals/config/constants";
import { CustomCard } from "../../globals/partials/atoms/CustomCard";
import { Empty, Row, Col, Select } from "antd";
import { DETAILS } from "../../globals/config/urlMapping";
import { uniqBy } from "lodash";
import FormItem from "antd/lib/form/FormItem";

export const Feature = (props) => {
  const { match, history } = props;
  const { params } = match;
  const [data, setdata] = useState([]);
  const [slot, setselectedSlot] = useState([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState();

  const isSearch = params.feature === "search" ? true : false;
  useEffect(() => {
    if (!isSearch) {
      Axios.get(
        `http://localhost:8080/store/getAll?pin=${params.param}&&storeType=${params.feature}`
      ).then((res) => {
        const data = res.data;
        const slotData = getSlotData(data);
        setselectedSlot(slotData);
        setdata(data);
      });
    } else {
      Axios.get(`http://localhost:8080/store/search/${params.param}`).then(
        (res) => {
          const data = res.data;
          const slotData = getSlotData(data);
          setselectedSlot(slotData);
          setdata(data);
        }
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getSlotData = (data) => {
    let slotArrays = [];
    data.map((item) => {
      const items = item.timeSlot.map((item) => ({
        label: `${item.slot} ${item.slotMeridiem}`,
        value: item.slot,
      }));
      slotArrays = [...slotArrays, ...items];
      return [];
    });
    return (slotArrays = uniqBy(slotArrays, "value"));
  };
  function titleCase(str) {
    str = str.toLowerCase().split(" ");
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(" ");
  }
  const show_zone = selectedTimeSlot !== undefined ? true : false;

  return (
    <div>
      <h2>{FEATURE_HEADER_MAPPING[params.feature]}</h2>
      <FormItem style={{ width: "100%" }} label={"Time slot"}>
        <Select
          placeholder="Please select the timeslot"
          onChange={(value) => {
            setSelectedTimeSlot(value);
          }}
          options={slot}
        />
      </FormItem>

      {data.map((item) => {
        const id = item._id;
        const storeLimit = item.storeLimit;
        const timeSlot = item.timeSlot;
        let slotCount = "0";
        timeSlot.map((item2) => {
          if (item2.slot === selectedTimeSlot) {
            slotCount = item2.slotCount;
          }
          return [];
        });
        const no_of_people_allowed = parseInt(storeLimit) - parseInt(slotCount);
        let zone_color = "";
        const zoneThreshHold = item.zoneThreshHold;
        const orange_threshhold = zoneThreshHold[0].orange;
        const red_threshhold = zoneThreshHold[1].red;
        if (no_of_people_allowed >= parseInt(orange_threshhold)) {
          zone_color = "green";
        } else if (no_of_people_allowed >= parseInt(red_threshhold)) {
          zone_color = "orange";
        } else {
          zone_color = "red";
        }
        let isOpen = item.status === "open" ? true : false;
        let status = item.status;
        if (isSearch) {
          const itemSearched = params.param;
          const itemArray = item.items.filter(
            (subItem) => subItem.name === itemSearched
          );
          if (itemArray.length > 0) {
            status = itemArray[0].status;
            isOpen = itemArray[0].status === "available" ? true : false;
          } else {
            isOpen = false;
          }
        }
        const { distance, address, location, storeName } = item;
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
            icon={
              <Row type="flex" justify="center">
                <img className="icon" src={icon} alt={item.status} />
                <Col span={24}>
                  <p style={{ display: "flex", justifyContent: "center" }}>
                    {status}
                  </p>
                </Col>
              </Row>
            }
            disabled={!isOpen}
          >
            <div>
              <h4>{storeName}</h4>
              <h5>Distance: {distance}</h5>
              <p>
                Address: {location}, {address}
              </p>
              {show_zone && (
                <div>
                  <h4>Zone:</h4>
                  <Row type="flex" align="middle">
                    <Col span={8}>{titleCase(zone_color)} :</Col>
                    <Col span={12}>
                      <div className={`${zone_color}-line`} />
                    </Col>
                  </Row>
                </div>
              )}
            </div>
          </CustomCard>
        );
      })}
      {data.length === 0 && (
        <div>
          <CustomCard>
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
          </CustomCard>
        </div>
      )}
    </div>
  );
};
