const isDigit = value => {
    return (
        (value || value === 0) &&
        !isNaN(value)
    );
}

const formatNumber = (number) => {
    if (!number || !isDigit(number)) number = 0;
    else if (typeof number === 'string') number = Number(number);
    return number.toLocaleString();
}

const parseNumber = value => {
    if (!value) return 0;
    const numberStr = value.replace(/,/g, '');
    if (!isDigit(numberStr)) return 0;
    return Number(numberStr);
}

const showNumber = (number, zeroTransform = '0', nullTransform = '') => {
    if (number === 0) return zeroTransform; 
    else if (!number) return nullTransform;
    else return formatNumber(number);
}

export {
    formatNumber,
    parseNumber,
    showNumber,
    isDigit,
};