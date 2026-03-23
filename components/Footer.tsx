import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="theme-footer theme-text-secondary border-t theme-transition">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 sm:flex-row sm:justify-between">
        <div>
          <h3 className="theme-text-primary text-lg font-bold">CampaignX</h3>
          <p className="theme-text-muted mt-2 text-sm">Powerful campaign strategy, influence operations, and impact management.</p>
          <p className="theme-text-muted mt-2 text-xs">© {new Date().getFullYear()} CampaignX. All rights reserved.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="theme-text-primary font-medium">Company</h4>
            <ul className="mt-2 space-y-1">
              <li><Link href="/about" className="theme-transition hover:text-[var(--text-primary)]">About</Link></li>
              <li><Link href="/case-studies" className="theme-transition hover:text-[var(--text-primary)]">Case Studies</Link></li>
              <li><Link href="/contact" className="theme-transition hover:text-[var(--text-primary)]">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="theme-text-primary font-medium">Connect</h4>
            <ul className="mt-2 space-y-1">
              <li><a href="mailto:hello@campaignx.com" className="theme-transition hover:text-[var(--text-primary)]">hello@campaignx.com</a></li>
              <li><a href="tel:+911234567890" className="theme-transition hover:text-[var(--text-primary)]">+91 12345 67890</a></li>
              <li><a href="https://wa.me/916375983593" className="theme-transition hover:text-[var(--text-primary)]">WhatsApp Chat</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
