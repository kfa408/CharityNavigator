# Wrapper for Charity Navigator for Node.js

Dependancies: npm request package.

Simply do:

```javascript
const CharityNavigator = require('(your path)/CharityNavigator/index.js');
const appid = (your app id);
const appkey = (your app key);
const charitynavigator = new CharityNavigator(appid, appkey);
```

Currently supported method:
```javascript
charitynavigator.orgs()
charitynavigator.orgsEin()
```

### orgsEin() method:

Parameters takes in a single string of numbers (indicating the ein of the charity).

Returns a promise which, when resolved, gives a json with the information about the charity with the specified ein.

For example:
```javascript
charitynavigator.orgsEin('010202467').then((body) =>{
    console.log(body);
}).catch((error)=>{
    console.log(error);
})
```
This logs the information about the charity with ein 010202467.

The ein is the only parameter for this method.


### orgs() method:

Parameters takes in a js object.

Returns a promise which, when resolved, gives a list of charities from charity navigator satisfying query parameters.

For example:
```javascript
charitynavigator.orgs({ minRating: 4, rated: true, pageSize: 20}).then((body)=>{
    console.log(body);
}).catch((error) => {
    console.log(error);
})
```

This logs 20 charities that is rated, with minimum rating 4.

Parameters list:
- pageSize: int from 1 to 1000. Default 100
- rated: 'TRUE','FALSE',0, or 1
- categoryID
- causeID
- fundraisingOrgs: 'TRUE','FALSE',0, or 1. Shows whether they are fundraising org or not.
- state: 2 letter state code, not case sensitive
- city:
- zip: zip code
- minRating: int from 0 to 4
- maxRating: int from 0 to 4
- donorPrivacy: 'TRUE','FALSE',0, or 1
- scopeOfWork:  "ALL" (the default), "REGIONAL", "NATIONAL", or "INTERNATIONAL"
- noGovSupport: 'TRUE','FALSE',0, or 1
