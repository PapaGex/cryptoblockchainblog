import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('crypto-blockchain-junkie');
    const [isPending, setIsPending] = useState(false)
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog =  { title, body, author };

        setIsPending(true);

        fetch('http://localhost:7000/data/db.json/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added');
            setIsPending(false);
           // history(-1);
            history.push('/');
        });
    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog Body:</label>
                <textarea
                 required
                 value={body}
                 onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="crypto-blockchain-junkie">crypto-blockchain-junkie</option>
                    <option value="kawekaweau">kawekaweau</option>
                    <option value="Jonathan Lang">Jonathan Lang</option>
                </select>
                { !isPending && <button>Add New Blog</button>}
                { isPending && <button>Adding New Blog...</button>}
                <p>{ title }</p>
                <p>{ body } </p>
                <p>{ author }</p>
            </form>
        </div>
    );
}

export default Create;