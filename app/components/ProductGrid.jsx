import Image from "next/image";

const products = [
  {
    heading: "Consoles",
    items: [
      [
        "/images/PS5.png",
        "PlayStation",
        "PlayStation 5 Disc Edition",
        "Play GTA 6 on PS5. A great option if you want physical-game support too.",
        "https://link.amazon/B0eGv1HFQ",
      ],
      [
        "/images/xboxS.png",
        "Xbox",
        "Xbox Series S",
        "All-digital way to play on the current Xbox generation.",
        "https://link.amazon/B0fDmuCUP",
      ],
      [
        "/images/xboxX.png",
        "Xbox",
        "Xbox Series X",
        "A more powerful Xbox option with a disc drive for supported physical games.",
        "https://link.amazon/B04ac0Wwz",
      ],
    ],
  },
  {
    heading: "Controllers and audio",
    items: [
      [
        "/images/DualSenseWirelessControl.png",
        "PlayStation accessory",
        "DualSense Wireless Controller",
        "A spare controller for local multiplayer or a replacement for your current one.",
        "https://link.amazon/B07YhauYX",
      ],
      [
        "/images/XboxWirelessControl.png",
        "Xbox accessory",
        "Xbox Wireless Controller",
        "A comfortable second controller for Xbox Series X|S gaming.",
        "https://link.amazon/B00o9KBXB",
      ],
      [
        "/images/gamingheadset.png",
        "Audio",
        "Gaming Headset",
        "Hear in-game audio clearly and chat with friends while playing online.",
        "https://link.amazon/B0imABbQa",
      ],
    ],
  },
  {
    heading: "Screen and storage",
    items: [
      [
        "/images/gamingtv.png",
        "Big-screen gaming",
        "4K Ultra HD TV with HDMI 2.1",
        "Look for HDMI 2.1 and 120 Hz support when comparing compatible TVs.",
        "https://link.amazon/B00ix65Ex",
      ],
      [
        "/images/gamingmonitor.png",
        "Desk setup",
        "Gaming Monitor with HDMI 2.1",
        "A desk-friendly screen option. Check resolution, refresh rate and console compatibility.",
        "https://link.amazon/B0bz4VRju",
      ],
      [
        "/images/extdrive.png",
        "Storage",
        "External SSD for Console",
        "Add storage for your game library. Check the supported drive type and compatibility first.",
        "https://link.amazon/B085OI1O2",
      ],
    ],
  },
  {
    heading: "For recording and streaming",
    items: [
      [
        "/images/recording.png",
        "Creator gear",
        "HDMI Capture Card",
        "Capture console gameplay on a laptop for recording, streaming and creating videos.",
        "https://link.amazon/B0gvQkf5S",
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
                  <Image src={icon} alt={tag} width={300} height={300} />
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
                    href={query}
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
