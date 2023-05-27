import PropTypes from 'prop-types';
import { TransactionTable } from "./TransactionsTable"
import css from './Transactions.module.css'

export const Transactions = ({items}) => {
    return <table className={css.transactionhistory}>
    <thead >
      <tr >
        <th className={css.head}>Type</th>
        <th className={css.head}>Amount</th>
        <th className={css.head}>Currency</th>
      </tr>
    </thead>
    <tbody>
    <TransactionTable item ={items}/>
    </tbody>
  
  </table>
}

Transactions.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.object).isRequired
}
