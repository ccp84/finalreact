import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

function Announcement(props) {
  const { posts } = props;
  if (!posts || posts.length === 0)
    return (
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 8, pb: 6 }}
      >
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          No new announcements
        </Typography>
      </Container>
    );
  return (
    <Container
      disableGutters
      maxWidth="sm"
      component="main"
      sx={{ pt: 8, pb: 6 }}
    >
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
        gutterBottom
      >
        Announcements
      </Typography>
      {posts.map((post) => {
        return (
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            component="p"
            key={post.id}
          >
            {post.title} | {post.content}
          </Typography>
        );
      })}
    </Container>
  );
}

export default Announcement;
