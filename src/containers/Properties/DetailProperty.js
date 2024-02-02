import * as React from "react";
import { Grid } from "@mui/material";
import MethodGet from "../../config/service";
import GeneralPropery from "../../components/PropertyDetails/GeneralPropery";
import ServicesProperty from "../../components/PropertyDetails/ServicesProperty";
import AddressProperty from "../../components/PropertyDetails/AddressProperty";
import MultimediaProperty from "../../components/PropertyDetails/MultimediaProperty";
import { useEffect } from "react";
import { useState } from "react";
import Layout from "../../components/layout/Layout";
import Amenidades from "../../components/PropertyDetails/Amenidades";
export default function DetailProperty(props) {
  const { id } = props.match.params;
  const [property, saveProperty] = useState([]);
  const { address, details, images, rules, owner, category } = property;
  const [services, saveServices] = useState([]);
  console.log(rules, "rules");
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
      <Grid
        container
        flexDirection={{ xs: "column", md: "row" }}
        sx={{ display: "flex" }}
      >
        {images && (
          <Grid item xs={6}>
            <MultimediaProperty images={images} property_id={property.id} />
          </Grid>
        )}
        <Grid item xs={6}>
          {address && <AddressProperty address={address} />}
          <GeneralPropery
            name={property.name}
            description={property.description}
            status={property.status}
            rules={rules}
            category={category}
          />
          {details && <Amenidades details={details} />}

          {/* <ServicesProperty services={services} /> */}
        </Grid>
      </Grid>
    </Layout>
  );
}
