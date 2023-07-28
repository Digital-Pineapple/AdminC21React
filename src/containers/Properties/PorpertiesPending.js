import React, { useContext, useEffect } from "react";
import PropertiesContext from "../../context/Properties/PropertiesContext";
import CardProperty from "../../components/Cards/CardProperty";
import { Grid } from "@mui/material";
import NoDataComponent from "../../components/loading/NoDataComponent";
const PorpertiesPending = () => {
  const { GetPropertiesPending, properties } = useContext(PropertiesContext);
  useEffect(() => {
    GetPropertiesPending();
  }, []);

  return (
    <div>
      <Grid container spacing={2}>
        {properties ? (
          properties.map((property, index) => (
            <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
              <CardProperty property={property} key={index} />
            </Grid>
          ))
        ) : (
          <NoDataComponent />
        )}
      </Grid>
    </div>
  );
};

export default PorpertiesPending;
