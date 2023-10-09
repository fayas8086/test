import React from 'react'
import Form from 'react-bootstrap/Form';
import "./disply.css"
import Button from 'react-bootstrap/Button';
function Display() {
  return (
    <>
     <div className="third-second">
              <div className="prep">
                <div className="input-third"> <Form.Label column sm="2"  style={{width:"153px",fontWeight:"bold",textAlign:"left"}}>
          PREP BY
        </Form.Label>
        <Form.Control type="text" placeholder="XXXX" style={{width:"150px",height:"35px",border:'1px solid black'}} /></div>
        <div className="input-third"> 
        <Form.Label column sm="2"  style={{width:"153px",fontWeight:"bold",textAlign:"left"}}>
          CHK BY
        </Form.Label>
        <Form.Control type="text" placeholder="XXXX" style={{width:"150px",height:"35px",border:'1px solid black'}} /></div>
        <div className="input-third"> <Form.Label column sm="2"  style={{width:"153px",fontWeight:"bold",textAlign:"left"}}>
          APPROVED BY 
        </Form.Label>
        <Form.Control type="text" placeholder="XXXX" style={{width:"150px",height:"35px",border:'1px solid black'}} /></div>
              </div>
              
              <div className="last">
                <div className="buildid">
                  <p>BUILDING ID</p>
                  <p>____</p>
                  <p>____</p>
                  <p>____</p>
                  <p>____</p>
                </div>
                <div className="buildadd">
                  <p>BUILDING ADDRESS</p>
                  <p>____</p>
                  <p>____</p>
                  <p>____</p>
                  <p>____</p>
                </div>
              </div>
              
        </div>
        <div className="third-second">
              <div className="prep">
                <div className="input-third"> <Form.Label column sm="2"  style={{width:"153px",fontWeight:"bold",textAlign:"left"}}>
          PREP BY
        </Form.Label>
        <Form.Control type="text" placeholder="XXXX" style={{width:"150px",height:"35px",border:'1px solid black'}} /></div>
        <div className="input-third"> 
        <Form.Label column sm="2"  style={{width:"153px",fontWeight:"bold",textAlign:"left"}}>
          CHK BY
        </Form.Label>
        <Form.Control type="text" placeholder="XXXX" style={{width:"150px",height:"35px",border:'1px solid black'}} /></div>
        <div className="input-third"> <Form.Label column sm="2"  style={{width:"153px",fontWeight:"bold",textAlign:"left"}}>
          APPROVED BY 
        </Form.Label>
        <Form.Control type="text" placeholder="XXXX" style={{width:"150px",height:"35px",border:'1px solid black'}} /></div>
              </div>
              </div>
              <div style={{display:"flex",justifyContent:'space-evenly',gap:'622px',marginTop:'20px', marginBottom:'20px'}}>
              <div style={{display:'flex',gap:'20px'}}>
              <Button variant="success">SEND FOR CHK</Button>
                  

                
              <Button variant="success">SEND FOR APP</Button>
                  

              <Button variant="success"> APPROVE</Button>
                 
              </div>
              <div style={{display:'flex',gap:'20px'}} >
              <Button variant="danger"> DELETE</Button>
                 

              <Button variant="warning">CANCEL</Button>
                  
                <Button variant="success"> SAVE</Button>
                  
              </div>
              
              </div>
      </>
  )
}

export default Display