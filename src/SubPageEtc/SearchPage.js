import './SearchPage.css';
import Left from '../utill/Left';
import SearchHeader from './SearchHeader';
import SearchPage02 from './SearchPage02.js';

import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDebounce } from "../hooks/useDebounce.js";
import axios from "../api/axios.js";
import requests from '../api/requests.js';

const SearchPage = () => {
    const [movie, setMovie] = useState([]);
    const [searchResult, setSearchResult] = useState([]);
    const navigate = useNavigate();
    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    }
    let query = useQuery();
    let searchTerm = query.get('q');
    const debouncedSerchTerm = useDebounce(searchTerm, 500);

    useEffect(() => {
        if(debouncedSerchTerm){
            fetchSearchMovie(debouncedSerchTerm);
        }
    }, [debouncedSerchTerm]);
    
    useEffect(()=>{
        fetchData();
    }, [])

    const fetchSearchMovie = async (searchTerm) => {
        try {
            const request = await axios.get(
                `/search/multi?include_adult=false&query=${searchTerm}`
            );
            setSearchResult(request.data.results);
        } catch (error) {
            console.log('에러 : ', error);
        }
    };

    const fetchData = async () => {
        const response = await axios.get(requests.fetchThrillerMovies);
        const movieId = response.data.results[
            Math.floor(Math.random() * response.data.results.length)
        ].id;
        const { data: movieDetail } = await axios.get(`movie/${movieId}`, {

            params: { append_to_response: 'videos' }
        });
        setMovie(movieDetail);
    }
    
    if(searchResult.length > 0){
        return(
            <div className="SearchPage">
                <Left />
                <SearchHeader />
                <div className="sp_in">
                    <div className='sp_img'>
                        {searchResult.map((movie)=>{
                            if(movie.media_type == 'movie'){
                                let movieImageUrl = 'https://image.tmdb.org/t/p/w500/' + movie.poster_path;
                                return (
                                    <div 
                                        className="movieItem" 
                                        key={movie.id}
                                        onClick={()=>{navigate(`/sub/${movie.id}`)}}
                                    >
                                        <div className="poster">
                                                <img src={movieImageUrl} />
                                        </div>
                                        <div className="name">
                                                {movie.title || movie.name}
                                            </div>
                                    </div>
                                )
                            }                     
                        })}
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="no-result">
                <Left />
                <SearchHeader />
                <div className="text">
                    <p className='t_01'>
                        검색하신 <span>{searchTerm}</span> 이라는 작품은 현재 앗챠에 없어요.
                    </p>
                    <p className='t_02'>
                        대신 비슷한 작품을 추천해드릴게요
                    </p>
                </div>
                <div className='sc_in'>
                    <SearchPage02 id='TR' fetchUrl={requests.fetchTopRated} />
                </div>
            </div>
        );
    }
}

export default SearchPage;