import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignUpForm(
    { setFormType, fullName, setFullName, email, setEmail, password, setPassword }: 
    { 
        setFormType: (value: 'SignIn' | 'SignUp' | 'ForgotPassword') => void,
        fullName: string, setFullName: (value: string) => void,
        email: string, setEmail: (value: string) => void,
        password: string, setPassword: (value: string) => void,
    }
) {

    return (
        <div className="grid gap-5">
            <div className="grid gap-3 text-start">
                <div>
                    <Label htmlFor="full-name">
                        Full Name
                    </Label>
                    <Input 
                        id="full-name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Enter your full name"
                        className="mt-1.5"
                    />
                </div>
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
                    <Button
                        onClick={() => {
                            setFormType("SignIn");
                            setFullName("");
                            setEmail("");
                            setPassword("");
                        }}
                        className="w-full text-sm xxs:text-base rounded-4xl mt-2">
                        Create Account
                    </Button>
                </div>
                <div>
                    <p className="text-sm xxs:text-base text-center">
                        Have an account ? <span
                            onClick={() => {
                                setFormType("SignIn");
                                setFullName("");
                                setEmail("");
                                setPassword("");
                            }}
                            className="underline"
                        >
                            Sign In.
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}