import React from 'react';

const dropdown = (props) => {

    let content = [];

    for(let key in props.data){
        content.push(
            <div className='Section'>
                <h4>{ key }</h4>
                <ul>
                    { props.data[key].map(item => <li>{ item }</li> )}
                </ul>
            </div>
        );
    }

    return (
        <div className='Dropdown'>
            { content.map(section => section ) }
        </div>
    );
}

export default dropdown;