import React from 'react'
import PropTypes from 'prop-types'
export default function Alert(props) {
 const upperCase = (str)=>{
  let s = str.toLowerCase();
  return s.charAt(0).toUpperCase()+s.slice(1);
 }
 
 
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{upperCase(props.alert.type)}</strong>  { props.alert.msg != ''? ':'+ props.alert.msg:""}  
  
</div>
  )
}

Alert.propTypes = {
  alert:{
    msg:PropTypes.string,
    type:PropTypes.string
  }
}
