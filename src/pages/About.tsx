import React from 'react';
import Header from "../components/Header/Header.js";
import {GithubOutlined, LinkedinOutlined, MailOutlined, PhoneOutlined} from '@ant-design/icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faVk, faTelegram} from "@fortawesome/free-brands-svg-icons";

import './about.scss';

const links = [
    {link: 'https://github.com/gedonik', title: <GithubOutlined />},
    {link: 'https://vk.com/gedonik', title: <FontAwesomeIcon icon={faVk}></FontAwesomeIcon>},
    {link: 'https://www.linkedin.com/in/viacheslav-kolbantsev-828044238/', title: <LinkedinOutlined />},
    {link: 'https://t.me/gedonik', title: <FontAwesomeIcon icon={faTelegram}></FontAwesomeIcon>},
    {link: 'mailto:vkolbantsev@inbox.ru', title: <MailOutlined />},
    {link: 'tel:+79251445536', title: <PhoneOutlined />},
];

const About = () => {
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
                    {links?.map((link,idx) => (
                        <li className="about__item" key={idx}>
                            <a className="about__link" href={link.link} target="_blank">
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default About;