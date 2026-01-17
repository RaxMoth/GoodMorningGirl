import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const FeatureComponent: React.FC = () => {
    const [elements, setElements] = useState<{ id: number; x: number }[]>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setElements((prevElements) => [
                ...prevElements,
                { id: Date.now(), x: Math.random() * window.innerWidth },
            ]);
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative flex h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-200 to-blue-100 overflow-hidden">
            <div className="my-4 text-4xl font-bold">Feature Component</div>
            {elements.map((element) => (
                <motion.div
                    key={element.id}
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: "100vh", opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 3, ease: "easeIn" }}
                    className="absolute text-blue-500"
                    style={{
                        left: element.x,
                        fontSize: `${Math.random() * 200 + 20}px`,
                    }}
                >
                    ✨
                </motion.div>
            ))}
        </div>
    );
};

export default FeatureComponent;
