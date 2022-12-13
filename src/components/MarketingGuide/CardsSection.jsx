import React from "react";
import { useId } from "react-aria";
import clsx from "clsx";
import { Section, Container } from "../Elements/Index";
import { SectionHeading } from "./Index";

const content = [
  {
    icon: "installation",
    title: "POKAŽITE ZNANJE",
    description: 
      <ul className="list-disc space-y-4">
        <li>
          Još jedan cilj redovnog pisanja bloga je da pokažete korisnicima da
          ste autoritet u industriji.
        </li>
        <li>
          Ovo ih neće samo privoliti da vjeruju vašem brendu, već će se zbog
          prethodnih interakcija sa vašim biznisom, sjetiti vaše firme pri
          narednoj kupovini
        </li>
      </ul>
    
  },
  {
    icon: "presets",
    title: "GRADITE BREND",
    description: 
      <ul className="list-disc space-y-4">
        <li>
          Blog može uspostaviti ton i glas vašeg brenda, pokazujući vašu
          osobnost, dok obezbjeđuje korisne informacije
        </li>
        <li>
          Moguće je uspostaviti dugoročno povjerenje između kupaca i firmi.
          Potencijalni kupci će radije kupiti od firme koju znaju, nego suprotno
        </li>
      </ul>
    
  },
  {
    icon: "plugins",
    title: "GOSTUJUĆI AUTOR",
    description: 
      <ul className="list-disc space-y-4">
        <li>
          Pored vašeg bloga, dobar način da date vašoj stranici svjež iskorak je
          da napišete tekst za nečiji blog.
        </li>
        <li>
          Linkovi ka vašoj stranici hostovani na drugim provjerenim i popularnim
          stranicama će izgraditi vaš kredibilitet
        </li>
      </ul>
    
  },
];

