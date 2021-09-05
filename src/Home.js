import { useEffect, useState  } from 'react';
import Bloglist from './Bloglist';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'The Birth of the Crypto-Blockchain-Junkie', body: 'lorem ipsum...', author: 'crypto-blockchain-junkie', id: 1},
        { title: 'The Hardware of Hashes', body: 'lorem ipsum...', author: 'crypto-blockchain-junkie', id: 2},
        { title: 'Cold Storage for Global Warming', body: 'lorem ipsum...', author: 'crypto-blockchain-junkie', id: 3}
    ]);

    const [name , setName] = useState('kawekaweau')

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() =>{
        console.log('use effect');
        console.log(name);
    }, [name]);

    return (
        <div className="home">
            <Bloglist blogs={blogs} title="All the Blogs!!!" handleDelete={handleDelete} />
            <button onClick={() => setName('GiantGecko')}>Change Name</button>
            <p>{ name }</p>
        </div>
    );
}

export default Home;