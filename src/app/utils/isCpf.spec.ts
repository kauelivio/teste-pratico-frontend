import { isCpf } from './isCpf';

describe('isCpf', () => {
    it('deve retornar true para um CPF válido sem pontuações', () => {
        expect(isCpf('88872427045')).toBeTrue();
        expect(isCpf('47715952087')).toBeTrue();
    });

    it('deve retornar true para um CPF válido com pontuações', () => {
        expect(isCpf('888.724.270-45')).toBeTrue();
        expect(isCpf('477.159.520-87')).toBeTrue();
    });

    it('deve retornar false para valores diferentes de 11 dígitos', () => {
        expect(isCpf('1234')).toBeFalse();
        expect(isCpf('12345678900001')).toBeFalse();
    });

    it('deve retornar false para strings com letras ou símbolos', () => {
        expect(isCpf('teste@123.com')).toBeFalse();
        expect(isCpf('1%$&0tes0')).toBeFalse();
    });

    it('deve retornar false para null ou undefined', () => {
        expect(isCpf(null)).toBeFalse();
        expect(isCpf(undefined)).toBeFalse();
    });
});