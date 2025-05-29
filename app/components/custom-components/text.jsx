import { cn } from "  @/lib/utils";


function Text({ as = "p", children, className, ...props }) {
  const componentMap = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    p: "p",
    span: "span",
    div: "div",
  };

  const Tag = componentMap[as];

  const tailwindClasses = {
    h1: "font-roboto font-bold text-foreground leading-snug text-3xl md:leading-snug",
    h2: "font-roboto font-bold text-foreground leading-snug text-2xl md:leading-snug",
    h3: "font-roboto font-bold text-foreground leading-snug text-sm text-base md:leading-snug",
    h4: "font-roboto font-bold text-foreground leading-snug text-lg md:leading-snug",
    h5: "font-roboto font-bold text-foreground leading-snug text-md md:leading-snug",
    p: "font-roboto text-sm text-foreground text-md leading-relaxed",
    span: "text-sm text-foreground",
    div: "font-roboto font-bold text-md text-foreground",
  };

  return (
    <Tag className={cn(tailwindClasses[as], className)} {...props}>
      {children}
    </Tag>
  );
}

export default Text;
