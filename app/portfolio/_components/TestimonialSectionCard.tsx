import { testimonials } from '../_data/testimonial';
import { SectionCardWrapper } from './SectionCardWrapper';
import { TestimonialSectionCardItem } from './TestimonialSectionCardItem';

export const TestimonialSectionCard = () => {
  return (
    <SectionCardWrapper title="Guild Members Say">
      {testimonials.map((testimonial) => (
        <TestimonialSectionCardItem
          key={testimonial.referee}
          {...testimonial}
        />
      ))}
    </SectionCardWrapper>
  );
};
