// Write your code here
import {Component} from 'react'

import './index.css'

import CashItems from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {
    count: 2000,
  }

  onDelete = value => {
    const {count} = this.state

    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - value}))
    }
  }

  render() {
    const {count} = this.state
    const {denominationsList} = this.props
    return (
      <div className="con">
        <div className="con1">
          <div className="con4">
            <div className="con2">
              <h1 className="head">S</h1>
            </div>
            <h1 className="head1">Sarah Williams</h1>
          </div>
          <div className="back">
            <p className="head2">Your Balance</p>
            <div>
              <p className="head3">{count}</p>
              <p className="head2">In Rupees</p>
            </div>
          </div>
          <p className="head1 backs1">Withdraw</p>
          <p className="head2 backs1">CHOOSE SUM (IN RUPEES)</p>
          <ul className="backs">
            {denominationsList.map(each => (
              <CashItems key={each.id} onDelete={this.onDelete} Items={each} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
