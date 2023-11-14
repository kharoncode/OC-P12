export default function formatData(data, category) {
   switch (category) {
      case 'main':
         return mainFormat(data);
      case 'activity':
         return activityFormat(data);
      case 'averageSessions':
         return averageSessionsFormat(data);
      case 'performance':
         return performanceFormat(data);
      default:
         return data;
   }
}

function mainFormat(data) {
   const mainData = {
      userInfos: data.userInfos,
      score: data.score ? data.score : data.todayScore,
      keyData: data.keyData,
   };
   return mainData;
}

function activityFormat(data) {
   const activityData = [];
   data.map((el) =>
      activityData.push({
         day: new Date(el.day).getDate(),
         kilogram: el.kilogram,
         calories: el.calories,
      })
   );
   return activityData;
}

function averageSessionsFormat(data) {
   const dayLetter = {
      1: 'L',
      2: 'M',
      3: 'M',
      4: 'J',
      5: 'V',
      6: 'S',
      7: 'D',
   };
   const averageSessionsdata = [];
   data.map((el) =>
      averageSessionsdata.push({
         day: dayLetter[el.day],
         sessionLength: el.sessionLength,
      })
   );
   return averageSessionsdata;
}

function performanceFormat(data) {
   const category = {
      1: 'Cardio',
      2: 'Energie',
      3: 'Endurance',
      4: 'Force',
      5: 'Vitesse',
      6: 'Intensité',
   };
   const performanceData = [];
   data.map((el) =>
      performanceData.push({ value: el.value, kind: category[el.kind] })
   );
   return performanceData;
}
