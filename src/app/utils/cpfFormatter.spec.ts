import { MOCK_USERS } from '../shared/mock/users.mock';
import { cpfFormatter } from './cpfFormatter';

MOCK_USERS

describe('cpfFormatter', () => {
    it('deve retornar undefined se o valor for inválido', () => {
        const input = 'kauelivio'; // ou qualquer valor inválido
        expect(cpfFormatter(input)).toBeUndefined();
    });

    it('deve formatar corretamente um CPF válido', () => {
        const cpfValido = '12345678900';
        const expected = '123.456.789-00';
        expect(cpfFormatter(cpfValido)).toBe(expected)
    });

    it('deve retornar undefined se o valor for null ou undefined', () => {
        expect(cpfFormatter(null)).toBeUndefined();
        expect(cpfFormatter(undefined)).toBeUndefined();
    });
})