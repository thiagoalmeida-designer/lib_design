import "./App.css";

function App() {
  return (
    <>
      <section className="container typography">
        <section className="intro">
          <small>Typography</small>
          <h4>Typography - Fluid with CSS Clamp</h4>
          <p>
            This example demonstrates how to use the CSS clamp function to
            create fluid typography that scales between specified minimum and
            maximum font sizes based on the viewport width.
          </p>
        </section>

        <h1>
          Big | This text will scale between 64px at 375px and 80px at 1440px
        </h1>
        <h2>
          Heading XL | This text will scale between 56px at 375px and 72px at
          1440px
        </h2>
        <h3>
          Heading LG | This text will scale between 48px at 375px and 64px at
          1440px
        </h3>
        <h4>
          Heading | This text will scale between 32px at 375px and 48px at
          1440px
        </h4>
        <h5>
          Subheading | This text will scale between 20px at 375px and 36px at
          1440px
        </h5>
        <h6>
          Subheading SM | This text will scale between 16px at 375px and 24px at
          1440px
        </h6>
        <p>
          Text |This text will scale between 14px at 375px and 16px at 1440px
        </p>
        <p className="caption">
          Caption | This text will scale between 12px at 375px and 14px at
          1440px
        </p>
      </section>
    </>
  );
}

export default App;
