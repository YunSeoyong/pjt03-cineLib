import { motion } from "framer-motion";
import MenuItem from "./MenuItem";

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

const Navigation = () => {
    return (
        <motion.ul variants={variants}>
            {items.map(i => (
                <MenuItem key={i.id} {...i} />
            ))}
        </motion.ul>
    );
};

export default Navigation;

const items = [
    {
        id: 0,
        name: "NOW PLAYING",
    },
    {
        id: 1,
        name: "TOP RATED",
    },
    {
        id: 2,
        name: "UPCOMING",
    },
    {
        id: 3,
        name: "GENRES",
    },
]