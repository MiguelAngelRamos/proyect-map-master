// Pantalla de configuración
import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Switch, List, Divider } from 'react-native-paper';
import { GlobalContext } from '../context/GlobalContext';

const SettingsScreen: React.FC = () => {
  const { showTraffic, setShowTraffic } = useContext(GlobalContext);

  return (
    <View style={styles.container}>
      <List.Section>
        <List.Subheader>Configuraciones Generales</List.Subheader>

        <List.Item
          title="Mostrar tráfico en tiempo real"
          description="Habilita o deshabilita la visualización del tráfico"
          right={() => (
            <Switch
              value={showTraffic}
              onValueChange={() => setShowTraffic(!showTraffic)}
            />
          )}
        />
        <Divider />
      </List.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
});

export default SettingsScreen;
