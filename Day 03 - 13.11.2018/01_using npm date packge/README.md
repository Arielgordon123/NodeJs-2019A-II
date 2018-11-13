* Init the local project with a npm:
```
npm init
```
* installation Via npm:
```
npm install hebrew-date
```
If the command run successfully, you should notice a new folder `node_modules/hebrew-date` in your project.

* Create a new file named `app.js` and insert into it this content:

```javascript
var hebrewDate = require("hebrew-date");
 
console.log(hebrewDate(2016, 8, 11));

 
```

* Run the project with this command;
```
node app.js
```
Console output:
```
{ year: 5776, month: 12, date: 7, month_name: 'Av' }
```