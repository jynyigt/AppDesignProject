import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  renderItemView: {
    borderWidth: 1.5,
    borderColor: '#ECEEEF',
    borderRadius: 8,
    marginRight: 5,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 15,
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageIcon: {
    flex: 1,
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  nameView: {
    marginLeft: 8,
  },
  nameText: {
    fontSize: 12,
    color: '#1D1E1C',
    fontWeight: '400',
  },
  flatList: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default styles;
