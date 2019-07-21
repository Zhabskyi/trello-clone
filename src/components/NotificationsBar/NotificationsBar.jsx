import * as React from 'react';

export const NotificationsBar = ({notifications}) => {
  //debugger;
  return notifications && Object.keys(notifications).length > 0
    ? 
		<div className='notification-bar'>
			<ul className='list-group'>
				{Object.keys(notifications).map((id) => {
					return <li key ={id} className='list-group-item list-group-item-danger' >
							{notifications[id].message}
					</li>
				})}
   	 </ul>
			<h4>Login again</h4>
		</div> : null;
};
