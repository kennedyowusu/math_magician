import React from 'react';
import './Calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

 handleChange = () => {
   // this.setState({ display: event.target.value });
 }

 render() {
   return (
     <div className="Calculator">
       <table>
         <tr className="table-row">
           <td colSpan="4">
             <input
               type="text"
               name="display"
               // value={this.state.display}
               onChange={this.handleChange}
             />
           </td>
         </tr>
         <tr>
           <td>
             <button type="button">AC</button>
           </td>
           <td>
             <button type="button">+/-</button>
           </td>
           <td>
             <button type="button">%</button>
           </td>
           <td>
             <button type="button" className="btn-operator">
               /
             </button>
           </td>
         </tr>
         <tr>
           <td>
             <button type="button">7</button>
           </td>
           <td>
             <button type="button">8</button>
           </td>
           <td>
             <button type="button">9</button>
           </td>
           <td>
             <button type="button" className="btn-operator">
               *
             </button>
           </td>
         </tr>

         <tr>
           <td>
             <button type="button">4</button>
           </td>
           <td>
             <button type="button">5</button>
           </td>
           <td>
             <button type="button">6</button>
           </td>
           <td>
             <button type="button" className="btn-operator">
               -
             </button>
           </td>
         </tr>

         <tr>
           <td>
             <button type="button">1</button>
           </td>
           <td>
             <button type="button">2</button>
           </td>
           <td>
             <button type="button">3</button>
           </td>
           <td>
             <button type="button" className="btn-operator">
               +
             </button>
           </td>
         </tr>

         <tr>
           <td colSpan="2">
             <button type="button">0</button>
           </td>

           <td>
             <button type="button">.</button>
           </td>

           <td>
             <button type="button" className="btn-operator">
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
