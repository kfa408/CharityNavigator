# Wrapper for Charity Navigator for Node.js

Simply do:

```javascript
const CharityNavigator = require('(your path)/CharityNavigator/index.js');
appid = (your app id);
appkey = (your app key);
const charitynavigator = new CharityNavigator(appid, appkey);
```

Currently supported method:
```javascript
charitynavigator.Organizations()
```
Parameters takes in a js object.
Returns a list of charities from charity navigator satisfying query parameters.

For example:
```javascript
charitynavigator.Organizations({pageSize: 20,rated:true, minRating: 4});
```
This returns 20 charities that is rated, with minimum rating 4/5.

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
