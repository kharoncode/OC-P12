import './score.css';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';

function Score({ score }) {
   const data = [
      {
         name: 'empty',
         score: 100,
         fill: `transparent`,
      },
      {
         name: 'score',
         score: score * 100,
         fill: `var(--primary)`,
      },
   ];
   return (
      <div className="score-container center">
         <div className="score-title">Score</div>
         <div className="score-info">
            <div className="score-info--result">{score * 100}%</div>
            <div className="score-info--text">de votre objectif</div>
         </div>
         <ResponsiveContainer width={260} height={240}>
            <RadialBarChart
               width={260}
               height={260}
               innerRadius={60}
               outerRadius={100}
               barSize={10}
               data={data}
               startAngle={90}
               endAngle={450}
            >
               <RadialBar cornerRadius="10px" dataKey="score" />
            </RadialBarChart>
         </ResponsiveContainer>
      </div>
   );
}

export default Score;
