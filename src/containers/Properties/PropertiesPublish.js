import React, { useContext, useEffect, useState } from "react";
import PropertiesContext from "../../context/Properties/PropertiesContext";
import CardProperty from "../../components/Cards/CardProperty";
import { Grid } from "@mui/material";
import LoadingComponent from "../../components/loading/LoadingComponent";
const PropertiesPublish = () => {
  const { GetPropertiesPublish, properties } = useContext(PropertiesContext);
  useEffect(() => {
    GetPropertiesPublish();
  }, []);

  return (
    <div>
      <Grid container spacing={2}>
        {properties.length ? (
          properties.map((property, index) => (
            <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
              <CardProperty property={property} key={index} />
            </Grid>
          ))
        ) : (
          <LoadingComponent />
        )}
      </Grid>
    </div>
  );
};

export default PropertiesPublish;
