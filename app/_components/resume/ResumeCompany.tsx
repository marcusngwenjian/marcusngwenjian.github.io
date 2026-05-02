import { Text, View } from '@react-pdf/renderer';
import { styles } from './lib/styles';
import type { WorkRole } from './lib/types';
import { ResumeRole } from './ResumeRole';

interface ResumeCompanyProps {
  readonly company: string;
  readonly roles: readonly WorkRole[];
  readonly isLast: boolean;
}

export const ResumeCompany = ({
  company,
  roles,
  isLast,
}: ResumeCompanyProps) => {
  const containerStyle = {
    marginBottom: isLast ? 0 : 5,
  } as const;

  return (
    <View style={containerStyle}>
      <Text style={styles.companyName}>{company}</Text>
      {roles.map((role, idx) => (
        <ResumeRole
          key={`${company}-${role.role}`}
          company={company}
          role={role.role}
          date={role.date}
          summary={role.summary}
          achievements={role.topAchievements}
          isLast={idx === roles.length - 1}
        />
      ))}
    </View>
  );
};
