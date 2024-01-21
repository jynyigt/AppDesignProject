import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
  brandContainer: {
    padding: 4,
  },
  borderView: {
    borderWidth: 1,
    borderColor: '#F4F6F5',
    padding: 4,
    borderRadius: 26,
    position: 'absolute',
    zIndex: 9999,
    backgroundColor: 'white',
    flex: 1,
    alignSelf: 'center',
  },
  imageBrand: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 26,
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
  },
  brandIcon: {
    position: 'absolute',
    bottom: 0,
    zIndex: 9999,
    marginTop: 20,
    marginLeft: 20,
  },
  brandIconImage: {
    width: 55,
    height: 55,
    resizeMode: 'contain',
  },
  titleView: {
    alignItems: 'center',
    marginTop: 5,
  },
  titleText: {
    fontSize: 14,
    color: '#1D1E1C',
    fontWeight: '700',
    letterSpacing: -0.215,
  },
  scenarioTypeView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },

  scenarioTypeText: {
    fontSize: 14,
    color: '#1D1E1C',
    fontWeight: '700',
    textAlign: 'center',
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
  flatList: {
    flexDirection: 'row',
  },
  remainingText: {
    fontSize: 13,
    color: 'white',
    fontWeight: '400',
  },
  contentContainerStyle: {
    paddingHorizontal: 16,
  },
});
export default styles;
