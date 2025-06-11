// src/components/marketing/footer.tsx

"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { footerContent, siteConfig } from "@/config/content"; // <-- IMPORT
import Container from "../global/container";
import Wrapper from "../global/wrapper";

const Footer = () => {
    return (
        <footer className="w-full py-10">
            <Container>
                <Wrapper className="flex flex-col items-center pb-20">
                    <div className="flex flex-col items-center text-center">
                        <h1 className="text-2xl font-bold mb-6">{footerContent.faqHeadline}</h1> {/* <-- GANTI */}
                        <Accordion type="single" collapsible className="w-full max-w-2xl">
                            {footerContent.faqs.map((faq, index) => ( // <-- GANTI
                                <AccordionItem key={index} value={`item-${index + 1}`}>
                                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                                    <AccordionContent>
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </Wrapper>
            </Container>
            <Container>
                <Wrapper className="pt-10 flex items-center justify-center">
                    <p className="text-sm text-secondary-foreground">
                        {siteConfig.copyright} {/* <-- GANTI */}
                    </p>
                </Wrapper>
            </Container>
        </footer>
    );
};

export default Footer;
