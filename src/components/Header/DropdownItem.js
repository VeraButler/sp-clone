import React from 'react';
import {Link} from 'react-router-dom';


const DropdownItem = ({title, dropDownItem}) => {
    const linkDropdownItem = () => dropDownItem.replace(/\s+/g, '-').toLowerCase();
    const linkDropdownTitle = () => title.replace(/\s+/g, '-').toLowerCase();
    if(dropDownItem) {
        return(
            <div>
                <Link key={linkDropdownItem()} to={`/${linkDropdownTitle()}/${linkDropdownItem()}`}>
                    {dropDownItem}
                </Link>
            </div>
    
        ) 
    } else {
        return(
            <div>
                <Link key={dropDownItem} to={`/${title}/${dropDownItem}`}>
                    {dropDownItem}
                </Link>
            </div>
        )};
   
    
}

export default DropdownItem;
