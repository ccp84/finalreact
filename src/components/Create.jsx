import React, { useState } from "react";
import axiosInstance from "../axios";
// this has replaced depreciated useHistory
import { useNavigate } from "react-router-dom";
// Material UI
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import DrawIcon from "@mui/icons-material/Draw";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

function Create() {
  // set the redirect on success
  const navigate = useNavigate();
  // create the sign in object. using object freeze secures the data
  const initialFormData = Object.freeze({
    title: "",
    content: "",
  });
  const [formData, updateFormData] = useState(initialFormData);

  // for form input changes
  const handleChange = (e) => {
    updateFormData({
      ...formData,
      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  //   handle submission of the form
  const handleSubmit = (e) => {
    // stop form refreshing on submit
    e.preventDefault();
    console.log(formData);

    axiosInstance
      .post("", {
        title: formData.title,
        content: formData.content,
        category: 1,
        author: 1,
      })
      .then((res) => {
        navigate("/");
        console.log(res);
        console.log(res.data);
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <DrawIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Create New Announcement
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="title"
            label="Title"
            name="title"
            autoComplete="title"
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="content"
            label="Content"
            type="content"
            id="content"
            autoComplete="content"
            multiline
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Add Announcement
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Create;
