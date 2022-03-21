import React,{useState} from 'react'
import './css/contact.css'
import { Modal, Button,Input } from 'antd';
import axios from 'axios'

function Contact (props) {
  const data = props.data;
  const id = data._id;

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [firstUpdated, setFirstUpdated] = useState('');
  const [lastUpdated, setLastUpdated] = useState('');
  const [phoneUpdated, setPhoneUpdated] = useState('');
  

const showModal = () => {
  setIsModalVisible(true);
};

const handleOk = () => {
  setIsModalVisible(false);
};

const handleCancel = () => {
  setIsModalVisible(false);
};
  
  const updateList = (id) => {
      axios.put("http://localhost:8080/api/contacts", {
          id:id,
          first: firstUpdated,
          last: lastUpdated,
          phone: phoneUpdated
      });
      console.log(id);
  }

  const deleteList = (id) => {
      axios.delete(`http://localhost:8080/api/contacts/${id}`);
      console.log(id);
  }






  return (
    <div className='contact'>
      <p>{data.first_name}</p>
      <p>{data.last_name}</p>
      <p>{data.phone}</p>
      <Button type='primary' className='btn' onClick={()=>showModal()}>Update</Button>
                            <Button type='primary' className='btn' onClick={() => deleteList(id)}>Delete</Button>
                            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} >
                            <Input placeholder='  First Name' className='input'  onChange={(e)=> setFirstUpdated(e.target.value)}/>
                            <Input placeholder='  Last Name' className='input'   onChange={(e)=> setLastUpdated(e.target.value)}/>
                            <Input placeholder='  Contact Number' className='input'  onChange={(e)=> setPhoneUpdated(e.target.value)}/>
                            <Button type='primary' className='btn' onClick={() => updateList(id)}>Update</Button>
                                
                                
                            </Modal>  
    </div>
  )
}

export default Contact
