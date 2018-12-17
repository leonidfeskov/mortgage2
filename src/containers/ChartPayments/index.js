import React, { Component }  from 'react';
import { connect }  from 'react-redux';

import ChartLine from '../../components/ChartLine';
import { COLORS } from '../../constants';


const ChartOverpayment = ({ paymentSchedule }) => {
    const labels = [];
    const paymentByPercentages = [];
    const paymentByCredit = [];

    paymentSchedule.forEach((payment) => {
        labels.push(payment.date);
        paymentByPercentages.push(Math.round(payment.creditDebt));
        paymentByCredit.push(Math.round(payment.creditRepayment));
    });

    const chartData = {
        labels,
        datasets: [
            {
                label: 'По процентам',
                backgroundColor: COLORS.tertiaryOpacity,
                borderColor: COLORS.tertiary,
                pointBackgroundColor: COLORS.tertiary,
                data: paymentByPercentages,
            },
            {
                label: 'Погашение кредита',
                backgroundColor: COLORS.primaryOpacity,
                borderColor: COLORS.primary,
                pointBackgroundColor: COLORS.primary,
                data: paymentByCredit,
            },
        ]
    };

    return (
        <React.Fragment>
            <h3>Платежи</h3>
            <p>
                График платежей показывает какая часть ежемесячного платежа идет на&nbsp;погашение <b>процентов&nbsp;по&nbsp;кредиту</b>,
                а&nbsp;какая на&nbsp;погашение <b>самого&nbsp;кредита</b>.<br/>
                Чем больше часть, которая идет на&nbsp;погашение самого кредита,
                тем быстрее вы выплатите кредит и меньше переплатите.
            </p>
            <ChartLine data={chartData} />
            <div className="alert alert-info">
                Платить кредит <b>сверх</b> минимального ежемесячного платежа очень <b>выгодно</b>.<br/>
                <b>Простой пример:</b><br/>
                Допустим вы взяли кредит 3&nbsp;000&nbsp;000&nbsp;руб. под 10%&nbsp;годовых на&nbsp;10&nbsp;лет.
                Ваш минимальный ежемесячный платеж будет ~40&nbsp;000&nbsp;руб.<br/>
                При этом переплата за&nbsp;весь срок кредита составит ~1&nbsp;725&nbsp;000&nbsp;руб.<br/>
                Если вы будете платить больше минимального платежа, например, по&nbsp;45&nbsp;000&nbsp;руб.,
                то переплата уже уменьшится до&nbsp;~1&nbsp;395&nbsp;000&nbsp;руб, а срок кредита станет меньше почти на&nbsp;2&nbsp;года.
            </div>
        </React.Fragment>
    )
};

export default connect(
    (state) => ({
        paymentSchedule: state.paymentSchedule
    })
)(ChartOverpayment);
