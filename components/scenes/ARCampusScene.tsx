import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { ViroARSceneNavigator } from '@viro-community/react-viro';

const ARView = () => {
  const [hasARSupport, setHasARSupport] = useState<boolean>(false);

  useEffect(() => {
    // Check for AR support
    ViroARSceneNavigator.isARSupported().then((supported) => {
      setHasARSupport(supported);
    });
  }, []);

  if (!hasARSupport) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>
          AR is not supported on this device.
        </Text>
      </View>
    );
  }

  return (
    <ViroARSceneNavigator
      initialScene={{
        scene: require('./scenes/ARCampusScene'),
      }}
      style={styles.arView}
    />
  );
};

const styles = StyleSheet.create({
  arView: {
    flex: 1,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
});

export { ARView };
