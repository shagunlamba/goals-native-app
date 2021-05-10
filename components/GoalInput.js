import React, { useState } from 'react';
import { View, TextInput , Button, StyleSheet, Modal } from 'react-native';

const GoalInput = (props) => {

    const [enteredGoal , setEnteredGoal] = useState('');
    const goalInputHandler= (enteredText)=> {
        setEnteredGoal(enteredText);
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput 
                placeholder="Add a goal" 
                style={styles.input}
                value={enteredGoal}
                onChangeText={goalInputHandler}
                />
                <View style={styles.btnContainer}>
                    <View style={styles.button}>
                        <Button title="CANCEL" color="red" onPress={props.onCancel} />
                    </View>
                    <View style={styles.button}>
                        <Button 
                        title="Add" 
                        onPress={()=>{
                            props.addGoalHandler(enteredGoal)
                            setEnteredGoal('')
                        }}
                        />
                    </View>
                </View>
            </View>
      </Modal>
    )
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: 'pink',
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        flex: 1
      },
      input: {
        width: '80%' ,
        borderBottomColor: 'black', 
        borderBottomWidth: 1, 
        padding: 10,
        marginBottom: 20
      },
      btnContainer: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '50%'
      },
      button: {
          width: '40%'
      }
});