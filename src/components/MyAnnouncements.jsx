import React from "react";
// import { useParams } from "react-router-dom";
import axiosInstance from "../axios";
import { useQuery } from "@tanstack/react-query";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function MyAnnouncements() {
  // const { id } = useParams();
  // const url = `mylist/${id}`;
  const { isLoading, error, data } = useQuery({
    queryKey: ["editannouncement"],
    queryFn: () => axiosInstance.get("mylist").then((res) => res.data),
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <Container
      disableGutters
      maxWidth="lg"
      component="main"
      sx={{ pt: 8, pb: 6 }}
    >
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="Your Posts">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell align="right">Content</TableCell>
              <TableCell align="right">Edit</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((post) => (
              <TableRow
                key={post.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {post.title}
                </TableCell>
                <TableCell align="right">{post.content}</TableCell>
                <TableCell align="right">
                  <Link href={`/editannouncement/${post.id}`} key={post.id}>
                    <EditNoteIcon color="primary"></EditNoteIcon>
                  </Link>
                </TableCell>
                <TableCell align="right">
                  <DeleteForeverIcon color="error"></DeleteForeverIcon>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default MyAnnouncements;
