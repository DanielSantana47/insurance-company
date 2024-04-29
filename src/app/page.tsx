import { Header } from "@/components/header/header"
import { ModeToggle } from "@/components/nav/modeToggle"
import { Nav } from "@/components/nav/nav"
import { ThemeProvider } from "next-themes"

const Page = ()=> {
  return(
    <div>
      <Nav/>
      <Header/>
    </div>
  )
}

export default Page