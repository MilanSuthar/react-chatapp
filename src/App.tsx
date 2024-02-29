import './App.css'
import ChatList from './components/chatlist/ChatList'
import ChatSearchBox from './components/chatsearchbox/ChatSearchBox'
import MessageBox from './components/messagebox/MessageBox'
import ChatBoxNavBar from './components/navbar/ChatBoxNavBar'
import NavBar from './components/navbar/NavBar'
import ChatSection from './sections/chatsection/ChatSection'

function App() {

  return (
    <div style={{display:'flex',flex:1}}>
      <div className="" style={{display:'flex',flex:1}}>
        <div className="" style={{display:'flex',flexDirection:'column',borderRight:'1px solid lightgray'}}>
          <NavBar/>
          <ChatSearchBox/>
          <div style={{height:490,overflowY:'scroll'}}>
            <ChatList/>
          </div>
          <div style={{height:70,borderTop:'1px solid lightgray'}}></div>
        </div>
      </div>
      <div className="" style={{display:'flex',flex:2,backgroundColor:'red'}}>
      <div className="" style={{display:'flex',flexDirection:'column',flex:1}}>
          <ChatBoxNavBar/>
          <div style={{height:536,backgroundColor:'white'}}>
            <ChatSection/>
          </div>
          <div style={{height:70,backgroundColor:'#f0f2f5'}}>
            <MessageBox/>
          </div>
      </div>
      </div>
    </div>
  )
}

export default App
