import {useEffect, useState} from "react";

export const useScroll = () => {
    const isClient = typeof window === 'object';

    const getCurrentScroll = () => {
        return {
            scrollY: isClient ? window.scrollY : 0,
            scrollX: isClient ? window.scrollX : 0
        };
    };

    const [scroll, setScroll] = useState(getCurrentScroll);

    useEffect((): any => {
        if (!isClient) {
            return false;
        }

        function handleScroll() {
            setScroll(getCurrentScroll());
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return scroll;
};