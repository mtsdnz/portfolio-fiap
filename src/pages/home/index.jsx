import Badge from "../../components/badge";
import Button from "../../components/button";
import { Paragraph, Title } from "../../components/typography";
import { FaCode } from "react-icons/fa";

const StackItem = ({ title, description }) => (
    <li>
        <Title className="mt-4 text-xl">{title}</Title>
        <Paragraph>{description}</Paragraph>
    </li>
);

const SectionItem = ({ children, className, ...rest }) => (
    <section className={`mr-4 ml-4 mb-4 flex flex-col-reverse h-full rounded-lg md:flex-row items-center p-8 bg-neutral-200 dark:bg-gray-900 dark:bg-gradient-to-r dark:from-[#13072e] dark:to-[#3f2182] from-gray-900 to-gray-700 ${className}`} {...rest}>
        {children}
    </section>
);

const Home = () => (
    <div className="flex w-full flex-col">
        <SectionItem id="section1" className="md:h-4/6">
            <div className="text-center md:text-left w-full">
                <Badge>Desenvolvedor FullStack</Badge>
                <Title className="mt-6">Sobre mim</Title>
                <Paragraph className="mt-4 text-xl">
                    Sou um desenvolvedor full stack com paixão por criar soluções tecnológicas inovadoras. Especializado em React, JavaScript e C# ASP.NET Core, tenho experiência em construir aplicações web eficientes e escaláveis.
                </Paragraph>
                <Paragraph className="mt-4 text-xl">
                    Meu objetivo é transformar ideias em produtos digitais que proporcionem excelente experiência ao usuário. Ao longo da minha carreira, participei de diversos projetos que me permitiram aprimorar minhas habilidades tanto no front-end quanto no back-end. Estou sempre em busca de novos desafios que impulsionem meu crescimento profissional.
                </Paragraph>
                <Button className="mt-6">
                    <p className="text-xl">Conheça meus projetos</p>
                </Button>
            </div>
            <div className="flex justify-center md:justify-center w-full mb-6 md:mb-0">
                <img
                    src="/eu.jpeg"
                    alt="Matheus Diniz"
                    className="w-80 h-80 object-cover rounded-full mt-8 md:mt-0" />
            </div>
        </SectionItem>

        <SectionItem id="section2" className="md:h-screen">
            <div className="text-center md:text-left w-full">
                <Badge>PRINCIPAIS TÉCNOLOGIAS</Badge>
                <Title className="mt-6">STACK</Title>
                <ul className="text-gray-900 dark:text-gray-300 list-disc ml-8">
                    <StackItem title="React" description="Com React, construo interfaces de usuário interativas e responsivas. Tenho experiência em desenvolver aplicações web modernas e eficientes com React, utilizando bibliotecas como Redux e Material-UI." />
                    <StackItem title="Javascript/Typescript" description="Sou especializado em JavaScript e Typescript, e utilizo essas linguagens para desenvolver aplicações web escaláveis e de alta performance. Tenho experiência em trabalhar com Node.js, Express e Next.js." />
                    <StackItem title="C# ASP.NET Core" description="Desenvolvo aplicações web robustas e seguras com C# ASP.NET Core. Tenho experiência em construir APIs RESTful e aplicações web escaláveis com ASP.NET Core." />
                </ul>
            </div>
            <div className="flex justify-center md:justify-center w-full mb-6 md:mb-0">
                <FaCode className="w-80 h-80 object-cover rounded-full mt-8 md:mt-0 text-black dark:text-white" />
            </div>
        </SectionItem>
    </div>
);

export default Home;
