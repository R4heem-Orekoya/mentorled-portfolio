import { socials } from "@/lib/consts";

export default function Contact() {
   return (
      <section className="space-y-12">
         <div className="flex max-sm:flex-col sm:items-center gap-4">
            <h2 className="text-2xl md:text-3xl font-medium">Let's Connect!</h2>
            <div className="h-[1px] w-full sm:flex-1 bg-muted/50" />
            <div className="flex items-center gap-2">
               <div className="size-1.5 rounded-full bg-[#83FF1D]" />
               <p className="text-muted-foreground">Available for work</p>
            </div>
         </div>

         <div className="flex max-sm:flex-col sm:items-center gap-4">
            <a href="mailto:raheemorekoya1@gmail.com" className="[&_svg]:size-3 flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition">
               <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                  <path fill="#83FF1D" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8s8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5s2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47c.65.89 1.77 1.47 2.96 1.47c1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10m0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3"></path>
               </svg>
               <p>raheemorekoya1@gmail.com</p>
            </a>
            <div className="h-[1px] w-full sm:flex-1 bg-muted/50" />
            <ul className="flex gap-4 items-center">
               {socials.map((social) => (
                  <li key={social.title}>
                     <a href={social.link} className="[&_svg]:size-4 text-muted-foreground hover:text-[#83FF1D] transition">
                        {social.icon}
                     </a>
                  </li>
               ))}
            </ul>

         </div>
      </section>
   )
}
