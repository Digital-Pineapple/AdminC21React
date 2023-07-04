import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import bg from "../../assets/img/services.png";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import ServicesContext from "../../context/Services/ServicesContext";
export default function CardServices({ service }) {
  const { DeleteService } = React.useContext(ServicesContext);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140, opacity: "0.2" }}
        image={bg}
        title="green iguana"
      />
      <CardContent sx={{ marginTop: -15 }}>
        <Typography fontWeight="bold" fontFamily="inherit" variant="h5">
          {service.name}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton size="small">
          <EditIcon sx={{ color: "#0277bd" }} />
        </IconButton>
        <IconButton size="small" onClick={() => DeleteService(service.id)}>
          <DeleteIcon sx={{ color: "red" }} />
        </IconButton>
      </CardActions>
    </Card>
  );
}
