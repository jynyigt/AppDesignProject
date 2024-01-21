import {StyleSheet} from 'react-native';

const headerLeftStyle = StyleSheet.create({
  container: {
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },
  icon: {
    transform: [{rotate: '90deg'}],
  },
});
export default headerLeftStyle;
