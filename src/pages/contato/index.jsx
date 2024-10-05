import { FaRegUserCircle } from 'react-icons/fa';
import { useState } from 'react';

import Input from '../../components/input';
import Button from "../../components/button";
import { Title } from "../../components/typography";

const SectionItem = ({ children, className, ...rest }) => (
    <section className={`mr-4 ml-4 mb-4 flex flex-col-reverse h-full rounded-lg md:flex-row items-center p-8 bg-neutral-200 dark:bg-gray-900 dark:bg-gradient-to-r dark:from-[#13072e] dark:to-[#3f2182] from-gray-900 to-gray-700 ${className}`} {...rest}>
        {children}
    </section>
);


const Contato = () => {
    const [formValues, setFormValues] = useState({
        first_name: "",
        last_name: "",
        company: "",
        phone: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.id]: e.target.value });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    }

    return (
        <div className="flex w-full flex-col">
            <SectionItem id="section1" className="">
                <div className="text-center md:text-left w-full">
                    <Title className="mb-6">Contato</Title>

                    <form onChange={handleChange} onSubmit={onSubmit}>
                        <div className="grid gap-6 mb-6 md:grid-cols-2">
                            <Input label="Primeiro Nome" type="text" id="first_name" placeholder="John" required />
                            <Input label="Último Nome" type="text" id="last_name" placeholder="Doe" required />
                            <Input label="Empresa" type="text" id="company" placeholder="FIAP" />
                            <Input label="Telefone" type="tel" id="phone" placeholder="123-45-678" pattern="[0-9]{11}" required />
                        </div>
                        <Input containerClass="mb-6" label="Email" type="email" id="email" placeholder="Email" required />

                        <div className="mb-6">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sua mensagem</label>
                            <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Escreva sua mensagem"></textarea>
                        </div>

                        <Button type="submit">Enviar</Button>
                    </form>

                </div>
                <div className="flex items-center justify-center md:justify-center w-full">
                    <FaRegUserCircle className="w-80 h-80 object-cover text-black dark:text-white" />
                </div>
            </SectionItem>
        </div>
    );
};

export default Contato;
