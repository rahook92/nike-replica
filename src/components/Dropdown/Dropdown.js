import React from 'react';

const dropdown = (props) => {

    let content = [];

    for(let key in props.data){
        content.push(
            <div 
                key={Math.random()} 
                className='Section'
                onMouseEnter={(e) => { props.dropDisplay(e) }}
                onMouseLeave={props.dropHide}>
                <a className='section-header' href='/'>{ key }</a>
                <ul>
                    { props.data[key].map(item => <a className='section-item' href='/' key={Math.random()}>{ item }</a> )}
                </ul>
            </div>
        );
    }

    return (
        <div className='Dropdown'>
            {content.map(section => section )}
        </div>
    );
}

export default dropdown;