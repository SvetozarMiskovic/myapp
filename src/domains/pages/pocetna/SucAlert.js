import react, { useEffect } from "react";
import { Alert } from 'antd'
import {useTranslation} from "react-i18next"

function SucAlert(props){
    const {t} = useTranslation()
    useEffect(()=>{
        setTimeout(function(){
            props.isAlert(false)
        }, 2500)
    })
    return (
        <div>
            <Alert type='success' message={t('copy_alert')} className='suc-copy' />
        </div>
    )
}

export default SucAlert