import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapboxGL from '@rnmapbox/maps';
import { GlobalContext } from '../context/GlobalContext';
import { FeatureCollection, LineString } from 'geojson';

// Configuración del token de Mapbox
MapboxGL.setAccessToken('pk.eyJ1IjoibXJhbW9zODkyIiwiYSI6ImNrcHBtb3dnNTA0cTkyd28zcGc5dmZtZ3UifQ.sY8hM6-CBurXIHek7ch7HA');

const TrafficScreen: React.FC = () => {
  const { trafficData, fetchTrafficData } = useContext(GlobalContext);

  useEffect(() => {
    // Llama a la API de tráfico al cargar la pantalla
    fetchTrafficData('-20.23070,-70.16265');
  }, []);

  // Convertir datos de tráfico en formato GeoJSON
  const getTrafficGeoJSON = (): FeatureCollection<LineString> | null => {
    if (
      !trafficData ||
      !trafficData.flowSegmentData ||
      !trafficData.flowSegmentData.coordinates ||
      !Array.isArray(trafficData.flowSegmentData.coordinates.coordinate)
    ) {
      console.error('Invalid traffic data:', trafficData); // Log para depuración
      return null;
    }

    const coordinates = trafficData.flowSegmentData.coordinates.coordinate.map(
      (coord: { longitude: number; latitude: number }) => [coord.longitude, coord.latitude]
    );
  

    return {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          geometry: {
            type: 'LineString',
            coordinates,
          },
          properties: {},
        },
      ],
    };
  };

  const trafficGeoJSON = getTrafficGeoJSON();

  return (
    <View style={styles.container}>
      <MapboxGL.MapView style={styles.map}>
        <MapboxGL.Camera zoomLevel={12} centerCoordinate={[-70.16265, -20.23070]} />
        {trafficGeoJSON ? (
          <MapboxGL.ShapeSource id="traffic" shape={trafficGeoJSON}>
            <MapboxGL.LineLayer
              id="trafficLayer"
              style={{
                lineColor: 'red',
                lineWidth: 5,
              }}
            />
          </MapboxGL.ShapeSource>
        ) : (
          <View style={styles.loading}>
            <Text>Cargando tráfico...</Text>
          </View>
        )}
      </MapboxGL.MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  loading: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -50 }, { translateY: -50 }],
    backgroundColor: 'rgba(255,255,255,0.8)',
    padding: 10,
    borderRadius: 5,
  },
});

export default TrafficScreen;
