import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => (
    <footer className="bg-neutral-200 text-gray-800 dark:bg-gradient-to-r dark:from-[#13072e] dark:to-[#3f2182] dark:text-white p-8 dark:bg-gray-900">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center mb-4">
                    <div className="w-8 h-8 mr-2">
                        <img
                            src="/eu.jpeg"
                            alt="Matheus Diniz"
                            className="object-cover rounded-full" />
                    </div>
                    <span className="font-bold text-lg">Matheus Diniz</span>
                </div>
                <div className="h-px bg-white w-full mb-3"></div>
                <p className="text-sm">&copy; 2024. Todos os direitos reservados</p>
            </div>

            {/* Links do Footer */}
            <div className="flex space-x-12 mt-6 md:mt-0">
                {/* Links Sociais */}
                <div className="text-center md:text-left">
                    <h3 className="font-semibold mb-2">Social</h3>
                    <ul>
                        <li className="flex flex-row items-center">
                            <FaGithub className="mr-1" />
                            <a href="https://github.com/mtsdnz" target="__blank" className="hover:underline">GitHub</a>
                        </li>
                        <li className="flex flex-row items-center">
                            <FaInstagram className="mr-1" />
                            <a href="https://instagram.com/mtsdnz" target="__blank" className="hover:underline">Instagram</a>
                        </li>
                        <li className="flex flex-row items-center">
                            <FaLinkedin className="mr-1" />
                            <a href="https://www.linkedin.com/in/mtsdnz/" target="__blank" className="hover:underline">Linkedin</a>
                        </li>
                    </ul>
                </div>

                {/* Links do Menu */}
                <div className="text-center md:text-left">
                    <h3 className="font-semibold mb-2">Menu</h3>
                    <ul>
                        <li><Link to="/" className="hover:underline">Home</Link></li>
                        <li><Link to="/projetos/0" className="hover:underline">Projetos</Link></li>
                        <li><Link to="/contato" className="hover:underline">Contato</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
