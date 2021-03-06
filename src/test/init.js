'use strict';

import chai from 'chai';
global.expect = chai.expect;

import chaiAsPromised from 'chai-as-promised';
chai.use(chaiAsPromised);

import { Promise } from 'es6-promise';
if (!global.Promise) global.Promise = Promise;

import { jsdom as _jsdom } from 'jsdom';

global.jsdom = () => {
  global.document = _jsdom('<!doctype html><html><body></body></html>');
  global.window = document.parentWindow;
};
