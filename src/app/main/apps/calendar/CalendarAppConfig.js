import React from 'react';
import { authRoles } from 'app/auth';

const CalendarAppConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	auth: authRoles.admin, // ['admin']
	routes: [
		{
			path: '/apps/calendar',
			component: React.lazy(() => import('./CalendarApp'))
		}
	]
};

export default CalendarAppConfig;
