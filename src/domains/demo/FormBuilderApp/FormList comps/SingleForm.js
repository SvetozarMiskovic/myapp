import React from "react";
import { Link } from 'react-router-dom';
import '../../../../styles/FormList.css'
function SingleForm(props){
    return(
            <div className="single-form">
                <Link
                  to={`/displayform:${props.form.formID}`}
                  className="form-item"
                  
               
                  id={props.form.formID}
                  onClick={() => {
                    props.setSelectedForm({
                      formDesc: props.form.formDesc,
                      formID: props.form.formID,
                      formName: props.form.formName,
                      inputs: [...props.form.inputs],
                    });
                  }}
                >
                  {props.form.formName}
                 
                </Link>
                 <span className="option-btns" style={{fontSize: '1.5rem', display: 'flex', alignItems: 'center'}}>
                 <i
                   key={props.form.formID + 1}
                   id={props.form.formID}
                   onClick={e => {
                     const ID = parseInt(e.target.id);
 
                     props.deleteForm(ID);
                   }}
                   className="far fa-trash-alt delete-form"
                 ></i>
                 <i
                   key={props.form.formID + 2}
                   id={props.form.formID}
                   className="far fa-edit edit-form"
                   onClick={e => {
                     const editBtn = e.target;
                     const editID = parseInt(editBtn.id);
                     const formToEdit = props.forms.find(
                       form => form.formID === editID
                     );
                     props.setFormEdit(formToEdit);
                     props.setIsEditing(!props.isEditing);
                   }}
                 ></i>
                 </span>
                
                 </div>
              )
}

export default SingleForm