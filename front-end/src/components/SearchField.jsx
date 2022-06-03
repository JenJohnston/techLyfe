import React from 'react'
import { MdSearch } from 'react-icons/md'

export default function SearchField({ value, setValue, onFocus}) {
    

    return (
        <div className='search__container'>
            
             <button className='search-btn'>
                <MdSearch/>
            </button>
            <input
                className='form-input' 
                type="text" 
                placeholder='search' 
                value={value} 
                onChange={(e) => setValue(e.target.value)}
                onFocus={onFocus && onFocus}
            />
        </div>
    )
}
