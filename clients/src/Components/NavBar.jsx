
import {AppBar,Toolbar, styled} from '@mui/material';

import { NavLink } from 'react-router-dom';
const Header = styled(AppBar)`
    background: #111111; 
    position: static;
`;
const Tabs = styled(NavLink)`
    padding-left: 10px;
    color: inherit;
`

const NavBar =() => {
    return(
        <Header >
            <Toolbar>
                <Tabs to='/'>Home</Tabs>
                <Tabs to='/add'>AddUser</Tabs>
                <Tabs to='/all'>AllUser</Tabs>
            </Toolbar>
        </Header>
    );
}

export default NavBar;