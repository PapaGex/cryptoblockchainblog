import { useEffect, useState  } from 'react';
import Bloglist from './Bloglist';

const Home = () => {
    const [blogs, setBlogs] = useState(null);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() =>{
        fetch('http://localhost:7000/blogs')
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data);
            })
    }, []);

    return (
        <div className="home">
            <Bloglist blogs={blogs} title="All the Blogs!!!" handleDelete={handleDelete} />
        </div>
    );
}

export default Home;