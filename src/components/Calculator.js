import { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: 0,
    next: 0,
    operation: '',
  });
  const { total, next, operation } = state;

  const handleClick = (e) => {
    setState(calculate(
      state,
      e.target.innerHTML,
    ));
  };

  return (
    <div className="Calculator">
      <table>
        <tbody>
          <tr className="table-row">
            <td colSpan="4">
              <input
                type="text"
                name="display"
                readOnly
                className="outcome"
                value={next || total || operation || 0}
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
        </tbody>
      </table>
    </div>
  );
};

export default Calculator;
