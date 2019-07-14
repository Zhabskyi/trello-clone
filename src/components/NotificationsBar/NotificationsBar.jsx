import * as React from 'react';

export const NotificationsBar = ({notifications}) => {
  debugger;
  return notifications && Object.keys(notifications).length > 0
    ? <ul>
      {Object.keys(notifications).map((id) => {
        return <li>{id} {notifications[id].message}</li>
      })}
    </ul> : null;
};
