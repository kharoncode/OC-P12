import styles from './performance.module.css';
import {
   Radar,
   RadarChart,
   PolarGrid,
   PolarAngleAxis,
   ResponsiveContainer,
   PolarRadiusAxis,
} from 'recharts';

function Performance({ data }) {
   return (
      <div className={styles.container}>
         <ResponsiveContainer minWidth={275} width="99%" height="100%">
            <RadarChart
               cx="50%"
               cy="50%"
               data={data}
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

export default Performance;
