import React,{Component} from 'react';
import './TabContent.css';

class TabContent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className={this.props.activeIndex === "0" ?'yes':'no'}>This is tab 1</div>
                <div className={this.props.activeIndex === "1" ?'yes':'no'}>This is tab 2</div>
                <div className={this.props.activeIndex === "2" ?'yes':'no'}>This is tab 3</div>
            </div>
        );
    }
}

export default TabContent;