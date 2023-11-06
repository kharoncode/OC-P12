import styles from './statsItem.module.css';

function StatsItem({ name, value, picture, unite }) {
   return (
      <div className={styles.container}>
         <div className={styles.infoContainer}>
            <img src={picture} alt={name} />
            <div className={styles.stats}>
               <div className={styles.statsValue}>
                  {value}
                  {unite}
               </div>
               <div className={styles.statsName}>{name}</div>
            </div>
         </div>
      </div>
   );
}

export default StatsItem;
