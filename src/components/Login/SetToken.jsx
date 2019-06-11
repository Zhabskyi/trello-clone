import React from 'react';
import {Redirect} from 'react-router';

export const SetToken = ({location, onSetToken, onLogin}) => {
  const hash = location.hash;
  const token = hash.slice(hash.indexOf('=') + 1);
  console.log(token);
	onSetToken(token);
	onLogin();
  return <Redirect to={'/boards'}/>;
};
