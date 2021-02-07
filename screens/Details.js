import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

const Details = (props) => {
    return (
        <View style={styles.container}>
            <Text>{props.route.params.name}</Text>
        </View>
    );
};

export default Details;

const styles = StyleSheet.create({
    container: {
        marginTop: 30
    }
});
