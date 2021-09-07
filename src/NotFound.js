import {Link} from "react-router-dom";


const NotFound  = () => {
        return (
            <div className="not-found">
                <h2>So Terribly Sorry</h2>
                <p>That page is doing a Jimi Hoffa!!!</p>
                <Link to="/">Back to the HomePage</Link>
            </div>
        );
}

export default NotFound;