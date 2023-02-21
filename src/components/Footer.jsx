import React from 'react';

const Footer = (props) => {

    // для кнопок можно создать отдельный массив с данными и поместить в компонент через map. Никите написал пример структуры массива

    return (
        <div className='footer'>
            <div className="footerContent">
            <p className="footerText">{`${props.counter} notes`}</p>
            <div className="footerBtns">
                <button onClick={() => props.filter("all")} className="footerFilter">Все</button>
                <button onClick={() => props.filter(true)} className="footerFilter">Активные</button>
                <button onClick={() => props.filter(false)} className="footerFilter">Выполненные</button>
            </div>
        </div>
        </div>
    );
};

export default Footer;