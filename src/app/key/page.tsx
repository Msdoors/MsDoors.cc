"use client";

import DotPattern from "@/components/magicui/dot-pattern";
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation"

export default function Page() {
    return (
        <main className="relative container">
            <DotPattern
                width={20}
                height={20}
                cx={1}
                cy={1}
                cr={1}
                className={cn(
                    "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] -z-50",
                )}
            />

            <div className="flex items-center justify-center w-full h-[calc(100vh-50px)]">
                <Card className="w-[350px]">
                    <CardHeader>
                        <CardTitle>mspaint Key System</CardTitle>
                    </CardHeader>
                    <CardFooter className="flex justify-center">
                        <Link href={"https://ads.luarmor.net/get_key?for=mspaint_key-rXJfopyAkrky"}>
                            <Button className="mr-2">Linkvertise <Image className="ml-2" src="/icons/linkvertise.png" width={25} height={25} alt="Linkvertise" /></Button>
                        </Link>

                        <Link href={"https://ads.luarmor.net/get_key?for=mspaint_key_lootlabs-nKrOEVsfKDGQ"}>
                            <Button className="mr-2">Lootlabs <Image className="ml-2" src="/icons/lootlabs.png" width={25} height={25} alt="Lootlabs" /></Button>
                        </Link>
                    </CardFooter>
                </Card>
            </div>
        </main>
    );
}