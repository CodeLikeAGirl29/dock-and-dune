"use client";
import { useMemo, useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { FaCalculator } from "react-icons/fa6";

const FLOOD_ZONES = [
  { id: "x", label: "Zone X — Minimal Risk", rate: 0.0012 },
  { id: "ae", label: "Zone AE — High Risk", rate: 0.0055 },
  { id: "ve", label: "Zone VE — Coastal High-Hazard", rate: 0.0115 },
];

const DOCK_RIDER_ANNUAL = 180;
const WINDSTORM_SHARE = 0.45;
const WIND_MITIGATION_DISCOUNT = 0.18;
const HOMEOWNERS_RATE = 0.0035;

export default function CostCalculator() {
  const [homeValue, setHomeValue] = useState(500000);
  const [floodZoneId, setFloodZoneId] = useState("ae");
  const [windMitigation, setWindMitigation] = useState(false);
  const [hasDock, setHasDock] = useState(true);

  const floodZone = FLOOD_ZONES.find((z) => z.id === floodZoneId);

  const currency = (value) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value || 0);

  const results = useMemo(() => {
    const value = Number(homeValue);
    const homeowners = value * HOMEOWNERS_RATE;
    const windstormPortion = homeowners * WINDSTORM_SHARE;
    const windSavings = windMitigation
      ? windstormPortion * WIND_MITIGATION_DISCOUNT
      : 0;
    const flood = value * floodZone.rate;
    const dockAddOn = hasDock ? DOCK_RIDER_ANNUAL : 0;

    const mid = Math.round(homeowners - windSavings + flood + dockAddOn);
    const low = Math.round(mid * 0.85);
    const high = Math.round(mid * 1.15);

    return {
      low,
      mid,
      high,
      monthly: Math.round(mid / 12),
      windSavings: Math.round(windSavings),
      flood: Math.round(flood),
    };
  }, [homeValue, floodZone, windMitigation, hasDock]);

  return (
    <section id="calculator" className="bg-navy py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 max-w-xl"
        >
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-seafoam mb-3">
            <FaCalculator className="size-3" /> Cost Estimator
          </div>
          <h2 className="font-display text-4xl sm:text-5xl text-cream">
            Ballpark the <span className="italic text-rope">Extra Cost</span>
          </h2>
          <p className="mt-4 text-cream/60 text-[15px] leading-relaxed">
            A rough estimate of how flood zone, wind mitigation status, and a
            private dock shift annual insurance costs. Illustrative only — not a
            quote. Get an actual quote from a licensed FL insurance agent before
            relying on any number here.
          </p>
        </m.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <m.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="coastal-card bg-navy-soft p-8 space-y-6"
          >
            <label className="flex flex-col gap-2">
              <span className="flex items-baseline justify-between text-xs font-semibold uppercase tracking-widest text-cream/50">
                Home Value
                <span className="font-display text-base normal-case tracking-normal text-cream tabular-nums">
                  {currency(homeValue)}
                </span>
              </span>
              <input
                type="range"
                min={150000}
                max={2000000}
                step={10000}
                value={homeValue}
                onChange={(e) => setHomeValue(Number(e.target.value))}
                className="w-full h-1.5 bg-cream/15 rounded-full appearance-none cursor-pointer outline-none
                  [&::-webkit-slider-thumb]:appearance-none
                  [&::-webkit-slider-thumb]:w-4
                  [&::-webkit-slider-thumb]:h-4
                  [&::-webkit-slider-thumb]:rounded-full
                  [&::-webkit-slider-thumb]:bg-rope
                  [&::-webkit-slider-thumb]:border-0
                  [&::-webkit-slider-thumb]:transition-transform
                  [&::-webkit-slider-thumb]:hover:scale-125
                  [&::-moz-range-thumb]:w-4
                  [&::-moz-range-thumb]:h-4
                  [&::-moz-range-thumb]:rounded-full
                  [&::-moz-range-thumb]:bg-rope
                  [&::-moz-range-thumb]:border-0"
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-cream/50">
                FEMA Flood Zone
              </span>
              <select
                value={floodZoneId}
                onChange={(e) => setFloodZoneId(e.target.value)}
                className="rounded-xl px-4 py-3 bg-navy text-cream text-sm border border-cream/15 focus:border-rope outline-0 transition-colors"
              >
                {FLOOD_ZONES.map((z) => (
                  <option key={z.id} value={z.id}>
                    {z.label}
                  </option>
                ))}
              </select>
            </label>

            <div className="grid grid-cols-2 gap-4">
              <m.button
                type="button"
                onClick={() => setWindMitigation((v) => !v)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className={`rounded-xl p-4 text-left transition-colors border ${
                  windMitigation
                    ? "border-rope bg-rope/15"
                    : "border-cream/15 hover:border-cream/30"
                }`}
              >
                <span className="block text-[10px] font-semibold uppercase tracking-widest text-cream/50 mb-1">
                  Wind Mitigation
                </span>
                <span className="font-display text-cream">
                  {windMitigation ? "On File" : "Not on File"}
                </span>
              </m.button>
              <m.button
                type="button"
                onClick={() => setHasDock((v) => !v)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className={`rounded-xl p-4 text-left transition-colors border ${
                  hasDock
                    ? "border-rope bg-rope/15"
                    : "border-cream/15 hover:border-cream/30"
                }`}
              >
                <span className="block text-[10px] font-semibold uppercase tracking-widest text-cream/50 mb-1">
                  Private Dock
                </span>
                <span className="font-display text-cream">
                  {hasDock ? "Yes" : "No"}
                </span>
              </m.button>
            </div>
          </m.div>

          <m.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="coastal-card bg-sand p-8 flex flex-col justify-center gap-6"
          >
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-rope-deep">
                Estimated Annual Insurance
              </span>
              <AnimatePresence mode="popLayout">
                <m.div
                  key={results.mid}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="font-display text-4xl text-navy mt-2 tabular-nums"
                >
                  {currency(results.low)}
                  <span className="text-navy/30 text-xl"> &ndash; </span>
                  {currency(results.high)}
                </m.div>
              </AnimatePresence>
              <span className="text-navy/40 text-xs tabular-nums">
                ~{currency(results.monthly)} / mo in escrow
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-navy/10">
              <div>
                <AnimatePresence mode="popLayout">
                  <m.span
                    key={results.flood}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="block font-display text-xl text-navy tabular-nums"
                  >
                    {currency(results.flood)}
                  </m.span>
                </AnimatePresence>
                <span className="text-[10px] font-semibold text-muted uppercase tracking-widest">
                  Flood Portion
                </span>
              </div>
              <div>
                <AnimatePresence mode="popLayout">
                  <m.span
                    key={windMitigation ? results.windSavings : "none"}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="block font-display text-xl text-seafoam tabular-nums"
                  >
                    {windMitigation
                      ? `-${currency(results.windSavings)}`
                      : "$0"}
                  </m.span>
                </AnimatePresence>
                <span className="text-[10px] font-semibold text-muted uppercase tracking-widest">
                  Wind Mitigation Savings
                </span>
              </div>
            </div>
          </m.div>
        </div>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 coastal-card bg-navy-soft flex flex-col sm:flex-row items-center justify-between gap-6 p-8"
        >
          <div>
            <h4 className="font-display text-xl text-cream">
              Looking at a specific waterfront property?
            </h4>
            <p className="text-cream/60 text-sm">
              I'll pull the actual flood zone, dock permit history, and wind
              mitigation status before you write an offer.
            </p>
          </div>
          <m.a
            href="mailto:lindsey.k.howard@exprealty.com?subject=Waterfront%20Property%20Question"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 18 }}
            className="rounded-full px-8 py-3 bg-rope text-navy font-semibold hover:bg-rope-deep hover:text-cream transition-colors whitespace-nowrap"
          >
            Ask Lindsey
          </m.a>
        </m.div>
      </div>
    </section>
  );
}
