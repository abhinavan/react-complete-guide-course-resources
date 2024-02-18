import { EXAMPLES } from "../data-with-examples";
import TabButtons from "./TabButtons";
import { useState } from "react";
import Section from "./Section";
import Tabs from "./Tabs";

const Examples = () => {
  const [currentValue, setCurrentValue] = useState();
  const handleClick = (selectedButtonName) => {
    setCurrentValue(selectedButtonName);
  };
  const tabExamples = !currentValue ? (
    <p>Please select a topic</p>
  ) : (
    <div id="tab-content">
      <h3>{EXAMPLES[currentValue].title}</h3>
      <p>{EXAMPLES[currentValue].description}</p>
      <pre>
        <code>{EXAMPLES[currentValue].code}</code>
      </pre>
    </div>
  );
  return (
    <Section id="examples" title="Examples">
      <h2>Examples</h2>
      <Tabs
        buttons={
          <>
            <TabButtons
              isSelected={currentValue == "components"}
              onSelect={() => {
                handleClick("components");
              }}
            >
              Components
            </TabButtons>
            <TabButtons
              isSelected={currentValue == "jsx"}
              onSelect={() => {
                handleClick("jsx");
              }}
            >
              JSX
            </TabButtons>
            <TabButtons
              isSelected={currentValue == "props"}
              onSelect={() => {
                handleClick("props");
              }}
            >
              Props
            </TabButtons>
            <TabButtons
              isSelected={currentValue == "state"}
              onSelect={() => {
                handleClick("state");
              }}
            >
              State
            </TabButtons>
          </>
        }
      >
        {tabExamples}
      </Tabs>
    </Section>
  );
};

export default Examples;
