require('nodeunit');
const addressEncoder = require('../index'),
    events = require('events');

module.exports = {
    'test DigiByte D address': function(test) {
        test.equal(addressEncoder('fcc8a08f61f3249e7a97582c2c140d4aa96f0207','D'),'DUBhARNpy4WYCEWoFQsgeFeYZxQjzQadpv');
        test.done();
    },
    'test DigiByte S address': function(test) {
        test.equal(addressEncoder('e3799709d84728cb195a4e2c4bf8f16cbff92c90','S'),'Si2n5cEJKAmYxEcJ1Zm9gwufJhco79saMz');
        test.done();
    },
    'test DigiByte dgb1 address': function(test) {
        test.equal(addressEncoder('c72af8c8fbf59b01ffd5578a0bfc888ebadb21cd','dgb'),'dgb1qcu403j8m7kdsrl74279qhlyg36adkgwdxpf0jl');
        test.done();
    }

};

