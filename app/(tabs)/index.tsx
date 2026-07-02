import { Ionicons } from '@expo/vector-icons';
import { useCallback, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ProfileCard from '@/src/components/ProfileCard';
import { MOCK_PROFILES } from '@/src/constants/mockProfiles';

type ActionButtonProps = {
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  backgroundColor: string;
  onPress: () => void;
};

function ActionButton({ label, icon, color, backgroundColor, onPress }: ActionButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      onPress={onPress}
      className="active:scale-95"
      style={({ pressed }) => ({
        opacity: pressed ? 0.85 : 1,
        transform: [{ scale: pressed ? 0.95 : 1 }],
      })}>
      <View
        className="h-16 w-16 items-center justify-center rounded-full shadow-md"
        style={{ backgroundColor }}>
        <Ionicons name={icon} size={30} color={color} />
      </View>
    </Pressable>
  );
}

export default function DiscoverScreen() {
  const [profileIndex, setProfileIndex] = useState(0);

  const currentProfile = MOCK_PROFILES[profileIndex];
  const hasMoreProfiles = profileIndex < MOCK_PROFILES.length;

  const goToNextProfile = useCallback(() => {
    setProfileIndex((prev) => prev + 1);
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-haven-dark" edges={['top', 'left', 'right']}>
      <View className="flex-1 px-4 pt-2">
        <View className="mb-4">
          <Text className="text-sm font-bold uppercase tracking-[0.2em] text-haven-pink">
            Haven
          </Text>
          <Text className="text-3xl font-extrabold text-white">Discover</Text>
        </View>

        {hasMoreProfiles && currentProfile ? (
          <>
            <View className="min-h-[420px] flex-1">
              <ProfileCard profile={currentProfile} />
            </View>

            <View className="flex-row items-center justify-center gap-10 py-6">
              <ActionButton
                label="Nope"
                icon="close"
                color="#FF6B6B"
                backgroundColor="#2A1518"
                onPress={goToNextProfile}
              />
              <ActionButton
                label="Like"
                icon="heart"
                color="#FF4D8D"
                backgroundColor="#2A1220"
                onPress={goToNextProfile}
              />
            </View>
          </>
        ) : (
          <View className="flex-1 items-center justify-center px-8">
            <View className="mb-4 rounded-full bg-white/10 p-5">
              <Ionicons name="sparkles" size={36} color="#FF4D8D" />
            </View>
            <Text className="mb-2 text-center text-2xl font-extrabold text-white">
              No more profiles nearby
            </Text>
            <Text className="text-center text-base leading-6 text-white/60">
              Check back later — new people join Haven every day.
            </Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
