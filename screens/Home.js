import React from 'react';
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';

const Home = (props) => {
    const navigateToForm = () => {
        //Todo navigate to Form.js
        console.log("navigating!")
    };

    return (
        <View style={styles.container}>
            <Text>This is the Home Page</Text>
            <Text>This should be the first page you see!</Text>
            <TouchableOpacity onPress={() => navigateToForm} style={styles.button}>
                <Text>go to the form</Text>
            </TouchableOpacity>
        </View>
    );

};

export default Home;

const styles = StyleSheet.create({
    container: {
        marginTop: 30
    },
    button: {
        padding: 10,
        backgroundColor: "#3d6bff",
        borderRadius: 5
    }
});
