import Bloglist from './Bloglist';
import useFetch from './useFetch';

const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:7000/data/db.json/blogs');

    return (
        <div className="home">
            { error && <div>{ error }</div>}
            { isPending && <div>Loading....</div> }
            { blogs && <Bloglist blogs={blogs} title="All the Blogs!!!" />}
        </div>
    );
}

export default Home;