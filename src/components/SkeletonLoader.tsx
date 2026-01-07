"use client";

interface SkeletonProps {
  className?: string;
  variant?: "text" | "circular" | "rectangular" | "card";
  width?: string;
  height?: string;
  lines?: number;
}

export function Skeleton({
  className = "",
  variant = "rectangular",
  width,
  height,
  lines = 1,
}: SkeletonProps) {
  const baseClasses = "animate-pulse bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 bg-[length:200%_100%]";

  const variantClasses = {
    text: "h-4 rounded",
    circular: "rounded-full",
    rectangular: "rounded-lg",
    card: "rounded-2xl",
  };

  if (variant === "text" && lines > 1) {
    return (
      <div className="space-y-3">
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className={`${baseClasses} ${variantClasses.text} ${className}`}
            style={{
              width: i === lines - 1 ? "80%" : width || "100%",
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={{ width, height }}
    />
  );
}

export function CardSkeleton() {
  return (
    <div className="card p-6 space-y-4">
      <Skeleton variant="rectangular" height="200px" />
      <Skeleton variant="text" width="60%" />
      <Skeleton variant="text" lines={3} />
      <div className="flex gap-2">
        <Skeleton variant="rectangular" width="80px" height="32px" />
        <Skeleton variant="rectangular" width="80px" height="32px" />
      </div>
    </div>
  );
}

export function TeamMemberSkeleton() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
      <Skeleton variant="rectangular" height="300px" />
      <div className="p-6 space-y-3">
        <Skeleton variant="text" width="70%" />
        <Skeleton variant="text" width="50%" />
        <Skeleton variant="text" lines={2} />
      </div>
    </div>
  );
}

export function PortfolioItemSkeleton() {
  return (
    <div className="card-elevated overflow-hidden">
      <Skeleton variant="rectangular" height="250px" />
      <div className="p-6 space-y-3">
        <div className="flex items-center gap-2">
          <Skeleton variant="rectangular" width="60px" height="24px" />
          <Skeleton variant="rectangular" width="60px" height="24px" />
        </div>
        <Skeleton variant="text" width="80%" />
        <Skeleton variant="text" lines={2} />
      </div>
    </div>
  );
}

export function ServiceCardSkeleton() {
  return (
    <div className="card p-8">
      <div className="flex items-start gap-6">
        <Skeleton variant="circular" width="56px" height="56px" />
        <div className="flex-1 space-y-4">
          <Skeleton variant="text" width="70%" />
          <Skeleton variant="text" lines={3} />
          <div className="grid sm:grid-cols-2 gap-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} variant="text" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Grid loading states
export function GridSkeleton({
  count = 3,
  type = "card",
}: {
  count?: number;
  type?: "card" | "team" | "portfolio" | "service";
}) {
  const SkeletonComponent = {
    card: CardSkeleton,
    team: TeamMemberSkeleton,
    portfolio: PortfolioItemSkeleton,
    service: ServiceCardSkeleton,
  }[type];

  return (
    <div className={
      type === "service" ? "grid lg:grid-cols-2 gap-8" :
      type === "team" ? "grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8" :
      "grid-portfolio"
    }>
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonComponent key={i} />
      ))}
    </div>
  );
}

export default Skeleton;
