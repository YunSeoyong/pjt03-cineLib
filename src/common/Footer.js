import styled from "styled-components";

const Footer = () => {
    return (
        <FooterWrap id="footer">
            <div className="footer_in">
                <div className="ft_logo">CINE LIB</div>
                <div className="ft_bottom">
                    <div className="ft_menu">
                        <ul>
                            <li><a href="">고객센터</a></li>
                            <li><a href="">이용약관</a></li>
                            <li><a href="">쿠키설정</a></li>
                            <li><a href="">법적고지</a></li>
                            <li><a href="">개인정보처리방침</a></li>
                        </ul>
                    </div>
                    <div className="ft_info">
                        <p>서울특별시 송파구 올림픽로 300 롯데월드타워 102층 0506호</p>
                        <p>
                            <span>통신판매업신고번호 : 제1997-태양계우라노스-0506</span>
                            <span>사업자등록번호 : 123-45-67890</span>
                        </p>
                        <p>
                            <span>대표 : 윤서용</span>
                            <span>seoy2515@gmail.com</span>
                            <span>010-4294-2415</span>
                        </p>
                        <p>&copy; 2023. YONG. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </FooterWrap>
    );
};

export default Footer;

const FooterWrap = styled.footer`
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    padding: 40px 0;

    .footer_in{
        margin: 0 12px;

        .ft_logo{
            width: 117px;
            height: 23px;
            margin-bottom: 24px;
            background-image: url(img/logo02.svg);
            background-position: left 0 center;
            background-size: auto 100%;
            text-indent: -99999px;
            opacity: 0.8;
        }
        .ft_bottom{
            .ft_menu{
                margin-bottom: 15px;
                ul{
                    display: flex;

                    li{
                        font-size: 12px;
                        font-weight: 500;
                        margin-right: 2vw;
                    }
                    li:hover{
                        opacity: 0.7;
                    }
                    li:last-child{
                        margin-right: 0;
                    }
                }
            }
            .ft_info{
                font-size: 12px;
                font-weight: 300;

                span{
                    margin-right: 10px;
                }
            }
        }
    }
    @media screen and (min-width:768px){
        padding: 60px 0;
        .footer_in{
            margin: 0 20px;

            .ft_logo{
                margin-bottom: 34px;
            }
            .ft_bottom{
                .ft_menu{
                    margin-bottom: 25px;
                    li{
                        font-size: 14px;
                        font-weight: 500;
                        margin-right: 30px;
                    }
                    li:last-child{
                        margin-right: 0;
                    }
                }
                .ft_info{
                    font-size: 13px;
                    line-height: 2em;
                    span{
                        margin-right: 20px;
                    }
                }
            }
        }
    }
    @media screen and (min-width:1280px) {
        padding: 80px 0;
        .footer_in{
            .ft_logo{
                width: 180px;
                height: 35px;
                margin-bottom: 50px;
            }
            .ft_bottom{
                .ft_menu{
                    margin-bottom: 40px;
                    li:last-child{
                        margin-right: 0;
                    }
                }
                .ft_info{
                    font-size: 14px;
                }
            }
        }
    }
    @media screen and (min-width:1480px){
        .footer_in{
            width: 1440px;
            margin: 0 auto;
        }
    }
`;