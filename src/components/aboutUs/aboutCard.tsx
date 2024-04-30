import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { AboutUsCardType } from "@/types/AboutUsCardType";
import { MdOutlineSecurity } from "react-icons/md";

export const AboutCard = ({body,icon,title}: AboutUsCardType)=> {
    return(
        <Card className="border-primary/40 max-w-96 flex flex-col items-center gap-4 group hover:border-primary transition-all duration-500 overflow-hidden">
            <CardHeader>
                <div className="text-primary text-7xl mb-4 w-full text-center">
                    {icon}
                </div>
                <CardTitle>
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="font-light">{body}</p>
            </CardContent>
            <div className="w-0 h-1 rounded-full bg-primary group-hover:w-full transition-all duration-500"></div>
        </Card>
    )
}