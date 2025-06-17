"use client";

import { asText, NumberField, RichTextField } from "@prismicio/client";
import clsx from "clsx";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

gsap.registerPlugin(useGSAP);

type RevealTextProps = {
  field: RichTextField;
  id: string;
  className?: string;
  staggerAmount?: NumberField;
  as?: React.ElementType;
  duration?: number;
  align?: "center" | "start" | "end";
};
export const RevealText = ({
  field,
  id,
  as: Component = "div",
  className,
  staggerAmount = 0.1,
  duration = 0.8,
  align = "start",
}: RevealTextProps) => {
  const componentRef = useRef<HTMLDivElement>(null);

  const words = asText(field).split(" ");

  useGSAP(
    () => {
      gsap.to(".reveal-text-word", {
        y: 0,
        stagger: staggerAmount,
        duration,
        ease: "power3.out",
      });
    },
    { scope: componentRef },
  );

  return (
    <Component
      className={clsx(
        "reveal-text text-balance",
        align === "center" && "text-center",
        align === "end" && "text-right",
        align === "start" && "text-left",
        className,
      )}
      ref={componentRef}
    >
      {words.map((word, index) => (
        <span
          key={`${word}-${index}-${id}`}
          className="mb-0 inline-block overflow-hidden pb-4"
        >
          <span className="reveal-text-word mt-0 inline-block translate-y-[120%] will-change-transform">
            {word}
          </span>
        </span>
      ))}
    </Component>
  );
};
