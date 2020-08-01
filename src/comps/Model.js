import React from 'react';
import { motion } from "framer-motion";

const Model = ({ selectedImg, setSelectedImg }) =>
{

    const handleClick = (e) =>
    {
        if (e.target.classList.contains('model-box'))
        {
            setSelectedImg(null);

        }
    };

    document.addEventListener("keydown", (e) =>
    {
        if (e.key === "Escape")
        {
            setSelectedImg(null);
        }
    });


    return (
        <div>
            <motion.div className="model-box" onClick={ handleClick }
                initial={ { opacity: 0 } }
                animate={ { opacity: 1 } }
            >
                <motion.div className="model-content"
                    initial={ { y: '-100vh' } }
                    animate={ { y: 0 } }
                >
                    <img className="model-pic" src={ selectedImg } alt="#" />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Model;
