import { Box, Avatar } from "@mui/material";
import React from "react";

export const ProfileFooter = () => {
  return (
    <>
      <Box display="flex" className="profile">
        <Avatar
          alt="Michelle Appleton"
          src="/img/avatar-michelle.jpg"
          sx={{ width: 45, height: 45 }}
        />
        <Box pl={2}>
          <p className="name">Michelle Appleton</p>
          <p className="paragtaph">28 Jun 2020</p>
        </Box>
      </Box>
    </>
  );
};
