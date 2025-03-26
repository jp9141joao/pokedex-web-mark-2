import { Button } from "@/components/ui/button";
import IconGoogle from "@/assets/icons8-google-logo-48.png";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function SignInForm(
    { setFormType, setFullName, email, setEmail, password, setPassword }: 
    { 
        setFormType: (value: 'SignIn' | 'SignUp' | 'ForgotPassword') => void,
        setFullName: (value: string) => void,
        email: string, setEmail: (value: string) => void,
        password: string, setPassword: (value: string) => void,
    }
) {

    return (
        <div className="grid gap-5">
            <div className="grid gap-3 text-start">
                <div>
                    <Label htmlFor="email">
                        Email
                    </Label>
                    <Input 
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@example.com"
                        className="mt-1.5"                    
                    />
                </div>
                <div className="">
                    <Label htmlFor="password">
                        Password
                    </Label>
                    <Input
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Abc1234#"
                        className="mt-1.5"
                    />
                </div>
                
                <div>
                    <p>
                        Forgot your password ? <strong
                                                    onClick={() => setFormType("ForgotPassword")}
                                               >
                                                    Click here!
                                                </strong>
                    </p>
                    <Button 
                        className="w-full text-sm xxs:text-base rounded-4xl mt-3"
                    >
                        Access Account
                    </Button>
                </div>
            </div>
            <div className="flex justify-center items-center gap-3">
                <Separator className="bg-black max-w-[20vw] sm:max-w-[15vw] lg:max-w-[9vw] xl:max-w-[130px]" />
                <p className="text-sm xxs:text-base">
                    OR
                </p>
                <Separator className="bg-black max-w-[20vw] sm:max-w-[15vw] lg:max-w-[9vw] xl:max-w-[130px]" />
            </div>
            <div>
                <Button
                    variant={"outline"}
                    className="w-full flex grid-2 items-center rounded-4xl border-black"
                >
                    <img 
                        src={IconGoogle} 
                        alt="Icon Google" 
                        className="size-5 xxs:size-6" 
                    />
                    <p className="text-sm xxs:text-base">
                        Login with Google
                    </p>
                </Button>
            </div>
            <div>
                <p className="text-sm xxs:text-base text-center">
                    Don't have an account ? <span
                                                onClick={() => {
                                                    setFormType("SignUp");
                                                    setFullName("");
                                                    setEmail("");
                                                    setPassword("");
                                                }}
                                                className="underline"
                                            >
                                                Sign Up.
                                            </span>
                </p>
            </div>
        </div>
    )
}