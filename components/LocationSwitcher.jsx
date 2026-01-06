"use client";

import { getLocationLatLongList } from "@/lib/location-info";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const LocationSwitcher = () => {
  const [showLocationList, setShowLocationList] = useState(false);
  const [locations, setLocations] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getLocationList() {
      try {
        const locationList = await getLocationLatLongList();
        setLocations(Array.isArray(locationList) ? locationList : []);
      } catch (err) {
        console.error("Location fetch failed:", err);
        setError(true);
        setLocations([]);
      }
    }

    getLocationList();
  }, []);

  return (
    <div className="relative">
      <button onClick={() => setShowLocationList(!showLocationList)}>
        <Image
          className="size-9"
          src="/link.svg"
          alt="link icon"
          width={36}
          height={36}
        />
      </button>

      {showLocationList && (
        <div className="absolute left-0 top-12 z-[999] w-full min-w-[280px] rounded-md bg-white p-4 shadow max-md:-translate-x-1/2">
          <ul
            role="list"
            className="divide-y divide-gray-100 [&>*]:py-2 [&>li]:cursor-pointer"
          >
            {locations.length > 0 ? (
              locations.map((info) => (
                <li key={info.location}>
                  <Link
                    href={`/${info.location}?latitude=${info.latitude}&longitude=${info.longitude}`}
                  >
                    {info.location}
                  </Link>
                </li>
              ))
            ) : (
              <li className="text-gray-500 text-sm">
                {error ? "Failed to load locations" : "No locations found"}
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LocationSwitcher;

