import styles from './activity.module.css';
import {
   Bar,
   XAxis,
   YAxis,
   CartesianGrid,
   Tooltip,
   ResponsiveContainer,
   ComposedChart,
   Line,
} from 'recharts';

function Activity({ data }) {
   const CustomTooltip = ({ active, payload }) => {
      if (active && payload && payload.length) {
         return (
            <div className={styles.cutomTooltip}>
               <p className={styles.cutomTooltipLabel}>
                  {`${payload[0].value}`}kg
               </p>
               <p className={styles.cutomTooltipLabel}>
                  {`${payload[1].value}`}Kcal
               </p>
            </div>
         );
      }

      return null;
   };

   return (
      <div className={styles.container}>
         <h3 className={styles.title}>Activité quotidienne</h3>
         <div className={styles.legend}>
            <div className={styles.legendItem}>
               <div className={`${styles.weight} ${styles.circle}`}></div>
               <p className={styles.legendName}>Poids (kg)</p>
            </div>
            <div className={styles.legendItem}>
               <div className={`${styles.calorie} ${styles.circle}`}></div>
               <p className={styles.legendName}>Calories brûlées (kCal)</p>
            </div>
         </div>
         <ResponsiveContainer width="100%">
            <ComposedChart
               margin={{ top: 100, right: 20, left: 40 }}
               data={data}
               barGap={8}
               barSize={7}
            >
               <CartesianGrid vertical={false} strokeDasharray="3 3" />
               <XAxis
                  dataKey="day"
                  tickLine={false}
                  tickMargin={15}
                  tick={{
                     fill: '#9B9EAC',
                     fontSize: '0.875em',
                     fontWeight: 500,
                  }}
                  height={60}
                  stroke="#DEDEDE"
                  strokeWidth={1}
                  padding={{ left: 10, right: 10 }}
                  scale="point"
               />
               <YAxis
                  dataKey="kilogram"
                  yAxisId="kilogram"
                  orientation="right"
                  axisLine={false}
                  tickLine={false}
                  tick={{
                     fill: '#9B9EAC',
                     fontSize: '0.875em',
                     fontWeight: 500,
                  }}
                  tickCount={3}
                  tickMargin={25}
                  type="number"
                  domain={['dataMin - 2', 'dataMax + 1']}
               />
               <YAxis
                  dataKey="calories"
                  yAxisId="calories"
                  hide
                  type="number"
                  domain={[0, 'dataMax + 20']}
               />
               <Tooltip
                  content={<CustomTooltip />}
                  cursor={{
                     strokeWidth: 56,
                     stroke: '#C4C4C4',
                     opacity: '50%',
                  }}
                  offset={35}
                  position={{ y: 70 }}
               />
               <Bar
                  dataKey="kilogram"
                  yAxisId="kilogram"
                  fill="#282D30"
                  radius={[5, 5, 0, 0]}
               />
               <Bar
                  dataKey="calories"
                  yAxisId="calories"
                  fill="var(--primary)"
                  radius={[5, 5, 0, 0]}
               />
               <Line
                  type="monotone"
                  dataKey="calories"
                  yAxisId="calories"
                  hide
               />
            </ComposedChart>
         </ResponsiveContainer>
      </div>
   );
   //}
}

export default Activity;
