import { isCpf } from './isCpf'

export function cpfFormatter(value: any) {
    if (!isCpf(value)) return;
    return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
}