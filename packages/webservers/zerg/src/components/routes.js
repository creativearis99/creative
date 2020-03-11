import loadable from '@loadable/component';
// import React from 'react';
// import Header from './Header';
// import Root from './Root';
// import Dashboard from './Dashboard';
// import Header from './Header/DefaultHeader';
const Topics = loadable(() => import(/* webpackChunkName: "topics" */ './Topics'));
const About = loadable(() => import(/* webpackChunkName: "About" */ './About'));
const Dashboard = loadable(() => import(/* webpackChunkName: "Dashboard" */ './Dashboard'));
const Projects = loadable(() => import(/* webpackChunkName: "Projects" */ './Projects'));
const Users = loadable(() => import(/* webpackChunkName: "Users" */ './Users'));
const Register = loadable(() => import(/* webpackChunkName: "Register" */ './Register'));
const ChatRoom = loadable(() => import(/* webpackChunkName: "ChatRoom" */ './ChatRoom'));
const Login = loadable(() => import(/* webpackChunkName: "login" */ '../api/auth/container'));

const routes = [
    {
        path: '/',
        component: Dashboard,
        exact: true,
        key: 'dashboard'
    },
    {
        path: '/topics',
        component: Topics,
        key: 'topics'
    },
    {
        path: '/about',
        component: About,
        key: 'about'
    },
    {
        path: '/register',
        component: Register,
        key: 'register'
    },
    {
        path: '/chat',
        component: ChatRoom,
        key: 'chat'
    },
    {
        path: '/login',
        component: Login,
        key: 'login'
    },
    {
        path: '/projects',
        component: Projects,
        key: 'projects'
    },
    {
        path: '/users',
        component: Users,
        key: 'users'
    }
];

export default routes;
