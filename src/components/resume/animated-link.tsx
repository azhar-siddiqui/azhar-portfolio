"use client";

interface AnimatedLinkProps {
  readonly href: string;
  readonly icon?: React.ReactNode;
  readonly label: string;
  readonly target?: string;
  readonly rel?: string;
}

export function AnimatedLink({
  href,
  icon,
  label,
  target,
  rel,
}: Readonly<AnimatedLinkProps>) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className="group mt-2 inline-flex text-sm text-primary"
    >
      <span className="relative inline-flex items-center gap-x-2">
        {icon}
        <span>{label}</span>
        <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-primary transition-transform duration-300 ease-out group-hover:scale-x-100" />
      </span>
    </a>
  );
}
