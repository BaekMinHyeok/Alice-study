import { useState } from "react";

const TopBar = ({ home, title, back, qicon, icon }) => {
    const location = useLocation;
    const nowLocation = location.pathname.slice(1);
    const key: TopNavKeyType | string = getKeyFromUrl(nowLocation);
    const [showToast, setShowToast] = useState(false);
    const [position, setPosition] = useState({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
    });

    const onClickQicon = (e: React.MouseEvent<HTMLDivElement>) => {
        setShowToast(true);
        setPosition((prev) => ({ ...prev, x: e.clientX, y: e.clientY }));
    };
};
