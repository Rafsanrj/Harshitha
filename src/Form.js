import React from 'react';
import './style.scss';
import Popup from './Popup';
import './style.css';
import 'tachyons';


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderId: " ",
      slot: " ",
      change: false,
    }
  }
  changeHandler(event) {
    this.setState({
      orderId: event.target.value,
    });
  }
  handleChange(event) {
    this.setState({
      slot: event.target.value,
    });
  }
  submit() {
    this.setState({
      change: true,
    })
  }
  togglePopup() {
    this.setState({
      change: false,
    })
  }

  render() {

function abc(){
    console.log("testfbdfb")
}


    return (
    // console.log("hejw2134")
    <div classname = 'pa1 div2'>
      <div style={{ marginLeft: "0%" }}>
        <form>

        <div className="f5 tl">
                
                <h4>Order ID : </h4>
                <h4>Delivery Time : </h4>
                
            </div>
          
          
          <div style={{ marginTop: "30px", marginLeft: "42%" }}>
            <select value={this.state.slot} onChange={this.handleChange.bind(this)}>
              <option value="slots">---SLOTS---</option>
              <option value="5">+5 Min</option>
              <option value="10">+10 Min</option>
              <option value="15">+15 Min</option>
              <option value="20">+20 Min</option>
              <option value="25">+25 Min</option>
              <option value="30">+30 Min</option>
            </select>
          </div>
          <div style={{ marginTop: "30px", marginLeft: "42%" }}>
            <button type="button" onClick={this.submit.bind(this)}>CONFORM</button>
           
          </div>
        </form>
        {
          this.state.change ? <Popup
            text='Your order has been resheduled successfully'
            closePopup={this.togglePopup.bind(this)}
          /> : null
        }
        {console.log(this.state.change)}
      </div>
      </div>
    )
  }
}



export default Form;