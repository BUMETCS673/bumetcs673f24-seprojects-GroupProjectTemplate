export function validateGoalForm(formData) {
    const { type, targetValue } = formData;

    // Convert targetValue to a number
    const numericValue = Number(targetValue);

    if (typeof numericValue !== 'number' || isNaN(numericValue) || numericValue < 0) {
        console.log('Target value must be a valid number greater than or equal to zero');
        return { isValid: false, message: 'Target value must be a valid number greater than or equal to zero' };
    }

    // If all validations pass
    return { isValid: true, message: 'Form is valid' };
}