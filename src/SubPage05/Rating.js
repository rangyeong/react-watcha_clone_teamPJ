import PHeader from '../SubPage04/PHeader.js'
import Leftutill from '../utill/Left.js'
import axios from "../api/axios.js";
import requests from '../api/requests.js';
import styled from "styled-components";
import { useState, useEffect } from 'react';
import RecHeader from '../Recommend/RecHeader.js';

const Rating = () => {
    const [movies, setMovies] = useState([])
    const [hoveredMovie, setHoveredMovie] = useState(null);

    const fetchMovieData = async () => {
        const response = await axios.get(requests.fetchTrending);
        setMovies(response.data.results.slice(0, 16));
        console.log(response);
    };

    const generateStars = (rating) => {
        const numberOfStars = Math.round(rating / 2);
        return '★'.repeat(numberOfStars) + '☆'.repeat(5 - numberOfStars);
    };

    useEffect(() => {
        fetchMovieData();
    }, []);

    return (
        <Rating1>
            <Leftutill />
            <RecHeader />
            <Rating001>
                <Rating02>
                    <h2>평가</h2>
                    <h3>2</h3>
                    <p>조금씩 당신의 취향을 알아가는 중입니다</p>
                    <Ratingbar>
                        <div className='rtb0'></div>
                        <div className='rtb1'></div>
                        <div className='rtb2'></div>
                        <div className='rtb3'></div>
                        <div className='rtb4'></div>
                    </Ratingbar>
                    <Rtvideo><p>비디오</p></Rtvideo>
                    <Ratinglist>
                        {movies && movies.map((movie) => (
                            <Rtlist_in
                                key={movie.id}
                                onMouseOver={() => setHoveredMovie(movie)}
                                onMouseOut={() => setHoveredMovie(null)}

                            >
                                <Rti1>
                                    <img
                                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                    />
                                    {hoveredMovie === movie && (
                                        <div className='Hovertext'>
                                            <div className='Rttitle'>{movie.title}</div>
                                            <div className='Rtstar'>{generateStars(movie.vote_average)}</div>
                                        </div>
                                    )}
                                </Rti1>
                            </Rtlist_in>
                        ))}
                    </Ratinglist>
                </Rating02>
            </Rating001>
        </Rating1>
    )
};

export default Rating

const Rating1 = styled.div`

`;
const Rating001 = styled.div`
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    color: white;
    @media screen and (min-width: 768px) {
        padding-left: 240px
    }
`
const Rating02 = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    h2{
        margin-bottom: 15px;
    }
    h3{
        font-size: 22px;
        font-weight: 700;
    }
`;
const Ratingbar = styled.div`
    display: flex;
    width: 30%;
    height: 5px;
    background-color: rgb(68, 68, 68);
    border-radius: 5px;
    .rtb0{
        width: 20%;
        height: 5px;
        background-color: rgb(214, 4, 88);
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    } 
    .rtb1{
        display: none;
        width: 20%;
        height: 5px;
        background-color: rgb(214, 4, 88);
    }
    .rtb2{
        display: none;
        width: 20%;
        height: 5px;
        background-color: rgb(214, 4, 88);
    }
    .rtb3{
        display: none;
        width: 20%;
        height: 5px;
        background-color: rgb(214, 4, 88);

    }
    .rtb4 {
        display: none;
        background-color: rgb(214, 4, 88);
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    }
`
const Rtvideo = styled.div`
    padding-top: 10px;
    color: white;
    border-bottom: 1px solid rgb(68, 68, 68);
    p{
        text-decoration: underline;
        text-underline-offset: 20px;
        text-decoration-thickness: 2px;
    }
`
// ok
const Ratinglist = styled.div`
    margin-top: 20px;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
`
const Rti1 = styled.div`
    img {
        width: 100%;
        height: 100%;
        padding-left: 5px;
        padding-bottom: 10px;
        position: relative;
    @media screen and (min-width: 768px) {
         img {
                padding-bottom: 5px;
            }
`
const Rtlist_in = styled.div`
        margin-left: auto;
        margin-right: auto;
        width: 30%;
        transition: transform 0.5s ease;
        overflow: hidden;
    &:hover {
        transform: scale(1.2);
        z-index: 50;
    }
    &:hover img {
        filter: brightness(50%);
    }
    &:hover .Hovertext {
        display: block;
        opacity: 1;

    }
    .Hovertext{
        position: absolute;
        font-size: 14px;
        align-item: center;
        text-align: center;
        transform: translate(50%, -50%);
        top: 50%;
        right: 50%;
        line-height: 1;
        color: white;
        display: none;
        transition: opacity 0.5s ease;
            .Rttitle{
                margin: 10px 0;
            }
            .Rtstar{
                color: yellow;
                margin: 10px 0;
        
            }
        @media screen and (min-width: 768px) {
                font-size: 10px;
                position: absolute;
                align-item: center;
                text-align: center;
                transform: translate(50%, -50%);
                top: 50%;
                right: 50%;
                line-height: 1;
                color: white;
                display: none;
                transition: opacity 0.5s ease;
                }
    }
    @media screen and (min-width: 768px) {
            width: 12%;
            transition: transform 0.5s ease;
            overflow: hidden;
        img {
            padding-bottom: 5px;
        }
    }
`
