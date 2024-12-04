import { Stack } from 'expo-router';
import { StatusBar } from 'react-native';


const Layout = () => {
    return (
            <>
                <StatusBar barStyle={"light-content"} />
                <Stack screenOptions={{ headerShown: false }} />
            </>
    );
};

export default Layout;
