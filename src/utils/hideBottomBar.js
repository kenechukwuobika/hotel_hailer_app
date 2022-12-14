export const hideBottomBar = (navigation) => {
    navigation.getParent()?.setOptions({
        tabBarStyle: {
          display: "none"
        }
      });
      return () => navigation.getParent()?.setOptions({
        tabBarStyle: {
          height: 75,
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 16
        }
      });
}