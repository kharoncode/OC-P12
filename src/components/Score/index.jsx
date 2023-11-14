import styles from './score.module.css';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';

/**
 * Presentation of the score with a pie chart
 * @component
 * @param { number } score
 */

function Score({ score }) {
   const data = [
      {
         name: 'empty',
         score: 100,
         fill: `transparent`,
      },
      {
         name: 'score',
         score: score * 100,
         fill: `var(--primary)`,
      },
   ];
   return (
      <div className={styles.container}>
         <div className={styles.title}>Score</div>
         <div className={styles.info}>
            <div className={styles.infoResult}>{score * 100}%</div>
            <div className={styles.infoText}>de votre objectif</div>
         </div>
         <ResponsiveContainer minWidth={260} width="99%" height={240}>
            <RadialBarChart
               width={260}
               height={260}
               innerRadius={60}
               outerRadius={100}
               barSize={10}
               data={data}
               startAngle={90}
               endAngle={450}
            >
               <RadialBar cornerRadius="10px" dataKey="score" />
            </RadialBarChart>
         </ResponsiveContainer>
      </div>
   );
}

export default Score;
