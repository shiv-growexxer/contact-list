import React, { useState } from 'react'
import { Input ,Button} from 'antd';
import 'antd/dist/antd.css';
import './css/form.css';
import Showcontact from './Showcontact'; 
import axios from 'axios';
function Form () {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [phone, setPhone] = useState("");

    const [set, setSet] = useState(true); 
    const handle = () => {
        setSet(false);
    }
  const sendList = () => {
    axios.post("http://localhost:8080/api/contacts", {
      first: first,
      last: last,
      phone: phone
    });
    
  }
    return (
      set?(
      <div className='form'>
          
          <form>
              <Input placeholder='  First Name' className='input'  onChange={(e)=> setFirst(e.target.value)}/>
              <Input placeholder='  Last Name' className='input'   onChange={(e)=> setLast(e.target.value)}/>
              <Input placeholder='  Contact Number' className='input'  onChange={(e)=> setPhone(e.target.value)}/>
                <Button type='primary' className='btn' onClick={()=> sendList()}>Add</Button>
              <Button type='primary' className='btn' onClick={() => handle()}>Show List</Button>
                            
              </form>
              
              
            </div>
        ) : (
                <Showcontact />
      )
  )
}

export default Form
