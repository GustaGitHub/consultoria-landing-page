export default function hourSubject(setHours){
   let checkHours = new Date().getHours();
   if(checkHours >= 5 && checkHours <= 12){
      setHours("Bom Dia");
   }
   else if(checkHours >= 13 && checkHours <= 18){
      setHours("Boa Tarde");
   }
   else{
      setHours("Boa noite");
   }
}
