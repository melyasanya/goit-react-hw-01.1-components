import PropTypes from 'prop-types';
import StatisticsList from "./StatisticsList"
import css from './statistics.module.css'


const Statistics = ({stats}) => {
  
    return (<section className={css.statistics}>
    <h2 className={css.title}>Upload stats</h2>
    <ul className={css.statlist}>
<StatisticsList statsJson={stats}/>
    </ul>
  </section>)
}

Statistics.propTypes = {
  stats: PropTypes.array.isRequired
}

export default Statistics