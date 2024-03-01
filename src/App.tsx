import { useState } from "react";
import "./App.css";
import ChatList from "./components/chatlist/ChatList";
import ChatSearchBox from "./components/chatsearchbox/ChatSearchBox";
import MessageBox from "./components/messagebox/MessageBox";
import ChatBoxNavBar from "./components/navbar/ChatBoxNavBar";
import NavBar from "./components/navbar/NavBar";
import ChatSection from "./sections/chatsection/ChatSection";
import ChatProfile from "./sections/chatprofile/ChatProfile";
import ChatBoxProfile from "./sections/chatboxprofile/ChatBoxProfile";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCbdrawerOpen, setIsCbDrawerOpen] = useState(false);
  const toggleDrawer = () => setIsOpen(!isOpen);
  const toggleCbDrawer = () => setIsCbDrawerOpen(!isCbdrawerOpen);

  return (
    <div style={{ display: "flex", flex: 1 }}>
      <div className="" style={{ display: "flex", flex: 1 }}>
        <div
          className=""
          style={{
            display: "flex",
            flexDirection: "column",
            borderRight: "1px solid lightgray",
          }}
        >
          <ChatProfile isOpen={isOpen} toggleDrawer={toggleDrawer} />
          <NavBar toggleDrawer={toggleDrawer} />
          <ChatSearchBox />
          <div style={{ height: 490, overflowY: "scroll" }}>
            <ChatList />
          </div>
          <div style={{ height: 70, borderTop: "1px solid lightgray" }}></div>
        </div>
      </div>
      <div
        className=""
        style={{ display: "flex", flex: 2, backgroundColor: "red" }}
      >
        <div
          className=""
          style={{ display: "flex", flexDirection: "column", flex: 1 }}
        >
          <ChatBoxProfile
            isOpen={isCbdrawerOpen}
            toggleDrawer={toggleCbDrawer}
          />
          <ChatBoxNavBar toggleDrawer={toggleCbDrawer} />
          <div style={{ height: 536, backgroundColor: "white" }}>
            <ChatSection />
          </div>
          <div style={{ height: 70, backgroundColor: "#f0f2f5" }}>
            <MessageBox />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
