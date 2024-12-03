"use client";

import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { Button } from "@/components/ui/button";
import { RedeemKey } from "@/server/redeemkey";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export function RedeemComponent({serial, username, user_id}: {serial: string, username: string, user_id: string}) {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogTrigger asChild>
                <Button>
                    Redeem mspaint lifetime for {username}
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-black">
                <AlertDialogHeader>
                    <AlertDialogTitle>Você tem certeza absoluta?</AlertDialogTitle>
                    <AlertDialogDescription>
    Esta ação não pode ser desfeita. Isso resgatará permanentemente a chave msdoors para {username}.
                    </AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <Button onClick={() => {
                        toast.promise(async () => {
                            const response = await RedeemKey(serial, user_id);
                            if (response.status !== 200) {
                                throw new Error(response.error);
                            }

                            return response;
                        }, {
                            loading: "resgatando chave vitalícia do mspaint...",
                            success: (data) => {
                                setOpen(false);
                                
                                router.push(`/purchase/claimed?key=${encodeURIComponent(data.user_key)}`);

                                return "Chave resgatada com sucesso por " + username + "! Agora você pode acessar o msdoors via #getscript no discord.";
                            },
                            error: (error_data) => {
                                setOpen(false);
                                return "Falha ao resgatar a chave: " + error_data.message;
                            }
                        });
                    }}>Continue</Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
