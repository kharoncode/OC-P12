import './score.css';

function Score({ score }) {
   return <div className="score-container">{score * 100}%</div>;
}

export default Score;
