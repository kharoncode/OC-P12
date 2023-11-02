import './statsItem.css';

function StatsItem({ name, value, picture, unite }) {
   return (
      <div className="stats-item center">
         <img src={picture} alt={name} />
         <div className="stats-item-info">
            <div className="stats-item-info--value">
               {value}
               {unite}
            </div>
            <div className="stats-item-info--name">{name}</div>
         </div>
      </div>
   );
}

export default StatsItem;
