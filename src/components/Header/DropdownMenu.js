import React from 'react';
import {NavItem, NavLink} from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownItem from './DropdownItem';

const DropdownMenu = ({
    title, 
    dropDownItem1,
    dropDownItem2,
    dropDownItem3,
    dropDownItem4,
    dropDownItem5,
    dropDownItem6
}) => {
    return(
        <div>
        <Dropdown 
        as={NavItem} 
        variant="pills"
        >
            <Dropdown.Toggle as={NavLink}>{title}</Dropdown.Toggle>
            <Dropdown.Menu >
                <DropdownItem
                title={title} 
                dropDownItem={dropDownItem1} 
                alerted={dropDownItem1}
                // eventKey is passed to selectedKey; react-bootstrap feature
                />
                <DropdownItem
                title={title} 
                dropDownItem={dropDownItem2} 
                alerted={false}
                />
                <DropdownItem
                title={title} 
                dropDownItem={dropDownItem3} 
                alerted={false}
                />
                <DropdownItem
                title={title} 
                dropDownItem={dropDownItem4} 
                alerted={false}
                />
                <DropdownItem
                title={title} 
                dropDownItem={dropDownItem5} 
                alerted={false}
                />
                <DropdownItem
                title={title} 
                dropDownItem={dropDownItem6} 
                alerted={false}     
                />
            </Dropdown.Menu>
        </Dropdown>
        </div>
    );
};

export default DropdownMenu;