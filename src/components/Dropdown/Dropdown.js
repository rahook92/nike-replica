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
                <h4>{ key }</h4>
                <ul>
                    { props.data[key].map(item => <li key={Math.random()}>{ item }</li> )}
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