import { strings } from './strings.js';

// Validations
export const required = value => (value ? undefined : strings.requiredField);
export const passwordLength = value => (value && value.length < 8 ? strings.passLength : undefined);
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
export const email = value => (value && !emailRegex.test(value) ? strings.invalidEmail : undefined);
