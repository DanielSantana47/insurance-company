import { MdOutlineSecurity } from "react-icons/md"
import { AboutCard } from "./aboutCard"
import { PiHandshakeDuotone } from "react-icons/pi";
import { MdOutlineHeadsetMic } from "react-icons/md";
import { CiBitcoin } from "react-icons/ci";


export const AboutUs = ()=> {
    return(
        <section id="aboutus" className="container grid grid-cols-4 gap-8 py-20">
            <AboutCard
                icon={<MdOutlineSecurity/>}
                title="Lorem"
                body="At voluptates accusamus qui unde vitae qui quidem numquam. Non alias reprehenderit eum quisquam culpa ea vero consequuntur qui tempore corporis."
            />
            <AboutCard
                icon={<PiHandshakeDuotone/>}
                title="Lorem"
                body="At voluptates accusamus qui unde vitae qui quidem numquam. Non alias reprehenderit eum quisquam culpa ea vero consequuntur qui tempore corporis."
            />
            <AboutCard
                icon={<MdOutlineHeadsetMic/>}
                title="Lorem"
                body="At voluptates accusamus qui unde vitae qui quidem numquam. Non alias reprehenderit eum quisquam culpa ea vero consequuntur qui tempore corporis."
            />
            <AboutCard
                icon={<CiBitcoin/>}
                title="Lorem"
                body="At voluptates accusamus qui unde vitae qui quidem numquam. Non alias reprehenderit eum quisquam culpa ea vero consequuntur qui tempore corporis."
            />
        </section>
    )
}