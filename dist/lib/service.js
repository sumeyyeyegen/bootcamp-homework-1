"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _axios = require('axios'); var _axios2 = _interopRequireDefault(_axios);

const endpoint = 'https://jsonplaceholder.typicode.com/';

async function getData(userId) {
    const { data: user } = await _axios2.default.get(`${endpoint}users/${userId}`)
    const { data: posts } = await _axios2.default.get(`${endpoint}posts?userId=${userId}`)

    const emp = { ...user, posts };
    console.log(emp);
}

exports. default = getData;