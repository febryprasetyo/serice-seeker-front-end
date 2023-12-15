/* eslint-disable react/prop-types */
import React, { useRef, useEffect } from 'react';

const GoogleMap = ({ locations }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    console.log('Map component is rendering');
    if (!mapRef.current || !locations) return;

    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: -7.2574719, lng: 112.7520883 }, // Set your initial map center
      zoom: 10,
    });

    locations.forEach((location) => {
      new window.google.maps.Marker({
        position: {
          lat: location.location.coordinates[1],
          lng: location.location.coordinates[0],
        },
        map,
        title: location.title,
      });
    });
  }, [locations]);

  return <div ref={mapRef} style={{ height: '1000px', width: '100%' }} />;
};

export default GoogleMap;
