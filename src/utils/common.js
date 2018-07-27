export function priceFormat(price) {
    return Math.round(price).toLocaleString('ru-RU');
}

export function dateFormat(date) {
    return date.toLocaleDateString('ru-RU');
}

export function calcPercent(sum, percent, date) {
    // пока это не точный рассчет процентов. Надо делить на 365 и умножать на количество дней в месяце
    return sum * (percent / 100) / 12;
}

export function numConversion(number, words) {
    const textCases = [2, 0, 1, 1, 1, 2];
    const textInt = number % 100 > 4 && number % 100 < 20 ? 2 : textCases[Math.min(number % 10, 5)];
    return words[textInt];
}
