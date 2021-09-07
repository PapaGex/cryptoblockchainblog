import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Crypto Blog</h1>
            <div className="links">
                <Link to="/">Home</ Link>
                <Link to="/Create" style={{
                    color: '#aee4b8',
                    backgroundColor: '#e95007',
                    borderRadius: '8px'
                }}>New Blog</Link>
            </div>
        </nav>
    );
}

export default Navbar;