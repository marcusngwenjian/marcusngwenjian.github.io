import { Text, View } from "@react-pdf/renderer";
import type { WorkRole } from "@/app/_data/schema";
import ResumeRole from "./ResumeRole";
import { styles } from "./lib/styles";

interface ResumeCompanyProps {
  readonly company: string;
  readonly roles: readonly WorkRole[];
  readonly isLast: boolean;
}

export default function ResumeCompany({ company, roles, isLast }: ResumeCompanyProps) {
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
          isLast={idx === (roles.length - 1)}
        />
      ))}
    </View>
  );
}
