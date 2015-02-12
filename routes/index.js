var express = require('express');
var router = express.Router();
var five = require("johnny-five");
var board = new five.Board();
var number = 9, led;
board.on("ready", function () {
    led = new five.Led(number);


});


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});


router.post('/ArduinoBlink', function (req, res)
    {
        led.blink(req.body.data);
        res.redirect('/');

    }
);


router.post('/ArduinoOnOff', function (req, res)
    {
        if(req.body.On=='Aç')
        {
            led.on();
            res.redirect('/');
        }
        if(req.body.Off=='Kapa')
        {
            led.off();
            res.redirect('/');

        }
        if(req.body.Stop=='Dur')
        {
            led.stop();
            res.redirect('/');

        }

    }
);




module.exports = router;
