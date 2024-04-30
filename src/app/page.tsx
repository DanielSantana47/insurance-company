import { Services } from "@/components/Services/services"
import { AboutUs } from "@/components/aboutUs/aboutUs"
import { Header } from "@/components/header/header"
import { ModeToggle } from "@/components/nav/modeToggle"
import { Nav } from "@/components/nav/nav"
import { ThemeProvider } from "next-themes"

const Page = ()=> {
  return(
    <div>
      <Nav/>
      <Header/>
      <AboutUs/>
      <Services/>
    </div>
  )
}

export default Page