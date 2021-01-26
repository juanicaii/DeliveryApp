import React, { useState, useRef } from 'react';
import { Icon, Input, Button, Avatar } from 'react-native-elements';
import { Text, View, Animated } from 'react-native';

import styles from './styles';

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const heigth = useRef(new Animated.Value(200)).current;
  const visibility = useRef(new Animated.Value(0)).current;

  const handlerDrawer = () => {
    if (isOpen) {
      Animated.spring(heigth, { toValue: 200, useNativeDriver: false }).start();
      Animated.timing(visibility, {
        toValue: 0,
        duration: 20,
        useNativeDriver: true,
      }).start();
      setIsOpen(false);
    } else {
      Animated.spring(heigth, { toValue: 400, useNativeDriver: false }).start();
      Animated.timing(visibility, {
        toValue: 1,
        duration: 20,
        useNativeDriver: true,
      }).start();
      setIsOpen(true);
    }
  };
  return (
    <Animated.View style={[styles.container, { height: heigth }]}>
      <View style={styles.titleContainer}>
        <Text onPress={handlerDrawer} style={styles.title}>
          Track Parcel{' '}
          <Icon
            style={styles.icon}
            size={35}
            name={isOpen ? 'chevron-up-outline' : 'chevron-down-outline'}
            type="ionicon"
            color="#517fa4"
          />
        </Text>
        <Avatar
          containerStyle={[styles.icon, styles.avatar]}
          size="small"
          rounded
          source={{ uri: 'https://www.nretnil.com/avatar/LawrenceEzekielAmos.png' }}
        />
      </View>

      <Animated.View style={[styles.infoDrawer, { opacity: visibility }]}>
        <Text>Enter parcel number or scan QR code</Text>
        <View style={styles.infoContainer}>
          <View>
            <Input
              style={styles.inputBorder}
              containerStyle={styles.input}
              placeholder="tracking number"
            />
          </View>
          <View style={styles.inputContainer}>
            <Icon
              style={styles.iconQr}
              size={30}
              name="qr-code-outline"
              type="ionicon"
              color="#517fa4"
            />
          </View>
        </View>
        <View style={{}}>
          <Button
            buttonStyle={{ backgroundColor: '#111111' }}
            style={styles.button}
            title="Track Parcel"
          />
        </View>
      </Animated.View>
    </Animated.View>
  );
};

export default Drawer;
