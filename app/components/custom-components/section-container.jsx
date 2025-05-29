
import { cn } from "  @/lib/utils";
import Box from "./box";

const SectionContainer = ({ children, className, id, ref }) => {
  return (
    <section className={cn("py-12 ", className)}>
      <Box
        id={id}
        ref={ref}
        className={cn("px-4 lg:px-34 mx-auto w-full", className)}
      >
        {children}
      </Box>
    </section>
  );
};

export default SectionContainer;
