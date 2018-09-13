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
                console.log(m);
                this[method + m] = async (params = {}) => {
                    // if (!this.token || Date.now() > +new Date(this.token.expires_at)) {
                    //     await this.requestToken();
                    // }

                    return this.makeRequest(met[m].method, params, met[m].resource);
                }
            })
        })

        console.log(this);
    }

    makeRequest (type, params, endpoint) {
        // if (typeof params !== 'object' && endpoint.split(':').length === 2) {
        //     const parts = endpoint.split(':')
        //     const index = parts[1].indexOf('/')
        //
        //     endpoint = parts[0] + params + (index === -1 ? '' : parts[1].substr(index))
        // }
        endpoint = endpoint + '?app_id='+this.appid;
        endpoint = endpoint + '&app_key='+this.appkey;
        Object.keys(params).forEach(pkey =>{
            endpoint = endpoint + '&' + pkey + '=' + params[pkey];
        });
        // console.log(type, params, endpoint);
        var url = this.baseUrl + endpoint;
        // console.log(url);
        return new Promise((resolve, reject) => {
            request({url: url, json: true}, (error, response, body) => {
                if (!error && response.statusCode === 200) {
                    // console.log(body);
                    resolve(body);
                }
                else{
                    reject(error);
                }
            })
        })
        // let req = request(this.baseUrl + endpoint);
    }
}
