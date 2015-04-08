#!/usr/local/bin/node

'use strict';

var lame = require('lame');
var icecast = require('icecast');
var Speaker = require('speaker');

var url = 'http://radiohamburg.hoerradar.de/radiohamburg-live-mp3-192';

icecast.get(url, function (response) {
    console.log('Playing Radio Hamburg...');

    response.pipe(new lame.Decoder())
        .pipe(new Speaker());
});