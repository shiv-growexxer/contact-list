import React,{useEffect, useState} from 'react'
import { Modal, Button,Input } from 'antd';
import 'antd/dist/antd.css';
import './css/form.css';
import Form from './Form';
import Contact from './Contact';
import axios from 'axios'



function Showcontact () {



    const [first, setFirst] = useState(true);
    const [datas, Setdatas] = useState([]);
    

    
    const handle = () => {
        setFirst(false);
    }


useEffect(() => {
     gettingdata();
}, [datas]);
    
    
    
const gettingdata =  () => {
    fetch(`http://localhost:8080/api/contacts`)
        .then(res => res.json())
    
        .then(post => {
            Setdatas(post);
            console.log(datas);
        })
        .catch(e => {
            console.log(e);
        });
  }



    return (
        first ? (
            
      <div>
                <Button type='primary' className='btn' onClick={() => handle()}>return</Button>
                { (datas.length)?(
                    datas.map((val, key) => {
                        return <div>
                            <Contact data={val} />
                            
                        </div>
                    })
                    
                ):(<h1>no data</h1>) }
                
            </div>


            
            
            
            
        ) : (<Form />)
  )
}

export default Showcontact
