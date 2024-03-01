import Drawer from '../../components/ui/drawer/Drawer'
import { FaArrowLeft, FaPen } from 'react-icons/fa6'

const ChatProfile = ({isOpen,toggleDrawer}:any) => {
  return (
    <Drawer isOpen={isOpen} onClose={false} width='460px'>
    <div style={{height:'100%'}}>
      <div style={{height:83,backgroundColor:'#3a5a40',display:'flex',alignItems:'center',paddingLeft:30}} onClick={toggleDrawer}>
        <FaArrowLeft color='white' size={20}/>
        <p style={{fontSize:24,paddingLeft:30,color:'white'}}>Profile</p>
      </div>
      <div style={{display:'flex',justifyContent:'center',width:'100%',height:300,alignItems:'center'}}>
        <div style={{height:200,width:200,backgroundColor:'#ced4da',borderRadius:'50%'}}></div>
      </div>
      <div style={{height:90,backgroundColor:'white',border:'1px solid lightgray',boxShadow:'1px 1px 5px -1px rgba(0,0,0,0.37)',display:'flex',flex:1}}>
        <div style={{display:'flex',flexDirection:'column',flex:1}}>
          <p style={{paddingLeft:20}}>Your Name</p>
          <div style={{display:'flex',flex:1,paddingRight:10,paddingLeft:10,paddingBottom:15}}>
          <input type="text" style={{borderTop:'none',borderLeft:'none',borderRight:'none',outline:'none',width:'100%'}}/>
          <FaPen style={{paddingLeft:20,paddingRight:10}}/>
          </div>
        </div>
      </div>
      <div style={{marginBottom:70}}></div>
      <div style={{height:90,backgroundColor:'white',border:'1px solid lightgray',boxShadow:'1px 1px 5px -1px rgba(0,0,0,0.37)',display:'flex',flex:1}}>
        <div style={{display:'flex',flexDirection:'column',flex:1}}>
          <p style={{paddingLeft:20}}>Your Name</p>
          <div style={{display:'flex',flex:1,paddingRight:10,paddingLeft:10,paddingBottom:15}}>
          <input type="text" style={{borderTop:'none',borderLeft:'none',borderRight:'none',outline:'none',width:'100%'}}/>
          <FaPen style={{paddingLeft:20,paddingRight:10}}/>
          </div>
        </div>
      </div>
    </div>
    </Drawer>
  )
}

export default ChatProfile