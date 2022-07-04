import { useState, useEffect } from "react";

const API_KEY = import.meta.env.VITE_GIPHY_API;

const useFetch = ({ keyword }) => {
    const [gifUrl, setGifUrl] = useState("");

    const fetchGifs = async () => {
        try {
            const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword.split(" ").join("")}&limit=1`);
            const { data } = await response.json();

            setGifUrl(data[0]?.images?.downsized_medium?.url);
        } catch (error) {
            setGifUrl("https://media2.giphy.com/media/RODiNw1qKHct74LACe/giphy.gif?cid=ecf05e47ze7gy3n1aqv4rs7yhh3ahwws6aq6swajlvc64yl5&rid=giphy.gif&ct=g");
        }
    }

    useEffect(() => {
        if(keyword) fetchGifs();
    }, [keyword]);

    return gifUrl;
}

export default useFetch;