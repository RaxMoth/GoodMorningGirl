import React from "react";

const Talks: React.FC = () => {
    return (
        <div className="flex h-screen flex-col items-center justify-center bg-gradient-to-b from-pink-200 to-pink-100">
            {" "}
            <div className="my-4 text-4xl font-bold">
                We had greate Year together !!!
            </div>
            <div className="my-4 text-4xl font-bold">Or in short:</div>
            <img src="https://media1.tenor.com/m/uJZDe916GaAAAAAd/kiss-i-love-you.gif" />
            <div className="my-4 text-4xl font-bold">
                And wish me way more years with you !!!
            </div>
        </div>
    );
};

export default Talks;
