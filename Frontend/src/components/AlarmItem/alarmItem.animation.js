import { useEffect } from 'react';
import { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

export function useAlarmItemAnimations(editMode) {
    const switchTranslateX = useSharedValue(0);
    const switchOpacity = useSharedValue(1);

    const trashTranslateX = useSharedValue(-10);
    const trashOpacity = useSharedValue(0);

    const createTranslateX = useSharedValue(30);
    const createOpacity = useSharedValue(0);

    const infoTranslateX = useSharedValue(0);

    useEffect(() => {
        if (editMode) {
            // Switch sai
            switchTranslateX.value = withTiming(-30, { duration: 500 });
            switchOpacity.value = withTiming(0, { duration: 500 });

            // Trash entra
            trashTranslateX.value = withTiming(14, { duration: 500 });
            trashOpacity.value = withTiming(1, { duration: 500 });

            // Create entra
            createTranslateX.value = withTiming(-30, { duration: 500 });
            createOpacity.value = withTiming(1, { duration: 500 });
            
            // desliza a info
            infoTranslateX.value = withTiming(24, { duration: 500 });

        } else {
            // Switch volta
            switchTranslateX.value = withTiming(20, { duration: 500 });
            switchOpacity.value = withTiming(1, { duration: 500 });

            // Trash sai
            trashTranslateX.value = withTiming(-30, { duration: 500 });
            trashOpacity.value = withTiming(0, { duration: 500 });

            // Create sai
            createTranslateX.value = withTiming(30, { duration: 500 });
            createOpacity.value = withTiming(0, { duration: 500 });

            infoTranslateX.value = withTiming(0, { duration: 500 });
        }
    }, [editMode]);


    const switchAnimatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: switchTranslateX.value }],
        opacity: switchOpacity.value,
    }));

    const trashAnimatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: trashTranslateX.value }],
        opacity: trashOpacity.value,
    }));

    const createAnimatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: createTranslateX.value }],
        opacity: createOpacity.value,
    }));

    const infoAnimatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: infoTranslateX.value }],
    }));

    return {
        switchAnimatedStyle,
        trashAnimatedStyle,
        createAnimatedStyle,
        infoAnimatedStyle,
    };
}
