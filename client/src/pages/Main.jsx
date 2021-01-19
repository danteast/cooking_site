import React from 'react';
import { connect } from 'react-redux';
import { increaseNumber } from '../actions/numberActions';
import Menu from '../components/Menu';

const Main = ({ number, increaseNumber }) => {
    return (
        <div>
            <h1>Главная страница</h1>
            <Menu />
            <div>
                <p>Число: {number}</p>
                <button onClick={increaseNumber}>Увеличить число</button>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    number: state.number,
});

const mapDispatchToProps = {
    increaseNumber,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
