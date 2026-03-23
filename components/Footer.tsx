import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#040404] text-gray-300">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 sm:flex-row sm:justify-between">
        <div>
          <h3 className="text-lg font-bold text-white">CampaignX</h3>
          <p className="mt-2 text-sm text-gray-400">Powerful campaign strategy, influence operations, and impact management.</p>
          <p className="mt-2 text-xs text-gray-400">© {new Date().getFullYear()} CampaignX. All rights reserved.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-medium text-white">Company</h4>
            <ul className="mt-2 space-y-1">
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li><Link href="/case-studies" className="hover:text-white">Case Studies</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-white">Connect</h4>
            <ul className="mt-2 space-y-1">
              <li><a href="mailto:hello@campaignx.com" className="hover:text-white">hello@campaignx.com</a></li>
              <li><a href="tel:+911234567890" className="hover:text-white">+91 12345 67890</a></li>
              <li><a href="https://wa.me/911234567890" className="hover:text-white">WhatsApp Chat</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
