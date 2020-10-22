const express = require('express');
var path = require('path');
const router = express.Router();
var view = path.join(__dirname, '../public');

router.get('/', (req, res) => {
    
    console.log(__dirname);
    res.sendFile(view+'/index.html');
});

/*router.get('', (req, res) => {
    res.render('')
});*/

module.exports = router;