/*
  El componente `DetailProperty` muestra los detalles de una propiedad específica.
  Utiliza Material-UI para el diseño y hace una solicitud HTTP mediante `MethodGet` para obtener la información de la propiedad y los servicios relacionados.

  Funcionalidad principal:
  - Obtiene la información de la propiedad (como descripción, imágenes, reglas, dirección, propietario, etc.) desde una API cuando el componente se monta.
  - Muestra diferentes secciones de la propiedad, incluyendo multimedia, descripción, amenidades, dirección, propietario y servicios, utilizando componentes específicos para cada sección.
  - Permite generar un PDF con los detalles de la propiedad a través del componente `GeneratePDF`.

  Este componente se encarga de presentar toda la información relevante de una propiedad en una interfaz estructurada.
*/
import * as React from "react";
import { Card, Grid, Typography } from "@mui/material";
import MethodGet from "../../config/service";
import GeneralPropery from "../../components/PropertyDetails/GeneralPropery";
import ServicesProperty from "../../components/PropertyDetails/ServicesProperty";
import AddressProperty from "../../components/PropertyDetails/AddressProperty";
import { useEffect } from "react";
import { useState } from "react";
import Layout from "../../components/layout/Layout";
import Amenidades from "../../components/PropertyDetails/Amenidades";
import Owner from "../../components/PropertyDetails/Owner";
import MultimediaProperty from "../../components/PropertyDetails/MultimediaProperty";
import GeneratePDF from "../../components/PropertyDetails/GeneratePDF";
import UserInm from "../../components/PropertyDetails/UserInm";
export default function DetailProperty(props) {
  const { id } = props.match.params;
  const [property, saveProperty] = useState([]);
  const {
    address,
    details,
    images,
    rules,
    owner,
    name,
    category,
    status,
    user_inm,
  } = property;
  const [services, saveServices] = useState([]);
  useEffect(() => {
    let url = `/showAdmin/${id}`;
    MethodGet(url)
      .then((res) => {
        saveProperty(res.data.data);
        saveServices(res.data.services);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          {images && (
            <MultimediaProperty
              name={name}
              images={images}
              property_id={property.id}
            />
          )}
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ padding: 2 }}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <GeneralPropery description={property.description} rules={rules} />
          {details && <Amenidades details={details} />}
          {address && <AddressProperty address={address} />}
          {owner && <Owner owner={owner} />}
          {user_inm && <UserInm owner={user_inm} />}
          {services && <ServicesProperty services={services} />}
        </Grid>
        <GeneratePDF id={id} status={status} />
      </Grid>
    </Layout>
  );
}
