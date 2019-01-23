import React from 'react';
class Scroll extends React.Component {
    constructor(props) {
        super(props);
        this.getScroll = this.getScroll.bind(this);
     }
     componentDidMount() {
        this.props.setClick(this.getScroll);
     }
     getScroll = () => {
        var pathArray = window.location.hash.split('/');
        var secondLevel = pathArray[1];
        var hasHash = secondLevel.split('#');
        var secondHash = hasHash[1];
        var id = !secondHash ? document.querySelector('#root') : document.querySelector('#'+secondHash)
        var pos = id.offsetTop
    
        var ok = !secondHash ? '' : window.location.hash = '';
        window.scrollTo(0,pos)
     }
    render() {
        return null
    }
}
export default Scroll