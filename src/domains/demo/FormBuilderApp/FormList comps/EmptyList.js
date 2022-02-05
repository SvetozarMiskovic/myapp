import react from "react"
import { useTranslation } from "react-i18next";
import { Typography } from "antd"

const {Title} = Typography;
function EmptyList(){
    const {t} = useTranslation()
    return(
        <div className="empty-list" style={{ display: 'flex', flexDirection:'column', alignSelf:'center', textAlign: 'center', width:'100%', margin: '1rem',}}>
            <Title level={1} style={{margin: '0', padding: '0', color:'white'}}>{t('no_saved_forms')}</Title>
            <Title level={3} style={{margin: '0', padding: '0', color:'white'}}>{t('empty_list')}</Title>
        </div>
    )
}

export default EmptyList