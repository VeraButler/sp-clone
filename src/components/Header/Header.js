import React from 'react';
import { Link } from 'react-router-dom';
import DropdownMenu from './DropdownMenu';
import DropdownItem from './DropdownItem';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';



const Header = () => {
    return(
        <div>
            <Nav justify variant="pills">
            <Link to="/">Dashboard</Link>
            <DropdownMenu 
            title={'Studio'} 
            dropDownItem1={'Contacts'}
            dropDownItem2={'Contracts'}
            dropDownItem3={'Colors & Logos'}
            dropDownItem4={'ShootProof Homepage'} 
            />
            <DropdownMenu 
            title={'Photos'} 
            dropDownItem1={'Galleries'}
            dropDownItem2={'Mobile Apps'}
            dropDownItem3={'Music'}
            dropDownItem4={'Watermarks'}
            dropDownItem5={'Tools'} 
            />
            <DropdownMenu 
            title={'Commerce'} 
            dropDownItem1={'Orders'}
            dropDownItem2={'Payments'}
            dropDownItem3={'Pricing'}
            dropDownItem4={'Invoices'} 
            />
            <DropdownMenu 
            title={'Reports'} 
            dropDownItem1={'Gallery Visitors'}
            dropDownItem2={'Sales'}
            dropDownItem3={'Orders'}
            dropDownItem4={'Order Files'} 
            dropDownItem5={'Items'} 
            dropDownItem6={'Invoice Payments'} 
            />
            <DropdownMenu 
            title={'User'} 
            dropDownItem1={'Contact Info'}
            dropDownItem2={'Users & Permissions'}
            dropDownItem3={'Plan & Billing'}
            dropDownItem4={'Accept Credit Cards'} 
            dropDownItem5={'Integrations'} 
            dropDownItem6={'Refer A Friend'} 
            >
            <NavDropdown.Divider/>
            <DropdownItem dropDownItem={'Log Out'} />
            </DropdownMenu>
            </Nav>
        </div>
    )
}

export default Header;