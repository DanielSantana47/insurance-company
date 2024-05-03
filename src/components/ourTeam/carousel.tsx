import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { TeamCard } from "./teamCard"

export const CarouselOurTeam = ()=> {
    return(
        <Carousel className="xl:hidden">
        <CarouselContent>
            <CarouselItem>
            <TeamCard 
                title="Product Designer" 
                description="Lorem ipsum dolor sit amet."
                src="https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
            </CarouselItem>
            <CarouselItem>
            <TeamCard 
                title="data engineer" 
                description="Lorem ipsum dolor sit amet."
                src="https://images.unsplash.com/photo-1611095973763-414019e72400?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
            </CarouselItem>
            <CarouselItem>
            <TeamCard 
                title="sales leader" 
                description="Lorem ipsum dolor sit amet."
                src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
            </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        </Carousel>
    )
}
