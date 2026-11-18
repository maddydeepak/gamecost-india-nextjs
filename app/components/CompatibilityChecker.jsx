"use client";

import { useState } from "react";

const cpuOptions = [
  "Intel Core i5 (7th Gen or older)",
  "Intel Core i5 (8th–9th Gen)",
  "Intel Core i5 (10th–11th Gen)",
  "Intel Core i5 (12th Gen)",
  "Intel Core i5 (13th–14th Gen)",
  "AMD Ryzen 5",
  "AMD Ryzen 7",
  "Other / Not sure",
];

export default function CompatibilityChecker() {
  const [platform, setPlatform] = useState("PC");
  const [gpu, setGpu] = useState("Choose GPU");
  const [ram, setRam] = useState("Choose RAM");
  const [cpu, setCpu] = useState("Choose processor");
  const [storage, setStorage] = useState("Choose storage");
  const [freeSpace, setFreeSpace] = useState("Choose available space");
  const [pcType, setPcType] = useState("Desktop");
  const [console, setConsole] = useState("PlayStation 5");
  const [checked, setChecked] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setChecked(true);
  }

  return (
    <div className="compat-layout">
      <form className="compat-form" onSubmit={handleSubmit}>
        <div className="compat-intro">
          <span className="compat-kicker">FREE INTERACTIVE TOOL</span>
          <h3>Can your setup play GTA 6?</h3>
          <p>Choose your platform and enter your hardware details for a quick compatibility status.</p>
        </div>

        <label htmlFor="compat-platform">What do you play on?</label>
        <select id="compat-platform" value={platform} onChange={(event) => { const nextPlatform = event.target.value; setPlatform(nextPlatform); setConsole(nextPlatform === "Xbox" ? "Xbox Series X" : "PlayStation 5"); setChecked(false); }}>
          <option value="PC">Windows PC / Laptop</option>
          <option value="PlayStation">PlayStation</option>
          <option value="Xbox">Xbox</option>
        </select>

        {platform === "PC" ? (
          <div className="compat-fields">
            <div className="compat-two-col">
              <div>
                <label htmlFor="compat-type">PC type</label>
                <select id="compat-type" value={pcType} onChange={(event) => { setPcType(event.target.value); setChecked(false); }}>
                  <option>Desktop</option>
                  <option>Laptop</option>
                </select>
              </div>
              <div>
                <label htmlFor="compat-gpu">Graphics card (GPU)</label>
                <select id="compat-gpu" value={gpu} onChange={(event) => { setGpu(event.target.value); setChecked(false); }}>
                  <option value="Choose GPU">Choose GPU</option>
                  <option>NVIDIA GeForce RTX 3060</option>
                  <option>NVIDIA GeForce RTX 4060</option>
                  <option>NVIDIA GeForce RTX 4070</option>
                  <option>NVIDIA GeForce RTX 4080</option>
                  <option>NVIDIA GeForce GTX 1650</option>
                  <option>NVIDIA GeForce RTX 2060</option>
                  <option>AMD Radeon (specify model in notes)</option>
                  <option>Integrated graphics</option>
                  <option>Other / Not sure</option>
                </select>
              </div>
            </div>
            <div className="compat-two-col">
              <div>
                <label htmlFor="compat-cpu">Processor (CPU)</label>
                <select id="compat-cpu" value={cpu} onChange={(event) => { setCpu(event.target.value); setChecked(false); }}>
                  <option value="Choose processor">Choose processor</option>
                  {cpuOptions.map((option) => <option key={option}>{option}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="compat-ram">RAM</label>
                <select id="compat-ram" value={ram} onChange={(event) => { setRam(event.target.value); setChecked(false); }}>
                  <option value="Choose RAM">Choose RAM</option>
                  <option>8 GB</option>
                  <option>16 GB</option>
                  <option>32 GB</option>
                  <option>64 GB</option>
                  <option>Other / Not sure</option>
                </select>
              </div>
            </div>
            <div className="compat-two-col">
              <div>
                <label htmlFor="compat-storage">Storage type and capacity</label>
                <select id="compat-storage" value={storage} onChange={(event) => { setStorage(event.target.value); setChecked(false); }}>
                  <option value="Choose storage">Choose storage</option>
                  <option>256 GB SSD</option>
                  <option>512 GB SSD</option>
                  <option>1 TB SSD</option>
                  <option>2 TB SSD or more</option>
                  <option>HDD</option>
                  <option>Other / Not sure</option>
                </select>
              </div>
              <div>
                <label htmlFor="compat-free">Available free space</label>
                <select id="compat-free" value={freeSpace} onChange={(event) => { setFreeSpace(event.target.value); setChecked(false); }}>
                  <option value="Choose available space">Choose available space</option>
                  <option>Less than 100 GB</option>
                  <option>100–200 GB</option>
                  <option>200–300 GB</option>
                  <option>300–400 GB</option>
                  <option>More than 400 GB</option>
                  <option>Not sure</option>
                </select>
              </div>
            </div>
          </div>
        ) : (
          <div className="compat-fields">
            <label htmlFor="compat-console">Select your console</label>
            <select id="compat-console" value={console} onChange={(event) => { setConsole(event.target.value); setChecked(false); }}>
              {platform === "PlayStation" ? (
                <>
                  <option>PlayStation 5</option>
                  <option>PlayStation 5 Digital Edition</option>
                  <option>PlayStation 5 Slim</option>
                  <option>PlayStation 5 Pro</option>
                  <option>PlayStation 4 / PS4 Pro</option>
                </>
              ) : (
                <>
                  <option>Xbox Series X</option>
                  <option>Xbox Series S</option>
                  <option>Xbox One / One X</option>
                </>
              )}
            </select>
          </div>
        )}

        <button className="compat-submit" type="submit">Check compatibility <span aria-hidden="true">→</span></button>
      </form>

      <aside className="compat-result" aria-live="polite">
        {!checked ? (
          <div className="compat-placeholder">
            <div className="compat-icon" aria-hidden="true">⌁</div>
            <h4>Your result will appear here</h4>
            <p>Enter your setup details and select “Check compatibility” to see what is officially known.</p>
            <div className="compat-fact"><strong>Official status</strong><span>PC requirements not announced</span></div>
          </div>
        ) : platform === "PC" ? (
          <div className="compat-outcome">
            <span className="compat-status status-unknown">Cannot confirm yet</span>
            <h4>Your PC profile</h4>
            <dl className="compat-specs">
              <div><dt>PC type</dt><dd>{pcType}</dd></div>
              <div><dt>GPU</dt><dd>{gpu}</dd></div>
              <div><dt>CPU</dt><dd>{cpu}</dd></div>
              <div><dt>RAM</dt><dd>{ram}</dd></div>
              <div><dt>Storage</dt><dd>{storage}</dd></div>
              <div><dt>Free space</dt><dd>{freeSpace}</dd></div>
            </dl>
            <p className="compat-explain"><strong>Why no pass/fail score?</strong> Rockstar has not announced a PC version or published PC system requirements. Your hardware cannot yet be compared against an official minimum or recommended specification.</p>
            <p className="compat-estimate"><strong>General estimate, not a GTA 6 verdict:</strong> {gpu.includes("RTX 3060") ? "The RTX 3060 is a capable mid-range GPU for many current PC games, but that alone does not establish GTA 6 compatibility." : "Your selected GPU can be compared with other games’ requirements, but that does not establish GTA 6 compatibility."} CPU generation, graphics memory, laptop power limits and the eventual PC port also matter.</p>
          </div>
        ) : (
          <div className="compat-outcome">
            {((platform === "PlayStation" && console.startsWith("PlayStation 5")) || (platform === "Xbox" && console.startsWith("Xbox Series"))) ? (
              <span className="compat-status status-supported">Officially supported platform</span>
            ) : (
              <span className="compat-status status-unsupported">Not listed as supported</span>
            )}
            <h4>{console}</h4>
            <p>{((platform === "PlayStation" && console.startsWith("PlayStation 5")) || (platform === "Xbox" && console.startsWith("Xbox Series")))
              ? "GTA 6 is officially announced for this console family. Check your console's store and current game listing for edition and availability details."
              : "Rockstar's announced GTA 6 platforms are PlayStation 5 and Xbox Series X|S. This console model is not on the announced platform list."}</p>
            <p className="compat-note">This checks platform compatibility only, not account region, store availability, subscription requirements or purchase eligibility.</p>
          </div>
        )}
      </aside>
    </div>
  );
}
