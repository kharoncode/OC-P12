import './averageSessions.css';
import { useFetch } from '../../utils/hooks';
import {
   LineChart,
   Line,
   XAxis,
   YAxis,
   CartesianGrid,
   Tooltip,
   Legend,
   ReferenceLine,
   ResponsiveContainer,
} from 'recharts';

function AverageSessions({ userId }) {
   const { isLoading, data, error } = useFetch(
      `http://localhost:3001/user/${userId}/average-sessions`
   );
   if (error) {
      return <div>Oups ... il y a une erreure !</div>;
   }
   if (!isLoading) {
      const averageSessions = data.data.sessions;
      const dayLetter = {
         1: 'L',
         2: 'M',
         3: 'M',
         4: 'J',
         5: 'V',
         6: 'S',
         7: 'D',
      };
      const CustomTooltip = ({ active, payload, label }) => {
         if (active && payload && payload.length) {
            return (
               <div className="custom-tooltip-averageSessions">
                  <p className="custom-tooltip-averageSessions-label">
                     {`${payload[0].value}`} min
                  </p>
               </div>
            );
         }

         return null;
      };
      return (
         <div className="averageSessions-container center">
            <ResponsiveContainer width={260} height={240}>
               <LineChart data={averageSessions} margin={{ top: 60 }}>
                  <defs>
                     <linearGradient
                        id="colorSl"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                     >
                        <stop offset="0%" stopColor="#FFFFFF33" />
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
                     content={<CustomTooltip />}
                     cursor={{ opacity: '0%' }}
                  />
                  <YAxis
                     hide
                     type="number"
                     domain={['dataMin - 10', 'dataMax + 10']}
                  />
                  <Line
                     type="bump"
                     dataKey="sessionLength"
                     stroke="url(#colorSl)"
                     strokeWidth={2}
                     dot={false}
                  />
               </LineChart>
            </ResponsiveContainer>
         </div>
      );
   }
}

export default AverageSessions;
