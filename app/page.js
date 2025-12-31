// import LocationDetector from "@/components/LocationDetector";

// export default function Home() {
//   return <LocationDetector />;
// }

import LocationDetector from "@/components/LocationDetector";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen bg-slate-700 text-white">
            <p className="text-2xl">Loading Location Detector...</p>
          </div>
        }
      >
        <LocationDetector />
      </Suspense>
    </main>
  );
}
