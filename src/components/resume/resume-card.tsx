interface ResumeCardProps {
  readonly children: React.ReactNode;
  readonly className?: string;
}

export function ResumeCard({
  children,
  className = "",
}: Readonly<ResumeCardProps>) {
  return (
    <div
      className={`bg-card-foreground/5 rounded-lg border-l-4 border-l-primary mt-3 px-2 py-4 ${className}`}
    >
      {children}
    </div>
  );
}
