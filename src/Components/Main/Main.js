import React from 'react'
import image1 from '../../Assets/images/roofer-pana.png'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
function Main() {
  return (
    <>
    <div style={{display:'flex'}}>

<div style={{width:"50%",padding:"40px", marginTop:"100px",fontWeight:"bold" }}>
<Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          ORDER LIST ID
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="XXXXXX" style={{border:'1px solid black'}} />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword"style={{marginTop:'50px'}}>
        <Form.Label column sm="2">
          BUILDING ID 
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="XXXXXX"style={{border:'1px solid black'}} />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword" style={{marginTop:'50px'}}>
        <Form.Label column sm="2">
          BUILDING NAME
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="XXXXXXX"style={{border:'1px solid black'}} />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword" style={{marginTop:'50px'}}>
        <Form.Label column sm="2">
          BUILDING ADDRESS
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="XXXXX"style={{border:'1px solid black'}} />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword" style={{marginTop:'50px'}}>
        <Form.Label column sm="2">
          ORDER DESCRIPTION
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="XXXXXX"style={{border:'1px solid black'}} />
        </Col>
      </Form.Group>
</div>
<div>
<img src={image1} style={{height:"700px"}} ></img>
</div>


    </div>
    </>
  )
}

export default Main