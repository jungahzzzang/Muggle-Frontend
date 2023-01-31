const colors = {
    white: '#ffffff',
    black: '#000000',
    grey_0: '#d5d5d5',
    grey_1: '#a6a6a6',
    green: '#377D71',
    lightPink: '#FBC5C5',
    deepPink: '#FBA1A1',
    purple: '#8879B0',
    red: '#e84118',
    blue: '#3679fe',
};

export const theme = {
    background: colors.white,
    text: colors.black,
    errorText: colors.red,

    //Image Component

    //Input Component
    label: colors.grey_1,
    inputPlaceholder: colors.grey_1,
    inputBorder: colors.grey_1,
    inputDisabledBackground: colors.grey_0,
    
    //Button Component
    buttonBackground: colors.green,
    buttonTitle: colors.pink,
    buttonUnfilledTitle: colors.blue,
    buttonLogout: colors.pink,

    //Navigation
    headerTintColor: colors.green,
    tabActiveColor: colors.pink,
    tabInactiveColor: colors.grey_1,

    //Spinner
    spinnerBackground: colors.black,
    spinnerIndicator: colors.white,

    //SearchBar
    unclicked: colors.grey_0,
    clicked: colors.grey_1
};