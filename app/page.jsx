import Link from "next/link";
import Calculator from "./components/Calculator";
import Countdown from "./components/Countdown";
import ProductGrid from "./components/ProductGrid";
import CompatibilityChecker from "./components/CompatibilityChecker";

export default function HomePage() {
  return (
    <>
      <header className="top">
        <div className="wrap top-inner">
          <Link className="brand" href="/" aria-label="GameCost India home">
            GameCost <span>India</span>
          </Link>
          <div className="fan">
            Unofficial fan guide. Not affiliated with Rockstar Games or
            Take-Two.
          </div>
        </div>
      </header>

      <main className="wrap">
        <div className="hero">
          <div>
            <span className="hero-eyebrow">The ultimate GTA 6 India guide</span>
            <h1>What will GTA 6 really cost you in India?</h1>
            <p className="lede">
              The game is ₹5,999, but it only runs on consoles. Pick what you
              already own and see the full bill.
            </p>
            <div className="hero-actions">
              <a href="#calculator">
                Calculate your cost <span aria-hidden="true"> ↗</span>
              </a>
              <a href="#compatibility">Check compatibility</a>
            </div>
            <div className="count" aria-live="polite">
              <Countdown />
              <small>Launch: 19 November 2026 (midnight IST)</small>
            </div>
          </div>
          <div id="calculator">
            <Calculator />
          </div>
        </div>

        <section id="compatibility">
          <h2>GTA 6 compatibility checker</h2>
          <p className="section-lede">
            Wondering whether your PC or console is ready? Check your setup
            below. We clearly separate confirmed platform information from
            estimates.
          </p>
          <CompatibilityChecker />
          <p className="note">
            Official platform status checked on 19 November 2026.{" "}
            <a
              href="https://www.rockstargames.com/VI"
              target="_blank"
              rel="noopener noreferrer"
            >
              Check Rockstar’s official GTA VI page
            </a>
            . PC requirements are not available, so PC results are informational
            and cannot confirm playability.
          </p>
        </section>

        {/* <section id="facts">
          <h2>Key facts</h2>
          <dl className="facts">
            <dt>Release date</dt>
            <dd>
              19 November 2026, worldwide. Pre-loading opened on 12 November for
              pre-orders.
            </dd>
            <dt>Platforms</dt>
            <dd>
              PS5 (including PS5 Pro), Xbox Series X and Xbox Series S. No PS4,
              Xbox One or PC version at launch.
            </dd>
            <dt>PC</dt>
            <dd>
              Rockstar hasn’t announced a PC release. One report expects it no
              earlier than November 2027.
            </dd>
            <dt>Editions</dt>
            <dd>
              Standard ₹5,999. Ultimate ₹7,499, which adds vehicles, clothing,
              weapons and customisation items.
            </dd>
            <dt>Physical copy</dt>
            <dd>
              Reported to ship with a download code in the box instead of a
              disc.
            </dd>
            <dt>Microtransactions</dt>
            <dd>
              Rockstar has said there are no real-money purchases at launch.
            </dd>
            <dt>Online mode</dt>
            <dd>
              Not officially detailed. Reports based on dataminers point to
              2027, so treat it as unconfirmed.
            </dd>
            <dt>Age rating</dt>
            <dd>18+ for violence, sex and drugs.</dd>
          </dl>
          <p className="note">
            Editorial note: verify all launch dates, prices, platform details
            and reports against current official sources before publishing
            updates.
          </p>
        </section> */}

        {/* <section id="consoles">
          <h2>Console prices in India</h2>
          <div className="scroll">
            <table>
              <thead><tr><th>Console</th><th>Reported price</th></tr></thead>
              <tbody>
                <tr><td>Xbox Series S 512GB</td><td>₹39,990</td></tr>
                <tr><td>Xbox Series S 1TB</td><td>₹44,990</td></tr>
                <tr><td>PS5 Disc Edition</td><td>₹54,990</td></tr>
                <tr><td>Xbox Series X</td><td>₹55,990 to ₹74,999</td></tr>
              </tbody>
            </table>
          </div>
          <p className="note">
            Reported prices can change. Check the retailer and official store before purchasing.
          </p>
        </section> */}

        <section id="gear">
          <h2>Gear you’ll need</h2>
          <p className="disc">
            As an Amazon Associate I earn from qualifying purchases. Some links
            below are affiliate links. If you buy through them, this site may
            earn a commission at no extra cost to you. Prices change often;
            check Amazon for current details.
          </p>
          <ProductGrid />
        </section>

        {/* <section id="faq">
          <h2>Questions people ask</h2>
          <details>
            <summary>Can I play GTA 6 on my laptop?</summary>
            <p>
              Not at launch. It’s console-only, and Rockstar hasn’t announced a
              PC version.
            </p>
          </details>
          <details>
            <summary>Does GTA 6 have a worldwide leaderboard?</summary>
            <p>
              None has been announced. PlayStation and Xbox track trophies and
              achievements, but that’s a platform feature, not a game ranking.
            </p>
          </details>
          <details>
            <summary>Can I post gameplay videos and earn from them?</summary>
            <p>
              Rockstar’s policy permits non-commercial gameplay videos. Videos
              that earn money fall outside that general permission, though not
              every one gets removed. Leaked footage and standalone story
              spoilers like endings are the likeliest to be taken down. Read
              Rockstar’s policy before you rely on ad income.
            </p>
          </details>
          <details>
            <summary>Is the Ultimate Edition worth ₹1,500 more?</summary>
            <p>
              It adds cosmetic and in-game extras, not a different story. If you
              only want the main game, Standard covers it.
            </p>
          </details>
        </section> */}
      </main>

      <footer>
        <div className="wrap">
          <p>
            This is an unofficial fan guide. Game names and trademarks belong to
            their owners. Figures were last checked on 18 November 2026 from
            news reports, including{" "}
            <a
              href="https://www.businesstoday.in/latest/trends/photo/gta-6-arrives-at-midnight-on-19-november-india-price-preload-and-editions-565630-2026-11-04"
              rel="noopener noreferrer"
            >
              Business Today
            </a>{" "}
            and{" "}
            <a
              href="https://www.brut.media/in/articles/gta-6-release-date-platforms-price-and-new-features-everything-you-need-to-know"
              rel="noopener noreferrer"
            >
              Brut
            </a>
            . Rockstar and the store pages are the final word.
          </p>
          <nav className="footer-nav" aria-label="Footer">
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/affiliate-disclosure">Affiliate Disclosure</Link>
          </nav>
        </div>
      </footer>
    </>
  );
}
