export function isCpf(value: any): boolean {
    const cpfRegex = /^(?:\d{3}\.\d{3}\.\d{3}-\d{2}|\d{11})$/;
    return cpfRegex.test(value?.replace(/\D/g, ''));
}