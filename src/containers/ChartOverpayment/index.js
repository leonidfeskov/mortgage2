import React, { Component }  from 'react';
import { connect }  from 'react-redux';

import ChartLine from '../../components/ChartLine';
import { priceFormat, numConversion } from '../../utils/common';
import { COLORS } from '../../constants';


const ChartOverpayment = ({ paymentSchedule }) => {
    const labels = [];
    const overpayment = [];
    const credit = [];
    const monthsCount = paymentSchedule.length;

    paymentSchedule.forEach((payment) => {
        labels.push(payment.date);
        overpayment.push(Math.round(payment.overpayment));
        credit.push(Math.round(payment.credit))
    });

    const chartData = {
        labels,
        datasets: [
            {
                label: 'Переплата',
                backgroundColor: COLORS.dangerOpacity,
                borderColor: COLORS.danger,
                pointBackgroundColor: COLORS.danger,
                data: overpayment,
            },
            {
                label: 'Остаток по кредиту',
                backgroundColor: COLORS.secondaryOpacity,
                borderColor: COLORS.secondary,
                pointBackgroundColor: COLORS.secondary,
                data: credit,
            },
        ]
    };



    return (
        <React.Fragment>
            <h3>Переплата по процентам</h3>
            <p>
                Один из основных показателей "выгодности" кредита.
                Чем меньше переплата за весь срок кредита, тем лучше.
            </p>
            <p>
                За&nbsp;
                <span className="text-danger">
                    {paymentSchedule.length}&nbsp;{numConversion(monthsCount, ['месяц', 'месяца', 'месяцев'])}
                </span>&nbsp;
                переплата по процентам составит&nbsp;
                <span className="text-danger">{priceFormat(overpayment[monthsCount - 1])}&nbsp;руб.</span>
            </p>
            <ChartLine data={chartData} />

        </React.Fragment>
    )
};

export default connect(
    (state) => ({
        paymentSchedule: state.paymentSchedule
    })
)(ChartOverpayment);
