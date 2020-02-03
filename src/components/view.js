import React, { Component } from 'react';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container} />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
    },
});