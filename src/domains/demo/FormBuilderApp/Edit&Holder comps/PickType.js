import React from "react";

function PickType(props){
    return(
        <div className="edit-pick">
            <ul id={props.inp.id} className="edit-list">
              <p>Choose input type!</p>
              {props.sugTypes.map(t => {
                return (
                  <div
                    onClick={e => {
                      const element = e.target;
                      const type = element.textContent;
                      const parentElement = e.target.parentElement;
                      const id = parseInt(parentElement.id);

                      props.setType(id, type);
                    }}
                    className="option"
                    key={t}
                  >
                    {t}
                  </div>
                );
              })}
            </ul>
          </div>
    )
}

export default PickType