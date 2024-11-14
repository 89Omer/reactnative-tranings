import React from 'react';
import {RefreshControl, ScrollView, StyleSheet, Text} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const RefreshableList = () => {
const [refreshing, setRefreshing] = React.useState(false);

const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
    setRefreshing(false);
    }, 2000);
}, []);

return (
    <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
        <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <Text>Pull down to see RefreshControl indicator. You can use this on any list get the latet records</Text>
        <Text>Pull down to see RefreshControl indicator. You can use this on any list get the latet records</Text>
        <Text>Pull down to see RefreshControl indicator. You can use this on any list get the latet records</Text>
        <Text>Pull down to see RefreshControl indicator. You can use this on any list get the latet records</Text>
        <Text>Pull down to see RefreshControl indicator. You can use this on any list get the latet records</Text>
        <Text>Pull down to see RefreshControl indicator. You can use this on any list get the latet records</Text>
        <Text>Pull down to see RefreshControl indicator. You can use this on any list get the latet records</Text>
        <Text>Pull down to see RefreshControl indicator. You can use this on any list get the latet records</Text>
        <Text>Pull down to see RefreshControl indicator. You can use this on any list get the latet records</Text>

        <Text>Pull down to see RefreshControl indicator. You can use this on any list get the latet records</Text>

        </ScrollView>
    </SafeAreaView>
    </SafeAreaProvider>
);
};

const styles = StyleSheet.create({
container: {
    flex: 1,
},
scrollView: {
    flex: 1,
    backgroundColor: '#316ff6',
    alignItems: 'center',
    justifyContent: 'center',
},
});

export default RefreshableList;