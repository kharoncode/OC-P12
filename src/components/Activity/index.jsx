import './activity.css';
import {
   BarChart,
   Bar,
   XAxis,
   YAxis,
   CartesianGrid,
   Tooltip,
   ResponsiveContainer,
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
      const activityData = data.data.sessions;

      const CustomTooltip = ({ active, payload, label }) => {
         if (active && payload && payload.length) {
            return (
               <div className="custom-tooltip">
                  <p className="custom-tooltip-label">
                     {`${payload[0].value}`}kg
                  </p>
                  <p className="custom-tooltip-label">
                     {`${payload[1].value}`}Kcal
                  </p>
               </div>
            );
         }

         return null;
      };

      return (
         <div className="activity-container center">
            <h3 className="activity-title">Activité quotidienne</h3>
            <div className="legend">
               <div className="legend-item">
                  <div className="weight-circle circle"></div>
                  <p>Poids (kg)</p>
               </div>
               <div className="legend-item">
                  <div className="calorie-circle circle"></div>
                  <p>Calories brûlées (kCal)</p>
               </div>
            </div>
            <ResponsiveContainer width="100%">
               <BarChart
                  margin={{ top: 100, right: 20, left: 40 }}
                  data={activityData}
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
                     tickFormatter={(day) => new Date(day).getDate()}
                     height={60}
                     stroke="#DEDEDE"
                     strokeWidth={1}
                     // padding={{ left: 10, right: 10 }}
                     // scale="point"
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
                     cursor={{ fill: '#C4C4C4', opacity: '50%' }}
                     offset={50}
                  />
                  {/* <Legend
                     verticalAlign="top"
                     align="right"
                     iconType="circle"
                     iconSize="8"
                     height={60}
                  /> */}
                  <Bar
                     //name="Poids (kg)"
                     dataKey="kilogram"
                     yAxisId="kilogram"
                     fill="#282D30"
                     radius={[5, 5, 0, 0]}
                  />
                  <Bar
                     //name="Calories brûlées (kCal)"
                     dataKey="calories"
                     yAxisId="calories"
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
