const arredondar = require("../src/arredondar.js");

QUnit.module("arredondar");

QUnit.test("arredondar valores", assert => {
    assert.equal(arredondar(1000), '1k');
    assert.equal(arredondar(100), '0.1k');
    assert.equal(arredondar(200), '0.2k');
    assert.equal(arredondar(200.3), '0.2k');
    assert.equal(arredondar(200.92356611), '0.2k');
    assert.equal(arredondar(1000000), '1kk');
    assert.equal(arredondar(200000.34646481892), '200.3k');
    assert.equal(arredondar(50000.94646481892), '50.9k');
    assert.equal(arredondar(1000.95126481892), '1.9k');
    assert.equal(arredondar(1000.79126481892), '1.7k');
    assert.equal(arredondar(1000.11126481892), '1.1k');
});