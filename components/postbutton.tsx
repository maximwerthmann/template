import { PenLine } from "lucide-react";
import { Button } from "./ui/button";

export default function PostButton() {
    return (
        <Button className="rounded-full p-4 h-16 w-16 fixed bottom-4 right-4">
            <PenLine size={24}/>
        </Button>
    )
}