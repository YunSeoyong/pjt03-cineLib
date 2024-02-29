import { useRef, useState } from "react";
import styled from "styled-components";
import { motion, useCycle } from "framer-motion";

import Navigation from "./Navigation.js";
import MenuToggle from "./MenuToggle.js";
import { useLocation, useNavigate } from "react-router";



const Header = () => {
    const [isMenu, toggleMenu] = useCycle(false, true);
    const [search, setSearch] = useState('');
    const [isSearchModal, setIsSearchModal] = useState(false);
    const navRef = useRef();
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const sidebar = {
        open: () => ({
            transform: "translateX(0)",
            transition: {
                type: "easeIn",
                duration: 0.5
            }
        }),
        closed: {
            transform: "translateX(100%)",
            transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 40
            },
        }
    };

    const handleSearchMo = () => {
        setIsSearchModal((prev) => !prev);
    };

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
        navigate(`/search?q=${e.target.value}`)
    };

    return (
        <HeaderWrap id="header">
            <div className="hd_in">
                <h1 className="h_logo" onClick={() => { navigate('/') }}>CINE LIB</h1>
                <div className="h_utill">
                    <Search className={isSearchModal ? 'active' : ''}>
                        <input 
                            type="text"
                            value={search}
                            placeholder="검색어를 입력해주세요."
                            onChange={onChangeSearch}
                        />
                        {search.length && search.length > 0 ?
                            <p className="btnCancel"
                                onClick={() => {setSearch('')}}
                            ><span className="hide">지우기</span></p>
                            : null
                        }
                    </Search>
                    <div className="h_search_mo" onClick={handleSearchMo}>검색</div>
                    <div className="h_signIn">SignOut</div>
                    <Nav
                        ref={navRef}
                        initial={false}
                        animate={isMenu ? "open" : "closed"}
                        variants={sidebar}
                    >
                        <Navigation toggle={() => toggleMenu()} />
                    </Nav>
                    <MenuToggle isMenu={isMenu} toggle={() => toggleMenu()} />
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
        margin: 0 14px;

        .h_logo{
            margin-top: 27px;
            width: 117px;
            height: 23px;
            background-image: url('/assets/logo01.svg');
            background-position: left 0 center;
            background-size: auto 100%;
            background-repeat: no-repeat;
            text-indent: -99999px;
            cursor: pointer;
        }

        .h_utill{
            margin-top: 27px;
            padding-right: 60px;
            display: flex;
            .h_search_mo{
                width: 24px;
                height: 24px;
                text-indent: -99999px;
                cursor: pointer;
                background-position: center;
                background-repeat: no-repeat;
                background-size: 100% auto;
                background-image: url('/assets/icon_search.svg');
            }
            .h_signIn{
                margin-left: 18px;
                margin-top: 2px;
                cursor: pointer;
                transition: 0.3s;

                &:hover{
                    color: var(--main-color);
                }
            }
        }
    }
    @media screen and (min-width:768px) {
        .hd_in{
            margin: 0 20px;
        }
        .h_search_mo{
            display: none;
        }
    }
    @media screen and (min-width:1024px) {
        .hd_in{
            .h_logo {
                width: 160px;
                height: 28px;
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
    background-color: var(--dark-color);
    overflow: hidden;

    ul{
        padding: 30px;
        position: absolute;
        top: 120px;
        left: 0;
    }
    li{
        margin-bottom: 2.4vw;
        cursor: pointer;
        font-size: var(--font-lg);
        line-height: 1.3em;
        font-weight: 700;
    }
    @media screen and (min-width:768px){
        ul{
            left: 30px;
            padding: 50px;
        }
    }
    @media screen and (min-width:1024px){
        width: 40%;
        ul{
            left: 20px;
            padding: 50px;
        }
    }
    @media screen and (min-width:1480px){
        ul{
            left: 30px;
        }
    }
`;

const Search = styled.div`
    box-sizing: border-box;
    position: fixed;
    top: -80px;
    left: 0;
    right: 0;
    padding: 20px 30px;
    background-color: rgba(22, 21, 20, 0.8);
    transition: 0.5s;
    transform: scaleY(0);

    input {
        box-sizing: border-box;
        width: 100%;
        height: 8vw;
        padding: 0 70px 0 20px;
        border-radius: 50px;
        border: 0;
        outline: 0;
        font-size: var(--font-con);
    }
    input:focus {
        outline: 1px solid var(--main-color);
        border: 0;
    }
    input::placeholder{
        color: #aaa;
    }
    .btnCancel{
        position: absolute;
        top: 50%;
        right: 40px;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        transform: translateY(-50%);
        background-color: rgba(0, 0, 0, 0.8);
        cursor: pointer;
        transition: 0.3s;

        &::after, &::before{
            content: "";
            position: absolute;
            top: 6px;
            left: 12px;
            display: block;
            width: 1px;
            height: 14px;
            background-color: #fff;
        }
        &::after {
            transform: rotate(45deg);
        }
        &::before {
            transform: rotate(-45deg);
        }
        &:hover {
            background-color: var(--dark-color);
        }
    }

    &.active{
        top: 80px;
        transform: scaleY(1);
    }
    @media screen and (min-width:768px) {
        position: absolute;
        top: 22px;
        right: 135px;
        left: auto;
        background-color: transparent;
        padding: 0;
        width: 260px;
        transform: scaleY(1);

        input{
            height: 36px;
            font-size: 14px;
            padding: 0 40px 0 20px;
        }
    }
`;