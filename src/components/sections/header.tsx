import { socials } from "@/lib/consts";


export default function Header() {
   return (
      <header>
         <h1 className="text-3xl md:text-4xl font-medium">
            Raheem Orekoya
         </h1>
         <p className="mt-6 text-muted-foreground leading-snug">
            I'm a <span className="font-semibold text-foreground">Frontend Developer</span> who builds clean, functional interfaces 
            with a focus on simplicity and purpose. I care about thoughtful 
            details, smooth interactions, and a user experience that feels intuitive.
         </p>
         <ul className="flex gap-4 items-center mt-6">
            {socials.map((social) => (
               <li key={social.title}>
                  <a href={social.link} className="[&_svg]:size-5 text-muted-foreground hover:text-[#83FF1D] transition">
                     {social.icon}
                  </a>
               </li>
            ))}
         </ul>
      </header>
   )
}
