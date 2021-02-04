import React from 'react'
import '../stylesheets/TopNav.css';
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from './DataLayer';

function TopNav({ spotify }) {

    // Get User Info from DataLayer
    const [{ user }] = useDataLayerValue();

    return (
        <div className="topNav">
            <div className="topNav__right">
                <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default TopNav
