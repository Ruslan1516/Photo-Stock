import React from 'react';
import './Search.css';
import './Media.css';

const photoName = [];

const Search = props => {
    return (
        <div className='PhotoSearch'>
            <div className='Inp'>
                <input
                    type='Text'
                    placeholder='Поиск'
                    name="search"
                    value={props.value}
                    onChange={props.change}
                />
            </div>
            <div className='Border'/>
            <div className='PhotosName'>
                {photoName.map((elem, index) => (
                    <button key={index}>
                        <p>{elem.text}</p>
                    </button>
                ))}
            </div>
        </div>
    )
};

export default Search;