// GenreNav.js
import { useState } from "react";
import { motion, Variants } from "framer-motion";
import styled from "styled-components";
import { Link } from "react-router-dom";

const itemVariants = {
    open: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};
const GenreNav = ({
    genreList,
    select,
    setSelect,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <GenreNavi
            initial={false}
            animate={isOpen ? "open" : "closed"}
            className="menu"
        >
            <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={() => setIsOpen(!isOpen)}
            >
                {select && select.length > 0 ?
                select : "Menu"}
                <motion.div
                    variants={{
                        open: { rotate: 180 },
                        closed: { rotate: 0 }
                    }}
                    transition={{ duration: 0.2 }}
                    style={{ originY: 0.55 }}
                >
                    <svg width="15" height="15" viewBox="0 0 20 20" fill="white">
                        <path d="M0 7 L 20 7 L 10 16" />
                    </svg>
                </motion.div>
            </motion.button>
            <motion.ul
                variants={{
                    open: {
                        clipPath: "inset(0% 0% 0% 0% round 10px)",
                        transition: {
                            type: "spring",
                            bounce: 0,
                            duration: 0.7,
                            delayChildren: 0.3,
                            staggerChildren: 0.05
                        }
                    },
                    closed: {
                        clipPath: "inset(10% 50% 90% 50% round 10px)",
                        transition: {
                            type: "spring",
                            bounce: 0,
                            duration: 0.3
                        }
                    }
                }}
                style={{ pointerEvents: isOpen ? "auto" : "none" }}
            >
                {genreList.map((it) => (
                    <motion.li 
                        variants={itemVariants}
                        key={it.id}
                        onClick={() => {setSelect(it.title); setIsOpen(!isOpen);}}
                    >
                        <Link to={`/genres/${it.title.toLowerCase()}`} className="link">
                            {it.title}
                        </Link>
                    </motion.li>
                ))}
            </motion.ul>
        </GenreNavi>
    );
}

export default GenreNav;

const GenreNavi = styled(motion.nav)`
    position: absolute;
    top: 10px;
    right: 14px;
    width: 150px;

    button {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 6px 20px;
        margin-bottom: 10px;
        -webkit-appearance: button;
        color: #fff;
        border: 1px solid #fff;
        border-radius: 10px;
        font-size: var(--font-con);
        font-weight: 700;
        cursor: pointer;
        text-align: left;
    }
    ul{
        display: flex;
        flex-direction: column;
        gap: 10px;
        background: rgba(0, 0, 0, 0.5);
        padding: 10px;

        li{
            font-size: 13px;
            text-align: center;
            cursor: pointer;
            color: #fff;
            line-height: 2em;
            font-weight: 600;
            transition: color 0.3s;
            &:hover{
                color: var(--main-color);
            }
        }
    }
    @media screen and (min-width:768px){
        right: 20px;
        width: 240px;
    }
    @media screen and (min-width:1480px){
        right: 0;
    }
`;