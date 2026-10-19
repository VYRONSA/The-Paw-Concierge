import Link from "next/link";

const services = [
  { n: "01", title: "Overnight pet sitting", text: "Comforting, attentive care in the place your pet knows best.", icon: "⌂", image: "/images/overnight-pet-sitting.png" },
  { n: "02", title: "Dog walking", text: "Fresh air, movement and happy tails, at your dog’s pace.", icon: "♧", image: "/images/dog-walking.png" },
  { n: "03", title: "Feeding visits", text: "Reliable mealtimes, fresh water and a little extra attention.", icon: "♡", image: "/images/feeding-visits.png" },
  { n: "04", title: "Companionship", text: "Play, affection and company for pets who need a friendly face.", icon: "✳", image: "/images/companionship.png" },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Personal care, right at home</p>
          <h1>Care for the ones who mean <em>the world.</em></h1>
          <p className="hero-intro">Thoughtful pet care that keeps tails wagging and gives you peace of mind — wherever your day takes you.</p>
          <div className="hero-actions"><Link className="button button-gold" href="/book">Book a service <span>↗</span></Link><Link className="button button-outline" href="/services">Explore our services</Link></div>
          <div className="trust-row"><span><b>✦</b> Care with heart</span><span><b>⌂</b> Familiar surroundings</span><span><b>♡</b> Every pet matters</span></div>
        </div>
        <div className="hero-photo" role="img" aria-label="Golden retriever relaxing at home">
          <div className="photo-note">Happy pets,<br/><em>happier people.</em> ♡</div>
          <div className="hero-photo-caption"><span>01 / 04</span><span>At home, where they feel best</span></div>
        </div>
      </section>

      <section className="section services-section">
        <div className="section-heading"><div><p className="eyebrow">Thoughtful care, tailored to them</p><h2>Little things make <em>a big difference.</em></h2></div><Link className="text-link" href="/services">Discover our services <span>↗</span></Link></div>
        <div className="service-grid">
          {services.map((service) => <article className="service-card" key={service.n}>
            <div className="service-image" style={{ backgroundImage: `url("${service.image}")` }}><span>{service.n}</span></div>
            <div className="service-card-body"><span className="service-icon">{service.icon}</span><h3>{service.title}</h3><p>{service.text}</p><Link href="/services" className="text-link">Learn more <span>↗</span></Link></div>
          </article>)}
        </div>
      </section>

      <section className="care-band">
        <div className="care-band-image" role="img" aria-label="Pets relaxing together at home" />
        <div className="care-band-copy"><p className="eyebrow">Your home. Their happy place.</p><h2>Care that feels like <em>coming home.</em></h2><p>We respect your pet’s routines, their little quirks and the comfort of familiar surroundings. Every visit is shaped around what helps them feel safe, settled and loved.</p><Link className="button button-light" href="/about">Get to know us <span>↗</span></Link></div>
      </section>

      <section className="section steps-section">
        <div className="section-heading"><div><p className="eyebrow">Simple from the start</p><h2>How it <em>works.</em></h2></div><p className="heading-note">A few simple steps to arrange care that fits your pet and your schedule.</p></div>
        <div className="steps-grid">
          {[["01","Choose a service","Tell us what kind of care your pet needs."],["02","Share your details","Let us know about your pet, dates and routine."],["03","Confirm the plan","We’ll follow up to confirm the details and availability."]].map(([n,title,text]) => <article className="step-card" key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
        <div className="center-action"><Link href="/book" className="button button-gold">Let’s arrange care <span>↗</span></Link></div>
      </section>

      <section className="careers-strip"><div><p className="eyebrow">Love animals?</p><h2>Make a difference, <em>one paw at a time.</em></h2><p>Join a caring team that puts pets first.</p></div><Link href="/careers" className="button button-outline">Explore careers <span>↗</span></Link></section>
    </>
  );
}
