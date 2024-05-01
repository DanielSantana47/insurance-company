import { Cards } from "./cards"
import { TitleServices } from "./titleServices"

export const Services = ()=> {
    return(
        <section id="services"  className="container h-auto">
            <TitleServices/>
            <Cards/>
        </section>
    )
}