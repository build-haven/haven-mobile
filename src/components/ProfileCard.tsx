import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from 'react-native';

import type { Profile } from '@/src/constants/mockProfiles';

type ProfileCardProps = {
  profile: Profile;
};

export default function ProfileCard({ profile }: ProfileCardProps) {
  const primaryPhoto = profile.photos[0];

  return (
    <View className="flex-1 overflow-hidden rounded-3xl bg-haven-dark shadow-lg">
      <Image
        source={{ uri: primaryPhoto }}
        style={StyleSheet.absoluteFillObject}
        contentFit="cover"
        transition={300}
      />

      <LinearGradient
        colors={['transparent', 'rgba(15, 15, 20, 0.55)', 'rgba(15, 15, 20, 0.92)']}
        locations={[0.45, 0.72, 1]}
        style={styles.gradient}
      />

      <View className="absolute inset-x-0 bottom-0 p-5 pb-6">
        <View className="mb-2 flex-row items-center gap-2">
          <Text className="text-3xl font-extrabold tracking-tight text-white">
            {profile.firstName}, {profile.age}
          </Text>
          {profile.isVerified && (
            <View className="rounded-full bg-haven-purple/90 p-1">
              <Ionicons name="checkmark-circle" size={22} color="#FFFFFF" />
            </View>
          )}
        </View>

        <View className="mb-3 flex-row items-center gap-1.5">
          <Ionicons name="location-sharp" size={14} color="#FF4D8D" />
          <Text className="text-sm font-semibold text-white/90">
            {profile.distanceKm} km away
          </Text>
        </View>

        <Text className="mb-4 text-base leading-6 text-white/85" numberOfLines={2}>
          {profile.bio}
        </Text>

        <View className="flex-row flex-wrap gap-2">
          {profile.interests.map((interest) => (
            <View
              key={interest}
              className="rounded-full border border-white/25 bg-white/15 px-3.5 py-1.5 backdrop-blur-sm">
              <Text className="text-xs font-bold uppercase tracking-wide text-white">
                {interest}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '55%',
  },
});
