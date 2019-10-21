import {strict as assert } from 'assert';
import {text} from '../PizzaTimer.js';

describe('Basic Timer tests',function() {
    describe('Timer result',function() {
        it("Should have text",function() {
            assert(text());     
        })
    })
})