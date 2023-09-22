import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia, Box } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

const VideoCard = ({ video, channelTitle }) => {
  return (
    <Card
      sx={{
        width: { xs: "290px", md: "320px" },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <Link to={`/video/${video.videoId}`}>
        <CardMedia
          image={
            channelTitle ? video?.thumbnail[3]?.url : video?.thumbnail[0]?.url
          }
          alt={video?.title}
          sx={{ width: "358px", height: "180px" }}
        />
      </Link>
      <CardContent sx={{ background: "#1e1e1e", height: "106px" }}>
        <Link to={`/video/${video.videoId}`}>
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {video?.title.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={`/channel/${video?.channelId}`}>
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {video.channelTitle || channelTitle}
            <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
          </Typography>
        </Link>
        <Box display='flex' gap={2}>
          <Typography sx={{ fontSize: "15px", fontWeight: 500, color: "gray" }}>
            {video.viewCount > 0
              ? parseInt(video.viewCount).toLocaleString()
              : 0}{" "}
            views
          </Typography>
          <Typography sx={{ fontSize: "15px", fontWeight: 500, color: "gray" }}>
            {video.publishedText}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
