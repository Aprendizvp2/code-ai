import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { CustomDrawer, CustomTextField } from "../../components";

const drawerWidth = 200;

export default function Chat() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerClose = () => {
    setMobileOpen(false);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className="flex bg-[#121212] h-screen">
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "#121212",
        }}
        elevation={0}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            AI CODE
          </Typography>
        </Toolbar>
      </AppBar>
      <CustomDrawer
        mobileOpen={mobileOpen}
        handleDrawerClose={handleDrawerClose}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <div className="flex justify-center items-center flex-col gap-10 w-full">
          <p className="text-white text-3xl text-center">Ingresa un texto</p>
          <div className="relative w-full lg:w-[700px]">
            <CustomTextField
              rows={10}
              multiline
              fullWidth
              className="text-white p-4"
              placeholder="Escribe aquí..."
            />
            <button className="absolute bottom-0 right-0 bg-[#393939] hover:bg-transparent transitioon duration-300 border-2 border-[#393939] text-white rounded-md px-4 py-2 m-4">
              Send
            </button>
          </div>
        </div>
      </Box>
    </div>
  );
}
