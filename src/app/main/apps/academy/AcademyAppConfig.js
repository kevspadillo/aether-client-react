import React from 'react';
import { authRoles } from 'app/auth';
import { Redirect } from 'react-router-dom';

const AcademyAppConfig = {
	settings: {
		layout: {}
	},
	auth: authRoles.admin, // ['admin']
	routes: [
		{
			path: '/apps/academy/courses/:courseId/:courseHandle?',
			component: React.lazy(() => import('./course/Course'))
		},
		{
			path: '/apps/academy/courses',
			component: React.lazy(() => import('./courses/Courses'))
		},
		{
			path: '/apps/academy',
			component: () => <Redirect to="/apps/academy/courses" />
		}
	]
};

export default AcademyAppConfig;
