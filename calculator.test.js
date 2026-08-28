import test from 'node:test';
import assert from 'node:assert';
import { add, subtract } from './calculator.js';

test('deve somar dois números corretamente', () => {
    assert.strictEqual(add(2, 3), 5);
});

test('deve subtrair dois números corretamente', () => {
    assert.strictEqual(subtract(5, 2), 3);
});