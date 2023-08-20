import axios from 'axios';
import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Card from 'react-bootstrap/Card';


function SkinsCard({Skins}) {
const id=useParams();
const [skins,setSkins]=useState([])
const [show, setShow] = useState(false);

  

const item=Skins[id.id]
console.log(item.name)

useEffect(()=>{
axios.post('http://localhost:7000/skin/getSkin',{nameChamipon:item.name}).then(res=>setSkins(res.data.skins))
console.log(skins)
},[item])
  return ( 
 <div className='homeimg'>
   { skins&&skins.map(e=>
  
  <Card style={{ width: '25rem' }}>
  <Card.Img variant="top" src={e.imgLink} />
  <Card.Body>
    <Card.Title>{e.name}</Card.Title>
    <Card.Title>{e.price}</Card.Title>
    
    <Button variant="primary">purchase</Button>
  </Card.Body>
</Card>
 )}
  {/* <div className='homeimg'>
      <Button variant="primary" onClick={handleShow}>
        Add Skin
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Skin</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
          <label>skin name</label>
          <input type='text'placeholder='enter skin name'onChange={""}></input><h1></h1>
          <label>imgLink</label>
          <input type='text'placeholder='imgLink'onChange={""}></input><h1></h1>
          <label>prise</label>
          <input type='text'placeholder='Skin Prise'onChange={""}></input>
          
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div> */}
    </div>
  
  
    
)
      
   

}

export default SkinsCard;