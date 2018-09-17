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
