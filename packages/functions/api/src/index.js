// exports.function = (req, res) => {
//     res.status(200).json({
//         message: 'ok'
//     });
// };

// import button from '@krupnik/button';
// import render from '@krupnik/render/dist/cjs/index';
// const port = process.env.npm_package_config_myPort || 8080;
// import morgan from 'morgan/index';
// console.log('port', port);
// console.log('process.env', process.env);
// const morgan = require('morgan');
// const { Translate } = require('@google-cloud/translate').v2;

// import axios from 'axios';
// import { MongoClient } from 'mongodb';
// import mongoose from 'mongoose';
import express from 'express';

import users from './users';
import projects from './projects';

// projects.get('/projects/schema', schema(Projects));
// // projects.get('/projects', list(M.models.Projects));
// // projects.get('/projects', list(Projects));
// projects.get('/projects', (req, res) => {
//     Projects.find({})
//         .populate('user')
//         .then((re) => {
//             res.status(200).json(re);
//         });
// });
// projects.get('/projects/:id', find(Projects));
// projects.delete('/projects/:id', removeOne(Projects));
// projects.post('/projects', create(Projects));
// projects.put('/projects', update(Projects));
//
// users.get('/users/schema', schema(Users));
// users.get('/users', list(Users));
// users.get('/users/:id', find(Users));
// users.delete('/users/:id', removeOne(Users));
// users.post('/users', create(Users));
// users.put('/users', update(Users));

// projects.use(disconnect);
// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://<username>:<password>@<your-cluster-url>/test?retryWrites=true&w=majority";
// const client = new MongoClient(dbURL, { useNewUrlParser: true });
// client.connect((err) => {
//     const collection = client.db;
//     console.log('collection', collection);
//     // .db('test')
//     // .collection('projects')
//     // .then((res) => {
//     //     console.log(res);
//     // })
//     // .catch((error) => {
//     //     console.log(error);
//     // });
//     // perform actions on the collection object
//     client.close();
// });
// let cachedDb = null;
// const app = express();
const api = express();
const app = express();

api.use(users);
api.use(projects);

export { api, app };
