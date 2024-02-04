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
  title: {
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
  textCenter: {
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    position: 'absolute',
    height: 70,
  },
});

export default styles;
