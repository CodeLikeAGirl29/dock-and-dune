"use client";
import { m } from "framer-motion";
import { FaHouseFloodWater, FaAnchor, FaShieldHalved } from "react-icons/fa6";

const sections = [
  {
    icon: <FaHouseFloodWater className="size-5" />,
    title: "Flood Zones Aren't a Formality",
    body: "FEMA flood zone designation drives everything downstream of it — whether a lender requires flood insurance, what that policy costs, and whether a future addition or rebuild needs to be elevated. Two houses a block apart can sit in completely different zones, with a meaningfully different cost of ownership as a result.",
    tag: "Zone X, AE & VE",
  },
  {
    icon: <FaAnchor className="size-5" />,
    title: "Docks, Seawalls, and the Permitting Maze",
    body: "A private dock isn't just a construction project — it typically touches state (FDEP), and sometimes federal (Army Corps), permitting on top of the county. Buyers inheriting an existing dock should confirm it was permitted in the first place; an unpermitted structure can become the new owner's problem to resolve.",
    tag: "FDEP / Army Corps",
  },
  {
    icon: <FaShieldHalved className="size-5" />,
    title: "Wind Mitigation Can Move the Number More Than Price Does",
    body: "A current wind mitigation inspection — documenting roof shape, opening protection, and roof-to-wall connections — can meaningfully change a windstorm premium. On coastal property, it's often the single highest-leverage document a buyer can request before closing.",
    tag: "Windstorm Premium",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Guide() {
  return (
    <section id="guide" className="charcoal-section py-24 border-t border-foreground/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 max-w-2xl"
        >
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            What Actually <span className="text-reef">Changes</span>
          </h2>
          <span className="mt-2 block h-[3px] w-12 bg-steel" />
          <p className="mt-4 text-foreground/60 text-[15px] leading-relaxed">
            None of this makes waterfront property a bad buy — it makes it a
            different kind of buy, one where the diligence checklist is
            longer and the insurance quote matters as much as the appraisal.
          </p>
        </m.div>

        <m.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {sections.map((s) => (
            <m.article
              key={s.title}
              variants={item}
              className="frame border border-foreground/10 bg-surface p-8 flex flex-col gap-4"
            >
              <div className="flex items-center justify-between">
                <span className="flex items-center justify-center size-10 rounded-full bg-reef/10 text-reef">
                  {s.icon}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-steel border border-foreground/10 px-2 py-1">
                  {s.tag}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">
                {s.title}
              </h3>
              <p className="text-sm/relaxed text-foreground/60">{s.body}</p>
            </m.article>
          ))}
        </m.div>
      </div>
    </section>
  );
}
