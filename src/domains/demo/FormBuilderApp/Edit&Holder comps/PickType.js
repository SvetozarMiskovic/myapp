import React from "react";
import { useTranslation } from "react-i18next";

function PickType(props){
  const {t} = useTranslation()
    return(
        <div className="edit-pick">
            <ul id={props.inp.id} className="edit-list">
              <p>{t('choose_inp_type')}</p>
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