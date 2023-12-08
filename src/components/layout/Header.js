import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MailIcon from '@mui/icons-material/Mail';
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import HouseIcon from "@mui/icons-material/House";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Divider from "@mui/material/Divider";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import SettingsIcon from "@mui/icons-material/Settings";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import GroupIcon from "@mui/icons-material/Group";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AuthContext from "../../context/auth/AuthContext";
import SearchIcon from "@mui/icons-material/Search";
import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useContext } from "react";
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Header({ children }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  {
    /**Componentes del menu */
  }
  const AA = [
    {
      name: "Inicio",
      value: "/",
      icon: (
        <Tooltip title="Inicio" placement="right">
          <HomeIcon />
        </Tooltip>
      ),
    },
    {
      name: "Categorias",
      value: "/Categories",
      icon: (
        <Tooltip title="Categorias" placement="right">
          <CategoryIcon />
        </Tooltip>
      ),
    },
    {
      name: "Servicios",
      value: "/Services",
      icon: (
        <Tooltip title="Servicios" placement="right">
          <SettingsIcon />
        </Tooltip>
      ),
    },
    {
      name: "Nueva Propiedad",
      value: "/CreateProperty",
      icon: (
        <Tooltip title="Nueva Propiedad" placement="right">
          <AddIcon />
        </Tooltip>
      ),
    },
    {
      name: "Por Aprobar",
      value: "/PropertiesPending",
      icon: (
        <Tooltip title="Por Aprobar" placement="right">
          <HouseIcon />
        </Tooltip>
      ),
    },
    {
      name: "Propiedades",
      value: "/Properties",
      icon: (
        <Tooltip title="Propiedades" placement="right">
          <LocationCityIcon />
        </Tooltip>
      ),
    },
    {
      name: "Visitas de Propiedades",
      value: "/Visit",
      icon: (
        <Tooltip title="Visitas de Propiedades" placement="right">
          <MailIcon />
        </Tooltip>
      ),
    },
    {
      name: "Usuarios",
      value: "/Users",
      icon: (
        <Tooltip title="Usuarios" placement="right">
          <GroupIcon />
        </Tooltip>
      ),
    },
    {
      name: "Mi Perfil",
      value: "/Perfil",
      icon: (
        <Tooltip title="Mi Perfil" placement="right">
          <AccountCircleIcon />
        </Tooltip>
      ),
    },
    /* { name: "Buscar Propiedades", value: "/Properties", icon: <SearchIcon /> }, */
  ];
  const INM = [
    {
      name: "Inicio",
      value: "/",
      icon: (
        <Tooltip title="Inicio" placement="right">
          <HomeIcon />
        </Tooltip>
      ),
    },
    {
      name: "Nueva Propiedad",
      value: "/CreateProperty",
      icon: (
        <Tooltip title="Nueva Propiedad" placement="right">
          <AddIcon />
        </Tooltip>
      ),
    },
    {
      name: "Por Aprobar",
      value: "/PropertiesPending",
      icon: (
        <Tooltip title="Por Aprobar" placement="right">
          <HouseIcon />
        </Tooltip>
      ),
    },

    {
      name: "Mis Propiedades",
      value: "/Properties",
      icon: (
        <Tooltip title="Mis Propiedades" placement="right">
          <LocationCityIcon />
        </Tooltip>
      ),
    },
    {
      name: "Mis Usuarios",
      value: "/Users",
      icon: (
        <Tooltip title="Mis Usuarios" placement="right">
          <GroupIcon />
        </Tooltip>
      ),
    },
    {
      name: "Mi Perfil",
      value: "/Perfil",
      icon: (
        <Tooltip title="Mi Perfil" placement="right">
          <AccountCircleIcon />
        </Tooltip>
      ),
    },
    /* { name: "Buscar Propiedades", value: "/Properties", icon: <SearchIcon /> }, */
  ];
  const AS = [
    {
      name: "Inicio",
      value: "/",
      icon: (
        <Tooltip title="Inicio" placement="right">
          <HomeIcon />
        </Tooltip>
      ),
    },
    {
      name: "Nueva Propiedad",
      value: "/CreateProperty",
      icon: (
        <Tooltip title="Nueva Propiedad" placement="right">
          <AddIcon />{" "}
        </Tooltip>
      ),
    },
    {
      name: "Por Aprobar",
      value: "/PropertiesPending",
      icon: (
        <Tooltip title="Por Aprobar" placement="right">
          <HouseIcon />
        </Tooltip>
      ),
    },

    {
      name: "Mis Propiedades",
      value: "/Properties",
      icon: (
        <Tooltip title="Mis Propiedades" placement="right">
          <LocationCityIcon />
        </Tooltip>
      ),
    },
    {
      name: "Mi Perfil",
      value: "/Perfil",
      icon: (
        <Tooltip title="Mi Perfil" placement="right">
          <AccountCircleIcon />
        </Tooltip>
      ),
    },

    /* { name: "Buscar Propiedades", value: "/Properties", icon: <SearchIcon /> }, */
  ];
  const IND = [
    {
      name: "Inicio",
      value: "/",
      icon: (
        <Tooltip title="Inicio" placement="right">
          <HomeIcon />
        </Tooltip>
      ),
    },
    {
      name: "Nueva Propiedad",
      value: "/CreateProperty",
      icon: (
        <Tooltip title="Nueva Propiedad" placement="right">
          <AddIcon />
        </Tooltip>
      ),
    },
    {
      name: "Por Aprobar",
      value: "/PropertiesPending",
      icon: (
        <Tooltip title="Por Aprobar" placement="right">
          <HouseIcon />
        </Tooltip>
      ),
    },

    {
      name: "Mis Propiedades",
      value: "/Properties",
      icon: (
        <Tooltip title="Mis Propiedades" placement="right">
          <LocationCityIcon />
        </Tooltip>
      ),
    },
    {
      name: "Mi Perfil",
      value: "/Perfil",
      icon: (
        <Tooltip title="Mi Perfil" placement="right">
          <AccountCircleIcon />
        </Tooltip>
      ),
    },

    /* { name: "Buscar Propiedades", value: "/Properties", icon: <SearchIcon /> }, */
  ];
  const { cerrarSesion, usuario } = useContext(AuthContext);
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ backgroundColor: "#662549" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h3"
            fontFamily="monospace"
            fontWeight="bold"
            noWrap
            component="div"
          >
            MiBien
          </Typography>
          <Tooltip title="Cerrar Sesión">
            <IconButton sx={{ display: "flex", justifyContent: "flex-end" }}>
              <ExitToAppIcon
                sx={{ color: "white", fontSize: 25 }}
                onClick={() => cerrarSesion()}
              >
                cerrarSesion
              </ExitToAppIcon>
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        open={open}
        sx={{ backgroundColor: "#662549" }}
      >
        <DrawerHeader sx={{ backgroundColor: "#662549" }}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon sx={{ color: "white" }} />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {usuario && usuario.type_user ? (
            usuario.type_user === 1 ? (
              AA.map((text, index) => (
                <ListItem key={text} disablePadding sx={{ display: "block" }}>
                  <Link to={text.value} style={{ textDecoration: "none" }}>
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 2.5,
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                          color: "#451952",
                        }}
                      >
                        {text.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={text.name}
                        sx={{
                          opacity: open ? 1 : 0,
                          color: "#662549",
                          fontWeight: "bold",
                        }}
                      />
                    </ListItemButton>
                  </Link>
                </ListItem>
              ))
            ) : usuario.type_user === 2 ? (
              INM.map((text, index) => (
                <ListItem key={text} disablePadding sx={{ display: "block" }}>
                  <Link to={text.value} style={{ textDecoration: "none" }}>
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 2.5,
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                          color: "#451952",
                        }}
                      >
                        {text.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={text.name}
                        sx={{
                          opacity: open ? 1 : 0,
                          color: "#662549",
                          fontWeight: "bold",
                        }}
                      />
                    </ListItemButton>
                  </Link>
                </ListItem>
              ))
            ) : usuario.type_user === 3 ? (
              AS.map((text, index) => (
                <ListItem key={text} disablePadding sx={{ display: "block" }}>
                  <Link to={text.value} style={{ textDecoration: "none" }}>
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 2.5,
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                          color: "#451952",
                        }}
                      >
                        {text.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={text.name}
                        sx={{
                          opacity: open ? 1 : 0,
                          color: "#662549",
                          fontWeight: "bold",
                        }}
                      />
                    </ListItemButton>
                  </Link>
                </ListItem>
              ))
            ) : usuario.type_user === 4 ? (
              IND.map((text, index) => (
                <ListItem key={text} disablePadding sx={{ display: "block" }}>
                  <Link to={text.value} style={{ textDecoration: "none" }}>
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 2.5,
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                          color: "#451952",
                        }}
                      >
                        {text.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={text.name}
                        sx={{
                          opacity: open ? 1 : 0,
                          color: "#662549",
                          fontWeight: "bold",
                        }}
                      />
                    </ListItemButton>
                  </Link>
                </ListItem>
              ))
            ) : (
              <ListItem>
                <ListItemText />
              </ListItem>
            )
          ) : (
            <ListItem>
              <ListItemText />
            </ListItem>
          )}
        </List>
      </Drawer>
      {/* <Box component="main" sx={{ flexGrow: 1, p: 3 }}> */}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <DrawerHeader />
          {children}
        </Grid>
      </Grid>
      {/* </Box> */}
    </Box>
  );
}
