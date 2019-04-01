import React, { Component } from 'react'; //  PropTypes,

export default  class Page extends Component {
    render() {
        const { year, photos } = this.props
        return <div>
            <p>У тебя { photos.length } фото за { year } год</p>
        </div>
    }
}