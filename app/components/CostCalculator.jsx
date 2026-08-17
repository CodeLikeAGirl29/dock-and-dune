"use client";
import { useMemo, useState } from "react";
import { m } from "framer-motion";
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
    <section id="calculator" className="paper-section py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 max-w-2xl"
        >
          <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-gulf mb-3">
            <FaCalculator className="size-3" /> Waterfront Cost Impact Estimator
          </div>
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
            Ballpark the <span className="text-signal">Extra Cost</span>
          </h2>
          <p className="mt-4 text-ink/60 text-[15px] leading-relaxed">
            A rough estimate of how flood zone, wind mitigation status, and a
            private dock shift annual insurance costs. Illustrative only —
            not a quote. Get an actual quote from a licensed FL insurance
            agent before relying on any number here.
          </p>
        </m.div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="corner-marks border border-ink/10 p-8 space-y-6">
            <label className="flex flex-col gap-2">
              <span className="flex items-baseline justify-between font-mono text-[11px] uppercase tracking-widest text-ink/50">
                Home Value
                <span className="font-display text-sm normal-case tracking-normal text-ink font-bold">
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
                className="w-full h-1 bg-ink/15 rounded-sm appearance-none cursor-pointer outline-none accent-gulf
                  [&::-webkit-slider-thumb]:appearance-none
                  [&::-webkit-slider-thumb]:w-4
                  [&::-webkit-slider-thumb]:h-4
                  [&::-webkit-slider-thumb]:rounded-full
                  [&::-webkit-slider-thumb]:bg-gulf
                  [&::-webkit-slider-thumb]:border-0
                  [&::-moz-range-thumb]:w-4
                  [&::-moz-range-thumb]:h-4
                  [&::-moz-range-thumb]:rounded-full
                  [&::-moz-range-thumb]:bg-gulf
                  [&::-moz-range-thumb]:border-0"
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className="font-mono text-[11px] uppercase tracking-widest text-ink/50">
                FEMA Flood Zone
              </span>
              <select
                value={floodZoneId}
                onChange={(e) => setFloodZoneId(e.target.value)}
                className="px-3 py-2 bg-transparent text-ink text-sm border border-ink/20 focus:border-gulf outline-0"
              >
                {FLOOD_ZONES.map((z) => (
                  <option key={z.id} value={z.id}>
                    {z.label}
                  </option>
                ))}
              </select>
            </label>

            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setWindMitigation((v) => !v)}
                className={`p-4 border text-left transition-colors ${
                  windMitigation
                    ? "border-gulf bg-signal/10"
                    : "border-ink/15 hover:border-ink/30"
                }`}
              >
                <span className="block font-mono text-[10px] uppercase tracking-widest text-ink/50 mb-1">
                  Wind Mitigation
                </span>
                <span className="font-display font-bold text-ink">
                  {windMitigation ? "On File" : "Not on File"}
                </span>
              </button>
              <button
                type="button"
                onClick={() => setHasDock((v) => !v)}
                className={`p-4 border text-left transition-colors ${
                  hasDock
                    ? "border-gulf bg-signal/10"
                    : "border-ink/15 hover:border-ink/30"
                }`}
              >
                <span className="block font-mono text-[10px] uppercase tracking-widest text-ink/50 mb-1">
                  Private Dock
                </span>
                <span className="font-display font-bold text-ink">
                  {hasDock ? "Yes" : "No"}
                </span>
              </button>
            </div>
          </div>

          <div className="corner-marks border border-ink/10 bg-background p-8 flex flex-col justify-center gap-6">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-widest text-gulf">
                Estimated Annual Insurance
              </span>
              <div className="font-display text-4xl font-bold text-foreground mt-2">
                {currency(results.low)}
                <span className="text-foreground/40 font-sans text-xl">
                  {" "}
                  &ndash;{" "}
                </span>
                {currency(results.high)}
              </div>
              <span className="text-foreground/40 text-xs">
                ~{currency(results.monthly)} / mo in escrow
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-foreground/10">
              <div>
                <span className="block font-display text-xl font-bold text-foreground">
                  {currency(results.flood)}
                </span>
                <span className="font-mono text-[10px] text-foreground/50 uppercase tracking-widest">
                  Flood Portion
                </span>
              </div>
              <div>
                <span className="block font-display text-xl font-bold text-emerald-400">
                  {windMitigation ? `-${currency(results.windSavings)}` : "$0"}
                </span>
                <span className="font-mono text-[10px] text-foreground/50 uppercase tracking-widest">
                  Wind Mitigation Savings
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 p-8 border border-ink/10">
          <div>
            <h4 className="font-display text-xl font-bold text-ink">
              Looking at a specific waterfront property?
            </h4>
            <p className="text-ink/60 text-sm">
              I'll pull the actual flood zone, dock permit history, and
              wind mitigation status before you write an offer.
            </p>
          </div>
          <a
            href="mailto:lindsey.howard.re@outlook.com?subject=Waterfront%20Property%20Question"
            className="corner-marks px-8 py-3 bg-signal text-ink font-bold hover:opacity-90 transition whitespace-nowrap"
          >
            Ask Lindsey
          </a>
        </div>
      </div>
    </section>
  );
}
