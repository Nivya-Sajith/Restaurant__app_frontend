import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import Restop from './Restop';
import Restreview from './Restreview';

function ViewRest() {
  // const paraId=useParams();
  // console.log(paraId.id);
  const [restDetails, setDetails]=useState({})
  // destructure
  const {id}=useParams();
  console.log(id);

  //API call to get details of the particular restaurant using the path parameter
  
  const base_Url='https://restaurant-backend-oguc.onrender.com/restaurants'
 
  const fetchRest=async()=>{
    const result=await axios.get(`${base_Url}/${id}`)
    console.log(result);
    setDetails(result.data)
    console.log(restDetails);
  }

  useEffect(()=>{
    fetchRest();
  },[])
  return (
    <div>

      <Row>
        <Col>
        <img src={restDetails.photograph} alt=""  style={{width:'450px',height:'500px' ,marginTop:'40px',marginLeft:'55px'}}/>
        </Col>
        <Col>
        <div class="container my-5 p-5">
<h1 className='text-center'>{restDetails.name}</h1>
        <MDBListGroup  style={{ minWidth: '22rem' }} >
      <MDBListGroupItem>Address : {restDetails.address}</MDBListGroupItem>
      <MDBListGroupItem>Neighborhood:{restDetails.neighborhood}</MDBListGroupItem>

      <MDBListGroupItem>Cuisine Type : {restDetails.cuisine_type}</MDBListGroupItem>
      <MDBListGroupItem><Restop op={restDetails.operating_hours}/></MDBListGroupItem>
      <MDBListGroupItem><Restreview view={restDetails.reviews}/></MDBListGroupItem>

    </MDBListGroup>
        </div>
        </Col>
      </Row>
    </div>
  )
}

export default ViewRest