import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { ChannelCard, Videos } from "./index";
import { fetchFromApi } from "../utils/fetchFromApi";
const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetails, setChannelDetails] = useState(null);
  const [channelVideos, setChannelVideos] = useState([]);
  useEffect(() => {
    fetchFromApi(`channel?id=${id}`).then((data) => {
      setChannelDetails(data.meta);
      setChannelVideos(data.data);
    });
  }, [id]);
  const channelTitle = channelDetails?.title;
  if (!channelDetails || !channelVideos) {
    return <h1>Loading</h1>
  }
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            backgroundImage: `url(${channelDetails?.image?.banner[2].url})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            zIndex: 10,
            height: "300px",
            backgroundRepeat: "no-repeat",
          }}
        />
        <ChannelCard
          channelDetail={channelDetails}
          marginTop="-110px"
          channelId={id}
        />
      </Box>
      <Box display="flex" p={2}>
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={channelVideos} channelTitle={channelTitle} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
