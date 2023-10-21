import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {useCameraDevices, Camera} from 'react-native-vision-camera';
import {useRef} from 'react';
import { useIsFocused } from '@react-navigation/native';

export const MyCamera = () => {
  const devices = useCameraDevices('wide-angle-camera');
  
  const device = devices.front;
  const isFocused = useIsFocused()

  if (device == null) return <Text>{'Loading....'}</Text>;
  return (
    // <ReanimatedCamera
    //   ref={camera}
    //   style={StyleSheet.absoluteFill}
    //   device={device}
    //   lowLightBoost={device.supportsLowLightBoost}
    //   isActive={true}
    //   enableZoomGesture={false}
    //   photo={true}
    //   video={true}
    //   orientation="portrait"
    //   frameProcessorFps={1}
    // />
    <Camera style={StyleSheet.absoluteFill} device={device} isActive={isFocused} photo={true}  />
  );
};
