import react, { useEffect } from "react";
import { Alert } from 'antd'
function SucAlert(props){
    
    useEffect(()=>{
        setTimeout(function(){
            props.isAlert(false)
        }, 2500)
    })
    return (
        <div>
            <Alert type='success' message='Successfully copied!' className='suc-copy' />
        </div>
    )
}

export default SucAlert