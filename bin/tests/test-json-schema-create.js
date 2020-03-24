const path = require('path')
const fsExtra = require('fs-extra')
const transformSchema = require('../../src/transformSchema')

const cachedData = fsExtra.readJsonSync(path.join('/Users/timothybooker/contentful-to-sanity', 'cache.json'));

console.log(cachedData.contentTypes[0].fields);
console.log(transformSchema(cachedData, { keepMarkdown: false}).schema.map(x => x.fields));