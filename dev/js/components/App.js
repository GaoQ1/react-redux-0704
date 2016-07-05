import React from 'react';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';
import FetchButton from '../containers/fetch-button';
require('../../scss/style.scss');

const App = () => (
    <div>
        <h2>User List</h2>
        <UserList />
        <hr />
        <h2>User Details</h2>
        <UserDetails />
        <FetchButton />
    </div>
);

export default App;
