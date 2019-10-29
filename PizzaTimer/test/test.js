import {strict as assert } from 'assert';
import sut from '../PizzaTimer.js';

describe('Basic Timer tests',function() {
    describe('Timer result',function() {
        it("Should have text",function() {
            assert(sut.text());     
        })
    })
})