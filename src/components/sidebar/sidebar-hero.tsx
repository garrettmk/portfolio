"use client"

import clsx from "clsx";
import { HTMLAttributes, useEffect, useMemo, useRef, useState } from "react";

export type SidebarHeroProps = Omit<HTMLAttributes<HTMLHeadElement>, 'children'> & {
  children: string;
}

export default function SidebarHero(props: SidebarHeroProps) {
  const { children, className, ...headingProps } = props;
  const rootRef = useRef<HTMLDivElement>(null);
  
  // Track the mouse position relative to the element and the edge of the document.
  // x and y are between 0 and 1. For example, if mouse is halfway between the element
  // and the right edge of the document, x will be 0.5
  const [relativePosition, setRelativePosition] = useState<{ x: number, y: number } | null>(null);
  
  const updateRelativePosition = (event: MouseEvent) => {
    if (!rootRef.current)
    return;
    
    const elementRect = rootRef.current.getBoundingClientRect();
    setRelativePosition({
      x: (event.clientX - elementRect.x) / (document.documentElement.clientWidth - elementRect.x),
      y: (event.clientY - elementRect.y) / (document.documentElement.clientHeight - elementRect.y)
    });
  }
  
  useEffect(() => {
    document.addEventListener('mousemove', updateRelativePosition);
    return () => document.removeEventListener('mousemove', updateRelativePosition);
  }, []);
  
  // Calculate the transform and filter CSS properties based on the relative position
  const transform = useMemo(() => {
    const maxDistance = 4;
    const translateX = (relativePosition?.x ?? 0) * maxDistance + 'px';
    const translateY = (relativePosition?.y ?? 0) * maxDistance + 'px';
    
    return `translate3d(${translateX}, ${translateY}, 0)`
  }, [relativePosition]);
  
  const filter = useMemo(() => {
    const maxDistance = 8;
    
    const offsetX = -(relativePosition?.x ?? 0) * maxDistance + 'px';
    const offsetY = -(relativePosition?.y ?? 0) * maxDistance + 'px';
    const stdDev = 2 + 'px';
    
    return `drop-shadow(${offsetX} ${offsetY} ${stdDev} rgb(134 239 172))`
  }, [relativePosition]);

  return (
    <h1
      ref={rootRef}
      className={clsx(
        "h-80 flex justify-center items-center",
        "text-outlined text-8xl font-bold text-white",
        className
      )}
      style={{ transform, filter }}
    >
      {children}
    </h1>
  );
}