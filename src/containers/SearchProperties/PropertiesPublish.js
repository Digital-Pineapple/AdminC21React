import React, { useContext, useEffect } from "react";
import PropertiesContext from "../../context/Properties/PropertiesContext";
import CardPropertySearch from "../../components/Cards/CardPropertySearch";
import { Grid } from "@mui/material";
import LoadingComponent from "../../components/loading/LoadingComponent";
import NoDataComponent from "../../components/loading/NoDataComponent";
const PropertiesPublish = () => {
  const { GetPropertiesPublishSearch, properties } =
    useContext(PropertiesContext);
  useEffect(() => {
    GetPropertiesPublishSearch();
  }, []);

  return (
    <div>
      <Grid container spacing={2}>
        {properties.length > 0
          ? properties.map((property) => (
              <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
                <CardPropertySearch property={property} />
              </Grid>
            ))
          : null}
      </Grid>
    </div>
  );
};

export default PropertiesPublish;
