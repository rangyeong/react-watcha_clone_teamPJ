import Main03Slide03Wrap from 'react-slick'
import { useContext, useEffect, useState } from "react";

import './Main03.css';

import axios from "../api/axios.js";
import Button from './Button.js'
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';


const partyList = [
    {
        photo : 1,
        title : '퇴근하고 같이 영화 봐요!',
        userName : '동글이',
        people : 17

    },
    {
        photo : 2,
        title : '방구석 1열 영화관',
        userName : '호섭이',
        people : 13

    },
    {
        photo : 3,
        title : '집콕좋아',
        userName : '킹율',
        people : 9

    },
    {
        photo : 1,
        title : '퇴근하고 같이 영화 봐요!',
        userName : '동글이',
        people : 17

    },
    {
        photo : 2,
        title : '방구석 1열 영화관',
        userName : '호섭이',
        people : 13

    },
    {
        photo : 3,
        title : '집콕좋아',
        userName : '킹율',
        people : 9

    },
    {
        photo : 1,
        title : '퇴근하고 같이 영화 봐요!',
        userName : '동글이',
        people : 17

    },
    {
        photo : 2,
        title : '방구석 1열 영화관',
        userName : '호섭이',
        people : 13

    },
    {
        photo : 3,
        title : '집콕좋아',
        userName : '킹율',
        people : 9

    },
    {
        photo : 1,
        title : '퇴근하고 같이 영화 봐요!',
        userName : '동글이',
        people : 17

    },
    {
        photo : 2,
        title : '방구석 1열 영화관',
        userName : '호섭이',
        people : 13

    },
    {
        photo : 3,
        title : '집콕좋아',
        userName : '킹율',
        people : 9

    },
    {
        photo : 1,
        title : '퇴근하고 같이 영화 봐요!',
        userName : '동글이',
        people : 17

    },
    {
        photo : 2,
        title : '방구석 1열 영화관',
        userName : '호섭이',
        people : 13

    },
    {
        photo : 3,
        title : '집콕좋아',
        userName : '킹율',
        people : 9

    },
    {
        photo : 1,
        title : '퇴근하고 같이 영화 봐요!',
        userName : '동글이',
        people : 17

    },
    {
        photo : 2,
        title : '방구석 1열 영화관',
        userName : '호섭이',
        people : 13

    },
    {
        photo : 3,
        title : '집콕좋아',
        userName : '킹율',
        people : 9

    },
    {
        photo : 1,
        title : '퇴근하고 같이 영화 봐요!',
        userName : '동글이',
        people : 17

    },
    {
        photo : 2,
        title : '방구석 1열 영화관',
        userName : '호섭이',
        people : 13

    }
]


const Main03List03 = ({title, id, fetchUrl}) => {
    const navigate = useNavigate();
    const countRef = useRef(-1);
    
    const [movies, setMovies] = useState([]);
    const [printParty, setPrintParty] = useState([])

    const fetchMovieData = async () => {
        const response = await axios.get(fetchUrl);
        // console.log(response);
        setMovies(response.data.results);
    };


    // const handleId = () => {
    //     setTxtId(countRef.current)
    //     if(txtId > 3){
    //         countRef.current = -1;
    //     }
    //     countRef.current += 1;
    // };
    // const handleId = () => {
    //     countRef.current += 1;
    //     if(countRef.current > 3){
    //         countRef.current = -1
    //     }
    // };
    const handleId = () => {
        countRef.current += 1;
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
    };

    

    useEffect(()=>{
        fetchMovieData();
        // handleId();
    }, []);
    
    // console.log(txtId)

    // console.log(movies);

    const [data, setData] = useState([]);
    return(
        <div className="Main03List03">
        <div className='top'>
            <h1>{title}</h1>
            <p onClick={()=>{navigate('/party')}}>더보기</p>
        </div>
        <Main03Slide03Wrap {...settings}>
            {movies.map((movie)=>{
                handleId();
                return(
                    <div key={movie.id} className="sImgCard">
                        <div className='partyphoto'>
                            <p>
                                <img 
                                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                                    onClick={()=>{navigate(`/party_play/${movie.id}`)}}
                                />
                            </p>
                            <p><Button 
                                    type={'play'}
                                    onClick={()=>{navigate(`/party_play/${movie.id}`)}} 
                                /></p>
                            <p className="party_box">{movie.title}</p>
                        </div>
                        <div className='party_info'>
                            <p className='p_info_title'>{partyList[countRef.current] && partyList[countRef.current].title}</p>
                            <div className='p_info_bottom'>
                                <p className='p_info_photo'>
                                    <img src={`/img/party_host${partyList[countRef.current] && partyList[countRef.current].photo}.png`} />
                                </p>
                                <p className='p_info_user'>{partyList[countRef.current] && partyList[countRef.current].userName}</p>
                                <p className='p_info_people'>{`${partyList[countRef.current] && partyList[countRef.current].people}명 참가중`}</p>
                            </div>
                            
                        </div>
                    </div>
                    )
            })}
            </Main03Slide03Wrap>

        </div>
    )
};

export default Main03List03;