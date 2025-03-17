import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import { useState } from "react";

export default function ForgotPasswordForm(
    { 
        email, setEmail, 
        password, setPassword, 
        verificationCode, setVerificationCode, 
        newPassword, setNewPassword,
        setFormType,
    } :
    { 
        email: string, setEmail: (value: string) => void,
        password: string, setPassword: (value: string) => void,
        verificationCode: string, setVerificationCode: (value: string) => void,
        newPassword: string, setNewPassword: (value: string) => void,
        setFormType: (value: 'SignIn' | 'SignUp' | 'ForgotPassword') => void
    }
) {

    const [ step, setStep ] = useState<1 | 2 | 3>(1);
    const [ isLoading, setIsLoading ] = useState<boolean>(false);
    const [ isLoadingVerification, setIsLoadingVerification ] = useState<boolean>(false);

    if (step == 1) {

        () => {
            setIsLoading(true);
            setIsLoadingVerification(true);
            setIsLoading(false);
            setIsLoadingVerification(false);
        }

        return (
            <div className="grid gap-2">
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
                <div className="mt-2">
                    <Button
                        variant={"outline"}
                        className="w-full text-sm xxs:text-base border-black rounded-4xl"
                    >
                        {
                            isLoadingVerification ?
                            <Spinner className="text-black"/> :
                            "Send Verification Code"
                        }
                    </Button>
                </div>
                <div>
                    <Button
                        onClick={() => setStep(2)}
                        className="w-full text-sm xxs:text-base rounded-4xl"
                    >
                        {
                            isLoading ?
                            <Spinner /> :
                            "Continue"
                        }
                    </Button>
                </div>
            </div>
        );
    } else if (step == 2) {

        return (
            <div className="grid gap-2">
                <div>
                    <Label htmlFor="verification-code">
                        Verification Code
                    </Label>
                    <Input 
                        id="verification-code"
                        value={verificationCode}
                        onChange={(e) => setVerificationCode(e.target.value)}
                        placeholder="Enter your code"
                        className="mt-1.5"
                    />
                </div>
                <div className="mt-1">
                    <Button
                        onClick={() => setStep(3)}
                        className="w-full text-sm xxs:text-base rounded-4xl"
                    >
                        {
                            isLoading ?
                            <Spinner /> :
                            "Continue"
                        }
                    </Button>
                </div>
            </div>
        );
    } else {
        
        return (
            <div className="grid gap-3">
                <div>
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
                    <Label htmlFor="newPassword">
                        New Password
                    </Label>
                    <Input 
                        id="newPassword"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="Cba4321@"
                        className="mt-1.5"
                    />
                </div>
                <div className="mt-1">
                    <Button
                        onClick={() => {
                            setStep(1);
                            setFormType('SignIn');
                        }}
                        className="w-full text-sm xxs:text-base rounded-4xl"
                    >
                        {
                            isLoading ?
                            <Spinner /> :
                            "Change Password"
                        }
                    </Button>
                </div>
            </div>
        );
    }
}