import React, {Component} from 'react';
import './TabNav.css';

class TabNav extends Component {
    constructor(props) {
        super(props);
        this.handleLiClick = this.handleLiClick.bind(this);
        let tab = this.props.tab;

        
    }

    handleLiClick(e) {
        console.log(e.target);
    };

    render() {
        return (
            <li onClick={this.props.onNavClick.bind(this,this.props.index)} value={this.props.tab}>{this.props.tab}</li>
        );
    }
}

export default TabNav;