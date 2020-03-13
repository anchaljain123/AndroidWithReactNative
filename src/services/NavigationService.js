import { NavigationActions, StackActions } from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
    _navigator = navigatorRef;
}

function navigate(routeName, params = null, action = null, key = null) {
    _navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params,
            action,
            key
        })
    );
}

/**
 * Description. Function for setting navigation to parent(root) from child stack
 *
 * @param {string}   routeName                  name of route in parent to navigate
 */

function navigationReset(routeName) {
    _navigator.dispatch(
        StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName })]
        })
    );
}

// Add other navigation functions that you need and export them

export default {
    navigate,
    setTopLevelNavigator,
    navigationReset
};
