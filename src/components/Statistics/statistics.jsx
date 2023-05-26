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

export default Statistics