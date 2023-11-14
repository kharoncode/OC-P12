import styles from './averageSessions.module.css';
import {
   LineChart,
   Line,
   XAxis,
   YAxis,
   Tooltip,
   ResponsiveContainer,
} from 'recharts';

/**
 * Average exercise duration curve
 * @component
 * @param { Array.<Object> } data
 */

function AverageSessions({ data }) {
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

   const CustomCursor = (e) => {
      const shadow_elt = document.getElementsByClassName(styles.shadow);
      const { chartX } = e;
      const shadowWidth = shadow_elt[0].clientWidth;
      const stop = (chartX / shadowWidth) * 100;
      shadow_elt[0].style.display = 'initial';
      shadow_elt[0].style.backgroundImage = `linear-gradient(90deg, rgba(250, 250, 250, 0) ${stop}%, rgba(0, 0, 0, .2) ${stop}%, rgba(0, 0, 0, .2) 100%)`;
   };

   return (
      <div className={styles.container}>
         <div className={styles.shadow}></div>
         <h3 className={styles.info}>Durée moyenne des sessions</h3>
         <ResponsiveContainer minWidth={260} width="99%" height="100%">
            <LineChart
               data={data}
               margin={{ top: 60 }}
               onMouseMove={(e) => {
                  CustomCursor(e);
               }}
               onMouseLeave={() => {
                  document.getElementsByClassName(
                     styles.shadow
                  )[0].style.display = 'none';
               }}
            >
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
                  padding={{ left: 10, right: 10 }}
                  stroke="transparente"
                  tick={{
                     fill: 'var(--tertiary)',
                     fontSize: '0.75em',
                     fontWeight: 500,
                     opacity: '60%',
                  }}
               />
               <Tooltip content={<CustomTooltip />} cursor={false} />
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

export default AverageSessions;
