import PropTypes from 'prop-types';
import css from './StatisticsList.module.css'

const randColor = () =>  {
  return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}

const StatisticsList = ({statsJson}) => {
    return statsJson.map(({id, label, percentage}) => { return <li className={css.item} key={id} style={{backgroundColor: randColor()}}>
    <span className={css.label}>{label}</span>
    <span className={css.percentage}>{percentage}%</span>
  </li>
    })
} 

StatisticsList.propTypes = {
  statsJson: PropTypes.object.isRequired
}


export default StatisticsList