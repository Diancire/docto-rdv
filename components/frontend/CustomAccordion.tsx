import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export type FAQItem = {
    qn: string;
    ans: string | React.ReactNode;
}
  
export default function CustomAccordion({ faqs }: { faqs: FAQItem[] }) {
    return (
        <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
                <AccordionItem key={index} value={faq.qn}>
                    <AccordionTrigger>{faq.qn}</AccordionTrigger>
                    <AccordionContent>
                        {faq.ans}
                    </AccordionContent>
                </AccordionItem>
            ))}
      </Accordion>
    )
}
  