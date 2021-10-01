import { useEffect } from "react";

const About = () => {
    useEffect(() => {
        window.scroll(0,0);
    }, [])
    return (
        <div>
            <h1>About page</h1>
        </div>
    )
}

export default About
