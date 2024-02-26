import { useNavigate } from 'react-router-dom';
import './RecHeader.css'
import styled from "styled-components";
const RecHeader = () => {
    const navigate = useNavigate()

    return (
        <div className="RecHeader">
            <Header1>
                <div className="main01_img">
                    <div className="logo">
                        <img
                            src='/img/atcha_logo.png'
                            alt="앗챠 로고"
                        />
                    </div>
                    <div className="icon">
                        <p className="icon01"><img src="/img/icon_wifi.png" /></p>
                        <p className="icon02"><img src="/img/icon_species.png" /></p>
                        <p className="icon03"><img src="/img/icon_person.png" onClick={()=>{navigate('/mypage')}}/></p>
                    </div>
                </div>
            </Header1>
        </div>
    )
}
export default RecHeader;
const Header1 = styled.div`
    background-color: #141517;
    padding-left: 20px;
    padding-right: 20px;
    height: 46px;
    top: 0px;
    left: 0;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 999;
        img{
            cursor: pointer;
        }
`;