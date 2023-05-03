import {useState, useEffect} from "react";

export const handleWidht = () => {
    const [width, setWidth] = useState(window.innerWidth)
    useEffect(() => {
        function handleWidht() {
            setWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleWidht)
        return () => {
            window.removeEventListener('resize', handleWidht)
        }
    }, [])
}
