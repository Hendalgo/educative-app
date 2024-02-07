import {StyleSheet} from 'react-native';

// Definition of constants for vertical and horizontal padding
const VERTICAL_PADDING = 30;
const HORIZONTAL_PADDING = 20;

const styles = StyleSheet.create({
  // General styles
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  text: {
    fontSize: 20,
  },
  title: {
    fontSize: 26,
    fontFamily: 'Poppins-SemiBold',
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
  errorText: {
    color: 'red',
    textAlign: 'center',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    height: 1,
    width: '100%',
  },
  button: {
    padding: 12,
    borderRadius: 8,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 'auto',
  },
  bodyTutorial:{
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    textAlign: 'center',
  },

  // Styles for authentication
  authContainer: {
    // @ts-ignore
    paddingVertical: VERTICAL_PADDING,
    paddingHorizontal: HORIZONTAL_PADDING,
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: '100%',
  },
  authLogo: {
    flex: 1,
    resizeMode: 'contain',
    alignSelf: 'center',
    margin: 20,
  },

  // Styles for the header
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    paddingVertical: VERTICAL_PADDING,
    paddingHorizontal: HORIZONTAL_PADDING,
    height: 70,
    zIndex: 100,
    backgroundColor: 'transparent',
  },

  // Styles for individual inputs
  individualInput: {
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 10,
    marginHorizontal: 5,
    padding: 12,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    width: 50,
  },
  individualInputsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },

  // Styles for the carousel
  carouselDotContainer:{
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  carouselContentContainer:{
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  carouselDot:{
    height: 8,
    borderRadius: 5,
    margin: 5
  },
  // Styles for the tutorial screen
  tutorialScreenContainer:{
    paddingHorizontal: HORIZONTAL_PADDING,
    paddingBottom: VERTICAL_PADDING,
    flex: 1,
    overflow: 'visible',
    justifyContent: 'space-between',
  },
  tutorialContainer:{
    justifyContent: 'center',
  },
  tutorialImage:{
    resizeMode: 'contain',
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

export default styles;