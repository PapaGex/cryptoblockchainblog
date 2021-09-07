import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blogs, error, isPending } = useFetch('http://localhost:7000/data/db.json/blogs/' + id);
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:7000/data/db.json/blogs' + blogs.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return (
        <div className={"blog-details"}>
            { isPending && <div>Loading....</div> }
            { isPending && <div>{ error }</div> }
            { blogs && (
                <article>
                <h2>{ blogs.title }</h2>
                    <div>{ blogs.body }</div>
                    <p>Written by { blogs.author }</p>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;