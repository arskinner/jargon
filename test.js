'use strict'

var test = require('tape')
var jargon = require('.')

test('jargon', function(t) {
  t.equal(typeof jargon, 'object', 'should be an array #1')
  t.equal(Array.isArray(jargon), true, 'should be an array #2')
  t.notEqual(fillers.indexOf('bestow'), -1, 'should contain words')

  t.end()
})
