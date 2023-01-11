import { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: 0,
    next: 0,
    operation: '',
  });

  const handleClick = (e) => {
    const outcome = calculate(
      { total: state.total, next: state.next, operation: state.operation },
      e.target.innerHTML,
    );
    setState(outcome);
  };

  const { total, next, operation } = state;

  return (
    <div className="Calculator">
      <table>
        <tr className="table-row">
          <td colSpan="4">
            <input
              type="text"
              name="display"
              readOnly
              className="outcome"
              value={total || next || operation}
            />
          </td>
        </tr>
        <tr>
          <td>
            <button type="button" onClick={handleClick}>
              AC
            </button>
          </td>
          <td>
            <button type="button" onClick={handleClick}>
              +/-
            </button>
          </td>
          <td>
            <button type="button" onClick={handleClick}>
              %
            </button>
          </td>
          <td>
            <button
              type="button"
              onClick={handleClick}
              className="btn-operator"
            >
              ÷
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button type="button" onClick={handleClick}>
              7
            </button>
          </td>
          <td>
            <button type="button" onClick={handleClick}>
              8
            </button>
          </td>
          <td>
            <button type="button" onClick={handleClick}>
              9
            </button>
          </td>
          <td>
            <button
              type="button"
              onClick={handleClick}
              className="btn-operator"
            >
              x
            </button>
          </td>
        </tr>

        <tr>
          <td>
            <button type="button" onClick={handleClick}>
              4
            </button>
          </td>
          <td>
            <button type="button" onClick={handleClick}>
              5
            </button>
          </td>
          <td>
            <button type="button" onClick={handleClick}>
              6
            </button>
          </td>
          <td>
            <button
              type="button"
              onClick={handleClick}
              className="btn-operator"
            >
              -
            </button>
          </td>
        </tr>

        <tr>
          <td>
            <button type="button" onClick={handleClick}>
              1
            </button>
          </td>
          <td>
            <button type="button" onClick={handleClick}>
              2
            </button>
          </td>
          <td>
            <button type="button" onClick={handleClick}>
              3
            </button>
          </td>
          <td>
            <button
              type="button"
              onClick={handleClick}
              className="btn-operator"
            >
              +
            </button>
          </td>
        </tr>

        <tr>
          <td colSpan="2">
            <button type="button" onClick={handleClick}>
              0
            </button>
          </td>

          <td>
            <button type="button" onClick={handleClick}>
              .
            </button>
          </td>

          <td>
            <button
              type="button"
              onClick={handleClick}
              className="btn-operator"
            >
              =
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Calculator;
