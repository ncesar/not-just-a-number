import React, { Profiler } from 'react';

export const ProfilerWrapper = (props: any) => {
  function onRenderCallback(
    id: string,
    phase: string,
    actualDuration: number,
    baseDuration: number,
    startTime: number,
    commitTime: number,
    interactions: Object,
  ) {
    if (!log) {
      console.log(
        `ID: ${id}\nPhase📘(https://bit.ly/phi-phase): ${phase}
        \nActual duration📘(https://bit.ly/phi-actual): ${actualDuration}
        \nBase duration📘(https://bit.ly/phi-duration): ${baseDuration}
        \nStart time📘(https://bit.ly/phi-start): ${startTime}
        \nCommit time📘(https://bit.ly/phi-commit): ${commitTime}`,
        `\n\nInteractions📘(https://bit.ly/phi-interactions):`,
        interactions,
      );
    }
  }
  const { children, log } = props;
  return (
    <Profiler onRender={onRenderCallback} {...props}>
      {children}
    </Profiler>
  );
};
