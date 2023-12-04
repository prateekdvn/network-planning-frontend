import React, { useEffect ,useRef} from 'react';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import XYZ from 'ol/source/XYZ';
import 'ol/ol.css'; 
import { Box } from '@mui/material';
import './MapMainComponent.css';

const MapComponent = () => {
  const mapElement = useRef(null);
  useEffect(() => {
    const map = new Map({
      target: mapElement.current,
      layers: [
        new TileLayer({
          // source: new OSM(),
          source: new XYZ({
            url: 'https://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}',
          })
        }),
      ],
      view: new View({
        projection: 'EPSG:4326',
        center: [79.218764, 20.527135],
        zoom: 4.5,
      }),
      controls: []
    });

    return () => {
      map.setTarget(null);
    };
  }, []); 
  return (<Box ref={mapElement} sx={{width: '100vw', height: '85vh',zIndex: '-1'}}>
  </Box>);
};

export default MapComponent;
