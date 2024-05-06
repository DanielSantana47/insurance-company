import { MdOutlineSecurity } from "react-icons/md"
import { AboutCard } from "./aboutCard"
import { PiHandshakeDuotone } from "react-icons/pi";
import { MdOutlineHeadsetMic } from "react-icons/md";
import { CiBitcoin } from "react-icons/ci";


export const AboutUs = ()=> {
    return(
        <section id="aboutus" className="pt-20 container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 py-20">
            <AboutCard
                icon={<MdOutlineSecurity/>}
                title="Security"
                body="At voluptates accusamus qui unde vitae qui quidem numquam. Non alias reprehenderit eum quisquam culpa ea vero consequuntur qui tempore corporis."
            />
            <AboutCard
                icon={<PiHandshakeDuotone/>}
                title=" trust"
                body="At voluptates accusamus qui unde vitae qui quidem numquam. Non alias reprehenderit eum quisquam culpa ea vero consequuntur qui tempore corporis."
            />
            <AboutCard
                icon={<MdOutlineHeadsetMic/>}
                title="Suport"
                body="At voluptates accusamus qui unde vitae qui quidem numquam. Non alias reprehenderit eum quisquam culpa ea vero consequuntur qui tempore corporis."
            />
            <AboutCard
                icon={<CiBitcoin/>}
                title="Price"
                body="At voluptates accusamus qui unde vitae qui quidem numquam. Non alias reprehenderit eum quisquam culpa ea vero consequuntur qui tempore corporis."
            />
        </section>
    )
}