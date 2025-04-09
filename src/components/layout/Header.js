/**
 * Este código define un componente `Header` que representa una barra lateral (drawer) y una barra de navegación (app bar)
 * utilizando Material-UI. La barra lateral se puede expandir o contraer, y contiene diferentes opciones de navegación
 * que se muestran dependiendo del tipo de usuario (por ejemplo, Administrador, Inmobiliaria, Asesor).
 * Además, se utilizan íconos (de la librería Material-UI) y herramientas como Tooltips y Badges para mejorar la accesibilidad y
 * la interacción visual con el usuario. El estado de la barra lateral (abierta o cerrada) se maneja con `useState`.
 * También se gestionan las visitas pendientes a través de un contexto (`VisitContext`) y la traducción de textos con `react-i18next`.
 * La funcionalidad incluye la manipulación de rutas con `react-router-dom` y permite a los usuarios acceder a diferentes
 * secciones del sistema como propiedades, visitas, perfil, etc.
 * El componente también incluye funcionalidades como un botón de menú (hamburguesa) y un cierre de sesión.
 */
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import HouseIcon from "@mui/icons-material/House";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import Divider from "@mui/material/Divider";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import AddIcon from "@mui/icons-material/Add";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import SettingsIcon from "@mui/icons-material/Settings";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import GroupIcon from "@mui/icons-material/Group";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AuthContext from "../../context/auth/AuthContext";
import { useContext, useEffect } from "react";
import VisitContext from "../../context/Visits/VisitContext";
import { useTranslation } from "react-i18next";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";

