import React, { useContext, useEffect } from "react";
import PropertiesContext from "../../context/Properties/PropertiesContext";
import CardProperty from "../../components/Cards/CardProperty";
import { Grid } from "@mui/material";
import LoadingComponent from "../../components/loading/LoadingComponent";
import NoDataComponent from "../../components/loading/NoDataComponent";
const PropertiesPublish = () => {
  const { GetPropertiesPublish, properties, success } = useContext(PropertiesContext);
  useEffect(() => {
    GetPropertiesPublish();
  }, []);

  return (
    <div>
      <Grid container spacing={2}>
        {success && properties.length ? (
          properties.map((property) => (
            <Grid item xs={12} sm={6} md={6} lg={4} xl={3}>
              <CardProperty property={property} />
            </Grid>
          ))
        ) : success && properties.length <= 0 ? (
          <NoDataComponent />
        ) : success === false ? (
          <LoadingComponent />
        ) : (
          ""
        )}
      </Grid>
    </div>
  );
};

export default PropertiesPublish;
