import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import { Typography, Box, Stack, Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { Videos } from "./";
import { fetchFromApi } from "../utils/fetchFromApi";
import Comments from "./Comments";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const [comments, setComments] = useState(null);
  const [show, setShow] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetchFromApi(`video?id=${id}`).then((data) => {
      setVideoDetail(data);
      console.log(data);
    });
    fetchFromApi(`related?id=${id}`).then((data) => setVideos(data.data));
    fetchFromApi(`comments?id=${id}`).then((data) => {
      console.log(data.data);
      setComments(data.data)});
  }, [id]);

  if (!videoDetail || !comments) return <h1>Loading</h1>;

  const { title, channelId, channelTitle, viewCount, description, uploadDate } =videoDetail;
  const calDate = (uploadDate) => {
    const presentDate = new Date();
    const presentDay = presentDate.getDate();
    const presentMonth = presentDate.getMonth() + 1;

    const arr = uploadDate.split("-");
    if (presentDay - parseInt(arr[2]) > 0) {
      return presentDay - parseInt(arr[2]);
    }
  };
  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant={{ sm: "subtitle1", md: "h6" }}
                  color="#fff"
                >
                  {channelTitle}
                  <CheckCircleIcon
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>

              <Typography variant="body1" sx={{ opacity: 0.7 }}>
                {parseInt(viewCount).toLocaleString()} views
              </Typography>
            </Stack>
          </Box>
          <Box p={2}>
            <Typography variant="h6" color="#fff">
              {uploadDate}
            </Typography>
          </Box>
          <Box p={2}>
            <Typography variant="h6" color="#FFF" mb={4}>
              Description
            </Typography>

            <Typography color="#FFF">
              {show ? description : description.slice(0, 200)}
              <Button
                type="text"
                onClick={() => setShow((prevState) => !prevState)}
              >
                {show ? "Show Less" : "Show More"}
              </Button>
            </Typography>
          </Box>
          <Box p={2}>
            <Typography variant="h6" color="#FFF" mb={4}>
              Comments
            </Typography>
            {comments?.map((comment) => (
              <Comments comment={comment} key={comment.id} />
            ))}
          </Box>
          <Box color="#fff" p={2}></Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
