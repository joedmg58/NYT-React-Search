import React from 'react';

class Navigation extends React.PureComponent{  //change later for PureComponent class ?
    
    render() {
        return(
            <ul className="pure-menu-list">
                <li className="pure-menu-list">
                    <a href="/" className="pure-menu-link">Saved Articles</a>
                </li>
            </ul>
        );
    }

}

export default Navigation;