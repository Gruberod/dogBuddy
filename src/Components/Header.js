import React, { Component } from 'react';
import './Header.css'

export class Header extends Component {
    // Navigation header common for all screens
    renderItems = (items) => items.map(item => {
        const navigationClick = (path) => {
            if (path === "/") {
                localStorage.clear()
                this.props.history.push(path)
            } else {
                this.props.history.push(path)
            }
        }

        // Highlight for current page navigation
        const headerItemStyle = document.location.pathname === item.path ? "header-item-active" : "header-item-inactive"

        return (
            <button
                key={item.path}
                className={headerItemStyle}
                onClick={() => navigationClick(item.path)}
            >{item.title}</button>
        )
    })

    render() {
        const items = this.props.items
        return (
            <div className="header-wrapper">
                {this.renderItems(items)}
            </div>
        )
    }
}
