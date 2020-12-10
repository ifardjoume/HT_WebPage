import React from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtnLink} from './navBarElements';
import { TranslateBtn } from './translateBtn'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1>H-trace</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/product" activeStyle>
                        Product
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                        About Us
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                        Contact
                    </NavLink>
                    <TranslateBtn />
                    <NavBtnLink to='/sign-in'>User Area</NavBtnLink>
                </NavMenu>
            </Nav>
        </>
    )
}

export default Navbar
