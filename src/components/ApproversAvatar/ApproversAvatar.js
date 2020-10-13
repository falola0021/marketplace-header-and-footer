import React, { useState } from "react";
import Styles from "./ApproversAvatar.module.css";
import {
  ThemeProvider,
  AvatarGroup,
  Avatar,
  AvatarBadge,
} from "@chakra-ui/core";

function ApproversAvatar() {
  const [request] = useState([
    {
      name: "First idea",
      approvers: [
        "Red John",
        "John cena",
        "Ayowole Mark",
        "Ola Oni",
        "Romola Bolu",
      ],

      Vendor: "Example conclusion",
    },
  ]);

  return (
    <>
      <ThemeProvider>
        {request.map(({ title, approvers }, i) => (
          <AvatarGroup key={i} style={{ fontSize: "20px" }} size="sm" max={4}>
            {approvers.map((approver, j) => (
              <Avatar
                className={Styles.backgroundcolor}
                key={j}
                style={{
                  fontWeight: "900",
                  padding: "17px",
                  color: "#ffffff",
                  backgroundColor: "rgb(54,5,45)",
                }}
                name={approver}
              >
                <AvatarBadge size="0.9em" bg="green.500" />
              </Avatar>
            ))}
          </AvatarGroup>
        ))}
      </ThemeProvider>
    </>
  );
}

export default ApproversAvatar;
