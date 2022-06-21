const axios = require('axios');
const core = require('@actions/core');

const url = core.getInput('url', { required: true });
axios.get(url)
.then(res => {
    console.log(res)
})
.catch(err => {
    console.error(err); 
})