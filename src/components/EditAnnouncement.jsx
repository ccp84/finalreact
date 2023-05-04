import React from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../axios";
import { useQuery } from "@tanstack/react-query";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

function EditAnnouncement() {
  const { id } = useParams();
  const url = `/mylist/${id}`;
  const { isLoading, error, data } = useQuery({
    queryKey: ["AnnouncementDetail"],
    queryFn: () => axiosInstance.get(url).then((res) => res.data),
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <Container
      disableGutters
      maxWidth="sm"
      component="main"
      sx={{ pt: 8, pb: 6 }}
    >
      <Typography
        variant="h5"
        align="left"
        color="text.secondary"
        component="p"
      >
        {data.title}
      </Typography>
      <Typography
        variant="h5"
        align="left"
        color="text.secondary"
        component="p"
      >
        {data.content}
      </Typography>
    </Container>
  );
}

export default EditAnnouncement;
