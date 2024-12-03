/*
# **mspaint Terms of Service**

By purchasing and using mspaint products, you agree to the following Terms of Service. Violating any of these terms will result in **permanent blacklisting** from all mspaint products.

### **Usage and Distribution**
- **No Resale**: You may not resell any mspaint product(s) without express permission.
- **No Paywalling**: You are prohibited from placing any mspaint product(s) behind a paywall or charging others for access to our products.
- **No Key Sharing**: Do not share your license keys with others.
- **No Key System Bypass**: Bypassing or attempting to bypass our key system is strictly prohibited.

### **Refunds and Chargebacks**
- **Final Sales**: All purchases are **final**. `mspaint does not offer refunds for any reason.`
- **No Chargebacks**: Chargebacks are not permitted under any circumstances. **Initiating a chargeback will lead to a permanent ban.**

### **Tampering and Security**
- **No Tampering or Cracking**: You may not deobfuscate, reverse-engineer, tamper with, or crack mspaint products. Any attempt to modify or bypass product protections is strictly prohibited.

> **Violation of any of these terms will result in a permanent ban from all current and future mspaint products.**
*/

import BlurFade from "@/components/magicui/blur-fade";
import DotPattern from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";

export default function TOS(){
    return (
        <main className="overflow-x-hidden">
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
    
            <div className="flex flex-col items-center justify-center px-2 ml-5 mr-5">
                <BlurFade delay={0.2 + (1 * 0.05)} className="mt-5" inView>
                    <h1 className="text-3xl font-bold text-center flex flex-col">
                        <strong>Termos de Serviço MsDoors</strong>
                    </h1>
                </BlurFade>

                <BlurFade delay={0.4 + (1 * 0.05)} className="mb-5 mt-2" inView>
                    <p className="text-center">Ao comprar e usar produtos MsDoors, você concorda com os seguintes Termos de Serviço. A violação de qualquer um desses termos resultará em <strong>banimento permanente</strong> de todos os produtos MsDoors.</p>

                    {/* Uso e Distribuição */}
                    <h2 className="text-2xl font-bold flex flex-col mt-6"><strong>Uso e Distribuição</strong></h2>
                    <div className="flex flex-col *:ml-5">
                        <p>- <strong>Proibido Revender</strong>: Você não pode revender qualquer produto MsDoors sem permissão expressa.</p>
                        <p>- <strong>Proibido Colocar Atrás de Paywall</strong>: Você está proibido de colocar qualquer produto MsDoors atrás de um paywall ou cobrar outros pelo acesso aos nossos produtos.</p>
                        <p>- <strong>Proibido Compartilhar Chaves</strong>: Não compartilhe suas chaves de licença com outras pessoas.</p>
                        <p>- <strong>Proibido Burlar o Sistema de Chaves</strong>: Burlar ou tentar burlar nosso sistema de chaves é estritamente proibido.</p>
                    </div>
                
                    {/* Reembolsos e Estornos */}
                    <h2 className="text-2xl font-bold flex flex-col mt-6"><strong>Reembolsos e Estornos</strong></h2>
                    <div className="flex flex-col *:ml-5">
                        <p>- <strong>Vendas Finais</strong>: Todas as compras são <strong>finais</strong>. <code>MsDoors não oferece reembolsos por qualquer motivo.</code></p>
                        <p>- <strong>Proibido Estornar</strong>: Estornos não são permitidos sob nenhuma circunstância. <strong>Iniciar um estorno resultará em banimento permanente.</strong></p>
                    </div>

                    {/* Alteração e Segurança */}
                    <h2 className="text-2xl font-bold flex flex-col mt-6"><strong>posso ajudar na criação?</strong></h2>
                    <div className="flex flex-col *:ml-5">
                        <p>- <strong>Sim, você pode me ajudar com a criação do Msdoors, basta vir dm mo Discord, mas lembre-se! eu não sei nada sobre lua(uso GEPET).</p>
                    </div>

                    <p className="text-center text-bold mt-5">A violação de qualquer um desses termos resultará em banimento permanente de todos os produtos atuais e futuros da MsDoors.</p>
                </BlurFade>
            </div>
        </main>
    )
}
