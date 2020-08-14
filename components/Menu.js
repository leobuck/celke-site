import React, { useState } from 'react';

import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, Container } from 'reactstrap';

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    
    return (
        <Navbar color="dark" dark expand="md" className="fixed-top">
            <Container>
                <NavbarBrand href="/">Site</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/#inicio">Início</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/#servicos">Serviços</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/#portifolio">Portifólio</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    )
}

export default Menu;