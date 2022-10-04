import React from 'react';
import Header from "../components/Header/Header.jsx";
import {Link} from "react-router-dom";
import {GithubOutlined} from '@ant-design/icons';
import {LinkedinOutlined} from '@ant-design/icons';

import './about.scss';

const About = () => {
    const links = [<GithubOutlined />, 'vk', <LinkedinOutlined />, 'telegram'];

    return (
        <div className="about">
            <Header/>
            <div className="container">
                <h2 className="about__title">Описание приложения</h2>
                <p className="about__description">Данное приложение было разработано в учебных целях Колбанцев
                    Вячеславом, для демонстрации навыков frontend-разработки.</p>
                <p className="about__description">Используемые технологии:
                    <strong> html, css, scss, git, vite, react, redux toolkit.
                    </strong>
                </p>
                <p>Связаться со мной можно по ссылкам ниже:</p>
                <ul className="about__list">
                    {links.map((item, idx) =>
                        <li className="about__item" key={idx}>
                            <Link className="about__link" to="/">
                                {item}
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default About;