'use client';

import { RollingTextPath } from "@/components/common/animations/rolling-text-path";
import { useRefSectionWrapperContext } from "@/components/common/animations/wrappers/ref-section-wrapper/ref-section-wrapper.context";

export const TeamSectionRollingText = () => {
  const { ref } = useRefSectionWrapperContext();
  return (
    <RollingTextPath
      ref={ref}
      text={"Rozwiązujemy problemy dla Ciebie!"}
      textsMultiply={2}
    />
  );
};
