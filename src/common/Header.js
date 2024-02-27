import { useRef, useState } from "react";
import styled from "styled-components";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "../utillhooks/useDimensions.tsx"

import SearchModal from "./SearchModal.js";
import Navigation from "./Navigation.js";
import MenuToggle from "./MenuToggle.js";



const Header = () => {
    const [isSearch, setIsSearch] = useState(false);
    const [isMenu, toggleMenu] = useCycle(false, true);
    const navRef = useRef();
    const { height } = useDimensions(navRef);

    const showSearch = () => {
        setIsSearch(true);
    }
    const closeSearch = (i) => {
        setIsSearch(false);
    }

    const sidebar = {
        open: () => ({
            clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 20,
                restDelta: 2
            }
        }),
        closed: {
            clipPath: "circle(20px at 40px 40px)",
            x: "100%",
            opacity: 0,
            transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 40
            },
        }
    };

    return (
        <HeaderWrap id="header">
            <div className="hd_in">
                <h1 className="h_logo"><a href="../../public/index.html">CINE LIB</a></h1>
                <div className="h_utill">
                    <ul>
                        <li className="h_search">
                            <p onClick={showSearch}>검색</p>
                            {/* <div className={isSearch ? "h_search_modal show" : "h_search_modal"}>
                                {dummyList.map((i) => (
                                    <SearchModal key={i.id} closeSearch={closeSearch} {...i} />
                                ))}
                            </div> */}
                        </li>
                        <li className="h_signIn"><p>로그인</p></li>
                    </ul>
                    <Nav
                        ref={navRef}
                        initial={false}
                        animate={isMenu ? "open" : "closed"}
                        custom={height}
                    >
                        <motion.div className="background" variants={sidebar} />
                        <Navigation />
                    </Nav>
                    <MenuToggle toggle={() => toggleMenu()} />
                </div>
            </div>
        </HeaderWrap>
    );
};

export default Header;

const HeaderWrap = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
    background-color: rgba(22, 21, 20, 0.8);
    z-index: 1000;

    .hd_in{
        position: relative;
        display: flex;
        justify-content: space-between;
        margin: 0 12px;

        .h_logo{
            margin-top: 27px;

            a{
                display: block;
                width: 117px;
                height: 23px;
                background-image: url('/assets/logo01.svg');
                background-position: left 0 center;
                background-size: auto 100%;
                text-indent: -99999px;
            }
        }

        .h_utill{
            margin-top: 27px;
            padding-right: 64px;

            & > ul{
                display: flex;

                & > li{
                    margin-left: 18px;
                    cursor: pointer;

                    & > p{
                        transition: 0.2s;
                    }

                    &:hover > p{
                        color: var(--main-color);
                    }
                }
                .h_search > p, .h_menu > p{
                    width: 24px;
                    height: 24px;
                    text-indent: -99999px;
                    cursor: pointer;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: 100% auto;
                }
                .h_search > p{
                    background-image: url('/assets/icon_search.svg');
                }
                .h_search:hover > p{
                    background-image: url('/assets/icon_search_y.svg');
                }
                .h_signIn{
                    margin-top: 2px;
                }
            }
        }
    }
    @media screen and (min-width:768px) {
        .hd_in{
            margin: 0 20px;

            .h_utill > li{
                margin-left: 24px;
            }
        }
    }
    @media screen and (min-width:1280px) {
        .hd_in{
            .h_logo a{
                width: 180px;
                height: 35px;
            }
        }
    }
    @media screen and (min-width:1480px) {
        .hd_in{
            max-width: 1440px;
            margin: 0 auto;
        }
    }
`;

const Nav = styled(motion.nav)`
    position: fixed;
    top: 0;
    right: 0;
    width: 70%;
    height: 100dvh;
    z-index: 500;
    overflow: hidden;
    
    .background{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: var(--dark-color);
    }

    ul{
        padding: 25px;
        position: absolute;
        top: 120px;
        left: 30px;
    }
    li{
        margin-bottom: 2.4vw;
        cursor: pointer;
        font-size: var(--font-lg);
        line-height: 1.3em;
        font-weight: 700;
    }
`;