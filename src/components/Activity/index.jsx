import './activity.css';
import {
   BarChart,
   Bar,
   XAxis,
   YAxis,
   CartesianGrid,
   Tooltip,
   ResponsiveContainer,
   Legend,
} from 'recharts';
import { useFetch } from '../../utils/hooks';

function Activity({ userId }) {
   const { isLoading, data, error } = useFetch(
      `http://localhost:3001/user/${userId}/activity`
   );
   if (error) {
      return <div>Oups ... il y a une erreure !</div>;
   }
   if (!isLoading) {
      const activity = data.data.sessions;
      // Récupérer le poids le plus petit et le poids le plus grand.
      // y ajouter +/1 1kg pour le repère vertical
      return (
         <div className="activity-container center">
            <ResponsiveContainer width={835} height={320}>
               <BarChart
                  // margin={{ top: 25, right: 25, bottom: 25, left: 25 }}
                  width={500}
                  height={300}
                  data={activity}
                  barGap={8}
                  barCategoryGap={10}
                  barSize={7}
               >
                  <CartesianGrid vertical={false} strokeDasharray="3 3" />
                  <XAxis dataKey="da" tickLine={false} />
                  <YAxis
                     orientation="right"
                     axisLine={false}
                     tickLine={false}
                     dataKey="kilogram"
                     type="number"
                     domain={[68, 71]}
                  />
                  <Tooltip />
                  <Legend verticalAlign="top" align="right" />
                  <Bar
                     dataKey="kilogram"
                     fill="#282D30"
                     radius={[5, 5, 0, 0]}
                  />
                  <Bar
                     dataKey="calories"
                     fill="var(--primary)"
                     radius={[5, 5, 0, 0]}
                  />
               </BarChart>
            </ResponsiveContainer>
         </div>
      );
   }
}

export default Activity;
