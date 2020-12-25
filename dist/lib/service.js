"use strict";Object.defineProperty(exports, "__esModule", {value: true});const axios = require('axios');

const endpoint = 'https://jsonplaceholder.typicode.com/';

async function getData(userId) {
    const { data: user } = await axios.get(`${endpoint}users/${userId}`)
    const { data: posts } = await axios.get(`${endpoint}posts?userId=${userId}`)

    const emp = { ...user, posts };
    console.log(emp);
}

exports. default = getData;