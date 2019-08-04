import React from 'react';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      balance: 0,
      rate: 0,
      term: 15,
      submit: 0,
    }
    this.handleChange=this.handleChange.bind(this);
    this.calculate=this.calculate.bind(this);
  }

  calculate(e){
    let balance=Number(this.state.balance);
    let rate=Number(this.state.rate)/12/100;
    let term=Number(this.state.term)*12;
    let mortgageUp = rate*Math.pow((1+rate), term);
    let mortgageDown = Math.pow((1+rate), term) - 1;
    let newSubmit = (balance*mortgageUp/mortgageDown).toFixed(2);
    this.setState({[e.target.name]: newSubmit})
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {

    return (
      <div className='container'>
        <div className='form-group'>
          <h3>Mortgage Calculator</h3>
          <label className="col-sm-2 control-label">Loan Balance</label>
          <input name='balance' type ='number' className="form-control" value={this.state.balance} onChange={this.handleChange}/>
          <label className="col-sm-2 control-label">Interest Rate (%)</label>
          <input name='rate' type='number' step='0.01' className='form-control' value={this.state.rate} onChange={this.handleChange}/> 
          
          <label className="col-sm-2 control-label">Loan Term (years)</label>
          <select name='term' className='form-control' value={this.state.term} onChange={this.handleChange}>
            <option value='15'>15</option>
            <option value='30'>30</option>   
          </select>
          
          <button name='submit' className="btn btn-default" onClick={this.calculate}>
            Calculate
          </button>

          <div id='output' name='output'> {this.state.submit} is your payment. </div> 
        </div>
      </div>
    );
  }
}
