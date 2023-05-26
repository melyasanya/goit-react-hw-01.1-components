import css from './TransactionsTable.module.css'

export const TransactionTable = ({item}) => {
    return item.map(({id, type, amount, currency}) => {
        return <tr key={id} className={css.row}>
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
      
    })
}