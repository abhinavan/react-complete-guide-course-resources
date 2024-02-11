import Header from "./components/Header";
import CoreConcepts from "./components/CoreConcepts";
import { CORE_CONCEPTS } from "./data";
import TabButtons from "./components/TabButtons";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButtons>Components</TabButtons>
            <TabButtons>JSX</TabButtons>
            <TabButtons>Props</TabButtons>
            <TabButtons>State</TabButtons>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
