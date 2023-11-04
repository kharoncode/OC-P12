import './performance.css';
import { useFetch } from '../../utils/hooks';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';

function Performance({ userId }) {
   const { isLoading, data, error } = useFetch(
      `http://localhost:3001/user/${userId}/performance`
   );
   if (error) {
      return <div>Oups ... il y a une erreure !</div>;
   }
   if (!isLoading) {
      const kind = data.data.kind;
      const performance = data.data.data.map((el) => {
         return { value: el.value, kind: kind[el.kind] };
      });

      return (
         <div className="performance-container center">
            <RadarChart
               cx="50%"
               cy="50%"
               outerRadius="70%"
               width={260}
               height={260}
               data={performance}
            >
               <PolarGrid radialLines={false} />
               <PolarAngleAxis dataKey="kind" />
               <Radar
                  name="Mike"
                  dataKey="value"
                  stroke="var(--primary)"
                  fill="var(--primary)"
                  fillOpacity={0.7}
               />
            </RadarChart>
         </div>
      );
      /* return <div className="performance-container">Performance</div>; */
   }
}

export default Performance;
