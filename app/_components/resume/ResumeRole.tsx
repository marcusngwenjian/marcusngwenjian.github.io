import { Text, View } from '@react-pdf/renderer';
import { styles } from './lib/styles';
import ResumeBulletAchievement from './ResumeBulletAchievement';
import ResumeRoleHeader from './ResumeRoleHeader';

interface ResumeRoleProps {
  readonly company: string;
  readonly role: string;
  readonly date: string;
  readonly summary?: string;
  readonly achievements?: readonly string[];
  readonly isLast?: boolean;
}

export default function ResumeRole({
  company,
  role,
  date,
  summary,
  achievements,
  isLast = false,
}: ResumeRoleProps) {
  const containerStyle = {
    marginBottom: isLast ? 0 : 2,
  } as const;

  return (
    <View style={containerStyle}>
      <ResumeRoleHeader name={role} company={company} date={date} />
      <View style={styles.achievementContainer}>
        {summary && <Text>{summary}</Text>}
        {achievements?.map((achievement, idx) => (
          <ResumeBulletAchievement
            key={achievement}
            achievement={achievement}
            isLast={idx === (achievements?.length ?? 0) - 1}
          />
        ))}
      </View>
    </View>
  );
}
