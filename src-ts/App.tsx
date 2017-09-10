import * as React from 'react';
import { Item } from './components/Item';
import { Dropdown } from './components/Dropdown';

export class App extends React.Component {

    render() {
        return (
            <div>asd
                <Item />
                <Dropdown />
            </div>
        )
    }
}