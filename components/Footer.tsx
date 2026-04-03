import Link from 'next/link';
import { campaignContact } from '@/components/site-config';

export default function Footer() {
  return (
    <footer className="theme-footer theme-text-secondary border-t theme-transition">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 lg:flex-row lg:justify-between">
        <div>
          <h3 className="theme-text-primary font-display text-2xl font-semibold tracking-[0.12em]">CampaignX</h3>
          <p className="theme-text-muted mt-3 max-w-md text-sm leading-6">
            Election campaign management in India for Sarpanch, Nagar Palika, Nagar Parishad, and Nagar Nigam candidates who need structured strategy, digital execution, and booth-level control.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.18em]">
            <span className="theme-chip rounded-full border px-3 py-2">Digital Election Strategy</span>
            <span className="theme-chip rounded-full border px-3 py-2">Booth-Level Planning</span>
            <span className="theme-chip rounded-full border px-3 py-2">Political Campaign Services Rajasthan</span>
          </div>
          <p className="theme-text-muted mt-2 text-xs">© {new Date().getFullYear()} CampaignX. All rights reserved.</p>
        </div>
        <div className="grid gap-6 text-sm sm:grid-cols-3">
          <div>
            <h4 className="theme-text-primary font-medium">Explore</h4>
            <ul className="mt-2 space-y-1">
              <li><Link href="/#who-we-are" className="theme-transition hover:text-[var(--text-primary)]">Who We Are</Link></li>
              <li><Link href="/services" className="theme-transition hover:text-[var(--text-primary)]">Services</Link></li>
              <li><Link href="/#plans" className="theme-transition hover:text-[var(--text-primary)]">Plans</Link></li>
              <li><Link href="/contact" className="theme-transition hover:text-[var(--text-primary)]">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="theme-text-primary font-medium">Election Focus</h4>
            <ul className="mt-2 space-y-1">
              <li>Sarpanch campaigns</li>
              <li>Nagar Palika campaigns</li>
              <li>Nagar Parishad campaigns</li>
              <li>Nagar Nigam campaigns</li>
            </ul>
          </div>
          <div>
            <h4 className="theme-text-primary font-medium">Connect</h4>
            <ul className="mt-2 space-y-1">
              <li><a href={`mailto:${campaignContact.email}`} className="theme-transition hover:text-[var(--text-primary)]">{campaignContact.email}</a></li>
              <li><a href={campaignContact.phoneHref} className="theme-transition hover:text-[var(--text-primary)]">{campaignContact.phoneDisplay}</a></li>
              <li><a href={campaignContact.whatsappHref} className="theme-transition hover:text-[var(--text-primary)]">WhatsApp Chat</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
