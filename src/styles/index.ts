import {StyleSheet} from 'react-native';

// Definition of constants for vertical and horizontal padding
const VERTICAL_PADDING = 30;
export const HORIZONTAL_PADDING = 20;

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
    zIndex: 999,
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
  /**Styles for Tab bar  */
  tabBarButton:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10, 
    borderRadius: 10,
    gap: 10,
  },
  tabBarText:{
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Regular',
  },
  tabBar:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: HORIZONTAL_PADDING,
    paddingVertical: VERTICAL_PADDING,
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 0,
  },
  /**Circle Button Styles */
  circleButton:{
    width: 40,
    height: 40,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerWithShadow:{
    shadowColor: '#1474E1',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.15,
    shadowRadius: 50,
    elevation: 20, 
    paddingHorizontal: HORIZONTAL_PADDING,
    paddingVertical: VERTICAL_PADDING,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },

});

export default styles;