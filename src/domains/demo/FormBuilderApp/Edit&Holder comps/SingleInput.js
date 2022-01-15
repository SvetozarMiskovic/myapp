import React from "react";
import Buttons from "./Buttons";
import InputField from "./InputField";
import PickType from "./PickType";

function SingleInput(props){
    return(
        <div key={props.inp.id} className="single-input">
        <InputField inp={props.inp} setPlaceholder={props.setPlaceholder}/>
        <Buttons inp={props.inp} toggleEdit={props.toggleEdit} deleteInput={props.deleteInput}/>
        
        {props.inp.edit ? (
        <PickType inp={props.inp} setType={props.setType} sugTypes={props.sugTypes}/>
    
        ) : null}
      </div>
    )
}

export default SingleInput