import React from 'react'
import List from './List'
import '../components/css/list.css'

const obj = [{ name: 'Shiv', interest: 'Jr Devloper' ,id:71}
        ,   { name: 'Prit', interest: 'Sr Devloper' ,id:72},
            { name: 'Dhruv', interest: 'Full Stack Devloper',id:73 },]

function ListOfUser() {
  return (
    <div>
          <h1>List Of Users</h1>
          <List className="class-list" user={ obj[0]}/>
          <List user={ obj[1]}/>
          <List user={ obj[2]}/>
          
    </div>
  )
}

export default ListOfUser
