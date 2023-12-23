import React from "react";

import {
  Box,
  TextField,
  Modal,
  Stack,
  Button,
  Typography,
  Grid,
} from "@mui/material";
import { useFormik } from "formik";

import SendIcon from "@mui/icons-material/Send";
import ClearIcon from "@mui/icons-material/Clear";

import { useGlobalContext } from "../../contexts";

import RoomSlider from "./room-slider";

import { style } from "./styles";

import validationSchema from "./form-handler/validation";

const CustomInput = () => {
  const {
    modalIsOpen,
    setModalIsOpen,
    numberOfRooms,
    searchLocation,
    setSearchRequest,
  } = useGlobalContext();

  const formik = useFormik({
    initialValues: {
      sqft: "",
      bath: "",
      balcony: "",
    },
    validationSchema: validationSchema,
    onSubmit: ({ sqft, bath, balcony }) => {
      setSearchRequest((previous) => ({
        ...previous,
        name: searchLocation.name,
        sqft: sqft,
        bath: bath,
        balcony: balcony,
        bhk: numberOfRooms,
      }));
    },
  });

  const { errors, touched, isSubmitting, handleSubmit, values, getFieldProps } =
    formik;

  return (
    <>
      <Modal
        open={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: "500px" }}>
          <Typography variant="h2" gutterBottom>
            Search Housing
          </Typography>

          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} gutterBottom>
                <Stack direction="row" spacing={2}>
                  <TextField
                    fullWidth
                    type="number"
                    label="Sqft"
                    {...getFieldProps("sqft")}
                    error={Boolean(errors.sqft)}
                    helperText={touched.sqft && errors.sqft}
                  />

                  <TextField
                    type="number"
                    label="Bath"
                    {...getFieldProps("bath")}
                    error={Boolean(errors.bath)}
                    helperText={touched.bath && errors.bath}
                  />

                  <TextField
                    type="number"
                    label="Balcony"
                    {...getFieldProps("balcony")}
                    error={Boolean(errors.balcony)}
                    helperText={touched.balcony && errors.balcony}
                  />
                </Stack>
              </Grid>

              <Grid item xs={12}>
                <RoomSlider />
              </Grid>

              <Grid item xs={12}>
                <Stack direction="row" spacing={3}>
                  <Button
                    fullWidth
                    color="error"
                    variant="contained"
                    startIcon={<ClearIcon />}
                    onClick={() => setModalIsOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    endIcon={<SendIcon />}
                  >
                    Search
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default CustomInput;
