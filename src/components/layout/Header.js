import React, { useContext, useState, useEffect } from "react";
import AuthContext from "../../context/auth/AuthContext";
import {
  Box,
  Button,
  Drawer,
  List,
  Divider,
  ListItem,
  Typography,
  Avatar,
  Tooltip,
  Badge,
  FormGroup,
  FormControlLabel,
  Switch,
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  styled,
  Grid,
  Chip,
  Hidden,
} from "@mui/material/";
// import ChangePassword from "../../components/Auth/changepassword/ChangePassword";
// import ChangePhotoPerfil from "../Auth/ChangePhotoPerfil/ChangePhoPerfil";
// import fondo from "./forest.jpg";
import SyncIcon from "@mui/icons-material/Sync";
import { makeStyles } from "@mui/styles";
import LogoutIcon from "@mui/icons-material/Logout";
import KeyIcon from "@mui/icons-material/Key";
// import SettingsContext from "../../context/settings/SettingsContext";
// import { useCheckInternet } from "../../hooks/tools";
import { Link } from "react-router-dom";
// import LogoContext from "../../context/Logo/LogoContext";
//app
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { useLayoutEffect } from "react";
// import { Loading } from "@nextui-org/react";

//app
const useStyles = makeStyles({
  PhotoPerfil: {
    width: "80px",
    height: "80px",
    objectFit: "fill",
    padding: "4px",
    borderRadius: "50%",
    margin: "auto",
    marginTop: 10,
    marginBottom: 3,
    boxShadow: "-10px 10px 30px -6px rgba(110,110,110,1)",
    textAlign: "center",
    lineHeight: "110px",
  },
  logo: {
    height: "100%",
    width: "100%",
  },
});
const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));
export default function Header() {
  //appbar

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  //appbar
  // const { logos, GetLogo } = useContext(LogoContext);
  // useEffect(() => {
  //   GetLogo();
  // }, []);

  // const { isOnline } = useCheckInternet();
  const classes = useStyles();

  const [modalAdd, AbrirModalAdd] = useState(false);
  const [modalChangePhoto, AbrirModalChangePhoto] = useState(false);

  const handleClickOpenAdd = () => {
    AbrirModalAdd(true);
  };
  const handleClickCloseAdd = () => {
    AbrirModalAdd(false);
  };

  const HandleClickOpenModalChangePhoto = () => {
    AbrirModalChangePhoto(true);
  };

  const HandleClickCloseModalChangePhoto = () => {
    AbrirModalChangePhoto(false);
  };

  // const { usuario, cerrarSesion } = useContext(AuthContext);
  // const { getMaintainment, putMaintainment, maintainment } =
  //   useContext(SettingsContext);

  const [state, setState] = useState({
    left: false,
    right: false,
  });

  // useEffect(() => {
  //   getMaintainment();
  // }, []);
  // useEffect(() => {
  //   if (!isOnline) {
  //     cerrarSesion();
  //   }
  // }, [isOnline]);

  // if (!usuario) return <> </>;
  // const { user } = usuario;
  // setUserImage({urlPhoto:user.profileImage,fullname:user.fullname})

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <></>
    // <Box
    //   sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
    //   role="presentation"
    //   onClick={toggleDrawer(anchor, false)}
    //   onKeyDown={toggleDrawer(anchor, false)}
    // >
    //   <Box
    //     sx={{
    //       position: "fixed",
    //       top: 0,
    //       bottom: 0,
    //       backgroundImage: `url(${fondo})`,
    //       backgroundRepeat: "no-repeat",
    //       backgroundSize: "cover",
    //       width: "100%",
    //       height: "100%",
    //     }}
    //   ></Box>

    //   <List sx={{ boxShadow: 3, padding: "2px" }}>
    //     <Box
    //       sx={{
    //         display: "flex",
    //         alignItems: "center",
    //         justifyContent: "center",
    //       }}
    //     >
    //       <div>
    //         {!user.profileImage ? (
    //           <Avatar
    //             className={classes.PhotoPerfil}
    //             sx={{ width: 80, height: 80 }}
    //           >
    //             {user.fullname}
    //           </Avatar>
    //         ) : (
    //           <Tooltip title="Cambiar foto de Perfil">
    //             <Badge
    //               onClick={HandleClickOpenModalChangePhoto}
    //               overlap="circular"
    //               anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    //               badgeContent={
    //                 <Avatar sx={{ width: 20, height: 20 }}>
    //                   <SyncIcon
    //                     sx={{ padding: "2px", backgroundColor: "blue" }}
    //                   />
    //                 </Avatar>
    //               }
    //             >
    //               <Avatar
    //                 alt={user.fullname}
    //                 src={user.profileImage}
    //                 className={classes.PhotoPerfil}
    //                 sx={{ width: 80, height: 80 }}
    //               />
    //             </Badge>
    //           </Tooltip>
    //         )}
    //       </div>
    //     </Box>
    //     <Box
    //       sx={{
    //         textAlign: "center",
    //         marginY: 1,
    //         backgroundColor: "transparent",
    //       }}
    //     >
    //       <Typography
    //         sx={{ fontWeight: 900, fontSize: "14px", color: "white" }}
    //       >
    //         {user.fullname}
    //       </Typography>
    //       {/* <ListItemText sx={{color: "white",fontWeight:900, }} primary={user.fullname} /> */}
    //     </Box>
    //   </List>
    //   <List>
    //     <Box
    //       sx={{
    //         display: "flex",
    //         alignItems: "center",
    //         justifyContent: "center",
    //         boxShadow: 3,
    //         margin: 1,
    //         flexDirection: "column",
    //         position: "relative",
    //         backgroundColor: "transparent",
    //         color: "white",
    //       }}
    //     >
    //       <ListItem>
    //         <Typography
    //           variant="su arrowbtitle2"
    //           noWrap
    //           sx={{ fontWeight: 900, fontSize: "14px", textAlign: "center" }}
    //         >
    //           Informacion del Usuario
    //         </Typography>
    //       </ListItem>
    //     </Box>
    //   </List>

    //   <List>
    //     <Box
    //       sx={{
    //         display: "flex",
    //         alignItems: "center",
    //         justifyContent: "center",
    //         boxShadow: 3,
    //         margin: 1,
    //         flexDirection: "column",
    //         position: "relative",
    //         backgroundColor: "transparent",
    //         color: "white",
    //       }}
    //     >
    //       <ListItem>
    //         <Typography
    //           variant="su arrowbtitle2"
    //           noWrap
    //           sx={{ fontWeight: 900, fontSize: "14px" }}
    //         >
    //           Correo:
    //         </Typography>
    //       </ListItem>
    //       <ListItem>
    //         <Typography
    //           variant="su arrowbtitle2"
    //           noWrap
    //           sx={{ fontSize: "14px" }}
    //         >
    //           {user.email}
    //         </Typography>
    //       </ListItem>
    //       <ListItem>
    //         <Typography
    //           variant="su arrowbtitle2"
    //           noWrap
    //           sx={{
    //             fontWeight: "bold",
    //             fontSize: "14px",
    //             textAlign: "center",
    //           }}
    //         >
    //           Tipo de Usuario:
    //         </Typography>
    //       </ListItem>
    //       <ListItem>
    //         <Typography
    //           variant="su arrowbtitle2"
    //           noWrap
    //           sx={{ fontSize: "14px", textAlign: "center" }}
    //         >
    //           {user.type_user_id.name}
    //         </Typography>
    //       </ListItem>
    //     </Box>
    //   </List>
    //   <List sx={{ position: "fixed", bottom: 45, right: 0 }}>
    //     <Divider />
    //     <ListItem>
    //       <Button
    //         fullWidth
    //         onClick={handleClickOpenAdd}
    //         sx={{
    //           color: "#FFFFFF",
    //           backgroundColor: "black",
    //           textTransform: "none",
    //           "&:hover": {
    //             color: "#FFFFFF",
    //             backgroundColor: "black",
    //           },
    //         }}
    //         variant="outlined"
    //         startIcon={<KeyIcon />}
    //       >
    //         Cambiar Contraseña
    //       </Button>
    //     </ListItem>
    //   </List>
    //   <List sx={{ position: "fixed", bottom: 0, right: 25 }}>
    //     <ListItem>
    //       <Button
    //         variant="outlined"
    //         startIcon={<LogoutIcon />}
    //         onClick={() => cerrarSesion()}
    //         sx={{
    //           color: "#FFFFFF",
    //           backgroundColor: "#15c0cc",
    //           textTransform: "none",
    //           "&:hover": {
    //             color: "#FFFFFF",
    //             backgroundColor: "#15c0cc",
    //           },
    //         }}
    //       >
    //         Cerrar Sesion
    //       </Button>
    //     </ListItem>
    //   </List>
    //   <Divider />
    // </Box>
  );

  const modules = [
    { route: "/", name: "Inicio" },
    { route: "/Categories", name: "Categorias" },
    { route: "/Services", name: "Servicios" },
    { route: "/CreateProperty", name: "Nueva Propiedad" },
    { route: "/Properties", name: "Propiedades" },
    { route: "/Users", name: "Usuarios" },
    /* { route: "/Perfil", name: "Perfil" }, */
  ];

  return (
    <>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#D7A86E", height: "110px" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Link to="/" className="brand-link">
                <>
                  <img
                    src={require("../../assets/img/logo_trans.png")}
                    alt=" "
                    className={classes.logo}
                    style={{ marginTop: -10 }}
                  />
                </>
              </Link>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {modules.map((module) => (
                  <Link to={module.route} style={{ textDecoration: "none" }}>
                    <MenuItem>
                      <Typography
                        sx={{
                          color: "#D7A86E",
                          textDecoration: "none !important",
                        }}
                      >
                        {module.name}
                      </Typography>
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
            </Box>
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                mr: 1,
                mt: 1,
                flexGrow: 1,
              }}
            >
              <Link to="/" className="brand-link">
                <img
                  src={require("../../assets/img/21.png")}
                  alt="AdminLTE Logo"
                  height="100px"
                  width="100px"
                />
              </Link>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
              }}
            ></Box>

            {/* {usuario && usuario.user.type_user_id.name === "Admin" && (
            <Tooltip
              title="Habilta/Desahabilita Ecommerce"
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              <FormGroup>
                <FormControlLabel
                  control={
                    <IOSSwitch
                      //color="warning"
                      sx={{ marginRigth: 2 }}
                      checked={maintainment}
                      onClick={() => {
                        putMaintainment(!maintainment);
                      }}
                    />
                  }
                  label={` Mantenimiento ${
                    maintainment ? " Activo" : " Desactivado"
                  }`}
                />
              </FormGroup>
            </Tooltip>
          )} */}
            <Tooltip title="configuracion">
              <IconButton
                className="nav-link"
                sx={{ color: "white" }}
                onClick={toggleDrawer("right", true)}
              >
                <i className="fas fa-user" />
              </IconButton>
            </Tooltip>
            <Drawer
              anchor={"right"}
              open={state["right"]}
              onClose={toggleDrawer("right", false)}
            >
              {list("right")}
            </Drawer>
            {/* <ChangePassword
            modal={modalAdd}
            handleClickOpen={handleClickOpenAdd}
            handleClose={handleClickCloseAdd}
          />
          <ChangePhotoPerfil
            photoperfil={user.profileImage}
            modal={modalChangePhoto}
            handleClickClose={HandleClickCloseModalChangePhoto}
          /> */}
          </Toolbar>
        </Container>
      </AppBar>
      <Grid container spacing={2} sx={{ padding: 2 }}>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          display="flex"
          justifyContent="center"
        >
          <Hidden only={["xs", "sm"]}>
            {modules.map((module) => (
              <Link to={module.route}>
                <Chip
                  label={module.name}
                  sx={{
                    backgroundColor: "#E5BA73",
                    color: "white",
                    margin: 1,
                    fontWeight: "bold",
                    fontSize: "25px",
                    padding: 3,
                  }}
                />
              </Link>
            ))}
          </Hidden>
        </Grid>
      </Grid>
    </>
  );
}
