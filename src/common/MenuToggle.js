import { motion } from "framer-motion";
import styled from "styled-components";

const Path = props => (
    <motion.path
        fill="transparent"
        strokeWidth="2"
        stroke="hsl(0, 0%, 100%)"
        strokeLinecap="round"
        {...props}
    />
);

const MenuToggle = ({ toggle, isMenu }) => {

    const toggleMenu = {
        open: () => ({
            transition: {
                type: "spring",
                stiffness: 20,
                restDelta: 2
            }
        }),
        closed: {
            transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 40
            },
        }
    };

    return (
        <ButToggle 
            onClick={toggle} className="btnToggle"
            initial={false}
            animate={isMenu ? "open" : "closed"}
        >
            <svg width="24" height="24" viewBox="0 0 23 23">
                <Path
                    variants={{
                        closed: { d: "M 2 2.5 L 20 2.5" },
                        open: { d: "M 3 16.5 L 17 2.5" }
                    }}
                />
                <Path
                    d="M 2 9.423 L 20 9.423"
                    variants={{
                        closed: { opacity: 1 },
                        open: { opacity: 0 }
                    }}
                    transition={{ duration: 0.1 }}
                />
                <Path
                    variants={{
                        closed: { d: "M 2 16.346 L 20 16.346" },
                        open: { d: "M 3 2.5 L 17 16.346" }
                    }}
                />
            </svg>
        </ButToggle>
    );
};

export default MenuToggle;

const ButToggle = styled(motion.button)`
    position: absolute;
    top: 23px;
    right: 0;
    width: 40px;
    height: 40px;
    cursor: pointer;
    background: transparent;
    outline: none;
    border: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    z-index: 1002;
`;