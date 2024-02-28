import { motion } from "framer-motion";
import MenuItem from "./MenuItem";

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.5 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

const Navigation = ({toggle}) => {

    return (
        <motion.ul variants={variants}>
            {items.map(i => (
                <MenuItem key={i.id} {...i} toggle={toggle} />
            ))}
        </motion.ul>
    );
};

export default Navigation;

const items = [
    {
        id: 0,
        name: "NOW PLAYING",
        path: "/nowplaying"
    },
    {
        id: 1,
        name: "TOP RATED",
        path: "/toprated"
    },
    {
        id: 2,
        name: "UPCOMING",
        path: "/upcoming"
    },
    {
        id: 3,
        name: "GENRES",
        path: "/genres"
    },
]