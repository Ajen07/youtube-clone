import React from "react";
import { Stack, Box } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

const Videos = ({ videos, direction ,channelTitle }) => {
  if (!videos) {
    return <h1>Loading</h1>
  }
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
      px={2}
    >
      {videos.map((item, index) => {
        return (
          <Box key={index}>
            {item.videoId && <VideoCard video={item} channelTitle={channelTitle} />}
          </Box>
        );
      })}
    </Stack>
  );
};

export default Videos;
