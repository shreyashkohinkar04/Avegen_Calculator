module.exports = {
    main_screen: {
        display: 'flex',
        marginBottom: 30,
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },

    // Display results
    main_screen__display: {
        width: '95%',
        backgroundColor: '#ffffff',
        borderRadius: 10,
        display: 'flex',
        marginBottom: 10,
        padding: 10,
    },
    main_screen__display_text: {
        fontSize: 50,
        textAlign: 'right',
        color: '#333333',
    },
    main_screen__keypad: {
        width: '100%',
        height: '70%',
        display: 'flex',
    },
    main_screen__keypad_row: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    btn_outer: {
        width: 90,
        height: 90,
        backgroundColor: '#4CAF50',
        borderRadius: 90,
        elevation: 10,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bg_button: {
        backgroundColor: '#4CAF50',
        color: 'white',
        fontSize: 30,
    },

    btn1_outer: {
        width: 90,
        height: 90,
        backgroundColor: '#FF9800',
        borderRadius: 90,
        elevation: 10,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bg1_button: {
        backgroundColor: '#FF9800',
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },

    btn2_outer: {
        width: 90,
        height: 90,
        backgroundColor: '#9E9E9E',
        borderRadius: 90,
        elevation: 10,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bg2_button: {
        backgroundColor: '#9E9E9E',
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    }
}
