import React from 'react'

import Router from '../routers'

class Main extends React.Component {
    render() {
        return (
            <Router {...this.props}/>
        )
    }
}

export default Main