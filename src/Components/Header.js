import React, { Component } from 'react';
import './Header.css'


export class Header extends Component {
    render() {

        renderItems = (items) => items.map(item => {
            return (
                <button
                    className="header-item"
                    onClick='/+{item}'>{item}</button>
            )
        })

        return (
            <div className="header-wrapper">
                {this.renderItems()}
            </div>
        )
    }
}
