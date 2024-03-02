import { useRef, useState } from "react";
import {
  FaCircleUser,
  FaEllipsisVertical,
  FaMagnifyingGlass,
} from "react-icons/fa6";
import Popup from "../ui/popup/Popup";

const ChatBoxNavBar = ({ toggleDrawer }: any) => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const anchorElRef = useRef(null);

  const handleOpenPopup = () => {
    setPopupOpen(!isPopupOpen);
  };
  
  const handleClosePopup = () => {
    setPopupOpen(false);
  };
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
          onClick={handleOpenPopup}
          ref={anchorElRef}
        >
          <FaEllipsisVertical
            style={{ height: 20, width: 20 }}
            color="whitesmoke"
          />
        </div>
      </div>
      <Popup
        open={isPopupOpen}
        position="bottom" // You can customize the position
        onClose={handleClosePopup}
        width={200}
        height={220}
        offset={200}
        anchorEl={anchorElRef}
        setPopupOpen={setPopupOpen}
      >
        <ul style={{ listStyle: "none", padding: 0 }}>
          {["Contact Info", "Close Chat", "Delete Chat", "Block"].map(
            (item, index) => (
              <li style={{ padding: 0 }}>
                <div
                  style={{
                    display: "flex",
                    height: 50,
                    flex: 1,
                    padding: 0,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onClick={() => alert(`Clicked${item}`)}
                >
                  {item}
                </div>
              </li>
            )
          )}
        </ul>
      </Popup>
    </div>
  );
};

export default ChatBoxNavBar;
