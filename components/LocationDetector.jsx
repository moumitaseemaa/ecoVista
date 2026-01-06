
// 'use client'
// import { useState, useEffect } from 'react';
// import { useSearchParams, usePathname, useRouter } from 'next/navigation';
// import Image from 'next/image';

// const LocationDetector = () => {
//     const [loading, setLoading] = useState(false);

//     const searchParams = useSearchParams();
//     const pathName = usePathname();
//     const router = useRouter();

//     useEffect(() => {
//         setLoading(true);
//         const params = new URLSearchParams(searchParams);

//         if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition((position) => {
//                 params.set('latitude', position.coords.latitude);
//                 params.set('longitude', position.coords.longitude);
//                 setLoading(false);
//                 router.push(`/current?${params.toString()}`);
//             })
//         }

//     }, [pathName, searchParams]);

//   return (
//     <div className="flex flex-col justify-center items-center h-screen bg-slate-700 text-white">
//         {
//             loading && (
//                 <>
//                     <Image
//                         src="/network.gif"
//                         alt="Loading..."
//                         height={500}
//                         width={500}
//                         className="border rounded-md my-4" />
//                     <p className="text-4xl text-center">Detecting Location...</p>
//                 </>
//             )
//         }
//     </div>
//   )
// }

// export default LocationDetector



'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const LocationDetector = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!navigator.geolocation) {
      console.error('Geolocation not supported');
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        router.replace(
          `/current?latitude=${latitude}&longitude=${longitude}`
        );
      },
      (error) => {
        console.error('Location error:', error);
        setLoading(false);
      }
    );
  }, [router]);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-slate-700 text-white">
      {loading && (
        <>
          <Image
            src="/network.gif"
            alt="Loading..."
            height={300}
            width={300}
            className="border rounded-md my-4"
          />
          <p className="text-3xl text-center">
            Detecting Location...
          </p>
        </>
      )}
    </div>
  );
};

export default LocationDetector;
