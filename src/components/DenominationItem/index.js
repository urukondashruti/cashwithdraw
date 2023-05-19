// Write your code here
import './index.css'

const CashItems = props => {
  const {Items, onDelete} = props
  const {value} = Items

  const onClickmoney = () => {
    onDelete(value)
  }

  return (
    <li className="list1">
      <button type="button" className="button" onClick={onClickmoney}>
        {value}
      </button>
    </li>
  )
}

export default CashItems
