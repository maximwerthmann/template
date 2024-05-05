import { Button } from "@/components/ui/button";
import Image from "next/image";
import { BsDiscord, BsFacebook, BsGoogle, BsMicrosoft } from "react-icons/bs";

export default function AuthProviders() {
    return (
      <div className="flex flex-col space-y-2">
        <Button variant={"outline"} className="space-x-4">
          <span>Google</span>
          <Image alt="google" src='/svg/auth/google.svg' height={18} width={18}/>
        </Button>
        <Button variant={"outline"} className="space-x-4">
          <span>Microsoft</span>
          <Image alt="microsoft" src='/svg/auth/microsoft.svg' height={18} width={18}/>
        </Button>
        <Button variant={"outline"} className="space-x-4">
          <span>Discord</span>
          <Image alt="microsoft" src='/svg/auth/discord.svg' height={18} width={18}/>
        </Button>
        <Button variant={"outline"} className="space-x-4">
          <span>Facebook</span>
          <Image alt="microsoft" src='/svg/auth/facebook.svg' height={18} width={18}/>
        </Button>
      </div>
    );
  }