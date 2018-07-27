import React, { Component } from 'react';
import Panel from '../../containers/Panel';
import ChartOverpayment from '../../containers/ChartOverpayment';
import ChartPayments from '../../containers/ChartPayments';
import Table from '../../containers/Table';
import WarningMessage from '../../containers/WarningMessage';

class App extends Component {
    render() {
        return (
            <div className="container">
                <div style={{height: '30px'}}></div>
                <h1 className="mb-4">Кредитный калькулятор</h1>
                <div className="row">
                    <div className="col-md-3">
                        <Panel />
                    </div>
                    <div className="col-md-9">
                        <WarningMessage />
                        <div className="mb-5">
                            <ChartOverpayment />
                        </div>
                        <div className="mb-5">
                            <ChartPayments />
                        </div>
                        <div className="mb-5">
                            <Table />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
