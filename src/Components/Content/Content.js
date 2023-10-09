import React from 'react'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
function Content() {
  return (
    <>
    <div style={{padding:'40px'}}>
         <Table>
    <thead>
      <tr >
        <th style={{background:"black",color:'white'}}></th>
        <th style={{background:"black",color:"white",}}>orderListItermNrUID</th>
        <th style={{background:"black",color:"white",}}>ITEM NR.</th>
        <th style={{background:"black",color:"white",}}>MATERIAL ID</th>
        <th style={{background:"black",color:"white",}}>MAT.DESCRIPTION</th>
        <th style={{background:"black",color:"white",}}>CURRENT QTY</th>
        <th style={{background:"black",color:"white",}}>PREVIOUS QTY</th>
        <th style={{background:"black",color:"white",}}>QTY<br/>DIFF</th>
        <th style={{background:"black",color:"white",}}>order Comment</th>
        <th style={{background:"black",color:"white",}}><button style={{borderRadius:'50%',height:'30px',width:'30px',background:'#0E72ED',border:'none',color:"white"}}>+</button>
        <button style={{borderRadius:'50%',marginLeft:'5px',height:'30px',width:'30px',background:'red',border:'none',color:"white"}}>-</button></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td> <Col sm="10" style={{width:'40px'}}>
          <Form.Control type="password" placeholder="X" style={{border:'1px solid black'}}/>
        </Col> </td>
        <td> <Col sm="10" style={{width:'80px'}}>
          <Form.Control type="password" placeholder="XXXX"style={{border:'1px solid black'}} />
        </Col> </td>
        <td> <Col sm="10">
          <Form.Control type="password" placeholder="1" style={{border:'1px solid black'}}/>
        </Col> </td>
        <td> <Col sm="10" style={{width:'80px'}}>
          <Form.Control type="password" placeholder="XXXX" style={{border:'1px solid black'}}/>
        </Col> </td>
        <td> <Col sm="10" style={{width:'200px'}}>
          <Form.Control type="password" placeholder="XXXX"style={{border:'1px solid black'}} />
        </Col> </td>
        <td> <Col sm="10" style={{width:'80px'}}>
          <Form.Control type="password" placeholder="XXXX"style={{border:'1px solid black'}} />
        </Col> </td>
        <td> <Col sm="10" style={{width:'80px'}}>
          <Form.Control type="password" placeholder="XXXX"style={{border:'1px solid black'}} />
        </Col> </td>
        <td> <Col sm="10" style={{width:'80px'}}>
          <Form.Control type="password" placeholder="XXXX"style={{border:'1px solid black'}} />
        </Col> </td>
        <td> <Col sm="10" style={{width:'80px'}}>
          <Form.Control type="password" placeholder="XXXX"style={{border:'1px solid black'}} />
        </Col> </td>
        <td></td>
        
      </tr>
      <tr>
        <td> <Col sm="10" style={{width:'40px'}}>
          <Form.Control type="password" placeholder="X" style={{border:'1px solid black'}}/>
        </Col> </td>
        <td> <Col sm="10" style={{width:'80px'}}>
          <Form.Control type="password" placeholder="XXXX" style={{border:'1px solid black'}}/>
        </Col> </td>
        <td> <Col sm="10">
          <Form.Control type="password" placeholder="1"style={{border:'1px solid black'}} />
        </Col> </td>
        <td> <Col sm="10" style={{width:'80px'}}>
          <Form.Control type="password" placeholder="XXXX" style={{border:'1px solid black'}}/>
        </Col> </td>
        <td> <Col sm="10" style={{width:'200px'}}>
          <Form.Control type="password" placeholder="XXXX"style={{border:'1px solid black'}} />
        </Col> </td>
        <td> <Col sm="10" style={{width:'80px'}}>
          <Form.Control type="password" placeholder="XXXX"style={{border:'1px solid black'}} />
        </Col> </td>
        <td> <Col sm="10" style={{width:'80px'}}>
          <Form.Control type="password" placeholder="XXXX" style={{border:'1px solid black'}}/>
        </Col> </td>
        <td> <Col sm="10" style={{width:'80px'}}>
          <Form.Control type="password" placeholder="XXXX"style={{border:'1px solid black'}} />
        </Col> </td>
        <td> <Col sm="10" style={{width:'80px'}}>
          <Form.Control type="password" placeholder="XXXX"style={{border:'1px solid black'}} />
        </Col> </td>
        <td></td>
        
      </tr>
      <tr>
        <td> <Col sm="10" style={{width:'40px'}}>
          <Form.Control type="password" placeholder="X" style={{border:'1px solid black'}}/>
        </Col> </td>
        <td> <Col sm="10" style={{width:'80px'}}>
          <Form.Control type="password" placeholder="XXXX"style={{border:'1px solid black'}} />
        </Col> </td>
        <td> <Col sm="10">
          <Form.Control type="password" placeholder="3"style={{border:'1px solid black'}}/>
        </Col> </td>
        <td> <Col sm="10" style={{width:'80px'}}>
          <Form.Control type="password" placeholder="XXXX"style={{border:'1px solid black'}} />
        </Col> </td>
        <td> <Col sm="10" style={{width:'200px'}}>
          <Form.Control type="password" placeholder="XXXX" style={{border:'1px solid black'}}/>
        </Col> </td>
        <td> <Col sm="10" style={{width:'80px'}}>
          <Form.Control type="password" placeholder="XXXX" style={{border:'1px solid black'}}/>
        </Col> </td>
        <td> <Col sm="10" style={{width:'80px'}}>
          <Form.Control type="password" placeholder="XXXX"style={{border:'1px solid black'}} />
        </Col> </td>
        <td> <Col sm="10" style={{width:'80px'}}>
          <Form.Control type="password" placeholder="XXXX" style={{border:'1px solid black'}}/>
        </Col> </td>
        <td> <Col sm="10" style={{width:'80px'}}>
          <Form.Control type="password" placeholder="XXXX" style={{border:'1px solid black'}}/>
        </Col> </td>
        <td></td>
        
      </tr>
    </tbody>
    
  </Table>
  <h4>(refered from MaterialEntity)</h4></div>
  </>
  )
}

export default Content