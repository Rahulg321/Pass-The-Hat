import clsx from "clsx";

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "xl" | "lg" | "slg" | "md" | "sm" | "xs";
  children: React.ReactNode;
  className?: string;
};

export default function Heading({
  as: Comp = "h1",
  className,
  children,
  size = "lg",
}: HeadingProps) {
  return (
    <Comp
      className={clsx(
        "font-bold leading-tight tracking-tight  ",
        size === "xl" && "text-7xl md:text-9xl",
        size === "lg" && "text-6xl md:text-8xl",
        size === "slg" && "text-5xl md:text-7xl",
        size === "md" && "text-5xl md:text-6xl",
        size === "sm" && "text-3xl md:text-4xl",
        size === "xs" && "text-xl md:text-2xl",
        className
      )}
    >
      {children}
    </Comp>
  );
}
