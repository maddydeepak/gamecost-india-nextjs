 "use client";

import { useMemo, useState } from "react";

const formatINR = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(value);

export default function Calculator() {
  const [consolePrice, setConsolePrice] = useState(0);
  const [editionPrice, setEditionPrice] = useState(5999);
  const [extras, setExtras] = useState("0");

  const extraValue = Math.max(0, Number(extras) || 0);
  const total = useMemo(
    () => consolePrice + editionPrice + extraValue,
    [consolePrice, editionPrice, extraValue]
  );

  return (
    <div className="receipt">
      <h2>Cost calculator</h2>

      <label htmlFor="console">Console</label>
      <select
        id="console"
        value={consolePrice}
        onChange={(event) => setConsolePrice(Number(event.target.value))}
      >
        <option value="0">I already own a PS5 or Xbox Series X|S</option>
        <option value="39990">Xbox Series S 512GB (₹39,990)</option>
        <option value="44990">Xbox Series S 1TB (₹44,990)</option>
        <option value="54990">PS5 Disc Edition (₹54,990)</option>
        <option value="55990">Xbox Series X (from ₹55,990)</option>
      </select>

      <label htmlFor="edition">Edition</label>
      <select
        id="edition"
        value={editionPrice}
        onChange={(event) => setEditionPrice(Number(event.target.value))}
      >
        <option value="5999">Standard (₹5,999)</option>
        <option value="7499">Ultimate (₹7,499)</option>
      </select>

      <label htmlFor="extras">Extras you need, in ₹ (TV, capture card, subscription)</label>
      <input
        id="extras"
        type="number"
        min="0"
        step="500"
        value={extras}
        onChange={(event) => setExtras(event.target.value)}
        inputMode="numeric"
      />

      <dl className="sum" aria-live="polite">
        <div><dt>Console</dt><dd>{formatINR(consolePrice)}</dd></div>
        <div><dt>Game</dt><dd>{formatINR(editionPrice)}</dd></div>
        <div><dt>Extras</dt><dd>{formatINR(extraValue)}</dd></div>
      </dl>

      <div className="total">
        <span>Total</span>
        <b>{formatINR(total)}</b>
      </div>
      <p className="note">
        Prices are estimates based on reported figures. Check the PlayStation,
        Xbox or retailer page before you pay.
      </p>
    </div>
  );
}
