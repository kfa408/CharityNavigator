const request = require('request');
const endpoints = require('./lib/endpoints');
// const limits = require('limits.js')

module.exports = class {
    constructor (appid, appkey, baseUrl='https://api.data.charitynavigator.org/v2/'){
        if(!appid || !appkey){
            throw new Error('Require appid and appkey');
        }

        this.appid = appid;
        this.appkey = appkey;
        this.baseUrl = baseUrl;

        Object.keys(endpoints.methods).forEach(method => {
            const met = endpoints.methods[method];

            Object.keys(met).forEach(m => {
                this[method + m] = async (params = {}) => {
                    // if (!this.token || Date.now() > +new Date(this.token.expires_at)) {
                    //     await this.requestToken();
                    // }

                    return this.makeRequest(met[m].method, params, met[m].resource);
                }
            })
        })

    }

    makeRequest (type, params, endpoint) {
        if (typeof params !== 'object' && endpoint.split(':').length === 2) {
            const parts = endpoint.split(':')
            // console.log(parts);
            const index = parts[1].indexOf('/')
            endpoint = parts[0] + params + (index === -1 ? '' : parts[1].substr(index))
        }
        endpoint = endpoint + '?app_id='+this.appid;
        endpoint = endpoint + '&app_key='+this.appkey;
        if (typeof params == 'object'){
            Object.keys(params).forEach(pkey =>{
                endpoint = endpoint + '&' + pkey + '=' + params[pkey];
            });
        }
        var url = this.baseUrl + endpoint;
        return new Promise((resolve, reject) => {
            request({url: url, json: true}, (error, response, body) => {
                if (!error && response.statusCode === 200) {
                    resolve(body);
                }
                else{
                    reject(response.statusCode + response.statusMessage);
                }
            })
        })
    }
}
