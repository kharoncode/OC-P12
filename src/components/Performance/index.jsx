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
      const performance = data.data;
      return (
         <div className="performance-container">
            <RadarChart
               cx={150}
               cy={150}
               outerRadius={120}
               width={300}
               height={300}
               data={performance.data}
            >
               <PolarGrid />
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
