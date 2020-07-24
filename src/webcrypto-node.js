'use strict'
const { Crypto } = require('node-webcrypto-ossl')
const webcrypto = new Crypto()
exports.get = () => webcrypto
