import { Text, View } from '@react-pdf/renderer';
import { styles } from './lib/styles';

interface ResumeRoleHeaderProps {
  readonly name: string;
  readonly company: string;
  readonly date: string;
}

export const ResumeRoleHeader = ({
  name,
  company,
  date,
}: ResumeRoleHeaderProps) => {
  return (
    <View style={styles.roleHeader}>
      <View style={styles.roleNameContainer}>
        <Text style={styles.roleBullet}>•</Text>
        <Text style={styles.roleName}>{name}</Text>
        <Text style={styles.ghostText}>(Company: {company})</Text>
      </View>
      <Text style={styles.roleDate}>{date}</Text>
    </View>
  );
};
