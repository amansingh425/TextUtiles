import React from 'react'
export default function Alert(props){
    const capitalise =(word)=>{
    let nwrd = word.toLowerCase();
   return nwrd.at(0).toUpperCase() + nwrd.slice(1);
    }
    return(
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalise(props.alert.type)}</strong> :{props.alert.massage}
      </div>
    )
}