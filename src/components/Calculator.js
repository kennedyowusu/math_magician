import React from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      next: 0,
      operation: '',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate() {
    const { total, next } = this.state;
    const inputData = document.querySelector('.outcome');

    if ((next != null)) {
      inputData.value = next;
    } else if (!Number.isNaN(total)) {
      inputData.value = total;
    }

    // if (total === null && next === null) {
    //   inputData.value = '0';
    // } else if (!Number.isNaN(total) === null && next !== null) {
    //   inputData.value = next;
    // } else if (!Number.isNaN(total) !== null && next === null) {
    //   inputData.value = !Number.isNaN(total);
    // } else {
    //   inputData.value = `${!Number.isNaN(total)} ${operation} ${next}`;
    // }
  }

  handleClick = (e) => {
    // this.setState(calculate(
    //   (prevState) => ({ ...prevState, ...calculate(prevState, buttonName) }),
    // ));
    const { total, next, operation } = this.state;
    this.setState(calculate({ total, next, operation }, e.target.innerHTML));
  }

  // handleChange = (e) => {
  //   const { total, next, operation } = this.state;
  //   this.setState({ total, next, operation }, e.target.value);
  // }

  render() {
    return (
      <div className="Calculator">
        <table>
          <tr className="table-row">
            <td colSpan="4">
              <input
                type="text"
                name="display"
                // value={this.state.total}
                // onChange={this.handleChange}
                // readOnly
                className="outcome"
              />
            </td>
          </tr>
          <tr>
            <td>
              <button type="button" onClick={this.handleClick}>
                AC
              </button>
            </td>
            <td>
              <button type="button" onClick={this.handleClick}>
                +/-
              </button>
            </td>
            <td>
              <button type="button" onClick={this.handleClick}>
                %
              </button>
            </td>
            <td>
              <button
                type="button"
                onClick={this.handleClick}
                className="btn-operator"
              >
                /
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button type="button" onClick={this.handleClick}>
                7
              </button>
            </td>
            <td>
              <button type="button" onClick={this.handleClick}>
                8
              </button>
            </td>
            <td>
              <button type="button" onClick={this.handleClick}>
                9
              </button>
            </td>
            <td>
              <button
                type="button"
                onClick={this.handleClick}
                className="btn-operator"
              >
                *
              </button>
            </td>
          </tr>

          <tr>
            <td>
              <button type="button" onClick={this.handleClick}>
                4
              </button>
            </td>
            <td>
              <button type="button" onClick={this.handleClick}>
                5
              </button>
            </td>
            <td>
              <button type="button" onClick={this.handleClick}>
                6
              </button>
            </td>
            <td>
              <button
                type="button"
                onClick={this.handleClick}
                className="btn-operator"
              >
                -
              </button>
            </td>
          </tr>

          <tr>
            <td>
              <button type="button" onClick={this.handleClick}>
                1
              </button>
            </td>
            <td>
              <button type="button" onClick={this.handleClick}>
                2
              </button>
            </td>
            <td>
              <button type="button" onClick={this.handleClick}>
                3
              </button>
            </td>
            <td>
              <button
                type="button"
                onClick={this.handleClick}
                className="btn-operator"
              >
                +
              </button>
            </td>
          </tr>

          <tr>
            <td colSpan="2">
              <button type="button" onClick={this.handleClick}>
                0
              </button>
            </td>

            <td>
              <button type="button" onClick={this.handleClick}>
                .
              </button>
            </td>

            <td>
              <button
                type="button"
                onClick={this.handleClick}
                className="btn-operator"
              >
                =
              </button>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Calculator;
