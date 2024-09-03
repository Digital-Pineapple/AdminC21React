import {
  Button,
  Chip,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import * as React from "react";
import { useForm } from "react-hook-form";
import CategoriesSelect from "../SelectOptionsEdit/CategoriesSelect";
import RemodelOptions from "../SelectOptionsEdit/RemodelOptions";
import Options from "../SelectOptionsEdit/Options";
import SelectMunicipality from "../SelectOptionsEdit/SelectMunicipality";
import SelectState from "../SelectOptionsEdit/SelectState";
import ParkingOptions from "../SelectOptionsEdit/ParkingOptions";
import PropertiesContext from "../../context/Properties/PropertiesContext";
import OptionsWashRoom from "../SelectOptionsEdit/OptionsWahsroom";
import FractionamientOptions from "../SelectOptionsEdit/FractionamientOptions";
import { useState, useContext, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import MethodGet from "../../config/service";
import UserPropSelect from "../SelectOptionsEdit/UserPropSelect";
import Commission from "./Commission";
const EditProperty = (props) => {
  const { UpdateProperty } = useContext(PropertiesContext);
  let type_user = localStorage.getItem("type_user");
  const { id } = props.match.params;
  const [property, saveProperty] = useState([]);

  //Select de Categorias
  const [category, saveCategory] = useState(null);
  const detectarCambiosCategory = (value) => {
    saveCategory(value);
  };

  //Select de Servicios
  const [option, saveOption] = useState(null);
  const detectarCambiosOption = (value) => {
    saveOption(value);
  };

  //Select de Usuarios de Inm
  const [userInm, saveUserInm] = useState(null);
  const detectarCambiosUserInm = (value) => {
    saveUserInm(value);
  };

  //Select de Estacionamineto
  const [parking, saveParking] = useState(null);
  const detectarCambiosParking = (value) => {
    saveParking(value);
  };

  //Select de Remodelacion
  const [remodel, saveRemodel] = useState(null);
  const detectarCambiosRemodel = (value) => {
    saveRemodel(value);
  };

  //Select de Estados
  const [States, saveState] = useState(null);
  const detectarCambiosState = (value) => {
    saveState(value);
  };

  //Select de Municipios
  const [municipality, saveMunicipality] = useState(null);
  const detectarCambiosMunicipality = (value) => {
    saveMunicipality(value);
  };

  //Mapa de Propiedades
  const [cargando, spinnerCargando] = useState(true);
  const [map, setMap] = useState(null);
  const handleHtmlMap = ({ target }) => {
    setTimeout(() => {
      setMap(target.value);
    }, 30);
  };

  const [selectedValueCommission, setSelectedValueCommission] =
    React.useState("si");
  const handleChangeCommission = (event) => {
    setSelectedValueCommission(event.target.value);
  };

  useEffect(() => {
    let url = `/properties/${id}`;
    MethodGet(url)
      .then((res) => {
        saveProperty(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  useEffect(() => {
    setTimeout(() => {
      setMap(property?.address?.iframe);
    }, 1000);
  }, [property]);

  const {
    description,
    category_id,
    userInm_id,
    address,
    rules,
    details,
    status,
  } = property;
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm();

  const onSubmit = (data, e) => {
    data.id = id;
    data.status = status;
    data.category_id = category;
    data.rule_id = option;
    data.userInm_id = userInm;
    data.state_id = States;
    data.municipality_id = municipality;
    data.parking = parking;
    data.remodel = remodel;
    data.iframe = map;
    UpdateProperty(data);
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
            Editar Propiedad
          </Typography>
        </Grid>
        <form
          onSubmit={handleSubmit(onSubmit)}
          onKeyDown={(e) => {
            if (e.code === "Enter" || e.code === "NumpadEnter")
              e.preventDefault();
          }}
        >
          {property && property.name && (
            <Grid container spacing={2} sx={{ padding: 2 }}>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Divider>
                  <Chip
                    label="Detalles"
                    sx={{ backgroundColor: "#ffb300", color: "black" }}
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
                  defaultValue={property.details.age}
                  error={errors.age ? true : false}
                  helperText={errors?.age?.message}
                  {...register("age", {
                    required: {
                      value: true,
                      message:
                        "Los años de antiguedad de la propiedad es requerida",
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
                  defaultValue={property.details.rooms}
                  error={errors.rooms ? true : false}
                  helperText={errors?.rooms?.message}
                  {...register("rooms", {
                    required: {
                      value: true,
                      message:
                        "El numero de recamaras de la propiedad es requerida",
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
                  defaultValue={property.details.bathroom}
                  error={errors.bathroom ? true : false}
                  helperText={errors?.bathroom?.message}
                  {...register("bathroom", {
                    required: {
                      value: true,
                      message:
                        "El numero de baños completos de la propiedad es requerida",
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
                  defaultValue={property.details.half_bath}
                  error={errors.half_bath ? true : false}
                  helperText={errors?.half_bath?.message}
                  {...register("half_bath", {
                    required: {
                      value: true,
                      message:
                        "El numero de medios baños de la propiedad es requerida",
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
                  defaultValue={property.details.size}
                  error={errors.size ? true : false}
                  helperText={errors?.size?.message}
                  {...register("size", {
                    required: {
                      value: true,
                      message:
                        "El numero de metros construidos de la propiedad es requerida",
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
                  defaultValue={property.details.size_total}
                  error={errors.size_total ? true : false}
                  helperText={errors?.size_total?.message}
                  {...register("size_total", {
                    required: {
                      value: true,
                      message:
                        "El numero de metros completos de la propiedad es requerida",
                    },
                  })}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                <ParkingOptions
                  detectarCambios={detectarCambiosParking}
                  parking={details.parking}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                <RemodelOptions
                  detectarCambios={detectarCambiosRemodel}
                  remodel={details.remodel}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Divider>
                  <Chip
                    label="Datos Generales"
                    sx={{ backgroundColor: "#ffb300", color: "black" }}
                  />
                </Divider>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                <TextField
                  fullWidth
                  variant="outlined"
                  name="name"
                  label="Nombre de la propiedad"
                  defaultValue={property.name}
                  error={errors.name ? true : false}
                  helperText={errors?.name?.message}
                  {...register("name", {
                    required: {
                      value: true,
                      message: "El nombre de la propiedad es requerida",
                    },
                  })}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                <CategoriesSelect
                  detectarCambiosCategory={detectarCambiosCategory}
                  category_id={category_id}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                <Options
                  detectarCambios={detectarCambiosOption}
                  rules={rules[0].detail.service_id}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
                <TextField
                  fullWidth
                  variant="outlined"
                  type="number"
                  label="Precio"
                  name="final_price"
                  defaultValue={property.rules[0].detail.final_price}
                  error={errors.final_price ? true : false}
                  helperText={errors?.final_price?.message}
                  {...register("final_price", {
                    required: {
                      value: true,
                      message: "El precio de la propiedad es requerido",
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
                    type="number"
                    label="Comisión compartida de la propiedad"
                    name="commission"
                    defaultValue={property.rules[0].detail.commission}
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
                    userInm_id={userInm_id}
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
                  defaultValue={description}
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
                    sx={{ backgroundColor: "#ffb300", color: "black" }}
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
                  defaultValue={property.address.street_name}
                  error={errors.street_name ? true : false}
                  helperText={errors?.street_name?.message}
                  {...register("street_name", {
                    required: {
                      value: true,
                      message: "La calle de la propiedad es requerida",
                    },
                  })}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
                <TextField
                  fullWidth
                  variant="outlined"
                  type="text"
                  label="No_Ext"
                  name="number_building"
                  defaultValue={property.address.number_building}
                  error={errors.number_building ? true : false}
                  helperText={errors?.number_building?.message}
                  {...register("number_building", {
                    required: {
                      value: true,
                      message: "El numero eexterior es requerido",
                    },
                  })}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
                <TextField
                  fullWidth
                  variant="outlined"
                  type="text"
                  label="No_Int"
                  name="number_int"
                  defaultValue={property.address.number_int}
                  error={errors.number_int ? true : false}
                  helperText={errors?.number_int?.message}
                  {...register("number_int", {
                    required: {
                      value: true,
                      message: "El numero interior es requerido",
                    },
                  })}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
                <TextField
                  fullWidth
                  variant="outlined"
                  type="text"
                  label="Colonia"
                  name="colony"
                  defaultValue={property.address.colony}
                  error={errors.colony ? true : false}
                  helperText={errors?.colony?.message}
                  {...register("colony", {
                    required: {
                      value: true,
                      message: "La colonia de la propiedad es requerida",
                    },
                  })}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
                <SelectState
                  detectarCambiosState={detectarCambiosState}
                  address={address.state}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                <SelectMunicipality
                  detectarCambiosMunicipality={detectarCambiosMunicipality}
                  state_id={States}
                  state={address.state.id}
                  municipality_id={address.municipality_id}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                <TextField
                  fullWidth
                  variant="outlined"
                  type="text"
                  label="Codigo Postal"
                  name="postal_code"
                  defaultValue={property.address.postal_code}
                  error={errors.postal_code ? true : false}
                  helperText={errors?.postal_code?.message}
                  {...register("postal_code", {
                    required: {
                      value: true,
                      message: "El codigo postal de la propiedad es requerida",
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
                  defaultValue={property.address.iframe}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={4}
                sx={{ display: "flex" }}
              >
                <div
                  dangerouslySetInnerHTML={{
                    __html: map,
                  }}
                  id="map"
                />
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
                    background: "#ffb300",
                    color: "black",
                    "&:hover": { background: "#ffb300", color: "black" },
                  }}
                >
                  Guardar
                </Button>
              </Grid>
            </Grid>
          )}
        </form>
        {/**Termina formualrio */}
      </Grid>
    </Layout>
  );
};

export default EditProperty;
