import React from 'react';

const Footer = (props) => {
    const btns = [
        {status:"all", class:"footerFilter", body:"Все"},
        {status:true, class:"footerFilter", body:"Активные"},
        {status:false, class:"footerFilter", body:"Выполненные"}
    ]
    // для кнопок можно создать отдельный массив с данными и поместить в компонент через map. Никите написал пример структуры массива

    return (
        <div className='footer'>
            <div className="footerContent">
            <p className="footerText">{`${props.counter} notes`}</p>
            <div className="footerBtns">
                {btns.map(e => 
                    <button className={e.class} onClick={() => props.filter(e.status)}>{e.body}</button>)}
            </div>
        </div>
        </div>
    );
};

export default Footer;