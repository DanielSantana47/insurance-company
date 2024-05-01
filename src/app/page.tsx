import { Services } from "@/components/Services/services"
import { AboutUs } from "@/components/aboutUs/aboutUs"
import { Contact } from "@/components/contact/contact"
import { Header } from "@/components/header/header"
import { ModeToggle } from "@/components/nav/modeToggle"
import { Nav } from "@/components/nav/nav"
import { OurTeam } from "@/components/ourTeam/ourTeam"
import { ThemeProvider } from "next-themes"

const Page = ()=> {
  return(
    <div>
      <Nav/>
      <Header/>
      <AboutUs/>
      <Services/>
      <OurTeam/>
      <Contact/>
    </div>
  )
}

export default Page