import Drawer from "../../components/ui/drawer/Drawer";
import { FaX } from "react-icons/fa6";

const ChatBoxProfile = ({ isOpen, toggleDrawer }: any) => {
  return (
    <Drawer isOpen={isOpen} onClose={false} width="460px" placement="right">
      <div
        style={{
          height: 60,
          backgroundColor: "#3a5a40",
          display: "flex",
          alignItems: "center",
          paddingLeft: 30,
          position: "sticky",
          top: 0,
        }}
        onClick={toggleDrawer}
      >
        <FaX color="white" size={20} />
        <p style={{ fontSize: 20, paddingLeft: 30, color: "white" }}>
          Contact Info
        </p>
      </div>
      <div style={{ height: 650, overflow: "scroll" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            height: 300,
            alignItems: "center",
          }}
        >
          <div
            style={{
              height: 200,
              width: 200,
              backgroundColor: "#ced4da",
              borderRadius: "50%",
            }}
          ></div>
        </div>
        <div
          style={{
            height: 400,
            backgroundColor: "white",
            border: "1px solid lightgray",
            boxShadow: "1px 1px 5px -1px rgba(0,0,0,0.37)",
            display: "flex",
            flex: 1,
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", flex: 1 }}
          ></div>
        </div>
        <div style={{ marginBottom: 15 }}></div>
        <div
          style={{
            height: 300,
            backgroundColor: "white",
            border: "1px solid lightgray",
            boxShadow: "1px 1px 5px -1px rgba(0,0,0,0.37)",
            display: "flex",
            flex: 1,
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", flex: 1 }}
          ></div>
        </div>
        <div style={{ marginBottom: 15 }}></div>
        <div
          style={{
            height: 180,
            backgroundColor: "white",
            border: "1px solid lightgray",
            boxShadow: "1px 1px 5px -1px rgba(0,0,0,0.37)",
            display: "flex",
            flex: 1,
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", flex: 1 }}
          ></div>
        </div>
        <div style={{ marginBottom: 50 }}></div>
      </div>
    </Drawer>
  );
};

export default ChatBoxProfile;
