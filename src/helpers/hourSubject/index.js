export default function hourSubject(setHours){
   let currentHour = new Date().getHours();
   if(currentHour >= 5 && currentHour <= 12){
      setHours("Bom Dia");
   }
   else if(currentHour >= 13 && currentHour <= 18){
      setHours("Boa Tarde");
   }
   else{
      setHours("Boa noite");
   }
}
