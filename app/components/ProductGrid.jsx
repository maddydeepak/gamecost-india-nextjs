const products = [
  {
    heading: "Consoles",
    items: [
      [
        "🎮",
        "PlayStation",
        "PlayStation 5 Disc Edition",
        "Play GTA 6 on PS5. A great option if you want physical-game support too.",
        "PlayStation 5 Disc Edition console",
      ],
      [
        "🕹️",
        "Xbox · Budget pick",
        "Xbox Series S",
        "The more affordable, all-digital way to play on the current Xbox generation.",
        "Xbox Series S console",
      ],
      [
        "🎮",
        "Xbox",
        "Xbox Series X",
        "A more powerful Xbox option with a disc drive for supported physical games.",
        "Xbox Series X console",
      ],
    ],
  },
  {
    heading: "Controllers and audio",
    items: [
      [
        "🎮",
        "PlayStation accessory",
        "DualSense Wireless Controller",
        "A spare controller for local multiplayer or a replacement for your current one.",
        "PS5 DualSense wireless controller",
      ],
      [
        "🕹️",
        "Xbox accessory",
        "Xbox Wireless Controller",
        "A comfortable second controller for Xbox Series X|S gaming.",
        "Xbox wireless controller",
      ],
      [
        "🎧",
        "Audio",
        "Gaming Headset",
        "Hear in-game audio clearly and chat with friends while playing online.",
        "gaming headset PS5 Xbox",
      ],
    ],
  },
  {
    heading: "Screen and storage",
    items: [
      [
        "📺",
        "Big-screen gaming",
        "4K TV with HDMI 2.1",
        "Look for HDMI 2.1 and 120 Hz support when comparing compatible TVs.",
        "4K TV HDMI 2.1 120Hz",
      ],
      [
        "🖥️",
        "Desk setup",
        "Gaming Monitor with HDMI 2.1",
        "A desk-friendly screen option. Check resolution, refresh rate and console compatibility.",
        "4K gaming monitor HDMI 2.1",
      ],
      [
        "💾",
        "Storage",
        "External SSD for Console",
        "Add storage for your game library. Check the supported drive type and compatibility first.",
        "external SSD for PS5 Xbox",
      ],
    ],
  },
  {
    heading: "For recording and streaming",
    items: [
      [
        "📹",
        "Creator gear",
        "HDMI Capture Card",
        "Capture console gameplay on a laptop for recording, streaming and creating videos.",
        "HDMI capture card 4K",
      ],
    ],
  },
];

function amazonSearchUrl(query) {
  const tag = process.env.NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG || "";
  const url = new URL("https://www.amazon.in/s");
  url.searchParams.set("k", query);
  if (tag) url.searchParams.set("tag", tag);
  return url.toString();
}

export default function ProductGrid() {
  return (
    <>
      {products.map((group) => (
        <div key={group.heading}>
          <h3>{group.heading}</h3>
          <div className="gear-grid">
            {group.items.map(([icon, tag, name, description, query]) => (
              <article className="product-card" key={name}>
                <div className="product-art" aria-hidden="true">
                  {icon}
                </div>
                <div className="product-info">
                  <span className="product-tag">{tag}</span>
                  <h4>{name}</h4>
                  <p>{description}</p>
                  <div className="product-price">
                    Check latest price
                    <small>Price may vary by seller</small>
                  </div>
                  <a
                    className="buy"
                    href={amazonSearchUrl(query)}
                    target="_blank"
                    rel="sponsored nofollow noopener noreferrer"
                    aria-label={`Search Amazon India for ${query}`}
                    // onClick={() => {
                    //   if (typeof window !== "undefined" && window.gtag) {
                    //     window.gtag("event", "affiliate_click", {
                    //       product_name: name,
                    //       product_query: query
                    //     });
                    //   }
                    // }}
                  >
                    View Deal
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
