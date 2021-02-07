import React, {useEffect} from 'react';
import { StyleSheet, Text, View , TouchableOpacity, TextInput} from 'react-native';
import { useForm } from 'react-hook-form'

const Form = (props) => {
    const {register, handleSubmit, setValue} = useForm();

    useEffect(() =>{
        register('name');
    }, [register]);

    const showDetail = (data) => {
        props.navigation.navigate("Details", {name: data.name})
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Name:</Text>
            <TextInput onChangeText={text => {
                setValue('name', text)
            }}/>
            <TouchableOpacity onPress={handleSubmit(showDetail)}>
                <Text>Show details</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Form;

const styles = StyleSheet.create({
    container: {
        marginTop: 30
    }
});
