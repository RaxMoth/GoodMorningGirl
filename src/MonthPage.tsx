import React, { useState } from "react";
import Month from "./Month";
import { useNavigate } from "react-router-dom";

const monthsData = [
    {
        image: "/Januar.JPG",
        gif: "https://gifdb.com/images/high/cartoon-bunny-travel-trip-xuohy3ct8qlfvq84.webp",
        title: "Januar",
        description:
            "Der Januar startete busy in berlin und endete mit einer terror attacke von Ruby.",
    },
    {
        image: "/Februar.JPG",
        gif: "https://gifdb.com/images/high/ghibli-totoro-and-mei-4jgkgj1z9avfy4gj.webp",
        title: "Februar",
        description:
            "Du hast die Schönste Schale auf Erden gebaut und dann gab es noch sehr viel suff mit Yannik",
    },
    {
        image: "/Marz.JPG",
        gif: "https://gifdb.com/images/high/man-art-towel-with-paint-9ygyz8v2qd9lomnu.webp",
        title: "März",
        description:
            "Besuchten wir viel deine Großeltern und hatten die geniale Idee Lörres seine Bude umzubauen",
    },
    {
        image: "/April.PNG",
        gif: "https://gifdb.com/images/high/bamboo-panda-falling-xathoeb2bpuzdh25.webp",
        title: "April",
        description:
            "your BIRTHDAY!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Achso und es fiel ein Baum auf das Auto",
    },
    {
        image: "/Mai.JPG",
        gif: "https://gifdb.com/images/high/mind-games-jack-sparrow-go8sa5xa65jc5cri.webp",
        title: "Mai",
        description: "Im Mai haben wir Lukas sein Haus unsicher gemacht",
    },
    {
        image: "/Juni.JPG",
        gif: "https://gifdb.com/images/high/amongus-game-emergency-meeting-warning-ni55da2m6zb9n9se.webp",
        title: "Juni",
        description:
            "Du lernst meine Familie kennen, mir wurden die Zähne gezogen und ich dacht mir nach jedem Gespräch in der Schweiz:",
    },
    {
        image: "/Juli.JPG",
        gif: "https://gifdb.com/images/high/white-spinning-cat-holding-on-floor-cleaner-aav3lstfln8ruj32.webp",
        title: "Juli",
        description:
            "Wir hatten die gloreiche Idee den Keller deiner Familie aufzuräumen nur um festzustellen das er nach 2 Wochen wieder wie immer war ",
    },
    {
        image: "/august.JPG",
        gif: "https://gifdb.com/images/high/cute-goose-with-cows-igun77ws7ezxg6qb.webp",
        title: "August",
        description:
            "Wir ziehen nach Beerbach !!!!!!!! und du lernst Sahra kennen ",
    },
    {
        image: "/September.JPG",
        gif: "https://gifdb.com/images/high/calming-dog-firefighter-animated-cartoon-y8h11zw82ja3m7qn.webp",
        title: "September",
        description:
            "vom Feuerwehr Event bis fertiger Umzug nach Beerbach,oder Kino Night mit Chrisitan und Isabella. Der September war sehr busy und ach ja ich hatte Geburtstag",
    },
    {
        image: "/Oktober.jpeg",
        gif: "https://gifdb.com/images/high/cooking-cake-explode-iko4cssarj4ifnni.webp",
        title: "Oktober",
        description:
            "Oktober oder auch BAUHAUS ich weiß nix von meinem eigenen Angebot genannt. Wir installierten endlich Lampen überall und fingen an gutes essen zu kochen. I mean RICHTIG gutes essen vom BlaubeerCake (ich sag einfach das der gut war). Zu der ersten Gemüse Pfanne , Kartoffelpuffer oder richtig geiles eingelegtes Huhn. Alles war einfach GEIL. Und nicht zu vergessen der Spiele Abend bei Lukas",
    },
    {
        image: "/November.JPG",
        gif: "https://gifdb.com/images/high/cat-bite-hand-no-teeth-9q4bsseui4nvd335.webp",
        title: "November",
        description:
            "Ich holte die Pflanzen aus BAUHAUS, und du maltest in der Zeit den Koala und Sahra fertig. Wir fanden raus das Mercedes einfach cheap as fuck ist und hatten schon Panik wegen Weihnachtsgeschenken. Yoshi wurde zu Ohnezahn und Jim zu Mulch",
    },
    {
        image: "/Dezember.jpeg",
        gif: "https://gifdb.com/images/high/strong-police-man-ambush-doors-ruhwrn5ofijbot0z.webp",
        title: "Dezember",
        description:
            "Viele Pläne und dennoch keine :D Wir waren in Holland sonst chilli milli und deinen Schrank gekauft",
    },
];

const MonthsPage: React.FC = () => {
    const [currentMonth, setCurrentMonth] = useState(0);
    const navigate = useNavigate();

    const handleNext = () => {
        if (currentMonth < monthsData.length - 1) {
            setCurrentMonth(currentMonth + 1);
        }
    };

    const handlePrevious = () => {
        if (currentMonth > 0) {
            setCurrentMonth(currentMonth - 1);
        }
    };

    const handleContinue = () => {
        navigate("/talks");
    };

    return (
        <div className="bg-gradient-to-b from-pink-200 to-pink-100">
            <Month
                image={monthsData[currentMonth].image}
                gif={monthsData[currentMonth].gif}
                title={monthsData[currentMonth].title}
                description={monthsData[currentMonth].description}
            />
            <div className="flex justify-between mt-4 mx-16">
                {currentMonth < monthsData.length - 1 ? (
                    <>
                        <button
                            onClick={handlePrevious}
                            className="mt-4 rounded px-4 py-2 text-white bg-pink-500"
                            disabled={currentMonth === 0}
                        >
                            Back
                        </button>
                        <button
                            onClick={handleNext}
                            className="mt-4 rounded px-4 py-2 text-white bg-pink-500"
                            disabled={currentMonth === monthsData.length - 1}
                        >
                            Continue
                        </button>
                    </>
                ) : (
                    <button
                        onClick={handleContinue}
                        className="mt-4 rounded px-4 py-2 text-white bg-green-500"
                    >
                        Continue
                    </button>
                )}
            </div>
        </div>
    );
};

export default MonthsPage;
