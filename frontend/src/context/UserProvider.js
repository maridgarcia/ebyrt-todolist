/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import UserContext from './UserContext';

function UserProvider({ children }) {
  const [username, setUsername] = useState('');

  const contextValue = useMemo(
    () => ({
      username, setUsername,
    }),
    [
      username, setUsername,
    ],
  );

  return (
    <UserContext.UserProvider value={contextValue}>
      { children }
    </UserContext.UserProvider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProvider;
