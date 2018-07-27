import React, { Component } from 'react';
import { connect } from 'react-redux';
import PanelField from '../../components/PanelField';
import Button from '../../components/Button';

import { setFieldValue } from '../../modules/fields';
import { setPaymentSchedule } from '../../modules/paymentSchedule';
import { setWarningMessage } from '../../modules/warningMessage';

import calculatePayments from '../../utils/calculatePayments';

import './panel.css';


class Panel extends Component {

    calculate = () => {
        if (!this.form.checkValidity()) {
            this.props.setWarningMessage('Ошибка валидации даных');
            return;
        }

        const data = calculatePayments(this.props.fields);
        this.props.setPaymentSchedule(data);
        this.props.setWarningMessage('');
    };

    onChangeInput = (event, { name, value }) => {
        console.log(name, value);
        this.props.setFieldValue(name, Number(value));
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        this.calculate();
    };

    getFormElement = (form) => {
        this.form = form;
    };

    componentDidMount() {
        this.calculate();
    };

    render() {
        const { sumPerMonth, creditPercent, creditSum } = this.props.fields;

        return (
            <div className="panel">
                <div className="card text-white bg-dark">
                    <div className="card-header">
                        <b>Введите данные</b>
                    </div>
                    <div className="card-body">
                        <form ref={this.getFormElement}
                              onSubmit={this.onFormSubmit}>
                            <PanelField label="Ежемесячный платеж"
                                        inputProps={{
                                            value: sumPerMonth,
                                            name: 'sumPerMonth',
                                            required: true,
                                            pattern: "\\d+",
                                            onChange: this.onChangeInput,
                                            onBlur: this.calculate,
                                        }}
                                        appendText="руб." />
                            <PanelField label="% по ипотеке"
                                        inputProps={{
                                            value: creditPercent,
                                            name: 'creditPercent',
                                            required: true,
                                            onChange: this.onChangeInput,
                                            onBlur: this.calculate,
                                        }}
                                        appendText="%" />
                            <PanelField label="Сумма кредита"
                                        inputProps={{
                                            value: creditSum,
                                            name: 'creditSum',
                                            required: true,
                                            onChange: this.onChangeInput,
                                            onBlur: this.calculate,
                                        }}
                                        appendText="руб." />
                            <Button kind="primary"
                                    type="submit">
                                Рассчитать
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({
        fields: state.fields,
    }),
    {
        setFieldValue,
        setPaymentSchedule,
        setWarningMessage,
    }
)(Panel)
