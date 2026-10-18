import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <Link href="/" className="footer-brand">The Paw Concierge<span>Trusted care. Happier pets.</span></Link>
          <p>Thoughtful care for the pets who make your house a home.</p>
        </div>
        <div><h3>Explore</h3><Link href="/services">Our services</Link><Link href="/book">Book a service</Link><Link href="/about">About us</Link><Link href="/careers">Careers</Link></div>
        <div><h3>Get in touch</h3><Link href="/contact">Contact us</Link><p>South Africa</p><p>Hours by appointment</p></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} The Paw Concierge</span><span>Made with care for pets and their people.</span></div>
    </footer>
  );
}
