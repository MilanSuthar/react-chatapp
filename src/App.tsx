import './App.css'
import ChatList from './components/chatlist/ChatList'
import ChatSearchBox from './components/chatsearchbox/ChatSearchBox'
import NavBar from './components/navbar/NavBar'

function App() {

  return (
    <div style={{display:'flex',flex:1}}>
      <div className="" style={{display:'flex',flex:1}}>
        <div className="" style={{display:'flex',flexDirection:'column'}}>
          <NavBar/>
          <ChatSearchBox/>
          <div>
            <ChatList/>
          </div>
        </div>
      </div>
      <div className="" style={{display:'flex',flex:2}}></div>
    </div>
  )
}

export default App
