import {
  FaCircleUser,
  FaEllipsisVertical,
  FaMagnifyingGlass,
} from "react-icons/fa6";

const ChatBoxNavBar = ({ toggleDrawer }: any) => {
  return (
    <div
      style={{
        width: "100%",
        height: 60,
        backgroundColor: "lightgrey",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", flex: 2, paddingLeft: 10 }}>
        <div
          style={{
            height: 50,
            width: 50,
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={toggleDrawer}
        >
          <FaCircleUser style={{ height: 40, width: 40 }} color="whitesmoke" />
        </div>
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            paddingLeft: 10,
          }}
        >
          <p style={{ margin: 0 }}>Example User Name</p>
          <p style={{ margin: 0 }}>Online</p>
        </div>
      </div>
      <div style={{ display: "flex", flex: 1, justifyContent: "end" }}>
        <div
          style={{
            height: 50,
            width: 50,
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FaMagnifyingGlass
            style={{ height: 40, width: 20 }}
            color="whitesmoke"
          />
        </div>
        <div
          style={{
            height: 50,
            width: 50,
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FaEllipsisVertical
            style={{ height: 20, width: 20 }}
            color="whitesmoke"
          />
        </div>
      </div>
    </div>
  );
};

export default ChatBoxNavBar;
