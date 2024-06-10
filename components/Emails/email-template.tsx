import * as React from "react";
import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
interface EmailTemplateProps {
  firstName?: string;
  token: number;
  linkText: string;
  message: string;
}
 
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
 
export const EmailTemplate = ({
  firstName = "",
  token,
  linkText,
  message,
}: EmailTemplateProps) => (
  <Html>
    <Head />
    <Preview>{linkText}</Preview>
      <Tailwind>
        <Body className="bg-white text-gray-900 font-sans">
          <Container className="w-[480px] mx-auto p-5 pb-12">
            <Img
              src={`${baseUrl}/static/logo.png`}
              width="32"
              height="32"
              alt="Claridy"
              className="mb-4"
            />

            <Text className="text-2xl font-bold leading-snug">
              <strong>@{firstName}</strong>, merci de nous rejoindre
            </Text>

            <Section className="p-6 border border-gray-300 rounded-md text-center my-6">
              <Text className="mb-2 text-left">
                Salut <strong>{firstName}</strong>!
              </Text>
              <Text className="mb-2 text-left">{message}</Text>

              <Button className="text-2xl bg-green-600 text-white leading-snug rounded-md py-3 px-6">
                {token}
              </Button>
              <Text className="mb-2 text-left">
                Si vous avez des questions, n'hésitez pas à nous contacter.
              </Text>
            </Section>
            <Text className="text-center">
              <Link className="text-blue-600 text-xs">Your security audit log</Link> ・{" "}
              <Link className="text-blue-600 text-xs">Contact support</Link>
            </Text>

            <Text className="text-gray-500 text-xs text-center mt-15">
              GitHub, Inc. ・88 Colin P Kelly Jr Street ・San Francisco, CA 94107
            </Text>
          </Container>
        </Body>
      </Tailwind>
  </Html>
);
 
export default EmailTemplate;