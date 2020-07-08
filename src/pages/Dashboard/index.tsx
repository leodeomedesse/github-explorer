import React from 'react';
import { FiChevronRight } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './style';

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logoImg} alt="Github Explorer" />
            <Title>Explore repositórios no Github</Title>

            <Form>
                <input placeholder="Digite o nome do repositório" />
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories>
                <a href="teste">
                    <img
                        src="https://avatars1.githubusercontent.com/u/53792927?s=460&u=dc4886dd70fa67113093a865b6624691ce95a4e2&v=4"
                        alt="Leonardo Deomedesse"
                    />
                    <div>
                        <strong>GeniOn/recupera</strong>
                        <p>WS para automatizar os processos de retornos.</p>
                    </div>
                    <FiChevronRight size={20} />
                </a>
                <a href="teste">
                    <img
                        src="https://avatars3.githubusercontent.com/u/20821937?s=460&u=ae9f73b29ba9032d59147b5adea520b8c54abda0&v=4"
                        alt="David Lorena"
                    />
                    <div>
                        <strong>GeniOn/cslog</strong>
                        <p>WS para automatizar os processos de retornos.</p>
                    </div>
                    <FiChevronRight size={20} />
                </a>
                <a href="teste">
                    <img
                        src="https://avatars1.githubusercontent.com/u/53837240?s=460&u=2dbcfdab42cf0b13c69500e7ee52b86fdd2fc05d&v=4"
                        alt="Vinicius Pimenta"
                    />
                    <div>
                        <strong>GeniOn/resolvaKi</strong>
                        <p>Land para auto-negociações.</p>
                    </div>
                    <FiChevronRight size={20} />
                </a>
                <a href="teste">
                    <img
                        src="https://avatars3.githubusercontent.com/u/54688053?s=460&v=4"
                        alt="Mariana Castan"
                    />
                    <div>
                        <strong>GeniOn/contextos-av</strong>
                        <p>agentes virtuais.</p>
                    </div>
                    <FiChevronRight size={20} />
                </a>
            </Repositories>
        </>
    )
};

export default Dashboard;