import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
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
  const { t } = useTranslation();
  const { visits, GetVisitPending, visitsClient, GetVisitClient } =
    useContext(VisitContext);
  useEffect(() => {
    GetVisitPending();
    GetVisitClient();
  }, []);
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  /**Componentes del menu */
  const AA = [
    {
      name: t("inicio"),
      value: "/",
      icon: (
        <Tooltip title={t("inicio")} placement="right">
          <HomeIcon />
        </Tooltip>
      ),
    },
    {
      name: t("categorias"),
      value: "/Categories",
      icon: (
        <Tooltip title={t("categorias")} placement="right">
          <CategoryIcon />
        </Tooltip>
      ),
    },
    {
      name: t("servicios"),
      value: "/Services",
      icon: (
        <Tooltip title={t("servicios")} placement="right">
          <SettingsIcon />
        </Tooltip>
      ),
    },
    {
      name: t("nuevaPropiedad"),
      value: "/CreateProperty",
      icon: (
        <Tooltip title={t("nuevaPropiedad")} placement="right">
          <AddIcon />
        </Tooltip>
      ),
    },
    {
      name: t("porAprobar"),
      value: "/PropertiesPending",
      icon: (
        <Tooltip title={t("porAprobar")} placement="right">
          <HouseIcon />
        </Tooltip>
      ),
    },
    {
      name: t("aprobados"),
      value: "/Properties",
      icon: (
        <Tooltip title={t("aprobados")} placement="right">
          <HolidayVillageIcon />
        </Tooltip>
      ),
    },
    {
      name: t("vendidas"),
      value: "/SoldProperties",
      icon: (
        <Tooltip title={t("vendidas")} placement="right">
          <BeenhereIcon />
        </Tooltip>
      ),
    },
    {
      name: t("enRenta"),
      value: "/RentProperties",
      icon: (
        <Tooltip title={t("enRenta")} placement="right">
          <LocalAtmIcon />
        </Tooltip>
      ),
    },
    {
      name: t("buscarPropiedades"),
      value: "/SearchProperties",
      icon: (
        <Tooltip title={t("buscarPropiedades")} placement="right">
          <SearchIcon />
        </Tooltip>
      ),
    },
    {
      name: t("solicitudesVisita"),
      value: "/VisitPending",
      icon: (
        <Tooltip title={t("solicitudesVisita")} placement="right">
          <Badge badgeContent={visits.length} color="error">
            <EmailIcon />
          </Badge>
        </Tooltip>
      ),
    },
    {
      name: t("visitaSolicitada"),
      value: "/VisitAccept",
      icon: (
        <Tooltip title={t("visitaSolicitada")} placement="right">
          <Badge badgeContent={visitsClient.length} color="error">
            <MarkEmailReadIcon />
          </Badge>
        </Tooltip>
      ),
    },
    {
      name: t("usuarios"),
      value: "/Users",
      icon: (
        <Tooltip title={t("usuarios")} placement="right">
          <GroupIcon />
        </Tooltip>
      ),
    },
    {
      name: t("miPerfil"),
      value: "/Perfil",
      icon: (
        <Tooltip title={t("miPerfil")} placement="right">
          <AccountCircleIcon />
        </Tooltip>
      ),
    },
  ];
  const INM = [
    {
      name: t("inicio"),
      value: "/",
      icon: (
        <Tooltip title={t("inicio")} placement="right">
          <HomeIcon />
        </Tooltip>
      ),
    },
    {
      name: t("nuevaPropiedad"),
      value: "/CreateProperty",
      icon: (
        <Tooltip title={t("nuevaPropiedad")} placement="right">
          <AddIcon />
        </Tooltip>
      ),
    },
    {
      name: t("porAprobar"),
      value: "/PropertiesPending",
      icon: (
        <Tooltip title={t("porAprobar")} placement="right">
          <HouseIcon />
        </Tooltip>
      ),
    },
    {
      name: t("aprobados"),
      value: "/Properties",
      icon: (
        <Tooltip title={t("aprobados")} placement="right">
          <HolidayVillageIcon />
        </Tooltip>
      ),
    },
    {
      name: t("vendidas"),
      value: "/SoldProperties",
      icon: (
        <Tooltip title={t("vendidas")} placement="right">
          <BeenhereIcon />
        </Tooltip>
      ),
    },
    {
      name: t("enRenta"),
      value: "/RentProperties",
      icon: (
        <Tooltip title={t("enRenta")} placement="right">
          <LocalAtmIcon />
        </Tooltip>
      ),
    },
    {
      name: t("buscarPropiedades"),
      value: "/SearchProperties",
      icon: (
        <Tooltip title={t("buscarPropiedades")} placement="right">
          <SearchIcon />
        </Tooltip>
      ),
    },
    {
      name: t("solicitudesVisita"),
      value: "/VisitPending",
      icon: (
        <Tooltip title={t("solicitudesVisita")} placement="right">
          <Badge badgeContent={visits.length} color="error">
            <EmailIcon />
          </Badge>
        </Tooltip>
      ),
    },
    {
      name: t("asesores"),
      value: "/AseUsers",
      icon: (
        <Tooltip title={t("asesores")} placement="right">
          <GroupIcon />
        </Tooltip>
      ),
    },
    {
      name: t("miPerfil"),
      value: "/Perfil",
      icon: (
        <Tooltip title={t("miPerfil")} placement="right">
          <AccountCircleIcon />
        </Tooltip>
      ),
    },
  ];
  const AS = [
    {
      name: t("nuevaPropiedad"),
      value: "/CreateProperty",
      icon: (
        <Tooltip title={t("nuevaPropiedad")} placement="right">
          <AddIcon />
        </Tooltip>
      ),
    },
    {
      name: t("porAprobar"),
      value: "/PropertiesPending",
      icon: (
        <Tooltip title={t("porAprobar")} placement="right">
          <HouseIcon />
        </Tooltip>
      ),
    },
    {
      name: t("aprobados"),
      value: "/Properties",
      icon: (
        <Tooltip title={t("aprobados")} placement="right">
          <HolidayVillageIcon />
        </Tooltip>
      ),
    },
    {
      name: t("vendidas"),
      value: "/SoldProperties",
      icon: (
        <Tooltip title={t("vendidas")} placement="right">
          <BeenhereIcon />
        </Tooltip>
      ),
    },
    {
      name: t("enRenta"),
      value: "/RentProperties",
      icon: (
        <Tooltip title={t("enRenta")} placement="right">
          <LocalAtmIcon />
        </Tooltip>
      ),
    },
    {
      name: t("buscarPropiedades"),
      value: "/SearchProperties",
      icon: (
        <Tooltip title={t("buscarPropiedades")} placement="right">
          <SearchIcon />
        </Tooltip>
      ),
    },
    {
      name: t("solicitudesVisita"),
      value: "/VisitPending",
      icon: (
        <Tooltip title={t("solicitudesVisita")} placement="right">
          <Badge badgeContent={visits.length} color="error">
            <EmailIcon />
          </Badge>
        </Tooltip>
      ),
    },
    {
      name: t("visitaSolicitada"),
      value: "/VisitAccept",
      icon: (
        <Tooltip title={t("visitaSolicitada")} placement="right">
          <Badge badgeContent={visitsClient.length} color="error">
            <MarkEmailReadIcon />
          </Badge>
        </Tooltip>
      ),
    },
    {
      name: t("miPerfil"),
      value: "/Perfil",
      icon: (
        <Tooltip title={t("miPerfil")} placement="right">
          <AccountCircleIcon />
        </Tooltip>
      ),
    },
  ];
  const IND = [
    {
      name: t("buscarPropiedades"),
      value: "/SearchProperties",
      icon: (
        <Tooltip title={t("buscarPropiedades")} placement="right">
          <SearchIcon />
        </Tooltip>
      ),
    },
    {
      name: t("visitaSolicitada"),
      value: "/VisitAccept",
      icon: (
        <Tooltip title={t("visitaSolicitada")} placement="right">
          <Badge badgeContent={visitsClient.length} color="error">
            <MarkEmailReadIcon />
          </Badge>
        </Tooltip>
      ),
    },
    {
      name: t("miPerfil"),
      value: "/Perfil",
      icon: (
        <Tooltip title={t("miPerfil")} placement="right">
          <AccountCircleIcon />
        </Tooltip>
      ),
    },
  ];
  const ASINM = [
    {
      name: t("nuevaPropiedad"),
      value: "/CreateProperty",
      icon: (
        <Tooltip title={t("nuevaPropiedad")} placement="right">
          <AddIcon />{" "}
        </Tooltip>
      ),
    },
    {
      name: t("porAprobar"),
      value: "/PropertiesPending",
      icon: (
        <Tooltip title={t("porAprobar")} placement="right">
          <HouseIcon />
        </Tooltip>
      ),
    },
    {
      name: t("aprobados"),
      value: "/Properties",
      icon: (
        <Tooltip title={t("aprobados")} placement="right">
          <HolidayVillageIcon />
        </Tooltip>
      ),
    },
    {
      name: t("vendidas"),
      value: "/SoldProperties",
      icon: (
        <Tooltip title={t("vendidas")} placement="right">
          <BeenhereIcon />
        </Tooltip>
      ),
    },
    {
      name: t("enRenta"),
      value: "/RentProperties",
      icon: (
        <Tooltip title={t("enRenta")} placement="right">
          <LocalAtmIcon />
        </Tooltip>
      ),
    },
    {
      name: t("buscarPropiedades"),
      value: "/SearchProperties",
      icon: (
        <Tooltip title={t("buscarPropiedades")} placement="right">
          <SearchIcon />
        </Tooltip>
      ),
    },
    {
      name: t("solicitudesVisita"),
      value: "/VisitPending",
      icon: (
        <Tooltip title={t("solicitudesVisita")} placement="right">
          <Badge badgeContent={visits.length} color="error">
            <EmailIcon />
          </Badge>
        </Tooltip>
      ),
    },
    {
      name: t("visitaSolicitada"),
      value: "/VisitAccept",
      icon: (
        <Tooltip title={t("visitaSolicitada")} placement="right">
          <Badge badgeContent={visitsClient.length} color="error">
            <MarkEmailReadIcon />
          </Badge>
        </Tooltip>
      ),
    },
    {
      name: t("miPerfil"),
      value: "/Perfil",
      icon: (
        <Tooltip title={t("miPerfil")} placement="right">
          <AccountCircleIcon />
        </Tooltip>
      ),
    },
  ];
  const { cerrarSesion, usuario } = useContext(AuthContext);
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{
          background:
            "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(242,180,67,1) 73%, rgba(241,173,49,1) 80%)",
        }}
      >
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
            variant="h4"
            fontFamily="monospace"
            fontWeight="bold"
            noWrap
            component="div"
            sx={{ color: "black" }}
          >
            {t("logo")}
          </Typography>
          <Tooltip title={t("cerrarSesión")}>
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
        sx={{ backgroundColor: "#FFB734" }}
      >
        <DrawerHeader sx={{ backgroundColor: "#FFB734" }}>
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
                          color: "black",
                        }}
                      >
                        {text.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={text.name}
                        sx={{
                          opacity: open ? 1 : 0,
                          color: "black",
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
                          color: "black",
                        }}
                      >
                        {text.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={text.name}
                        sx={{
                          opacity: open ? 1 : 0,
                          color: "black",
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
                          color: "black",
                        }}
                      >
                        {text.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={text.name}
                        sx={{
                          opacity: open ? 1 : 0,
                          color: "black",
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
                          color: "black",
                        }}
                      >
                        {text.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={text.name}
                        sx={{
                          opacity: open ? 1 : 0,
                          color: "black",
                          fontWeight: "bold",
                        }}
                      />
                    </ListItemButton>
                  </Link>
                </ListItem>
              ))
            ) : usuario.type_user === 5 ? (
              ASINM.map((text, index) => (
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
                          color: "black",
                        }}
                      >
                        {text.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={text.name}
                        sx={{
                          opacity: open ? 1 : 0,
                          color: "black",
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
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <DrawerHeader />
          {children}
        </Grid>
      </Grid>
    </Box>
  );
}
