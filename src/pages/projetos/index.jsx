import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { Paragraph, Title } from "../../components/typography";
import Slider from "../../components/slider";
import Button from '../../components/button';
import { FaWineGlass, FaCar, FaSlideshare } from 'react-icons/fa';
import { GrProjects } from 'react-icons/gr';

const SliderItem = ({ children }) => (
    <div className="flex flex-col sm:flex-row h-full">
        {children}
    </div>
);

const Projeto = ({ title, description, Icon }) => (
    <>
        <div className="flex items-center justify-center md:justify-center w-full">
            <Icon className="w-80 h-80 object-cover text-black dark:text-white" />
        </div>
        <div className="flex flex-col justify-center w-full items-center text-left">
            <Title className="mb-6">{title}</Title>
            <Paragraph>{description}</Paragraph>
        </div>
    </>
);

const Projetos = () => {
    const { projectId } = useParams();
    const navigate = useNavigate();

    const [currentSlide, setCurrentSlide] = useState(parseInt(projectId) || 0);
    const totalSlides = 4;

    useEffect(() => {
        const id = parseInt(projectId) || 0;
        if (currentSlide !== id) {
            navigate(`/projetos/${currentSlide}`);
        }
    }, [currentSlide, navigate, projectId]);

    const nextSlide = () => {
        const nextIndex = (currentSlide + 1) % totalSlides;
        setCurrentSlide(nextIndex);
    };

    const settings = {
        infinite: true,
        duration: 700,
        showIndicators: true,
    };

    return (
        <div className="flex w-full flex-col">
            <div className="mr-4 ml-4 mb-4 flex flex-col h-full rounded-lg md:flex-col items-end p-8 bg-white dark:bg-gray-900 dark:bg-gradient-to-r dark:from-[#13072e] dark:to-[#3f2182] from-gray-900 to-gray-700">
                <Slider settings={settings} currentSlide={currentSlide} className="h-full">
                    <SliderItem>
                        <div className="flex items-center justify-center md:justify-center w-full ">
                            <GrProjects className="w-80 h-80 object-cover text-black dark:text-white" />
                        </div>
                        <div className="flex flex-col justify-center w-full items-center text-right">
                            <Title className="mb-6 text-4xl">Lista de Projetos</Title>
                            <ul className="text-gray-900 dark:text-gray-300">
                                <li><a onClick={() => setCurrentSlide(1)} className='underline text-2xl cursor-pointer'>Vinícola Agnello</a></li>
                                <li><a onClick={() => setCurrentSlide(2)} className='underline text-2xl cursor-pointer'>Formula E</a></li>
                                <li><a onClick={() => setCurrentSlide(3)} className='underline text-2xl cursor-pointer'>Social Mídia</a></li>
                            </ul>
                        </div>
                    </SliderItem>
                    <SliderItem>
                        <Projeto
                            Icon={(p) => <FaWineGlass {...p} />}
                            title="Vinícola Agnello"
                            description="Desenvolvi um website para a Vinícola Agnelo com o objetivo de aprimorar sua presença online e facilitar o acesso às informações sobre seus produtos e serviços. O site é totalmente responsivo e oferece uma experiência de navegação intuitiva, permitindo que os visitantes conheçam a história da vinícola, explorem a variedade de vinhos disponíveis e entrem em contato para visitas e degustações" />
                    </SliderItem>
                    <SliderItem>
                        <Projeto
                            Icon={(p) => <FaCar {...p} />}
                            title="Formula E"
                            description="Plataforma online dedicada aos entusiastas da Fórmula E, oferecendo as últimas notícias, calendários de corridas, classificações e perfis de pilotos e equipes. O objetivo do projeto foi fornecer um hub centralizado de informações atualizadas sobre o campeonato de automobilismo elétrico." />
                    </SliderItem>
                    <SliderItem>
                        <Projeto
                            Icon={(p) => <FaSlideshare {...p} />}
                            title="Social Mídia"
                            description="Desenvolvi um aplicativo de mídia social que permite aos usuários compartilhar conteúdos, conectar-se com amigos e participar de comunidades com interesses similares. O foco do projeto foi criar uma interface amigável e intuitiva que incentive a interação e o engajamento entre os usuários" />
                    </SliderItem>
                </Slider>
                <div>
                    <Button className="mt-6 align-right" onClick={nextSlide}>Próximo Projeto</Button>
                </div>
            </div>


        </div>
    );
};

export default Projetos;
