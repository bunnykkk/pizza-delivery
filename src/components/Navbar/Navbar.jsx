import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

// custom
import "../../styles/Navbar.css";
import ellipse from "../../img/Ellipse.svg";
import { useNavigate } from "react-router-dom";

const pages = [
  {
    type: "Меню",
    path: "/menu",
  },
  {
    type: "О нас",
    path: "/about",
  },
  {
    type: "Контакты",
    path: "/contact",
  },
  {
    type: "Предложения",
    path: "/suggestions",
  },
];

const settings = [
  {
    type: "Кабинет",
    path: "/profile",
  },
  {
    type: "Регистрация",
    path: "/register",
  },
  {
    type: "Логин",
    path: "/login",
  },
  {
    type: "Выход",
    path: "/",
  },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // custom

  const navigate = useNavigate();

  return (
    <AppBar position="static" id="navbar">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            className="italic-text"
            variant="h3"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              ml: 5,
              display: { xs: "none", md: "flex" },
              fontFamily: "Italiana",
              fontWeight: 500,
              color: "inherit",
              textDecoration: "none",
            }}>
            <span id="logo-m">M</span>omento
          </Typography>
          <img id="logo-nav" src={ellipse} alt="" />
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "flex",
                md: "none",
              },
            }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}>
              {pages.map(page => (
                <MenuItem key={page.type} onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    onClick={() => navigate(page.path)}>
                    {page.type}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            className="italic-text"
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Italiana",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}>
            <span id="logo-m">M</span>omento
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                justifyContent: "space-evenly",
              },
            }}>
            {pages.map(page => (
              <Button
                className="nav-btn"
                key={page.type}
                onClick={() => navigate(page.path)}
                sx={{ my: 2, color: "white", display: "block" }}>
                {page.type}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, mr: 3 }}>
                <PermIdentityIcon style={{ color: "white" }} fontSize="large" />
              </IconButton>
            </Tooltip>
            <IconButton sx={{ p: 0 }}>
              <ShoppingBagOutlinedIcon
                onClick={() => navigate("/cart")}
                style={{ color: "white" }}
                fontSize="large"
              />
            </IconButton>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}>
              {settings.map(setting => (
                <MenuItem key={setting.type} onClick={handleCloseUserMenu}>
                  <Typography
                    textAlign="center"
                    onClick={() => navigate(setting.path)}>
                    {setting.type}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
