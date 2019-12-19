import { StyleSheet } from 'react-native';

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
  button: {
    marginVertical: 16,
    backgroundColor: '#e9e9e9',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ededed'
  },
  buttonText: {
    alignSelf: 'center',
    fontWeight: '600',
    fontSize: 16,
    color: '#444',
    textAlign: 'center',
    padding: 12,
  }
});
