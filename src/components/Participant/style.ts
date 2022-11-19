import { StyleSheet } from "react-native";

export const styles = StyleSheet.create ({
    container: {
        width: '100%',
        backgroundColor: '#1E1F25',
        borderRadius:5,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    name:{
        color: '#FFF',
        flex: 1,
        fontSize: 16,
        marginLeft: 16,

    },
    buttonText:{
        color:'#fff',
        fontSize: 24,
    },
    button:{
        width: 56,
        height:56,
        backgroundColor: '#E23C44',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',   
    },
    });
