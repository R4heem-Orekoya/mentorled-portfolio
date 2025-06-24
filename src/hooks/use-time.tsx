import { useEffect, useState } from "react";

export function useTime() {
   const [time, setTime] = useState("");

   useEffect(() => {
      const updateTime = () => {
         const now = new Date();
         const options: Intl.DateTimeFormatOptions = {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
            timeZone: "Africa/Lagos",
         };
         setTime(new Intl.DateTimeFormat("en-US", options).format(now));
      };

      updateTime(); 
      const interval = setInterval(updateTime, 60000);

      return () => clearInterval(interval);
   }, []);
   
   return { time }
}