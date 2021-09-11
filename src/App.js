import React, { Component } from 'react';
import DropdownMenu from './containers/navbar/DropdownMenu';
import NavBar from './containers/navbar/NavBar';
import NavItem from './containers/navbar/NavItem';
import { ReactComponent as BellIcon } from './assets/icons/bell.svg';
import { ReactComponent as MessengerIcon } from './assets/icons/messenger.svg';
import { ReactComponent as CaretIcon } from './assets/icons/caret.svg';
import { ReactComponent as PlusIcon } from './assets/icons/plus.svg';
import { Route, Switch } from 'react-router-dom';
import Login from './containers/Login/Login';

class App extends Component {

  render() {
    return (
      <div>
        <NavBar>
          <NavItem icon={<PlusIcon />} />
          <NavItem icon={<BellIcon />} />
          <NavItem icon={<MessengerIcon />} />

          <NavItem icon={<CaretIcon />}>
            <DropdownMenu></DropdownMenu>
          </NavItem>
        </NavBar>

        <Switch>
          <Route
            exact
            path="/login"
            render={() => {
              return <Login />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;