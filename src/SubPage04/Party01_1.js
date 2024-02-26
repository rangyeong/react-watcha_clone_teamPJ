import { useRef } from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Main03Slide03Wrap from 'react-slick';
import Partymodal1 from './Partymodal1';
import Party02 from './Party02'
import axios from '../api/axios';
import './Party.css'




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

const Party1 = ({ title, id, fetchUrl }) => {
    const navigate = useNavigate();
    const [movies, setMovies] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isParty02Visible, setIsParty02Visible] = useState(false);
    const countRef = useRef(-1);

    const fetchMovieData = async () => {
        const response = await axios.get(fetchUrl);
        // console.log(response);
        setMovies(response.data.results);
    };

    const openParty02Modal = () => {
        setIsParty02Visible(true);
      };
    
      const closeParty02Modal = () => {
        setIsParty02Visible(false);
      };
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
    };

    useEffect(() => {
        fetchMovieData();
    }, []);

    const openModal = () => {
        setIsModalVisible(true);
    };

    const CloseModal = () => {
        setIsModalVisible(false);
    };

    const handleId = () => {
        countRef.current += 1;
    };

    // console.log(movies);

    return (
        <div className="Main03List03">
            <div className='party1img'>
                <div className='partyback' onClick={openParty02Modal} ><img src='./img/Party1.png' /></div>
                <div onClick={openModal} className='partychat'><img src='/img/chat.png' /></div>
                {isModalVisible && <Partymodal1 closeModal={CloseModal} />}
                {isParty02Visible && <Party02 closeModal={closeParty02Modal} />}
            </div>
            <h1>열린파티</h1>
            <Main03Slide03Wrap {...settings}>
                {movies.map((movie) => {
                    handleId();
                    return(
                        <div key={movie.id} className="sImgCard">
                            <div className='partyphoto'>
                                <p>
                                    <img
                                        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                                        onClick={() => { navigate(`/party_play/${movie.id}`) }}
                                    />
                                </p>
                                <p className="party_box">{movie.title}</p>
                            </div>
                            <div className='partyde'>
                                <div className='pd1'>
                                    <p>{partyList[countRef.current] && partyList[countRef.current].title}</p>
                                    <img src='./img/icon_watch_info.png' />
                                </div>
                                <div className='pd2'>
                                    <img src={`/img/party_host${partyList[countRef.current] && partyList[countRef.current].photo}.png`} />
                                    <p>{`${partyList[countRef.current] && partyList[countRef.current].userName}　|　`}</p>
                                    <p>{`${partyList[countRef.current] && partyList[countRef.current].people}명 참가중`}</p>
                                </div>
                            </div>
                        </div>
                        )})}

                {/* <div className='aaa'>
                <p>sdfsadfsa</p>
                    {
                    partyList.map((it)=>(
                        <div key={it.photo}>
                            <p>{it.title}</p>
                        </div>
                    ))
                    }
                </div> */}
            </Main03Slide03Wrap>
        </div>
    )
};

export default Party1