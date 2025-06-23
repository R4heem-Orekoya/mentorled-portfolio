export default function About() {
   return (
      <section>
         <div className="flex items-center gap-4">
            <h2 className="flex items-center gap-2 text-xl font-medium">
               <div className="w-4 h-[2px] rounded bg-[#83FF1D]" />
               About Me
            </h2>
            <div className="h-[1px] flex-1 bg-muted/40"/>
         </div>
         
         <div className="mt-8 space-y-4">
            <p className="font-medium">
               Hi, I’m David Smith, a web designer with 12 years of experience 
               crafting modern, high-performing websites that help businesses 
               stand out. <span className="text-muted-foreground">My passion lies in creating digital experiences that 
               are not only visually stunning but also user-friendly and results-driven.</span>
            </p>
            <p className="font-medium">
               Hi, I’m David Smith, a web designer with 12 years of experience 
               crafting modern, high-performing websites that help businesses 
               stand out. <span className="text-muted-foreground">My passion lies in creating digital experiences that 
               are not only visually stunning but also user-friendly and results-driven.</span>
            </p>
         </div>
      </section>
   )
}
