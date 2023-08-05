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
import PropertiesContext from "../../context/Properties/PropertiesContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import FractionamientOptions from "./FractionamientOptions";
import MapsLoading from "../../components/loading/MapsLoading";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddProperty({ modal, handleClose }) {
  const { AddProperty } = useContext(PropertiesContext);
  const [category, saveCategory] = React.useState(null);
  const detectarCambiosCategory = (value) => {
    saveCategory(value.value);
  };
  const [option, saveOption] = React.useState(null);
  const detectarCambiosOption = (value) => {
    saveOption(value.value);
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
    setValue,
  } = useForm();
  const reset = () => {
    saveState(null);
    saveMunicipality(null);
    saveCategory(null);
    saveOption(null);
    setMap(null);
    setValue("name", "", { shouldDirty: true });
    setValue("description", "", { shouldDirty: true });
    setValue("final_price", "", { shouldDirty: true });
    setValue("age", "", { shouldDirty: true });
    setValue("rooms", "", { shouldDirty: true });
    setValue("bathroom", "", { shouldDirty: true });
    setValue("size", "", { shouldDirty: true });
    setValue("size_total", "", { shouldDirty: true });
    setValue("parking_places", "", { shouldDirty: true });
    setValue("name_fractionamient", "", { shouldDirty: true });
    setValue("lote", "", { shouldDirty: true });
    setValue("apple_house", "", { shouldDirty: true });
    setValue("street_name", "", { shouldDirty: true });
    setValue("number_building", "", { shouldDirty: true });
    setValue("no_int", "", { shouldDirty: true });
    setValue("colony", "", { shouldDirty: true });
    setValue("postal_code", "", { shouldDirty: true });
  };
  const onSubmit = (data, e) => {
    data.category_id = category;
    data.rule_id = option;
    data.state_id = state;
    data.municipality_id = municipality;
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
    console.log(data, "la data");
    // data.category = CategoryId;
    // data.subcategory = SubcategoryId;
    // data.tags = tagId;
    // data.brand = brandId;
    // data.product_type = typeProduct;
    // data.discount = 0;
    // //data.multimedia = multimedia;
    // if (typeProduct === "2" && variant !== null) {
    //   data.variation = variant;
    // }
    // data.price_purchase = PriceFormat(data.price_purchase);
    // data.price = PriceFormat(data.price);
    AddProperty(data);
    // reset();
    handleClose();
    reset();
  };
  return (
    <div>
      <Dialog
        fullScreen
        open={modal}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative", backgroundColor: "#D7A86E" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Nueva Propiedad
            </Typography>
          </Toolbar>
        </AppBar>
        <form
          onSubmit={handleSubmit(onSubmit)}
          onKeyDown={(e) => {
            if (e.code === "Enter" || e.code === "NumpadEnter")
              e.preventDefault();
          }}
          autoComplete="off"
        >
          <Grid container spacing={2} sx={{ padding: 2 }}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Divider>
                <Chip
                  label="Datos Generales"
                  sx={{ backgroundColor: "#D7A86E", color: "white" }}
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
                })}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <TextField
                id="outlined-multiline-static"
                label="Descripcion del lugar"
                multiline
                fullWidth
                rows={2}
                name="description"
                placeholder="Escribe una breve descripcion del inmueble"
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
                  label="Detalles"
                  sx={{ backgroundColor: "#D7A86E", color: "white" }}
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
            {selectedValueParking === "si" && (
              <Grid item xs={12} sm={12} md={6} lg={2} xl={2}>
                <TextField
                  fullWidth
                  variant="outlined"
                  type="number"
                  label="Lugares de estacionamiento"
                  name="parking_places"
                  error={errors.parking_places ? true : false}
                  helperText={errors?.parking_places?.message}
                  {...register("parking_places", {
                    required: {
                      value: true,
                      message:
                        "El numero de lugares de estacionamiento de la propiedad es requerida",
                    },
                  })}
                />
              </Grid>
            )}
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
              <OptionsWashRoom
                setSelectedValueWashRoom={selectedValueWashRoom}
                selectedValueWashRoom={selectedValueWashRoom}
                handleChangeWashRoom={handleChangeWashRoom}
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
              <RemodelOptions
                selectedValueRemodel={selectedValueRemodel}
                setSelectedValueRemodel={setSelectedValueRemodel}
                handleChangeRemodel={handleChangeRemodel}
              />
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={3}
              xl={3}
              display="flex"
              justifyContent="center"
            >
              <FractionamientOptions
                selectedValueFractionamient={selectedValueFractionamient}
                setSelectedValueFractionamient={setSelectedValueFractionamient}
                handleChangeFractionamient={handleChangeFractionamient}
              />
            </Grid>
            {selectedValueFractionamient === "si" && (
              <>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={4}
                  lg={4}
                  xl={4}
                  display="flex"
                  justifyContent="center"
                >
                  <TextField
                    fullWidth
                    variant="outlined"
                    type="text"
                    name="name_fractionamient"
                    label="Nombre Fraccionamiento"
                    error={errors.name_fractionamient ? true : false}
                    helperText={errors?.name_fractionamient?.message}
                    {...register("name_fractionamient", {
                      required: {
                        value: true,
                        message:
                          "El nombre del fraccionamiento de la propiedad es requerida",
                      },
                    })}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={4}
                  lg={4}
                  xl={4}
                  display="flex"
                  justifyContent="center"
                >
                  <TextField
                    fullWidth
                    variant="outlined"
                    type="text"
                    name="lote"
                    label="Lote de la casa"
                    error={errors.lote ? true : false}
                    helperText={errors?.lote?.message}
                    {...register("lote", {
                      required: {
                        value: true,
                        message:
                          "El numero de lote de la propiedad es requerida",
                      },
                    })}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={4}
                  lg={4}
                  xl={4}
                  display="flex"
                  justifyContent="center"
                >
                  <TextField
                    fullWidth
                    variant="outlined"
                    type="text"
                    name="apple_house"
                    label="Manzana de la casa"
                    error={errors.apple_house ? true : false}
                    helperText={errors?.apple_house?.message}
                    {...register("apple_house", {
                      required: {
                        value: true,
                        message:
                          "El numero de manzana de la propiedad es requerida",
                      },
                    })}
                  />
                </Grid>
              </>
            )}
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Divider>
                <Chip
                  label="Dirección"
                  sx={{ backgroundColor: "#D7A86E", color: "white" }}
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
                error={errors.number_building ? true : false}
                helperText={errors?.number_building?.message}
                {...register("number_building", {
                  required: {
                    value: false,
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
                label="No_Int"
                name="number_int"
                error={errors.number_int ? true : false}
                helperText={errors?.number_int?.message}
                {...register("number_int", {
                  required: {
                    value: false,
                    message: "La calle de la propiedad es requerida",
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
                    value: false,
                    message: "La colonia de la propiedad es requerida",
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
                type="text"
                label="Codigo Postal"
                name="postal_code"
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
                multiline
                rows={6}
                fullWidth
                variant="outlined"
                onChange={handleHtmlMap}
                label="Iframe Mapa"
                placeholder="Ingresa el iframe del mapa en este espacio"
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
                  background: "#D7A86E",
                  color: "white",
                  "&:hover": { background: "#D7A86E", color: "white" },
                }}
              >
                Guardar{" "}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Dialog>
    </div>
  );
}
