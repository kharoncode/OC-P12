import styles from './averageSessions.module.css';
import { useFetch } from '../../utils/hooks';
import {
   LineChart,
   Line,
   XAxis,
   YAxis,
   Tooltip,
   ResponsiveContainer,
} from 'recharts';

function AverageSessions({ userId }) {
   const { isLoading, data, error } = useFetch(
      `http://localhost:3001/user/${userId}/average-sessions`,
      `../mocks/user_averageSession.json`,
      userId
   );

   if (error) {
      return <div>Oups ... il y a une erreure !</div>;
   }
   if (!isLoading) {
      const averageSessions = data.sessions;
      const dayLetter = {
         1: 'L',
         2: 'M',
         3: 'M',
         4: 'J',
         5: 'V',
         6: 'S',
         7: 'D',
      };
      const CustomTooltip = ({ active, payload }) => {
         if (active && payload && payload.length) {
            return (
               <div className={styles.customTooltip}>
                  <p className={styles.customTooltipLabel}>
                     {`${payload[0].value}`} min
                  </p>
               </div>
            );
         }

         return null;
      };

      return (
         <div className={styles.container}>
            <h3 className={styles.info}>Durée moyenne des sessions</h3>
            <ResponsiveContainer minWidth={260} width="99%" height={240}>
               <LineChart data={averageSessions} margin={{ top: 60 }}>
                  <defs>
                     <linearGradient
                        id="colorSl"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                     >
                        <stop offset="0%" stopColor="#FFFFFF60" />
                        <stop offset="100%" stopColor="var(--tertiary)" />
                     </linearGradient>
                  </defs>
                  <XAxis
                     dataKey="day"
                     tickFormatter={(day) => dayLetter[day]}
                     padding={{ left: 10, right: 10 }}
                     stroke="transparente"
                     tick={{
                        fill: 'var(--tertiary)',
                        fontSize: '0.75em',
                        fontWeight: 500,
                        opacity: '60%',
                     }}
                  />
                  <Tooltip
                     //position={{ y: 0 }}
                     content={<CustomTooltip />}
                     cursor={{
                        strokeWidth: '20%',
                        stroke: 'black',
                        opacity: '10%',
                        scale: 10,
                     }}
                  />
                  <YAxis
                     hide
                     type="number"
                     domain={['dataMin - 5', 'dataMax + 10']}
                  />
                  <Line
                     type="bump"
                     dataKey="sessionLength"
                     stroke="url(#colorSl)"
                     strokeWidth={2}
                     dot={false}
                     activeDot={{
                        stroke: '#FFFFFF33',
                        strokeWidth: 5,
                        r: 4,
                        fill: 'white',
                     }}
                  />
               </LineChart>
            </ResponsiveContainer>
         </div>
      );
   }
}

export default AverageSessions;
