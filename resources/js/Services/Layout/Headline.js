import React from 'react'

export default function Headline(props) {
    return (
        <div className='HeadLineContainer'>
                <h1 className='main_title_headline' >{props.title}</h1>
        </div>
    )
}