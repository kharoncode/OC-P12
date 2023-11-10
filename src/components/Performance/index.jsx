import styles from './performance.module.css';
import { useFetch } from '../../utils/hooks';
import {
   Radar,
   RadarChart,
   PolarGrid,
   PolarAngleAxis,
   ResponsiveContainer,
   PolarRadiusAxis,
} from 'recharts';

function Performance({ userId }) {
   const { isLoading, data, error } = useFetch(
      `http://localhost:3001/user/${userId}/performance`,
      `../mocks/user_performance.json`,
      userId
   );
   if (error) {
      return <div>Oups ... il y a une erreure !</div>;
   }
   if (!isLoading) {
      const category = {
         1: 'Cardio',
         2: 'Energie',
         3: 'Endurance',
         4: 'Force',
         5: 'Vitesse',
         6: 'Intensité',
      };
      const performance = data.data;

      return (
         <div className={styles.container}>
            <ResponsiveContainer minWidth={275} width="99%" height="100%">
               <RadarChart
                  cx="50%"
                  cy="50%"
                  // outerRadius="65%"
                  // width={258}
                  // height={263}
                  data={performance}
                  startAngle={30}
                  endAngle={-330}
               >
                  <PolarGrid radialLines={false} />
                  <PolarRadiusAxis
                     stroke="transparent"
                     type="number"
                     domain={[0, 'dataMax + 20']}
                  />
                  <PolarAngleAxis
                     dataKey="kind"
                     tickFormatter={(kind) => category[kind]}
                     dy={3}
                     tick={{
                        fill: 'var(--tertiary)',
                        fontSize: '0.75em',
                        fontWeight: 500,
                     }}
                  />
                  <Radar
                     name="Performance"
                     dataKey="value"
                     stroke="var(--primary)"
                     fill="var(--primary)"
                     fillOpacity={0.7}
                  />
               </RadarChart>
            </ResponsiveContainer>
         </div>
      );
   }
}

export default Performance;
