import express from 'express';
import mongoose from 'mongoose';
import { list } from '../express-responses';

const router = express.Router();

const UsersSchema = new mongoose.Schema({
    name: {
        type: String,
        index: true,
        required: true
    }
});
const Users = mongoose.model('Users', UsersSchema);
// const ProjectSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         index: true,
//         required: true
//     },
//     description: { type: String },
//     user: { type: String, ref: Users, required: true }
// });
// const Projects = mongoose.model('Projects', ProjectSchema);
//
function connect(mo, url) {
    // const c =  M.connect(dbURL, { useNewUrlParser: true }).then((res) => {
    //     console.log('res', res);
    //     return next();
    // });

    mongoose.connect(url, {
        useNewUrlParser: true
    });
    const db = mongoose.connection;
    mongoose.Promise = global.Promise;
    // const opts = { url };
    // const MongoStore = connect(session);
    db.on('error', console.error.bind(console, 'connection error:')); // eslint-disable-line no-console
    db.on('connected', console.log.bind(console, 'connected:'));
    db.on('open', console.log.bind(console, 'open:', url));
    db.once('disconnected', console.log.bind(console, 'disconnected:'));
    return (req, res, next) => next();
}

function handleDatabaseUrl() {
    const url = process.env.DATABASE_URL;
    if (!url) {
        return 'mongodb://localhost/client-apps';
    }
    return url.includes('mlab.com')
        ? `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${url}`
        : url;
}

router.use(connect(null, handleDatabaseUrl()));
// projects.use(connect(null, dbURL));
// users.use(connect(null, dbURL1));

// projects.get('/', render(null, []));
// router.get('/', (req, res) => {
//     res.status(200).json({ status: 'ok router base' });
// });
router.get('/users', list(Users));
router.get('/users', (req, res) => {
    res.status(200).json({ status: 'ok router users data' });
});
// router.get('/u', (req, res) => {
//     res.status(200).json({ status: 'ok router u' });
// });
// router.post('/u', (req, res) => {
//     res.status(200).json({ status: 'ok router post u' });
// });
//
// router.get('/users', (req, res) => {
//     res.status(200).json({ status: 'ok router users' });
// });

export default router;
