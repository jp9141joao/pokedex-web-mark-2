import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import IconGoogle from "@/assets/icons8-google-logo-48.png";
import { Button } from "../ui/button";
import { Separator } from "@/components/ui/separator";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";

export default function LoginSection({ showDialog, setShowDialog }: { showDialog: boolean, setShowDialog: (value: boolean) => void }) {

    return (
        <Dialog
            open={showDialog}
            onOpenChange={(open) => {
                
                if (!open) {
                    setShowDialog(false);
                }
            }}
        >
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="text-xl">
                        Sign In
                    </DialogTitle>
                    <div className="grid gap-5">
                        <div className="grid gap-3 text-start">
                            <div>
                                <Label htmlFor="email">
                                    Email
                                </Label>
                                <Input 
                                    id="email"
                                    value={""}
                                    placeholder="name@example.com"
                                    className="border-black rounded-4xl mt-1"
                                />
                            </div>
                            <div>
                                <Label htmlFor="password">
                                    Password
                                </Label>
                                <Input 
                                    id="password"
                                    value={""}
                                    placeholder="name@example.com"
                                    className="border-black rounded-4xl mt-1"
                                />
                            </div>
                            <div>
                                <Button className="w-full rounded-4xl mt-1">
                                    Sign In
                                </Button>
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-3">
                            <Separator className="bg-black max-w-[20vw]" />
                            <p>
                                OR
                            </p>
                            <Separator className="bg-black max-w-[20vw]" />
                        </div>
                        <div>
                            <Button
                                variant={"outline"}
                                className="w-full flex grid-2 items-center rounded-4xl border-black"
                            >
                                <img src={IconGoogle} alt="" className="size-6" />
                                <p>
                                    Login with Google
                                </p>
                            </Button>
                        </div>
                    </div>
                </DialogHeader>
                <div>

                </div>
            </DialogContent>
        </Dialog>
    )
}