import { useTime } from "@/hooks/use-time"

export default function About() {
   const { time } = useTime()
   
   return (
      <section>
         <div className="flex items-center gap-4">
            <h2 className="text-xl font-medium">
               About Me
            </h2>
            <div className="h-[1px] flex-1 bg-muted/50" />
         </div>

         <div className="mt-8 space-y-6">
            <p className="font-medium tracking-wide">
               Hi, I’m Raheem Orekoya, a frontend developer with over 3 years 
               of experience building websites. I enjoy creating user interfaces 
               that are simple, responsive, and easy to use. <span className="text-muted-foreground">I’m focused on writing 
               clean code and working on projects that aim to improve the way people 
               interact with the web.</span>
            </p>

            <div className="flex max-sm:flex-col sm:items-center gap-4">
               <div className="[&_svg]:size-3 flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                     <path fill="#83FF1D" d="M12 22c5.523 0 10-2.014 10-4.5c0-1.266-1.163-2.41-3.035-3.229c-1.142 2.096-2.883 3.903-5.095 4.848a4.78 4.78 0 0 1-3.74 0c-2.212-.945-3.953-2.752-5.095-4.847C3.163 15.089 2 16.234 2 17.5C2 19.986 6.477 22 12 22"></path>
                     <path fill="#83FF1D" fillRule="evenodd" d="M5 8.515C5 4.917 8.134 2 12 2s7 2.917 7 6.515c0 3.57-2.234 7.735-5.72 9.225a3.28 3.28 0 0 1-2.56 0C7.234 16.25 5 12.084 5 8.515M12 11a2 2 0 1 0 0-4a2 2 0 0 0 0 4" clipRule="evenodd"></path>
                  </svg>
                  <p className="text-sm text-muted-foreground font-medium">Based in Nigeria</p>
               </div>
               <div className="h-[1px] w-full sm:flex-1 bg-muted/50" />
               <div className="[&_svg]:size-3 flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                     <defs>
                        <mask id="solarClockCircleBold0">
                           <g fill="none">
                              <path fill="#fff" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></path>
                              <path fill="#000" fillRule="evenodd" d="M12 7.25a.75.75 0 0 1 .75.75v3.69l2.28 2.28a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1-.22-.53V8a.75.75 0 0 1 .75-.75" clipRule="evenodd"></path>
                           </g>
                        </mask>
                     </defs>
                     <path fill="#83FF1D" d="M0 0h24v24H0z" mask="url(#solarClockCircleBold0)"></path>
                  </svg>
                  <p className="text-sm text-muted-foreground font-medium">{time} WAT</p>
               </div>
            </div>
         </div>
      </section>
   )
}
