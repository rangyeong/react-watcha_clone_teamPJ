import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import '../Recommend/RecHeader.css';
import EvalutionModal from '../Recommend/EvalutionModal.js';
import { useState } from "react";

const SearchHeader = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const handleChange = (e) => {
        setSearch(e.target.value);
        navigate(`/searchpage?q=${e.target.value}`);
    }

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return(
        <div className="SearchHeader">
            <Header1>
                <div className="main01_img">
                    <div className="logo">
                        <img
                            src='/img/atcha_logo.png'
                            alt="앗챠 로고"
                            onClick={()=>{navigate('/')}}
                        />
                    </div>
                    <div className="in_in">
                            <input
                                type="text"
                                placeholder="제목, 장르, 배우로 찾아보세요!"
                                value={search}
                                onChange={handleChange}
                            />
                    </div>
                    <div className="icon">
                        <p className="icon01"><img src="/img/icon_wifi.png" /></p>
                        <p className="icon02">
                            {isOpen ? <EvalutionModal /> : '' }
                            <img src="/img/icon_species.png" onClick={toggleModal} />
                        </p>
                        <p className="icon03"><img src="/img/icon_person.png" onClick={()=>{navigate('/mypage')}}/></p>
                    </div>
                </div>
            </Header1>
        </div>
    )
}

export default SearchHeader;
const Header1 = styled.div`
    background-color: #141517;
    padding-left: 20px;
    padding-right: 20px;
    height: 46px;
    top: 0px;
    left: 0;
        img{
            cursor: pointer;
        }
`;