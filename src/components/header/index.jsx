import { Link } from "react-router-dom";

const Header = ({ darkMode, setDarkMode }) => {
    return (
        <header className="bg-neutral-200 text-gray-800 flex justify-between p-4 dark:bg-gray-900 mb-2">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">PORTFÓLIO</h1>
            <nav>
                <Link to="/" className="mr-4 text-gray-900 dark:text-white hover:underline">Apresentação</Link>
                <Link to="/projetos/0" className="text-gray-900 dark:text-white hover:underline">Projetos</Link>
                <Link to="/contato" className="ml-4 text-gray-900 dark:text-white hover:underline">Contato</Link>
            </nav>
            <button
                className="ml-4"
                onClick={() => setDarkMode(!darkMode)}
            >
                {darkMode ? "🌙" : "☀️"}
            </button>
        </header>
    );
};

export default Header;
