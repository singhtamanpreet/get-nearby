import React, { useState } from "react";
import { useEffect } from "react";
import { Button } from 'antd';
import { Select } from 'antd';
import Axios from "axios";

export const Details = (props) => {
  const { match } = props;
  const { params } = match;
  const [slot, selectedSlot] = useState([]);
  useEffect(() => {
      Axios.get(`http://localhost:8080/store/getAll?pin=${params.param}`).then(
        (res) => {
          const slot = res.data.map((item) => {
            return(
              item.timeSlot.map((item1)=> {
                return(
                  item1.slot
                )
              })
              )
          });
          selectedSlot(slot);
        }
      )}, [params.param]);

  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  console.log(slot, )
  return <div>
    Please Select your time slot
    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
    <Select defaultValue="Slots" style={{ width: 250 }} onChange={handleChange}>
      {slot.map((item, index) => <Select.Option value={item.slot} key={index}>{item.slot}</Select.Option>)}}
    </Select>
    <Button type="primary">Apply</Button>
  </div>,
  </div>;
};
