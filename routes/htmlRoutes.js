const path = require('path');
const router = require('express').Router();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

module.exports = router