import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Slide from "@mui/material/Slide";
import { AppBar, Chip, Divider, Grid, TextField, Toolbar } from "@mui/material";
import CategoriesSelect from "../SelectOptions/CategoriesSelect";
import OptionsSelect from "../SelectOptions/Options";
import ParkingOptions from "./ParkingOptions";
import OptionsWashRoom from "./OptionsWahsroom";
import RemodelOptions from "./RemodelOptions";
import SelectState from "../SelectOptions/SelectState";
import { useState } from "react";
import SelectMunicipality from "../SelectOptions/SelectMunicipality";
import UserPropSelect from "../SelectOptions/UserPropSelect";
import PropertiesContext from "../../context/Properties/PropertiesContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import Layout from "../../components/layout/Layout";
import FractionamientOptions from "./FractionamientOptions";
import MapsLoading from "../../components/loading/MapsLoading";
import Commission from "./Commission";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const PropertiesCreate = () => {
  const { AddProperty } = useContext(PropertiesContext);

  const [category, saveCategory] = React.useState(null);
  const detectarCambiosCategory = (value) => {
    saveCategory(value);
  };

  const [option, saveOption] = React.useState(null);
  const detectarCambiosOption = (value) => {
    saveOption(value);
  };

  const [userInm, saveUserInm] = React.useState(null);
  const detectarCambiosUserInm = (value) => {
    saveUserInm(value);
  };

  const [selectedValueParking, setSelectedValueParking] = React.useState("si");
  const handleChangeParking = (event) => {
    setSelectedValueParking(event.target.value);
  };

  const [selectedValueWashRoom, setSelectedValueWashRoom] =
    React.useState("si");
  const handleChangeWashRoom = (event) => {
    setSelectedValueWashRoom(event.target.value);
  };

  const [selectedValueRemodel, setSelectedValueRemodel] = React.useState("si");
  const handleChangeRemodel = (event) => {
    setSelectedValueRemodel(event.target.value);
  };

  const [selectedValueFractionamient, setSelectedValueFractionamient] =
    React.useState("si");
  const handleChangeFractionamient = (event) => {
    setSelectedValueFractionamient(event.target.value);
  };

  const [state, saveState] = useState(null);
  const detectarCambiosState = (value) => {
    saveState(value.value);
  };

  const [municipality, saveMunicipality] = useState(null);
  const detectarCambiosMunicipality = (value) => {
    saveMunicipality(value.value);
  };

  const [selectedValueCommission, setSelectedValueCommission] =
    React.useState("si");
  const handleChangeCommission = (event) => {
    setSelectedValueCommission(event.target.value);
  };

  const [cargando, spinnerCargando] = useState(true);
  const [map, setMap] = useState(null);
  const handleHtmlMap = ({ target }) => {
    setTimeout(() => {
      setMap(target.value);
    }, 30);
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  let user_id = localStorage.getItem("user_id");
  let type_user = localStorage.getItem("type_user");
  const onSubmit = (data, e) => {
    data.category_id = category;
    data.rule_id = option;
    data.userInm_id = userInm;
    data.state_id = state;
    data.municipality_id = municipality;
    data.user_id = user_id;
    if (type_user === "5") {
      data.userInm_id = user_id;
    }
    if (selectedValueParking === "si") {
      data.parking = 1;
    } else {
      data.parking = 0;
    }
    if (selectedValueWashRoom === "si") {
      data.laundry_room = 1;
    } else {
      data.laundry_room = 0;
    }
    if (selectedValueRemodel === "si") {
      data.remodel = 1;
    } else {
      data.remodel = 0;
    }
    data.fractionamient = selectedValueFractionamient;
    data.iframe = map;
    data.type_user = type_user;
    AddProperty(data);
  };

  return (
    <Layout>
      <Grid container spacing={2} sx={{ padding: 2 }}>
        <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
          <Typography
            fontWeight="bold"
            fontFamily="monospace"
            variant="h5"
            sx={{ color: "black" }}
          >
            Agregar mi propiedad
          </Typography>
        </Grid>
        <form
          onSubmit={handleSubmit(onSubmit)}
          onKeyDown={(e) => {
            if (e.code === "Enter" || e.code === "NumpadEnter")
              e.preventDefault();
          }}
        >
          <Grid container spacing={2} sx={{ padding: 2 }}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Divider>
                <Chip
                  label="Detalles"
                  sx={{ backgroundColor: "#1f3473", color: "white" }}
                />
              </Divider>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={2} xl={2}>
              <TextField
                fullWidth
                variant="outlined"
                type="number"
                name="age"
                label="Años de antiguedad"
                error={errors.age ? true : false}
                helperText={errors?.age?.message}
                {...register("age", {
                  required: {
                    value: true,
                    message:
                      "Los años de antiguedad de la propiedad es requerida",
                  },
                  minLength: {
                    value: 1,
                    message: "Minimo 1 caracteres",
                  },
                  maxLength: {
                    value: 3,
                    message: "Maximo 3 caracteres",
                  },
                })}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={2} xl={2}>
              <TextField
                fullWidth
                variant="outlined"
                type="number"
                name="rooms"
                label="Numero de recamaras"
                error={errors.rooms ? true : false}
                helperText={errors?.rooms?.message}
                {...register("rooms", {
                  required: {
                    value: true,
                    message:
                      "El numero de recamaras de la propiedad es requerida",
                  },
                  minLength: {
                    value: 1,
                    message: "Minimo 1 caracteres",
                  },
                  maxLength: {
                    value: 2,
                    message: "Maximo 2 caracteres",
                  },
                })}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={2} xl={2}>
              <TextField
                fullWidth
                variant="outlined"
                type="number"
                name="bathroom"
                label="Baños completos"
                error={errors.bathroom ? true : false}
                helperText={errors?.bathroom?.message}
                {...register("bathroom", {
                  required: {
                    value: true,
                    message:
                      "El numero de baños completos de la propiedad es requerida",
                  },
                  minLength: {
                    value: 1,
                    message: "Minimo 1 caracteres",
                  },
                  maxLength: {
                    value: 2,
                    message: "Maximo 2 caracteres",
                  },
                })}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={2} xl={2}>
              <TextField
                fullWidth
                variant="outlined"
                type="number"
                name="half_bath"
                label="Medios Baños"
                error={errors.half_bath ? true : false}
                helperText={errors?.half_bath?.message}
                {...register("half_bath", {
                  required: {
                    value: true,
                    message:
                      "El numero de medios baños de la propiedad es requerida",
                  },
                  minLength: {
                    value: 1,
                    message: "Minimo 1 caracteres",
                  },
                  maxLength: {
                    value: 3,
                    message: "Maximo 3 caracteres",
                  },
                })}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={2} xl={2}>
              <TextField
                fullWidth
                variant="outlined"
                type="number"
                name="size"
                label="Metros construidos"
                error={errors.size ? true : false}
                helperText={errors?.size?.message}
                {...register("size", {
                  required: {
                    value: true,
                    message:
                      "El numero de metros construidos de la propiedad es requerida",
                  },
                  minLength: {
                    value: 1,
                    message: "Minimo 1 caracteres",
                  },
                  maxLength: {
                    value: 5,
                    message: "Maximo 5 caracteres",
                  },
                })}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={2} xl={2}>
              <TextField
                fullWidth
                variant="outlined"
                type="number"
                label="Metros totales"
                name="size_total"
                error={errors.size_total ? true : false}
                helperText={errors?.size_total?.message}
                {...register("size_total", {
                  required: {
                    value: true,
                    message:
                      "El numero de metros completos de la propiedad es requerida",
                  },
                  minLength: {
                    value: 1,
                    message: "Minimo 1 caracteres",
                  },
                  maxLength: {
                    value: 5,
                    message: "Maximo 5 caracteres",
                  },
                })}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={2}
              xl={2}
              display="flex"
              justifyContent="center"
            >
              <ParkingOptions
                setSelectedValueParking={setSelectedValueParking}
                selectedValueParking={selectedValueParking}
                handleChangeParking={handleChangeParking}
              />
            </Grid>
            {/* {selectedValueParking === "si" && (
              <Grid item xs={12} sm={12} md={6} lg={2} xl={2}>
                <TextField
                  fullWidth
                  variant="outlined"
                  type="number"
                  label="Lugares de estacionamiento"
                  error={errors.parking_places ? true : false}
                  helperText={errors?.parking_places?.message}
                  {...register("parking_places", {
                    required: {
                      value: true,
                      message:
                        "El numero de lugares de estacionamiento de la propiedad es requerida",
                    },
                    minLength: {
                      value: 1,
                      message: "Minimo 1 caracteres",
                    },
                    maxLength: {
                      value: 2,
                      message: "Maximo 2 caracteres",
                    },
                  })}
                />
              </Grid>
            )} */}
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={2}
              xl={2}
              display="flex"
              justifyContent="center"
            >
              <RemodelOptions
                selectedValueRemodel={selectedValueRemodel}
                setSelectedValueRemodel={setSelectedValueRemodel}
                handleChangeRemodel={handleChangeRemodel}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Divider>
                <Chip
                  label="Datos Generales"
                  sx={{ backgroundColor: "#1F3473", color: "white" }}
                />
              </Divider>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <TextField
                fullWidth
                variant="outlined"
                name="name"
                label="Nombre de la propiedad"
                error={errors.name ? true : false}
                helperText={errors?.name?.message}
                {...register("name", {
                  required: {
                    value: true,
                    message: "El nombre de la propiedad es requerida",
                  },
                  minLength: {
                    value: 1,
                    message: "Minimo 1 caracteres",
                  },
                  maxLength: {
                    value: 50,
                    message: "Maximo 50 caracteres",
                  },
                })}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <CategoriesSelect
                detectarCambiosCategory={detectarCambiosCategory}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <OptionsSelect detectarCambiosOption={detectarCambiosOption} />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
              <TextField
                fullWidth
                variant="outlined"
                type="number"
                label="Precio"
                name="final_price"
                error={errors.final_price ? true : false}
                helperText={errors?.final_price?.message}
                {...register("final_price", {
                  required: {
                    value: true,
                    message: "El precio de la propiedad es requerido",
                  },
                  minLength: {
                    value: 1,
                    message: "Minimo 1 caracteres",
                  },
                  maxLength: {
                    value: 12,
                    message: "Maximo 12 caracteres",
                  },
                })}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={2}
              xl={2}
              display="flex"
              justifyContent="center"
            >
              <Commission
                setSelectedValueCommission={setSelectedValueCommission}
                selectedValueCommission={selectedValueCommission}
                handleChangeCommission={handleChangeCommission}
              />
            </Grid>
            {selectedValueCommission === "si" && (
              <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                <TextField
                  fullWidth
                  variant="outlined"
                  type="text"
                  label="¿Qué porcentaje desea compartir?"
                  name="commission"
                  error={errors.commission ? true : false}
                  helperText={errors?.commission?.message}
                  {...register("commission", {
                    required: {
                      value: true,
                      message: "La Comisión compartida es requerida",
                    },
                    min: {
                      value: 0,
                      message: "El valor debe ser al menos 0%",
                    },
                    max: {
                      value: 100,
                      message: "El valor no puede exceder el 100%",
                    },
                  })}
                  inputProps={{
                    min: 0,
                    max: 100,
                    step: 0.01,
                  }}
                />
              </Grid>
            )}

            {type_user === "2" && (
              <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                <UserPropSelect
                  detectarCambiosUserInm={detectarCambiosUserInm}
                />
              </Grid>
            )}
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <TextField
                id="outlined-multiline-static"
                label="Descripcion del lugar"
                multiline
                fullWidth
                rows={8}
                name="description"
                error={errors.description ? true : false}
                helperText={errors?.description?.message}
                {...register("description", {
                  required: {
                    value: true,
                    message: "La descripcion de la propiedad es requerida",
                  },
                })}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Divider>
                <Chip
                  label="Dirección"
                  sx={{ backgroundColor: "#1F3473", color: "white" }}
                />
              </Divider>
            </Grid>
            <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
              <TextField
                fullWidth
                variant="outlined"
                type="text"
                name="street_name"
                label="Calle"
                error={errors.street_name ? true : false}
                helperText={errors?.street_name?.message}
                {...register("street_name", {
                  required: {
                    value: true,
                    message: "La calle de la propiedad es requerida",
                  },
                  minLength: {
                    value: 1,
                    message: "Minimo 1 caracteres",
                  },
                  maxLength: {
                    value: 50,
                    message: "Maximo 50 caracteres",
                  },
                })}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
              <TextField
                fullWidth
                variant="outlined"
                type="number"
                label="No_Ext"
                name="number_building"
                error={errors.number_building ? true : false}
                helperText={errors?.number_building?.message}
                {...register("number_building", {
                  required: {
                    value: true,
                    message: "El numero eexterior es requerido",
                  },
                  minLength: {
                    value: 1,
                    message: "Minimo 1 caracteres",
                  },
                  maxLength: {
                    value: 5,
                    message: "Maximo 5 caracteres",
                  },
                })}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
              <TextField
                fullWidth
                variant="outlined"
                type="number"
                label="No_Int"
                name="number_int"
                error={errors.number_int ? true : false}
                helperText={errors?.number_int?.message}
                {...register("number_int", {
                  required: {
                    value: true,
                    message: "El numero interior es requerido",
                  },
                  minLength: {
                    value: 1,
                    message: "Minimo 1 caracteres",
                  },
                  maxLength: {
                    value: 5,
                    message: "Maximo 5 caracteres",
                  },
                })}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
              <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Colonia"
                name="colony"
                error={errors.colony ? true : false}
                helperText={errors?.colony?.message}
                {...register("colony", {
                  required: {
                    value: true,
                    message: "La colonia de la propiedad es requerida",
                  },
                  minLength: {
                    value: 1,
                    message: "Minimo 1 caracteres",
                  },
                  maxLength: {
                    value: 50,
                    message: "Maximo 50 caracteres",
                  },
                })}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
              <SelectState detectarCambiosState={detectarCambiosState} />
            </Grid>
            {state !== null && (
              <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                <SelectMunicipality
                  detectarCambiosMunicipality={detectarCambiosMunicipality}
                  state_id={state}
                />
              </Grid>
            )}
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
              <TextField
                fullWidth
                variant="outlined"
                type="number"
                label="Codigo Postal"
                name="postal_code"
                error={errors.postal_code ? true : false}
                helperText={errors?.postal_code?.message}
                {...register("postal_code", {
                  required: {
                    value: true,
                    message: "El codigo postal de la propiedad es requerida",
                  },
                  minLength: {
                    value: 1,
                    message: "Minimo 1 caracteres",
                  },
                  maxLength: {
                    value: 10,
                    message: "Maximo 10 caracteres",
                  },
                })}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <TextField
                required
                multiline
                rows={6}
                fullWidth
                variant="outlined"
                onChange={handleHtmlMap}
                label="Iframe Mapa"
                name="direction_maps"
              />
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <div dangerouslySetInnerHTML={{ __html: map }} id="map" />
            </Grid>

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
              <Button
                variant="contained"
                type="submit"
                size="large"
                fullWidth
                sx={{
                  background: "#1F3473",
                  color: "white",
                  "&:hover": { background: "#1F3473", color: "white" },
                }}
              >
                Guardar{" "}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Layout>
  );
};

export default PropertiesCreate;
