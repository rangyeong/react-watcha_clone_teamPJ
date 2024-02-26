import '../M4listMore/M4listmore.css';
import axios from "../api/axios";

import { useState, useEffect } from "react";
import { truncate } from "../utill/truncate";
import { useNavigate } from 'react-router-dom';

const SearchPage02 = ({ fetchUrl }) => {
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();

    const fetchMovieData = async () => {
        const response = await axios.get(fetchUrl);
        setMovies(response.data.results.slice(0, 12));
    };

    useEffect(() => {
        fetchMovieData();
    }, [fetchMovieData]);

    return(
        <div className="SearchPage02">
            <div className="recmovie">
                {movies.map((movie) => (
                    <div key={movie.id} className="rImgCard">
                        <div className="rposter">
                            <img
                                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                onClick={()=>{navigate(`/sub/${movie.id}`)}}
                            />
                        </div>
                        <p className="title">
                            {
                                truncate(movie.title || movie.name)
                            }
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SearchPage02;