import { Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "./ResponsiveAppBar";

function UnAuthLayout() {
  return (
    <>
      <ResponsiveAppBar />
      <Outlet />
      <footer>
        <Typography sx={{ textAlign: "center" }}>Footer</Typography>
      </footer>
    </>
  );
}

export default UnAuthLayout;
