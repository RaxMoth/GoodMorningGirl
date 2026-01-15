import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
    const [noCount, setNoCount] = useState(0);
    const navigate = useNavigate();
    const yesButtonSize = noCount * 25 + 40;

    const handleNoClick = () => {
        setNoCount(noCount + 1);
    };

    const getNoButtonText = () => {
        const phrases = [
            "No",
            "Are you sure?",
            "Denk nochmal ganz genau nach :)",
            "Pretty please",
            "Jetzt machst dus absichtlich!",
            "Okay kannst du einfach auf ja klicken",
            "PLEASE EUMEL",
            "But :*(",
            "I am going to die",
            "Yep im dead",
            "ok for a Ben & Jerry's?",
            "Kürbisnudeln?",
            "Hot Tea?",
            "Tal vez si lo intento con el español ",
            "¿Podría pulsar «Sí»?",
            "No :(",
        ];

        return phrases[Math.min(noCount, phrases.length - 1)];
    };

    const handleYesClick = () => {
        navigate("/yes");
    };

    const handlesdsClick = () => {
        navigate("/valentinesday");
    };

    return (
        <div className="-mt-16 flex h-screen flex-col items-center justify-center">
            <img
                className="h-[200px]"
                src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            />
            <h1 className="my-4 text-4xl">
                Anna weißt du welcher Tag heute ist?{" "}
            </h1>
            <div className="flex items-center">
                <button
                    className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
                    style={{ fontSize: yesButtonSize }}
                    onClick={handleYesClick}
                >
                    Ja
                </button>
                <button
                    onClick={handleNoClick}
                    className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
                >
                    {noCount === 0 ? "Nein" : getNoButtonText()}
                </button>
                <button
                    className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700 hidden`}
                    style={{ fontSize: yesButtonSize }}
                    onClick={handlesdsClick}
                >
                    Ja
                </button>
            </div>
        </div>
    );
};

export default Home;
