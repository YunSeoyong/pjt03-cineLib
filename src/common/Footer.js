import styled from "styled-components";

const Footer = () => {
    return (
        <FooterWrap id="footer">
            <div className="footer_in">
                <div className="ft_logo">CINE LIB</div>
                <div className="ft_bottom">
                    <div className="ft_menu">
                        <ul>
                            <li>고객센터</li>
                            <li>이용약관</li>
                            <li>쿠키설정</li>
                            <li>법적고지</li>
                            <li>개인정보처리방침</li>
                        </ul>
                    </div>
                    <div className="ft_info">
                        <p>서울특별시 00구 00로 000 000타워 000층 000호</p>
                        <p>
                            <span>통신판매업신고번호 : 제1997-frontend-0506</span>
                            <span>사업자등록번호 : 123-45-67890</span>
                        </p>
                        <p>
                            <span>대표 : 윤서용</span>
                            <span><a href="mailto:seoy2515@gmail.com">seoy2515@gmail.com</a></span>
                            <span>010-4294-2415</span>
                        </p>
                        <p>&copy; 2023. SEOYONG. All rights reserved.</p>
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
                        font-size: var(--font-con);
                        font-weight: 500;
                        margin-right: 2vw;
                        transition: 0.3s;
                        cursor: pointer;
                    }
                    li:hover{
                        color: var(--main-color);
                    }
                    li:last-child{
                        margin-right: 0;
                    }
                }
            }
            .ft_info{
                font-size: 2.4vw;
                line-height: 1.8em;
                font-weight: 300;

                span{
                    margin-right: 10px;
                }
                a{
                    transition: 0.3s;
                }
                a:hover{
                    color: var(--main-color);
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
                    font-size: 15px;
                }
            }
        }
    }
    @media screen and (min-width:1024px) {
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