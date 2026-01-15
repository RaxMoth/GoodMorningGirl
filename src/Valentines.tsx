import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Valentines: React.FC = () => {
    const [hearts, setHearts] = useState<{ id: number; x: number }[]>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setHearts((prevHearts) => [
                ...prevHearts,
                { id: Date.now(), x: Math.random() * window.innerWidth },
            ]);
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative flex h-screen flex-col items-center justify-center bg-gradient-to-b from-pink-200 to-pink-100 overflow-hidden">
            <div className="my-4 text-4xl font-bold">
                Happy Valentines Day Anna! 💖
            </div>
            <img src="https://media1.tenor.com/m/uJZDe916GaAAAAAd/kiss-i-love-you.gif" />

            {hearts.map((heart) => (
                <motion.div
                    key={heart.id}
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: "100vh", opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 3, ease: "easeIn" }}
                    className="absolute text-red-500"
                    style={{
                        left: heart.x,
                        fontSize: `${Math.random() * 200 + 20}px`,
                    }}
                >
                    ❤️
                </motion.div>
            ))}
        </div>
    );
};

export default Valentines;
