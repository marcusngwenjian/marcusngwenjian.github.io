import { Text, View } from '@react-pdf/renderer';
import { styles } from './lib/styles';

interface ResumeBulletAchievementProps {
  achievement: string;
  isLast?: boolean;
}

export default function ResumeBulletAchievement({
  achievement,
  isLast = false,
}: ResumeBulletAchievementProps) {
  const marginBottom = isLast ? 0 : 1;

  return (
    <View style={[styles.achievementBulletItemContainer, { marginBottom }]}>
      <Text style={styles.achievementBulletItemBullet}>•</Text>
      <Text style={styles.achievementBulletItemText}>{achievement}</Text>
    </View>
  );
}
