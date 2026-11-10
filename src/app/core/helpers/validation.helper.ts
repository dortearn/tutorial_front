export function validateFields(fields: Record<string, any>, requiredFields?: readonly string[]): boolean {
    return Object.values(fields).every(
        (value) => value !== null && value !== undefined && String(value).trim() !== ''
);
}