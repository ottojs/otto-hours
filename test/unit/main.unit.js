
'use strict';

// Modules
require('should');

// Subject
var subject = require('../../lib/index.js');

describe('Util.hours()', function () {

  it('should return false when input is not an object', function () {
    subject('string').should.equal(false);
  });

  it('should return false when p.open is missing', function () {
    subject({}).should.equal(false);
  });

  it('should return false when p.open is null', function () {
    subject({ open : null }).should.equal(false);
  });

  it('should return false when p.close is missing', function () {
    subject({ open : 0 }).should.equal(false);
  });

  it('should return false when p.close is null', function () {
    subject({ open : 0, close : null }).should.equal(false);
  });

  it('should return false when p.open is greater than the minimum hour (0)', function () {
    subject({ open : -1, close : 1000 }).should.equal(false);
  });

  it('should return false when p.close is greater than the maximum hour (2359)', function () {
    subject({ open : 0, close : 2500 }).should.equal(false);
  });

  it('should return false when p.open is greater than p.close', function () {
    subject({ open : 1200, close : 1000 }).should.equal(false);
  });

  it('should return true when p.open is 0 and p.close is 2359', function () {
    subject({ open : 0, close : 2359 }).should.equal(true);
  });

});
