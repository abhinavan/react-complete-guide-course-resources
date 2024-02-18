import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./CoreConcept";
import Section from "./Section";

const CoreConcepts = () => {
  return (
    <Section id="core-concepts" title="Core Concepts">
      <ul>
        {CORE_CONCEPTS.map((concepts) => (
          <CoreConcept {...concepts} />
        ))}
      </ul>
    </Section>
  );
};
export default CoreConcepts;
