import { auth, signIn, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { sql } from "@vercel/postgres";
import { notFound } from "next/navigation";
import { RedeemComponent } from "./components/redeem";
import CopyButton from "@/components/copy-button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default async function Page({
    searchParams
}: {
    searchParams?: { [key: string]: string | undefined };
}) {
    if (!searchParams) {
        return notFound();
    }

    const session = await auth();
    const serialParam = searchParams.serial;

    if (!serialParam) {
        return notFound();
    }

    const serials = serialParam.split(",");
    
    if (serials.length === 0) {
        return notFound();
    }

    if (serials.length === 1) {
        const serial = serials[0];
        const { rows } = await sql`SELECT * FROM mspaint_keys WHERE serial = ${serial}`;
    
        if (rows.length === 0 || rows[0].claimed === true) {
            return notFound();
        }
    
        return (
            <main className="flex justify-center items-center flex-col h-screen">
                <Card className="max-w-[475px]">
                    <CardHeader>
                        <CardTitle>mspaint key purchase successful!</CardTitle>
                        <CardDescription>
                            Obrigado pelo seu apoio! Compartilhe este link somente se você estiver presenteando a chave para outra pessoa <     Obrigado pelo seu apoio! Compartilhe este link somente se você estiver presenteando a chave para outra pessoa <Link href={"/privacy"} target="_blank" className="text-blue-400 underline">(Política de Privacidade)</Link>
       </CardDescription>
                    </CardHeader>
                    <CardContent>
                        {session && session.user ? (
                            <>
                                <div className="flex justify-center">
                                    <RedeemComponent serial={serial} username={session.user.name ?? "unknown"} user_id={session.user.id || "skibidiSigma"} />
                                </div>
    
    
                                <Separator className="mt-5 mb-5" />
                                <div className="flex items-center justify-between">                                
                                    <div className="flex flex-col">
                                        <p>
                                            Logged in as {session.user.name}
                                        </p>
                                        <p className="text-muted-foreground text-sm">
                                            Não é você? Saia aqui.
                                        </p>
                                    </div>
                                    <form action={async () => {
                                        "use server"
                                        await signOut();
                                    }}>
                                        <Button variant={"destructive"}>
                                            Sign Out
                                        </Button>
                                    </form>
                                </div>
                            </>
                        ) : (
                            <>
                                <form action={async () => {
                                    "use server"
                                    await signIn("discord");
                                }}>
                                    <Button>
                                        Entrar com Discord
                                    </Button>
                                </form>
                            </>
                        )}
                    </CardContent>
                </Card>
                <p className="text-sm mt-2">
                    <span className="text-muted-foreground">Order ID:</span> {rows[0].order_id}
                </p>
            </main>
        )
    } else {
        return (
            <main className="flex justify-center items-center flex-col h-screen">
                <Card className="max-w-[475px]">
                    <CardHeader>
                        <CardTitle>Compra em massa de chaves do msdoors realizada com sucesso!</CardTitle>
                        <CardDescription>
                            Você comprou vários seriados do msdoors, para resgatá-los, abra os links abaixo:
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col mt-2 gap-2">
                            {serials.map((serial) => (
                                <div className="flex flex-row items-center gap-2" key={serial}>
                                    <Input readOnly value={process.env.NODE_ENV === "development" ? `http://localhost:3000/purchase/completed?serial=${serial}` : `https://msdoors-gg.vercel.app/purchase/completed?serial=${serial}`}/>
                                    <CopyButton text={process.env.NODE_ENV === "development" ? `http://localhost:3000/purchase/completed?serial=${serial}` : `https://msdoors-gg.vercel.app/purchase/completed?serial=${serial}`} />
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </main>
        )
    }
}
