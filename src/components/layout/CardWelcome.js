import React, { useContext } from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

import { makeStyles } from "@mui/styles";
import AuthContext from "../../context/auth/AuthContext";

const useStyles = makeStyles(() => ({
  dollar: {
    objectFit: "cover",
  },
  div_ganancias: {
    marginleft: "auto",
    marginright: 0,
  },
}));

const CardWelcome = () => {
  const { usuario } = useContext(AuthContext);
  const date = new Date();
  const hour = date.getHours();

  return (
    //mañana
    <div style={{ marginTop: 12 }}>
      {hour >= 0 && hour < 12 ? (
        <Card
          sx={{
            height: 70,
            boxShadow: 4,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            background: "#F39F5A",
          }}
        >
          <div>
            <Typography
              component="div"
              variant="subtitle1"
              sx={{
                fontWeight: "bold",
                color: "white",
                border: "1px",
                borderColor: "green",
                marginLeft: 5,
              }}
            >
              Buenos días <br />
              {usuario && usuario.name}
            </Typography>
          </div>
          <div>
            <img
              src={require("../../assets/gif/day.gif")}
              width={150}
              height={150}
            />
          </div>
        </Card>
      ) : hour >= 12 && hour < 19 ? (
        //tarde
        <Card
          sx={{
            boxShadow: 4,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            background: "#F39F5A",
          }}
        >
          <div>
            <Typography
              component="div"
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: "white",
                border: "1px",
                borderColor: "green",
                marginLeft: 5,
              }}
            >
              Buenas Tardes <br />
              {usuario && usuario.name}
            </Typography>
          </div>
          <div>
            <img
              src={require("../../assets/gif/day.gif")}
              width={150}
              height={150}
            />
          </div>
        </Card>
      ) : (
        //noche
        <Card
          sx={{
            boxShadow: 4,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            background: "#451952",
          }}
        >
          <div>
            <Typography
              component="div"
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: "white",
                border: "1px",
                borderColor: "green",
                marginLeft: 5,
              }}
            >
              Buenas Noches <br />
              {usuario && usuario.name}
            </Typography>
          </div>
          <div>
            <img
              src={require("../../assets/gif/moon.gif")}
              width={150}
              height={150}
            />
          </div>
        </Card>
      )}
    </div>
  );
};

export default CardWelcome;
