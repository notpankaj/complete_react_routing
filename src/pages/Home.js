import { useEffect } from "react";

const Home = () => {


    useEffect(() => {
        // start page from top 0
        window.scroll(0,0);
    }, [])

    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}

export default Home
