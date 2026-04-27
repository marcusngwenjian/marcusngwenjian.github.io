/* eslint-disable jsx-a11y/alt-text */

import { Document, Image, Link, Page, Text, View } from "@react-pdf/renderer";
import { styles } from "./lib/styles";
import { workExperiences } from "./data/work";
import { skillset } from "./data/skill";
import { certifications } from "./data/certification";
import { qualifications } from "./data/education";

export const ResumePdf = () => {
  return (
    <Document
      title="Resume of Marcus Ng Wen Jian"
      author="Marcus Ng Wen Jian"
    >
      <Page size="A4" style={styles.page}>

        {/* Main Content appears first in the PDF stream */}
        <View style={styles.mainContent}>
          <View>
            <Text style={styles.name}>Marcus Ng Wen Jian</Text>
            <Text style={styles.designation}>Software Engineer | AWS Certified Solutions Architect</Text>
          </View>

          <View style={styles.mainContentSection} >
            <View>
              <Text style={styles.sectionHeading}>Profile</Text>
              <Text>Versatile Lead Software Engineer with extensive experience across the full development lifecycle, from architectural design to cloud deployment. Certified in AWS and Terraform, specializing in building automated infrastructure and scalable full stack applications. Passionate about leveraging AI to optimize development workflows and enhance product capabilities. Committed to driving engineering excellence through rigorous code standards and the integration of emerging technologies to solve high-impact business challenges.</Text>
            </View>
          </View>

          <View style={styles.mainContentSection} >
            <Text style={styles.sectionHeading}>Work Experiences</Text>
            {workExperiences.map((workExperience) => (
              <View key={workExperience.company}>
                <Text>{workExperience.company}</Text>
                {workExperience.roles.map((role) => (
                  <View key={`${workExperience.company}-${role.role}`}>
                    <Text>{role.role}</Text>
                    {role.summary && <Text>{role.summary}</Text>}
                    {role.topAchievements?.map((achievement) => (
                      // <Text key={achievement}>{achievement}</Text>
                      <View key={achievement} style={styles.listItem}>
                        {/* The Bullet Symbol */}
                        <Text style={styles.bulletPoint}>•</Text>

                        {/* The Text Content */}
                        <Text style={styles.listItemContent}>
                          {achievement}
                        </Text>
                      </View>
                    ))}
                  </View>
                ))}
              </View>
            ))}
          </View>
        </View>

        {/* Sidebar appears second in the PDF stream */}
        <View style={styles.sidebar}>
          <View style={styles.sidebarSection}>
            <Text style={styles.sectionHeading}>Contact</Text>
            <View style={styles.contactRow}>
              <Image src={"/icons/external/icons8-github-30.png"} style={styles.contactIcon} />
              <Text style={styles.imgAltText}>GitHub:</Text>
              <Link href="https://github.com/marcusngwenjian" style={styles.contactLink}>github.com/marcusngwenjian</Link>
            </View>
            <View style={styles.contactRow}>
              <Image src={"/icons/external/icons8-linkedin-30.png"} style={styles.contactIcon} />
              <Text style={styles.imgAltText}>LinkedIn:</Text>
              <Link href="https://www.linkedin.com/in/marcusngwenjian/" style={styles.contactLink}>linkedin.com/in/marcusngwenjian</Link>
            </View>
            <View style={styles.contactRow}>
              <Image src={"/icons/external/icons8-website-30.png"} style={styles.contactIcon} />
              <Text style={styles.imgAltText}>Website:</Text>
              <Link href="https://marcusngwenjian.github.io/" style={styles.contactLink}>marcusngwenjian.github.io</Link>
            </View>
            <View>
              <Image src={"/images/qr-website.png"} />
            </View>
          </View>
          <View style={styles.sidebarSection}>
            <Text style={styles.sectionHeading}>Skills</Text>
            <View style={styles.skillContainer}>
              {skillset.map((skill) => (
                <View key={skill} style={styles.skillTag}>
                  <Text>
                    {skill}
                  </Text>
                </View>
              ))}
            </View>
          </View>
          <View style={styles.sidebarSection}>
            <Text style={styles.sectionHeading}>Certification</Text>
            <View>
              {certifications.map((certification) => (
                <View key={certification.name} style={styles.certificateRow}>
                  <Text style={styles.certificateName}>{certification.name}</Text>
                  <Text>{certification.company}</Text>
                  <Text>{certification.year}</Text>
                </View>
              ))}
            </View>
          </View>
          <View style={styles.sidebarSection}>
            <Text style={styles.sectionHeading}>Education</Text>
            <View>
              {qualifications.map((qualification) => (
                <View key={qualification.institution} style={styles.certificateRow}>
                  <Text style={styles.certificateName}>{qualification.institution}</Text>
                  <Text>{qualification.qualification}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};
