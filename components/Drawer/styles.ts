import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFD64D',
    borderBottomStartRadius: 28,
    borderBottomEndRadius: 28,
  },
  titleContainer: {
    width: '100%',
    marginLeft: 20,
    marginTop: 50,
    marginBottom: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  icon: {
    marginTop: 30,
  },
  infoDrawer: {
    marginLeft: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20,
  },
  inputContainer: {
    marginTop: -25,
    height: 45,
    width: 45,
  },
  input: {
    width: 300,
  },
  inputBorder: {
    height: 45,
    padding: 15,
    backgroundColor: 'white',
  },
  iconQr: {
    padding: 8,

    backgroundColor: 'white',
    textAlign: 'center',
  },
  button: {
    width: 300,
    height: 50,
    marginLeft: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#111111',
  },
  avatar: {
    marginRight: 50,
  },
});
export default styles;
