"use client";
import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import {
  FaListCheck,
  FaTriangleExclamation,
  FaHouseChimneyWindow,
  FaLocationCrosshairs,
} from "react-icons/fa6";

const TABS = [
  {
    id: "season",
    label: "Before Season",
    sub: "By June 1",
    icon: <FaListCheck className="size-4" />,
    items: [
      "Review flood + windstorm coverage now — most carriers stop binding new policies once a storm enters the Gulf.",
      "Photograph and video every room and the exterior for insurance documentation, and store copies off-site or in the cloud.",
      "Trim trees and palm fronds away from the roofline; loose fronds become projectiles in high wind.",
      "Test and service shutters or confirm impact windows are in good repair.",
      "Walk the dock: check cleats, lines, and lifts for wear before you need them under pressure.",
    ],
  },
  {
    id: "approaching",
    label: "Storm Approaching",
    sub: "72–24 hours out",
    icon: <FaTriangleExclamation className="size-4" />,
    items: [
      "Fuel up vehicles and any generator; fill portable fuel containers.",
      "Withdraw some cash — card readers and ATMs are often down for days after landfall.",
      "Refill prescriptions before pharmacies close or lose power.",
      "Double up dock lines, add extra fenders, and strip canvas/biminis off any boat staying in the water.",
      "Bring in patio furniture, grills, and anything that can become windborne debris.",
      "Fill a bathtub with water for sanitation use if utilities go out.",
    ],
  },
  {
    id: "dayof",
    label: "Day Of",
    sub: "Final hours",
    icon: <FaHouseChimneyWindow className="size-4" />,
    items: [
      "Charge every device and portable battery pack.",
      "Set the fridge and freezer to their coldest settings in case power is lost.",
      "Turn off propane at the tank.",
      "If not evacuating, shelter in an interior room away from windows.",
      "If your evacuation zone is ordered to leave, go — storm surge is the leading cause of hurricane fatalities in Florida.",
    ],
  },
  {
    id: "after",
    label: "After the Storm",
    sub: "Recovery",
    icon: <FaLocationCrosshairs className="size-4" />,
    items: [
      "Don't return home until local officials lift re-entry restrictions.",
      "Photograph all damage before touching or moving anything — insurers want the 'before cleanup' state.",
      "Have wiring and structural elements checked before restoring power, especially after any flooding.",
      "Watch for downed lines and treat standing water as contaminated.",
      "File your claim promptly; document every conversation with your insurer, including names and reference numbers.",
    ],
  },
];

export default function HurricanePrep() {
  const [activeTab, setActiveTab] = useState(TABS[0].id);
  const active = TABS.find((t) => t.id === activeTab);

  return (
    <section id="storm-prep" className="bg-sand py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 max-w-xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rope-deep mb-3">
            Storm Season
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-navy">
            Hurricane <span className="italic text-rope">Preparedness</span>
          </h2>
          <p className="mt-4 text-navy/60 text-[15px] leading-relaxed">
            Waterfront property means storm season is part of ownership, not
            an edge case. A little prep in June saves a lot of scrambling in
            September.
          </p>
        </m.div>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="coastal-card bg-sand-deep p-2 sm:p-3 flex flex-wrap gap-2 mb-2"
        >
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className="relative flex-1 min-w-[45%] sm:min-w-0 px-4 py-3 rounded-xl text-left transition-colors"
            >
              {activeTab === tab.id && (
                <m.span
                  layoutId="stormTabHighlight"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  className="absolute inset-0 rounded-xl bg-navy"
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <span
                  className={
                    activeTab === tab.id ? "text-rope" : "text-navy/40"
                  }
                >
                  {tab.icon}
                </span>
                <span className="flex flex-col">
                  <span
                    className={`text-sm font-semibold ${
                      activeTab === tab.id ? "text-cream" : "text-navy"
                    }`}
                  >
                    {tab.label}
                  </span>
                  <span
                    className={`text-[10px] uppercase tracking-widest ${
                      activeTab === tab.id ? "text-cream/50" : "text-muted"
                    }`}
                  >
                    {tab.sub}
                  </span>
                </span>
              </span>
            </button>
          ))}
        </m.div>

        <div className="coastal-card bg-sand-deep p-8 sm:p-10 min-h-[320px]">
          <AnimatePresence mode="wait">
            <m.ul
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="grid sm:grid-cols-2 gap-4"
            >
              {active.items.map((tip, i) => (
                <m.li
                  key={tip}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="flex gap-3 items-start"
                >
                  <span className="mt-1 flex-shrink-0 size-1.5 rounded-full bg-rope" />
                  <span className="text-sm leading-relaxed text-navy/75">
                    {tip}
                  </span>
                </m.li>
              ))}
            </m.ul>
          </AnimatePresence>
        </div>

        <m.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm"
        >
          <p className="text-navy/50">
            Not sure which evacuation zone your property is in?
          </p>
          <a
            href="https://www.floridadisaster.org/knowyourzone/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-rope-deep hover:text-rope transition-colors"
          >
            Know Your Zone (FL Division of Emergency Management) &rarr;
          </a>
        </m.div>
      </div>
    </section>
  );
}
