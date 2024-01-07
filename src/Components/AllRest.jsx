import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Row,Col} from 'react-bootstrap';
import RestCard from './RestCard';

function AllRest() {
  //api fetching
  const base_Url='https://restaurant-backend-oguc.onrender.com/restaurants'
  const [AllRestData,setAllrest]=useState([])  //tohold array of restaurant data
  
  const fetchData=async()=>{
    const result= await axios.get(base_Url);
    console.log(result.data);
    setAllrest(result.data)
  }
  useEffect(()=>{
    fetchData();
  },[])

  console.log(AllRestData);

  return (
    <div>
      <Row>
        {AllRestData.map(item=>(
          <Col sm={12} md={6} lg={4} xl={3}>
          <RestCard restaurants={item}/>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default AllRest