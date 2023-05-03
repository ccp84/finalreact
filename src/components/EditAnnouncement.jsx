import React from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../axios";
import { useQuery } from "@tanstack/react-query";

function EditAnnouncement() {
  const { id } = useParams();
  const { isLoading, error, data } = useQuery({
    queryKey: ["AnnouncementDetail"],
    queryFn: () => axiosInstance.get(id).then((res) => res.data),
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.content}</p>
    </div>
  );
}

export default EditAnnouncement;
