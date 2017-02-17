import React from 'react';
import {Tabs, Tab} from 'material-ui';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Popover from 'material-ui/Popover';

const TabMenu = ({menuItems}) => (
        <Tabs style={{
            paddingRight: '60px'
        }}>
            {menuItems.map(function (item, i) {
                    return (<Tab
                        value={i}
                        key={i}
                        label={item.label} />)
                })}
        </Tabs>
);

export default TabMenu;