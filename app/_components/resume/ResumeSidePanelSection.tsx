import type { ReactNode } from 'react';
import { Text, View } from '@react-pdf/renderer';
import { styles } from './lib/styles';

interface ResumeSidePanelSectionProps {
  readonly title: string;
  readonly children: ReactNode;
}

export const ResumeSidePanelSection = ({
  title,
  children,
}: ResumeSidePanelSectionProps) => {
  return (
    <View style={styles.sidePanelSection}>
      <Text style={styles.sectionHeading}>{title}</Text>
      {children}
    </View>
  );
};
