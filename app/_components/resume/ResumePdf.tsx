/* eslint-disable jsx-a11y/alt-text */

import { Document, Image, Link, Page, Text, View } from "@react-pdf/renderer";
import ResumeMainPanelSection from "./ResumeMainPanelSection";
import ResumeSidePanelSection from "./ResumeSidePanelSection";
import ResumeCompany from "./ResumeCompany";
import { workExperiences } from "./data/work";
import { skillset } from "./data/skill";
import { certifications } from "./data/certification";
import { qualifications } from "./data/education";
import { contacts } from "./data/contact";
import { styles } from "./lib/styles";

export const ResumePdf = () => {
  return (
    <Document
      title="Resume of Marcus Ng Wen Jian"
      author="Marcus Ng Wen Jian"
    >
      <Page size="A4" style={styles.page}>

        {/* Main Content appears first in the PDF stream */}
        <View style={styles.mainPanel}>
          <Text style={styles.name}>Marcus Ng Wen Jian</Text>
          <Text style={styles.designation}>Software Engineer | AWS Certified Solutions Architect</Text>

          <ResumeMainPanelSection title="Profile">
            <Text>Versatile Lead Software Engineer and AWS/Terraform certified specialist in scalable cloud infrastructure and full-stack development. Expert in automating DevOps workflows and leveraging AI integration to solve high-impact business challenges through engineering excellence.</Text>
          </ResumeMainPanelSection>

          <ResumeMainPanelSection title="Work Experience">
            {workExperiences.map((workExperience, idx) => (
              <ResumeCompany
                key={workExperience.company}
                company={workExperience.company}
                roles={workExperience.roles}
                isLast={idx === (workExperiences.length - 1)}
              />
            ))}
          </ResumeMainPanelSection>
        </View>

        {/* Sidebar appears second in the PDF stream */}
        <View style={styles.sidePanel}>
          <ResumeSidePanelSection title="Contact">
            {contacts.map((contact) => (
              <View key={contact.label} style={styles.contactRow}>
                <Image src={contact.icon.png} style={styles.contactIcon} />
                <Text style={styles.ghostText}>{contact.alt}:</Text>
                <Link href={contact.url} style={styles.contactLink}>{contact.label}</Link>
              </View>
            ))}
            <Image src="/images/qr-website.png" />
          </ResumeSidePanelSection>

          <ResumeSidePanelSection title="Skills">
            <View style={styles.skillContainer}>
              {skillset.map((skill) => (
                <View key={skill} style={styles.skillTag}>
                  <Text>
                    {skill}
                  </Text>
                </View>
              ))}
            </View>
          </ResumeSidePanelSection>

          <ResumeSidePanelSection title="Certification">
            {certifications.map((certification) => (
              <View key={certification.name} style={styles.sidePanelItemContainer}>
                <Text style={styles.sidePanelItemHeader}>{certification.name}</Text>
                <Text style={styles.sidePanelItemMutedText}>{certification.company}</Text>
                <Text style={styles.sidePanelItemMutedText}>{certification.year}</Text>
              </View>
            ))}
          </ResumeSidePanelSection>

          <ResumeSidePanelSection title="Education">
            {qualifications.map((qualification) => (
              <View key={qualification.institution} style={styles.sidePanelItemContainer}>
                <Text style={styles.sidePanelItemHeader}>{qualification.institution}</Text>
                <Text style={styles.sidePanelItemMutedText}>{qualification.qualification}</Text>
              </View>
            ))}
          </ResumeSidePanelSection>
        </View>
      </Page>
    </Document >
  );
};
