import react from "react"
import { Typography } from "antd"

const {Title} = Typography;
function EmptyList(){
    return(
        <div className="empty-list" style={{ display: 'flex', flexDirection:'column', alignSelf:'center', textAlign: 'center', width:'100%', margin: '1rem',}}>
            <Title level={1} style={{margin: '0', padding: '0', color:'white'}}>There are no saved forms!</Title>
            <Title level={3} style={{margin: '0', padding: '0', color:'white'}}>The list is empty!</Title>
        </div>
    )
}

export default EmptyList