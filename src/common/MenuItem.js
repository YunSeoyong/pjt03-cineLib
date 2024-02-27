import { motion } from "framer-motion";

const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};

const MenuItem = ({ id, name }) => {
    return (
        <motion.li
            variants={variants}
            whileHover={{ sclae: 1.1 }}
            whileTap={{ sclae: 0.95 }}
        >
            {name}
        </motion.li>
    );
};

export default MenuItem;