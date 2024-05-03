import { Cards } from "./cards"
import { TitleServices } from "./titleServices"

export const Services = ()=> {
    return(
        <section id="services"  className="container h-auto pt-20">
            <TitleServices/>
            <Cards/>
        </section>
    )
}