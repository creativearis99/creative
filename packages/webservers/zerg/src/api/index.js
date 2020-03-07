import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import proxy from 'express-http-proxy';
// import stam from './stam';
// import users from './users';
// import projects from './projects';
// import auth from './auth';

const route = express.Router();
if (process.env.NODE_ENV === 'production') {
    route.use(createProxyMiddleware(['/api', '/git'], {
        target: 'https://europe-west1-creativearis.cloudfunctions.net',
        changeOrigin: true,
        // router: {
        //     'localhost:5000/api': 'http://localhost:3334'
        // }
        // router: function(req) {
        //     return 'http://localhost:8004';
        // }
    }));
} else {
    route.use('/api', proxy('http://localhost:3334'));
    route.use('/git', proxy('http://localhost:3333'));
}

// route.use('/api', createProxyMiddleware('http://localhost:3334'));
// route.use('auth', auth);
// route.use('/api', [
//     stam,
//     // users,
//     projects,
//     auth
// ]);

export default route;
