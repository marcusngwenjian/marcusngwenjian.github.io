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
              <Text>Versatile Lead Software Engineer and AWS/Terraform certified specialist in scalable cloud infrastructure and full-stack development. Expert in automating DevOps workflows and leveraging AI integration to solve high-impact business challenges through engineering excellence.</Text>
            </View>
          </View>

          <View style={styles.mainContentSection} >
            <Text style={styles.sectionHeading}>Work Experience</Text>
            {workExperiences.map((workExperience) => (
              <View key={workExperience.company}>
                <Text style={styles.companyName}>{workExperience.company}</Text>
                {workExperience.roles.map((role) => (
                  <View key={`${workExperience.company}-${role.role}`} style={styles.roleContainer}>
                    <View style={styles.roleHeader}>
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.roleBullet}>•</Text>
                        <Text style={styles.roleTitle}>{role.role}</Text>
                        <Text style={styles.ghostText}>({workExperience.company})</Text>
                      </View>
                      <Text style={styles.duration}>{role.date}</Text>
                    </View>
                    <View style={styles.achievementList}>
                      {role.topAchievements?.map((achievement) => (
                        <View key={achievement} style={styles.listItem}>
                          <Text style={styles.bulletPoint}>•</Text>
                          <Text style={styles.listItemContent}>{achievement}</Text>
                        </View>
                      ))}
                    </View>
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
              <Text style={styles.ghostText}>GitHub:</Text>
              <Link href="https://github.com/marcusngwenjian" style={styles.contactLink}>github.com/marcusngwenjian</Link>
            </View>
            <View style={styles.contactRow}>
              <Image src={"/icons/external/icons8-linkedin-30.png"} style={styles.contactIcon} />
              <Text style={styles.ghostText}>LinkedIn:</Text>
              <Link href="https://www.linkedin.com/in/marcusngwenjian/" style={styles.contactLink}>linkedin.com/in/marcusngwenjian</Link>
            </View>
            <View style={styles.contactRow}>
              <Image src={"/icons/external/icons8-website-30.png"} style={styles.contactIcon} />
              <Text style={styles.ghostText}>Website:</Text>
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
