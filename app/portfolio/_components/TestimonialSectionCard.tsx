import { SectionCardWrapper } from "./SectionCardWrapper";
import { TestimonialSectionCardItem } from "./TestimonialSectionCardItem";
import { testimonials } from "../_data/testimonial";

export const TestimonialSectionCard = () => {
  return (
    <SectionCardWrapper title="Guild Members Say">
      {testimonials.map((testimonial) => (
        <TestimonialSectionCardItem key={testimonial.referee} {...testimonial} />
      ))}
    </SectionCardWrapper>
  );
};
