"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Container from "../global/container";
import Wrapper from "../global/wrapper";
import siteContent from "../../data/site-content.json";

const Footer = () => {
  const footerContent = siteContent["Footer.tsx"].structure.footer;

  return (
    <footer className={footerContent.className}>
      <Container>
        <Wrapper
          className={footerContent.children[0].faqSection.container.wrapper.className}
        >
          <div className="flex flex-col items-center text-center">
            <h1
              className={
                footerContent.children[0].faqSection.container.wrapper.children
                  .title.className
              }
            >
              {
                footerContent.children[0].faqSection.container.wrapper.children
                  .title.content
              }
            </h1>
            <Accordion
              type={
                footerContent.children[0].faqSection.container.wrapper.children
                  .accordion.props.type
              }
              collapsible={
                footerContent.children[0].faqSection.container.wrapper.children
                  .accordion.props.collapsible
              }
              className={
                footerContent.children[0].faqSection.container.wrapper.children
                  .accordion.props.className
              }
            >
              {footerContent.children[0].faqSection.container.wrapper.children.accordion.items.map(
                (item, index) => (
                  <AccordionItem key={index} value={item.value}>
                    <AccordionTrigger>{item.trigger}</AccordionTrigger>
                    <AccordionContent>{item.content}</AccordionContent>
                  </AccordionItem>
                ),
              )}
            </Accordion>
          </div>
        </Wrapper>
      </Container>
      <Container>
        <Wrapper
          className={
            footerContent.children[1].copyrightSection.container.wrapper.className
          }
        >
          <p
            className={
              footerContent.children[1].copyrightSection.container.wrapper
                .children.copyright.className
            }
          >
            {
              footerContent.children[1].copyrightSection.container.wrapper.children
                .copyright.content
            }
          </p>
        </Wrapper>
      </Container>
    </footer>
  );
};

export default Footer;
