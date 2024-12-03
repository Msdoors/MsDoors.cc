/*
Privacy Policy

Introduction

We value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you use our website&apos;s payment gateway in connection with Discord OAuth. By using the website&apos;s payment gateway, you agree to the practices described in this policy.

1. Information We Collect

When you log in using Discord OAuth, we collect the following data:
	•	Discord User ID: A unique identifier for your Discord account.
	•	Basic Profile Information: This may includes your username, avatar, email address.
	•	OAuth Token: Temporary tokens used for authentication and authorization purposes.
	•	Additional Data: Any other permissions or data explicitly granted by you during the OAuth process.

We do not collect unnecessary data beyond what is required for the functionality of the App.

2. How We Use Your Information

The information collected is used for the following purposes:
	•	Failsafe: We ONLY use your Discord User ID to ensure that you do not accidentally buy a product for someone else.
	•	Payment Processing: We use your Discord User ID to process payments securely and efficiently.

We will not sell, rent, or share your information with third parties, except as required by law or as described in this Privacy Policy.

3. Data Retention

We retain your Discord User ID forever as it helps us with support and troubleshooting. We do not retain any other data. You can be sure that you data is not retained by checking our website&apos;s source code.

4. Sharing Your Information

Your discord user id may be shared in the following limited circumstances:
	•	Service Providers: Neon (our database provider)
	•	Legal Compliance: If required by law, regulation, or legal process, we may disclose available information to comply with legal obligations.

5. Security of Your Information

We take appropriate technical and organizational measures to protect your data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.

6. Your Rights

Depending on your jurisdiction, you may have the following rights regarding your personal data:
	•	Access the data we hold about you.
	•	Request corrections to inaccuracies in your data.
	•	Request deletion of your data.
	•	Withdraw consent to data processing (where applicable).

To exercise any of these rights, please contact us at support@mspaint.cc

7. Cookies and Tracking Technologies

Our website only uses cookies to store session information (discord user information). No tracking technologies are used.

8. Contact Us

If you have questions or concerns about this Privacy Policy, please contact us at:
	•	Email: support@mspaint.cc
    •	Discord: https://discord.gg/mspaint

*/
export default function Privacy(){
    return (
        <main className="flex flex-col items-center justify-center md:px-32 px-5 ml-5 mr-5">
            <div className="py-16">
                <h1 className="text-3xl font-bold flex flex-col">
                    <strong>Política de Privacidade</strong>
                </h1>

                <p className="mb-2">Introdução</p>
                <p>Valorizamos sua privacidade e estamos comprometidos em proteger seus dados pessoais. Esta Política de Privacidade explica como coletamos, usamos e protegemos suas informações quando você usa o gateway de pagamento do nosso site em conexão com o Discord OAuth. Ao usar o gateway de pagamento do site, você concorda com as práticas descritas nesta política.</p>

                <p className="mt-5 font-bold">1. Informações que Coletamos</p>
                <p>Quando você faz login usando o Discord OAuth, os seguintes dados são disponibilizados para nós:</p>
                <ul className="list-disc ml-5 mt-2">
                    <li>ID de Usuário do Discord: Um identificador único para sua conta do Discord.</li>
                    <li>Informações Básicas do Perfil: Isso pode incluir seu nome de usuário, avatar e endereço de e-mail.</li>
                    <li>Token OAuth: Tokens temporários usados para autenticação e autorização.</li>
                    <li>Dados Adicionais: Quaisquer outras permissões ou dados explicitamente concedidos por você durante o processo de OAuth.</li>
                </ul>
                <p className="font-bold">No entanto, os únicos dados que realmente usamos e coletamos é o seu ID de Usuário do Discord.</p>

                <p className="mt-5 font-bold">2. Como Usamos Suas Informações</p>
                <p>As informações coletadas são usadas para os seguintes propósitos:</p>
                <ul className="list-disc ml-5 mt-2">
                    <li>Failsafe: Usamos SOMENTE o seu ID de Usuário do Discord para garantir que você não compre um produto acidentalmente para outra pessoa.</li>
                    <li>Processamento de Pagamentos: Usamos seu ID de Usuário do Discord para processar pagamentos de maneira segura e eficiente.</li>
                </ul>
                <p>Não venderemos, alugaremos ou compartilharemos suas informações com terceiros, exceto conforme exigido por lei ou conforme descrito nesta Política de Privacidade.</p>

                <p className="mt-5 font-bold">3. Retenção de Dados</p>
                <p>Retemos seu ID de Usuário do Discord para sempre, pois isso nos ajuda com suporte e solução de problemas. Não retemos quaisquer outros dados. Você pode ter certeza de que seus dados não são retidos verificando o código fonte do nosso site.</p>

                <p className="mt-5 font-bold">4. Compartilhamento de Suas Informações</p>
                <p>Seu ID de Usuário do Discord pode ser compartilhado nas seguintes circunstâncias limitadas:</p>
                <ul className="list-disc ml-5 mt-2">
                    <li>Provedores de Serviços: Neon (nosso provedor de banco de dados)</li>
                    <li>Conformidade Legal: Se exigido por lei, regulamentação ou processo legal, podemos divulgar informações disponíveis para cumprir com obrigações legais.</li>
                </ul>

                <p className="mt-5 font-bold">5. Segurança de Suas Informações</p>
                <p>Tomamos medidas técnicas e organizacionais apropriadas para proteger seus dados contra acesso não autorizado, alteração, divulgação ou destruição. No entanto, nenhum método de transmissão pela internet ou armazenamento eletrônico é 100% seguro.</p>

                <p className="mt-5 font-bold">6. Alterações a esta Política de Privacidade</p>
                <p>Poderemos atualizar esta Política de Privacidade de tempos em tempos. Recomendamos que você reveja esta página periodicamente para quaisquer mudanças. Seu uso contínuo do nosso site após quaisquer alterações a esta Política de Privacidade constituirá sua aceitação de tais alterações.</p>

                <p className="mt-5 font-bold">7. Contate-nos</p>
                <p>Se você tiver quaisquer perguntas ou preocupações sobre esta Política de Privacidade, por favor nos contate em <a href="mailto:support@mspaint.dev">support@mspaint.dev</a>.</p>
            </div>
        </main>
    )
}
