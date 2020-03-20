import React, { Component } from 'react'
import AppHeader from './AppHeader'
import AppFooter from './AppFooter'
import Home from './Home'

class App extends Component {
    render() {
        return <>
            <AppHeader />
            <Home />
            <AppFooter />

            </>
    }
}

export default App