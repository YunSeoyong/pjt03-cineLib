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
            whileHover={{ scale: 1.1, color: "var(--main-color)" }}
            whileTap={{ scale: 0.95 }}
        >
            <p>{name}</p>
        </motion.li>
    );
};

export default MenuItem;