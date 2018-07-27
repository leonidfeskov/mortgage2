import { dateFormat, calcPercent } from './common';


const MAX_MONTHS_COUNT = 360;

export default function calculatePayments({ sumPerMonth, creditPercent, creditSum }) {
    // заполняем начальные значения
    const data = [];
    const nowDate = new Date();

    const initialRow = {
        number: 1,
        date: dateFormat(nowDate),
        payment: creditSum > sumPerMonth ? sumPerMonth : creditSum,
        credit: creditSum,
        creditRepayment: 0,
    };

    initialRow.creditDebt = calcPercent(initialRow.credit, creditPercent, nowDate);
    initialRow.overpayment = initialRow.creditDebt
    initialRow.creditRepayment = initialRow.payment - initialRow.creditDebt;

    data.push(initialRow);

    // заполняем остальные значения на основе начальных и данных от пользователя
    let rowIndex = 1;
    let prevRow = data[rowIndex - 1];
    while ((prevRow.credit + prevRow.creditDebt) > sumPerMonth) {
        const nextMonthDate = new Date(nowDate.getFullYear(), nowDate.getMonth() + rowIndex, nowDate.getDate());

        const row = {
            number: rowIndex + 1,
            date: dateFormat(nextMonthDate),
            credit: prevRow.credit - prevRow.creditRepayment,
        };

        row.creditDebt = calcPercent(row.credit, creditPercent, nextMonthDate);
        row.overpayment = prevRow.overpayment + row.creditDebt;

        const creditWithPercents = row.credit + row.creditDebt;

        row.payment = creditWithPercents > sumPerMonth ? sumPerMonth : creditWithPercents;

        row.creditRepayment = row.payment - row.creditDebt;

        data.push(row);
        prevRow = data[rowIndex];
        rowIndex++;

        if (rowIndex > MAX_MONTHS_COUNT) {
            break;
        }
    }

    return data;
}
