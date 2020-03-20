import React, { Component } from 'react'
import { Navbar, NavbarBrand, Nav, NavLink } from 'reactstrap'

class AppHeader extends Component {
    render() {
        return <Navbar color='dark' dark expand='md'>
            <NavbarBrand href='https://www.linkedin.com/in/clobos90/' target='_blank'>
                <img src='https://ticapacitacion.com/resources/labs/react/northwind.png'
                alt='Northwind demo' with='80px'/>
            </NavbarBrand>
            <Nav className='ml-auto' navbar>
                <NavLink href='https://reactjs.org' target='_blank'>
                    React Site
                </NavLink>
            </Nav>
        </Navbar>
    }
}

export default AppHeader