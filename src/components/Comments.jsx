import React from "react";

import { Divider, Avatar, Grid, Paper, colors } from "@mui/material";

const imgLink =
  "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

const Comments = ({ comment }) => {
  const {
    authorDisplayName,
    authorChannelId,
    authorProfileImageUrl,
    textDisplay,
    publishedTimeText,
  } = comment;
  return (
    <div style={{marginBottom:"2rem"}}>
      <Paper
        style={{
          padding: "40px 20px",
          background: "#000",
          color: "#fff",
          border: "1px solid grey",
        }}
      >
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar alt={authorDisplayName} src={authorProfileImageUrl[1].url} />
          </Grid>
          <Grid justifyContent="left" item xs zeroMinWidth>
            <h4 style={{ margin: 0, textAlign: "left" }}>
              {authorDisplayName}
            </h4>
            <p style={{ textAlign: "left" }}>{textDisplay}</p>
            <p style={{ textAlign: "left", color: "gray" }}>
              posted {publishedTimeText}
            </p>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Comments;
