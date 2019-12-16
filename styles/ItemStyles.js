import { StyleSheet } from 'react-native';
import Layout from '../constants/Layout';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9'
  },
  form: {
    margin: 16,
    marginTop: 8,
    flex: 1,
  },
  textInput: {
    height: 36,
    marginVertical: 16,
    borderBottomColor: '#e4e4e4',
    borderBottomWidth: 1,
  },
  colorContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  flatList: {
    marginVertical: 16,
  },
  dateContainer: {
    flexDirection: 'row',
    marginVertical: 16,
  },
  dateText: {
    fontSize: 16,
    marginTop: 12,
  },
  startDateContainer: {
    width: Layout.width / 2 - 24,
    justifyContent: 'flex-start',
  },
  segmentContainer: {
    marginVertical: 16,
  },
  segment: {
    marginTop: 12,
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  dot: {
    borderWidth: 4,
    width: 24,
    height: 24,
    marginRight: 12,
    borderRadius: 24,
  },
  colorText: {
    marginRight: 24,
    color: '#bbb',
  },
  button: {
    marginVertical: 16,
    backgroundColor: '#e9e9e9',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ededed'
  },
  buttonText: {
    // fontFamily: 'space-mono',
    alignSelf: 'center',
    fontWeight: '600',
    fontSize: 16,
    color: '#444',
    textAlign: 'center',
    padding: 12,
  }
});
