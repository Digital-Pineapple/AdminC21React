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
export default function DetailProperty(props) {
  const { id } = props.match.params;
  const [property, saveProperty] = useState([]);
  const { address, details, images, rules, owner, name, category } = property;
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
          {owner && <Owner owner={owner} />}
          {address && <AddressProperty address={address} />}
          {services && <ServicesProperty services={services} />}
        </Grid>
      </Grid>
    </Layout>
  );
}
