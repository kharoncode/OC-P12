import './performance.css';
import { useFetch } from '../../utils/hooks';
import {
   Radar,
   RadarChart,
   PolarGrid,
   PolarAngleAxis,
   ResponsiveContainer,
} from 'recharts';

function Performance({ userId }) {
   const { isLoading, data, error } = useFetch(
      `http://localhost:3001/user/${userId}/performance`
   );
   if (error) {
      return <div>Oups ... il y a une erreure !</div>;
   }
   if (!isLoading) {
      const kind = data.data.kind;
      const test = {
         1: 'Cardio',
         2: 'Energie',
         3: 'Endurance',
         4: 'Force',
         5: 'Vitesse',
         6: 'Intensité',
      };
      console.log(kind);
      const performance = data.data.data.map((el) => {
         return { value: el.value, kind: test[el.kind] };
      });

      return (
         <div className="performance-container center">
            <ResponsiveContainer width={290} height={240}>
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
                  <PolarAngleAxis
                     dataKey="kind"
                     tick={{
                        fill: 'white',
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
      /* return <div className="performance-container">Performance</div>; */
   }
}

export default Performance;
