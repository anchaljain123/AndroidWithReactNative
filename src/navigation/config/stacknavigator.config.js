import { Animated, Easing } from 'react-native';

const stackNavigatorConfig = (initialRouteName, customNavigationConfig) => ({
    ...{
        headerMode: 'none',
        transparentCard: true,
        initialRouteName,
        transitionConfig: () => ({
            transitionSpec: {
                duration: 300,
                easing: Easing.out(Easing.poly(4)),
                timing: Animated.timing
            },
            screenInterpolator: sceneProps => {
                const { layout, position, scene } = sceneProps;
                const topAnimation = scene.route.params && scene.route.params.topAnimation;
                const noAnimation = scene.route.params && scene.route.params.noAnimation;
                const offsetTop = (scene.route.params && scene.route.params.offsetTop) || 0;
                const { index } = scene;

                const height = layout.initHeight;
                let translateY = position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [height, 0, 0]
                });

                const opacity = position.interpolate({
                    inputRange: [index - 1, index - 0.99, index],
                    outputRange: [0, 1, 1]
                });

                //No Animation
                if (noAnimation) {
                    return { opacity, marginTop: offsetTop };
                }

                //Animation to slideFromTop
                if (topAnimation) {
                    translateY = position.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [-height, offsetTop, 0]
                    });
                }

                return { opacity, transform: [{ translateY }] };
            }
        })
    },
    ...customNavigationConfig
});

export const hideTabbarHelper = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible
    };
};

export default stackNavigatorConfig;
