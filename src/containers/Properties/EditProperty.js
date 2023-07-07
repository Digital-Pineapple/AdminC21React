import {
  Button,
  Chip,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import CategoriesSelect from "../SelectOptions/CategoriesSelect";
import OptionsSelect from "../SelectOptions/Options";
import ParkingOptions from "./ParkingOptions";
import OptionsWashRoom from "./OptionsWahsroom";
import FractionamientOptions from "./FractionamientOptions";
import SelectState from "../SelectOptions/SelectState";
import SelectMunicipality from "../SelectOptions/SelectMunicipality";
import { useEffect, useState } from "react";
import MethodGet from "../../config/service";
const EditProperty = (props) => {
  const { id } = props.match.params;
  const [property, saveProperty] = useState([]);
  const [category, saveCategory] = useState(null);
  const detectarCambiosCategory = (value) => {
    saveCategory(value.value);
  };
  const [option, saveOption] = useState(null);
  const detectarCambiosOption = (value) => {
    saveOption(value.value);
  };
  const [selectedValueParking, setSelectedValueParking] = useState("si");
  const handleChangeParking = (event) => {
    setSelectedValueParking(event.target.value);
  };
  const [selectedValueWashRoom, setSelectedValueWashRoom] = useState("si");
  const handleChangeWashRoom = (event) => {
    setSelectedValueWashRoom(event.target.value);
  };
  const [selectedValueFractionamient, setSelectedValueFractionamient] =
    useState("si");
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
  const [map, setMap] = useState(null);
  const handleHtmlMap = ({ target }) => {
    setTimeout(() => {
      setMap(target.value);
    }, 30);
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
  const { name, address, category_id, rules, details } = property;
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm();

  return (
    <Grid container spacing={2} sx={{ marginTop: 1, padding: 2 }}>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        sx={{
          backgroundColor: "#D7A86E",
          color: "white",
        }}
      >
        <Typography variant="h4" fontWeight="bold" fontFamily="monospace">
          Editar Propiedad
        </Typography>
      </Grid>
      {/**Formulario */}
      {property && (
        <Grid container spacing={2} sx={{ padding: 1 }}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Divider>
              <Chip
                label="Datos Generales"
                sx={{ backgroundColor: "#D7A86E", color: "white" }}
              />
            </Divider>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <TextField
              fullWidth
              variant="outlined"
              name="name"
              label="Nombre de la propiedad"
              defaultValue={name}
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
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <CategoriesSelect
              detectarCambiosCategory={detectarCambiosCategory}
              category_id={category_id}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <OptionsSelect detectarCambiosOption={detectarCambiosOption} />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
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
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
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
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
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
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
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
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
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
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
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
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <ParkingOptions
              setSelectedValueParking={setSelectedValueParking}
              selectedValueParking={selectedValueParking}
              handleChangeParking={handleChangeParking}
            />
          </Grid>
          {selectedValueParking === "si" && (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
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
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <OptionsWashRoom
              setSelectedValueWashRoom={selectedValueWashRoom}
              selectedValueWashRoom={selectedValueWashRoom}
              handleChangeWashRoom={handleChangeWashRoom}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <FractionamientOptions
              selectedValueFractionamient={selectedValueFractionamient}
              setSelectedValueFractionamient={setSelectedValueFractionamient}
              handleChangeFractionamient={handleChangeFractionamient}
            />
          </Grid>
          {selectedValueFractionamient === "si" && (
            <>
              <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
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
              <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
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
                      message: "El numero de lote de la propiedad es requerida",
                    },
                  })}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
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
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
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
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
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
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <TextField
              fullWidth
              variant="outlined"
              type="text"
              label="No_Int"
              name="no_int"
              error={errors.no_int ? true : false}
              helperText={errors?.no_int?.message}
              {...register("no_int", {
                required: {
                  value: false,
                  message: "La calle de la propiedad es requerida",
                },
              })}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
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
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <SelectState detectarCambiosState={detectarCambiosState} />
          </Grid>
          {state !== null && (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
              <SelectMunicipality
                detectarCambiosMunicipality={detectarCambiosMunicipality}
                state_id={state}
              />
            </Grid>
          )}
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
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
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
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
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
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
      )}

      {/**Termina formualrio */}
    </Grid>
  );
};

export default EditProperty;
