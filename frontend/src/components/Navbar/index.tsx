const Navbar = () => {
    return(
        <nav className="bg-primary">
            <div>
                <a href="/">
                    <h4>Teste Navbar</h4>
                </a>
                <div>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/outroMenu">Outro_Menu</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;
