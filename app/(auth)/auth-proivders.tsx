import { Button } from "@/components/ui/button";
import { BsDiscord, BsFacebook, BsGoogle, BsMicrosoft } from "react-icons/bs";

export default function AuthProviders() {
    return (
      <div className="flex flex-col space-y-2">
        <Button variant={"outline"} className="space-x-4">
          <span>Google</span>
          <BsGoogle />
        </Button>
        <Button variant={"outline"} className="space-x-4">
          <span>Microsoft</span>
          <BsMicrosoft />
        </Button>
      </div>
    );
  }