const CardsSection = () => {
  return (
    <Section id="cards-guide" ariaLabel="seo optimizacija sumarizacija">
      <Container>
        <SectionHeading number="7" id="7">
          Dobra Praksa
        </SectionHeading>
        <div className="not-prose my-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {content.map((con, i) => (
            <div
              key={i}
              className="group relative rounded-xl border border-slate-200 dark:border-slate-800"
            >
              <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--link-grid-hover-bg,theme(colors.sky.50)),var(--link-grid-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--link-grid-hover-bg:theme(colors.slate.800)]" />
              <div className="relative overflow-hidden rounded-xl p-6">
                <Icon icon={con.icon} className="h-8 w-8" />
                <h2 className="mt-4 font-display text-base text-slate-900 dark:text-white">
                  <div>
                    <span className="absolute -inset-px rounded-xl" />
                    {con.title}
                  </div>
                </h2>
                <div className="prose prose-slate dark:prose-invert mt-8 font-display font-semibold">
                  {con.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default CardsSection;

const icons = {
  installation: InstallationIcon,
  presets: PresetsIcon,
  plugins: PluginsIcon,
};

const iconStyles = {
  blue:
    "[--icon-foreground:theme(colors.slate.900)] [--icon-background:theme(colors.white)]",
  amber:
    "[--icon-foreground:theme(colors.amber.900)] [--icon-background:theme(colors.amber.100)]",
};

export function Icon({ color = "blue", icon, className, ...props }) {
  let id = useId();
  let IconComponent = icons[icon];

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      fill="none"
      className={clsx(className, iconStyles[color])}
      {...props}
    >
      <IconComponent id={id} color={color} />
    </svg>
  );
}

const gradients = {
  blue: [
    { stopColor: "#0EA5E9" },
    { stopColor: "#22D3EE", offset: ".527" },
    { stopColor: "#818CF8", offset: 1 },
  ],
  amber: [
    { stopColor: "#FDE68A", offset: ".08" },
    { stopColor: "#F59E0B", offset: ".837" },
  ],
};

export function Gradient({ color = "blue", ...props }) {
  return (
    <radialGradient
      cx={0}
      cy={0}
      r={1}
      gradientUnits="userSpaceOnUse"
      {...props}
    >
      {gradients[color].map((stop, index) => (
        <stop key={index} {...stop} />
      ))}
    </radialGradient>
  );
}

export function LightMode({ className, ...props }) {
  return <g className={clsx("dark:hidden", className)} {...props} />;
}

export function DarkMode({ className, ...props }) {
  return <g className={clsx("hidden dark:inline", className)} {...props} />;
}

export function InstallationIcon({ id, color }) {
  return (
    <>
      <defs>
        <Gradient
          id={`${id}-gradient`}
          color={color}
          gradientTransform="matrix(0 21 -21 0 12 3)"
        />
        <Gradient
          id={`${id}-gradient-dark`}
          color={color}
          gradientTransform="matrix(0 21 -21 0 16 7)"
        />
      </defs>
      <LightMode>
        <circle cx={12} cy={12} r={12} fill={`url(#${id}-gradient)`} />
        <path
          d="m8 8 9 21 2-10 10-2L8 8Z"
          fillOpacity={0.5}
          className="fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </LightMode>
      <DarkMode>
        <path
          d="m4 4 10.286 24 2.285-11.429L28 14.286 4 4Z"
          fill={`url(#${id}-gradient-dark)`}
          stroke={`url(#${id}-gradient-dark)`}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </DarkMode>
    </>
  );
}

export function PluginsIcon({ id, color }) {
  return (
    <>
      <defs>
        <Gradient
          id={`${id}-gradient`}
          color={color}
          gradientTransform="matrix(0 21 -21 0 20 11)"
        />
        <Gradient
          id={`${id}-gradient-dark-1`}
          color={color}
          gradientTransform="matrix(0 22.75 -22.75 0 16 6.25)"
        />
        <Gradient
          id={`${id}-gradient-dark-2`}
          color={color}
          gradientTransform="matrix(0 14 -14 0 16 10)"
        />
      </defs>
      <LightMode>
        <circle cx={20} cy={20} r={12} fill={`url(#${id}-gradient)`} />
        <g
          fillOpacity={0.5}
          className="fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 9v14l12 6V15L3 9Z" />
          <path d="M27 9v14l-12 6V15l12-6Z" />
        </g>
        <path
          d="M11 4h8v2l6 3-10 6L5 9l6-3V4Z"
          fillOpacity={0.5}
          className="fill-[var(--icon-background)]"
        />
        <g
          className="stroke-[color:var(--icon-foreground)]"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 5.5 27 9l-12 6L3 9l7-3.5" />
          <path d="M20 5c0 1.105-2.239 2-5 2s-5-.895-5-2m10 0c0-1.105-2.239-2-5-2s-5 .895-5 2m10 0v3c0 1.105-2.239 2-5 2s-5-.895-5-2V5" />
        </g>
      </LightMode>
      <DarkMode strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path
          d="M17.676 3.38a3.887 3.887 0 0 0-3.352 0l-9 4.288C3.907 8.342 3 9.806 3 11.416v9.168c0 1.61.907 3.073 2.324 3.748l9 4.288a3.887 3.887 0 0 0 3.352 0l9-4.288C28.093 23.657 29 22.194 29 20.584v-9.168c0-1.61-.907-3.074-2.324-3.748l-9-4.288Z"
          stroke={`url(#${id}-gradient-dark-1)`}
        />
        <path
          d="M16.406 8.087a.989.989 0 0 0-.812 0l-7 3.598A1.012 1.012 0 0 0 8 12.61v6.78c0 .4.233.762.594.925l7 3.598a.989.989 0 0 0 .812 0l7-3.598c.361-.163.594-.525.594-.925v-6.78c0-.4-.233-.762-.594-.925l-7-3.598Z"
          fill={`url(#${id}-gradient-dark-2)`}
          stroke={`url(#${id}-gradient-dark-2)`}
        />
      </DarkMode>
    </>
  );
}

export function PresetsIcon({ id, color }) {
  return (
    <>
      <defs>
        <Gradient
          id={`${id}-gradient`}
          color={color}
          gradientTransform="matrix(0 21 -21 0 20 3)"
        />
        <Gradient
          id={`${id}-gradient-dark`}
          color={color}
          gradientTransform="matrix(0 22.75 -22.75 0 16 6.25)"
        />
      </defs>
      <LightMode>
        <circle cx={20} cy={12} r={12} fill={`url(#${id}-gradient)`} />
        <g
          className="fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]"
          fillOpacity={0.5}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 5v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2Z" />
          <path d="M18 17v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V17a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2Z" />
          <path d="M18 5v4a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2Z" />
          <path d="M3 25v2a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2Z" />
        </g>
      </LightMode>
      <DarkMode fill={`url(#${id}-gradient-dark)`}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 17V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm16 10v-9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2Zm0-23v5a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1ZM3 28v-3a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z"
        />
        <path d="M2 4v13h2V4H2Zm2-2a2 2 0 0 0-2 2h2V2Zm8 0H4v2h8V2Zm2 2a2 2 0 0 0-2-2v2h2Zm0 13V4h-2v13h2Zm-2 2a2 2 0 0 0 2-2h-2v2Zm-8 0h8v-2H4v2Zm-2-2a2 2 0 0 0 2 2v-2H2Zm16 1v9h2v-9h-2Zm3-3a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1v-2Zm6 0h-6v2h6v-2Zm3 3a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1h2Zm0 9v-9h-2v9h2Zm-3 3a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2Zm-6 0h6v-2h-6v2Zm-3-3a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1h-2Zm2-18V4h-2v5h2Zm0 0h-2a2 2 0 0 0 2 2V9Zm8 0h-8v2h8V9Zm0 0v2a2 2 0 0 0 2-2h-2Zm0-5v5h2V4h-2Zm0 0h2a2 2 0 0 0-2-2v2Zm-8 0h8V2h-8v2Zm0 0V2a2 2 0 0 0-2 2h2ZM2 25v3h2v-3H2Zm2-2a2 2 0 0 0-2 2h2v-2Zm9 0H4v2h9v-2Zm2 2a2 2 0 0 0-2-2v2h2Zm0 3v-3h-2v3h2Zm-2 2a2 2 0 0 0 2-2h-2v2Zm-9 0h9v-2H4v2Zm-2-2a2 2 0 0 0 2 2v-2H2Z" />
      </DarkMode>
    </>
  );
}
