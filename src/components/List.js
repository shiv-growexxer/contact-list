import React from 'react'
import '../components/css/list.css'
function List (props) {
    const { name, interest, id } = props.user
    const img = 'https://randomuser.me/api/portraits/thumb/men/' + id +'.jpg'
  return (
    <div className='class-list'>
          <img src={img} alt='dp-pic'/>
          <p>{ name}</p>
          <p>{ interest}</p>
    </div>
  )
}

export default List
