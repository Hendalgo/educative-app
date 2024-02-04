import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  authContainer: {
    // @ts-ignore
    paddingVertical: 36,
    paddingHorizontal: 28,
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: '100%',
  },
  text: {
    fontSize: 20,
  },
  header: {
    fontSize: 26,
    fontFamily: 'Poppins-SemiBold',
  },
  authLogo: {
    flex: 1, 
    resizeMode: 'contain', 
    alignSelf: 'center',
    margin: 20,
  },
  inputFont: {
    fontFamily: 'Poppins-Regular',
  },
});

export default styles;
