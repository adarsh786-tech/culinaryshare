"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";

import RecipeUpload from "@/assets/recipe_upload.png";
import Logout from "@/assets/logout.png";

import { signOut, useSession } from "next-auth/react";

const ProfileMenu = () => {
  const { data: session, status } = useSession();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const router = useRouter();
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Click for more options">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <div className="avatar online">
              <div className="w-12 rounded-full border-yellow-500 border-2">
                <img src={session?.user?.image!} alt="Profile Picture" />
              </div>
            </div>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <div className="flex flex-row gap-2 items-center justify-center">
            <div className="avatar online">
              <div className="rounded-full border-yellow-500 border-1">
                <Avatar src={session?.user?.image!} />
              </div>
            </div>
            <h3>{session?.user?.name!}</h3>
          </div>
        </MenuItem>

        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <div
              className="flex flex-row gap-2 items-center justify-center"
              onClick={() => router.push("/recipe/recipe-form")}
            >
              <div className="rounded-full border-yellow-500 border-2">
                <Image
                  src={RecipeUpload}
                  alt="Recipe upload"
                  width={35}
                  height={35}
                />
              </div>
              <h3 className="text-black">Upload Your Recipe</h3>
            </div>
          </ListItemIcon>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <div
              className="flex flex-row gap-2 items-center justify-center"
              onClick={() => signOut()}
            >
              <div className="rounded-full border-yellow-500 border-2 flex items-center justify-center">
                <Image
                  src={Logout}
                  alt="Signout"
                  width={40}
                  height={40}
                  className="-mr-2"
                />
              </div>
              <h3 className="text-black">Sign Out</h3>
            </div>
          </ListItemIcon>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
};

export default ProfileMenu;
