import axios from "axios";


const BASE_URL = "https://youtube-v3-alternative.p.rapidapi.com";

const options = {
  params: {
    maxResults: "50",
    sort_by: 'newest',
  },
  headers: {
    "X-RapidAPI-Key": '2ff98fc43cmsh020ada84808a2d6p19e9f9jsn3ec2c5897ca1',
    'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
  },
};

export const fetchFromApi = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  } catch (error) {
    console.log(error);
  }
};

