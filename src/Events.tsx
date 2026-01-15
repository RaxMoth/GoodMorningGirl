import { useNavigate } from "react-router-dom";

const Events: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="flex h-screen flex-col items-center justify-center">
            <h1 className="text-4xl font-bold">
                Davor noch ein kleiner Jahresrückblick:{" "}
            </h1>

            <img
                className="h-[600px]"
                src="https://media1.tenor.com/m/ULWNYxOPJXQAAAAd/will-smith-rewind-time.gif"
            />
            <button
                onClick={() => navigate("/months")}
                className="mt-4 rounded px-4 py-2 text-black bg-gradient-to-b from-pink-200 to-pink-100"
            >
                Lets go
            </button>
        </div>
    );
};

export default Events;
