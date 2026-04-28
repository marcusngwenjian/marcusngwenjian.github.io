import type { ReactNode } from 'react';
import { Text, View } from '@react-pdf/renderer';
import { styles } from './lib/styles';

interface ResumeMainPanelSectionProps {
  readonly title: string;
  readonly children: ReactNode;
}

export const ResumeMainPanelSection = ({
  title,
  children,
}: ResumeMainPanelSectionProps) => {
  return (
    <View style={styles.mainContentSection}>
      <Text style={styles.sectionHeading}>{title}</Text>
      {children}
    </View>
  );
};
