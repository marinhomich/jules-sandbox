import test from 'node:test';
import assert from 'node:assert';
import { add, subtract, multiply, divide } from './calculator.js';

test('deve somar dois números corretamente', () => {
    assert.strictEqual(add(2, 3), 5);
});

test('deve subtrair dois números corretamente', () => {
    assert.strictEqual(subtract(5, 2), 3);
});

test('deve multiplicar dois números corretamente', () => {
    assert.strictEqual(multiply(4, 3), 12);
});

test('deve dividir dois números corretamente', () => {
    assert.strictEqual(divide(10, 2), 5);
});

test('deve lançar erro ao dividir por zero', () => {
    assert.throws(
        () => divide(10, 0),
        {
            name: 'Error',
            message: 'Divisão por zero não permitida'
        }
    );
});