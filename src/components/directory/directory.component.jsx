import React from "react";

import MenuItem from '../menu-item/menu-item.component';

import './directory.style.scss'


class Directory extends React.Component {
    constructor() {
        super();


        this.state = {
            section: [
                {
                    title: 'hats',
                    imageurl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                },
                {
                    title: 'jacket',
                    imageurl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                },
                {
                    title: 'sneakers',
                    imageurl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                },
                {
                    title: 'womens',
                    imageurl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size:'large',
                    id: 4,
                },
                {
                    title: 'mens',
                    imageurl: 'https://i.ibb.co/R70vBrQ/mens.png',
                    size:'large',
                    id: 5,
                },
            ]
        }

    }
    render() {
        return (
            <div className="directory-menu">
                {this.state.section.map(({title,imageurl,id,size}) =>(
                    <MenuItem key={id} title={title} imageurl={imageurl} size={size}/>
                ))}
            </div>
        )
    }
}

export default Directory;