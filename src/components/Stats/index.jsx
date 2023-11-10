import styles from './stats.module.css';
import caloriesImg from '../../assets/stats/calories.svg';
import proteinImg from '../../assets/stats/proteines.svg';
import glucidesImg from '../../assets/stats/glucides.svg';
import lipidesImg from '../../assets/stats/lipides.svg';
import StatsItem from '../StatsItem';

function Stats({ stats }) {
   return (
      <div className={styles.container}>
         <StatsItem
            name="Calories"
            value={stats.calorieCount}
            picture={caloriesImg}
            unite="kCal"
         />
         <StatsItem
            name="Proteines"
            value={stats.proteinCount}
            picture={proteinImg}
            unite="g"
         />
         <StatsItem
            name="Glucides"
            value={stats.carbohydrateCount}
            picture={glucidesImg}
            unite="g"
         />
         <StatsItem
            name="Lipides"
            value={stats.lipidCount}
            picture={lipidesImg}
            unite="g"
         />
      </div>
   );
}

export default Stats;
