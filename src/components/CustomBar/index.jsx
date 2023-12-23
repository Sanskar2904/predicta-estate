import { Box, Grid } from "@mui/material";
import MetaData from "./meta-data";

const CustomBar = () => {
  return (
    <>
      <Box
        mt={3.8}
        sx={{
          width: "96%",
          height: "100%",
          padding: 0.8,
        }}
      >
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <MetaData />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default CustomBar;
