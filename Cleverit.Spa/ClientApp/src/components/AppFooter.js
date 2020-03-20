import React, { Component } from 'react'

class AppFooter extends Component {
    render() {
        return <>
            <hr />
            <footer style={{ padding: '3px 15px' }}
                className='navbar fixed-bottom bg-dark text-light'>
                <p>(C) 2020 Cleverit></p>
            </footer>
            </>
    }
}

export default AppFooter