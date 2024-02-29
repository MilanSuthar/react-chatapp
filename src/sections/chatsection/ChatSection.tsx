import React from "react";

const message = [
  { message: "hello", side: "client" },
  { message: "worlds", side: "user" },
  { message: "hello", side: "client" },
  { message: "hello", side: "client" },
  { message: "worlds", side: "user" },
  { message: "hello", side: "client" },
  { message: "hello", side: "user" },
  { message: "worlds", side: "user" },
  { message: "hello", side: "client" },
];

const ChatSection = () => {
  return (
    <div
      style={{ padding: 10, display: "flex", flexDirection: "column", gap: 5 }}
    >
      {message.map((item: any, index: any) => (
        <div
          className=""
          key={index}
          style={{
            display: "flex",
            flex: 1,
            justifyContent: item.side == "client" ? "left" : "right",
          }}
        >
          <div
            style={{
              width: "max-content",
              backgroundColor: "white",
              height: "30px",
              display: "flex",
              justifyContent: "center",
              paddingLeft: 10,
              paddingRight: 10,
              borderRadius: 8,
              border: "0.5px solid lightgray",
              boxShadow: "1px 4px 8px 0px rgba(0,0,0,0.15)",
            }}
          >
            <p style={{ margin: 0 }}>
              {item.message}
              <sub style={{ fontSize: 12, padding: 5 }}>9.33pm</sub>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatSection;
