import React from "react";

function SavedForms(props){
return(
    <h4
        onClick={() => {
          props.setOpen(!props.open);
        }}
      >
        Saved forms!
      </h4>
)
}

export default SavedForms