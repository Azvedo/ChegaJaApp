import { Stack } from 'expo-router';
import { StatusBar } from 'react-native';
import { UserProvider } from '../contexts/UserContext';

const Layout = () => {
    return (
            <UserProvider>
                <StatusBar barStyle={"light-content"} />
                <Stack screenOptions={{ headerShown: false }} />
            </UserProvider>
    );
};

export default Layout;
