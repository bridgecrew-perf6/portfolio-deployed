import { lazy, Suspense } from "react";

// components
import AbsoluteWrapper from "../AbsoluteWrapper";
import BoxTransition from "../Animation/BoxTransition";

import { animated } from "@react-spring/web";

// import showcase component
const General = lazy(() => import("./ShowcaseComponents/General"));

export default function Showcase() {
  // Landingpage_HTML-CSS

  // console.log("lkenfmenf", repos);
  // console.log("lkenfmenf", repos);
  return (
    <AbsoluteWrapper>
      {/* <BoxTransition> */}
        <hr />

        hello motherfucker

        <Suspense fallback={<div>Loading... </div>}>
          <General />
        </Suspense>
      {/* </BoxTransition> */}
    </AbsoluteWrapper>
  );
}
