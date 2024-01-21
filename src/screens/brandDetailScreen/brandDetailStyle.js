import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  iconBackView: {
    position: 'absolute',
    left: 0,
    zIndex: 9999,
    marginTop: 55,
    marginLeft: 15,
  },
  iconArrow: {
    transform: [{rotate: '90deg'}],
  },
  brandImage: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    flexShrink: 0,
    borderBottomLeftRadius: 90,
  },
  brandIconView: {
    position: 'absolute',
    zIndex: 99999,
    marginLeft: 20,
    flex: 1,
    bottom: 0,
  },
  brandIcon: {
    width: 55,
    height: 55,
    resizeMode: 'contain',
  },
  titleView: {
    marginTop: 10,
    marginHorizontal: 15,
  },
  titleText: {
    fontSize: 26,
    color: '#1D1E1C',
    fontWeight: '700',
  },
  descriptionView: {
    marginTop: 15,
    flexShrink: 0,
    marginHorizontal: 15,
  },
  descriptionText: {
    fontSize: 14,
    color: '#1D1E1C',
    fontWeight: '400',
  },
  buttonView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  button: {
    backgroundColor: '#F40000',
    borderRadius: 28,
    padding: 14,
    alignItems: 'center',
    margin: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '700',
  },
  remainingView: {
    bottom: 7,
    right: 10,
    position: 'absolute',
    borderWidth: 1,
    backgroundColor: '#1D1E1C',
    borderRadius: 26,
    padding: 8,
  },
  remainingText: {
    fontSize: 13,
    color: 'white',
    fontWeight: '400',
  },
});
export default styles;
