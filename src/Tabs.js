import React, { Component } from 'react';
import TabNav from './TabNav';
import './Tabs.css';
import TabContent from './TabContent';
class Tabs extends Component {
    constructor(props) {
        super(props);
        this.handleTabClick = this.handleTabClick.bind(this);  
        this.handleSelectClick = this.handleSelectClick.bind(this);
  
        this.state = {
            activeIndex:"0",
            selectValue:"0"
        };
    }

    handleTabClick(index) {
        //console.log(e.target);
        console.log(index);
        this.setState({
            activeIndex:index,
            selectValue:index
        });
    }    

    handleSelectClick(e) {
        this.setState({
            activeIndex:e.target.value,
            selectValue:e.target.value
        });
    }

    render() {
        return (
            <div>
                <select onChange={this.handleSelectClick} value={this.state.selectValue}>
                    <option value='0'>Tabs 1</option>
                    <option value='1'>Tabs 2</option>
                    <option value='2'>Tabs 3</option>
                </select>
                <div id="tab">
                    <TabNav tab="Tab 1" onNavClick={this.handleTabClick} index="0"></TabNav>
                    <TabNav tab="Tab 2" onNavClick={this.handleTabClick} index="1"></TabNav>
                    <TabNav tab="Tab 3" onNavClick={this.handleTabClick} index="2"></TabNav>
                </div>
                <div id="content">
                    <TabContent activeIndex={this.state.activeIndex}></TabContent>
                </div>
            </div>
        );
    }
}
export default Tabs;