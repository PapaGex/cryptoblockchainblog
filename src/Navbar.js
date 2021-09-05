const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Crypto Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: '#aee4b8',
                    backgroundColor: '#e95007',
                    borderRadius: '8px'
                }}>New Blog</a>
            </div>
        </nav>
    );
}

export default Navbar;