import React, { Component }  from 'react';
import { connect } from 'react-redux';

import { priceFormat } from '../../utils/common';


class Table extends Component {
    render() {
        const colNames = ['#', 'Дата', 'Платеж', 'Остаток кредита', '% по кредиту', 'Погашение кредита', 'Переплата'];
        const { data, warningMessage } = this.props;

        if (warningMessage !== '') {
            return null;
        } else {
            return (
                <React.Fragment>
                    <h3>График платежей</h3>
                    <p>
                        На графике платежей можно посмотреть подробную информацию по платежам, остатку кредита и переплате по каждому месяцу.
                    </p>
                    <table className="table table-sm table-striped">
                        <thead className="thead-dark">
                        <tr>
                            {colNames.map((name, index) => {
                                return <th key={index}>{name}</th>;
                            })}
                        </tr>
                        </thead>
                        <tbody>
                        {data && data.map(row => {
                            return (
                                <tr key={row.number}>
                                    <td>{row.number}</td>
                                    <td>{row.date}</td>
                                    <td>{priceFormat(row.payment)}</td>
                                    <td>{priceFormat(row.credit)}</td>
                                    <td>{priceFormat(row.creditDebt)}</td>
                                    <td>{priceFormat(row.creditRepayment)}</td>
                                    <td>{priceFormat(row.overpayment)}</td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </React.Fragment>
            )
        }
    }
}

export default connect(
    state => ({
        data: state.paymentSchedule,
        warningMessage: state.warningMessage,
    }),
)(Table);
