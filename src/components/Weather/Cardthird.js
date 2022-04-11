import React from 'react'
import "./css/cardthird.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Cardthird (props) {
    var classname = props.change ? "light" : "dark";
  return (
    <>
          <p className={classname}>
          <FontAwesomeIcon icon="fa fa-cloud" />
              {/* {props.name} : {props.value}&deg; */}
              {props.children}</p>
          
    </>
  )
}

export default Cardthird
