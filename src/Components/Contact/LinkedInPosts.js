import { useEffect, useState } from "react";
import axios from "axios";

const LinkedInPosts = () => {
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        getPosts();
    },[]);


    const getPosts = async () => {
        const data = await axios.get('./resumeData.json');
        setPosts(data)
    };

    return (
        <>
           { posts && <div className="widget widget_tweets">
                <h4 className="widget-title">Latest Tweets</h4>
                <a className="twitter-timeline" href="https://twitter.com/DiipeshRaichana?ref_src=twsrc%5Etfw">Tweets by DiipeshRaichana</a>
            </div>}
        </>
    )
}
export default LinkedInPosts;