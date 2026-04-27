import { Font, StyleSheet } from "@react-pdf/renderer";

Font.register({
  family: 'Roboto', fonts: [
    { src: 'https://fonts.gstatic.com/s/roboto/v51/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbWmT.ttf', fontWeight: 400 },
    { src: 'https://fonts.gstatic.com/s/roboto/v51/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWuYjammT.ttf', fontWeight: 700 },
    { src: 'https://fonts.gstatic.com/s/roboto/v51/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWuZtammT.ttf', fontWeight: 900 },
  ]
});

// Disable word hyphenation
Font.registerHyphenationCallback(word => [word]);

export const color = {
  defaultText: '#18181b',
  mutedText: '#71717a',
  brand: '#17c85e'
} as const;

const fontSize = {
  mainPanelDefault: 10,
  sidePanelDefault: 8,
  documentTitle: 18,
  documentSubtitle: 14,
  sectionHeading: 11,
  sectionSubHeading: 10,

  achievement: 10,
  contactLink: 8,
} as const;

const fontWeight = {
  default: 400,
  header: 700,
  documentTitle: 900,
} as const;

const panelFlexWidth = {
  main: 2.2, // Takes up 2/3 of the width
  side: 0.8, // Takes up 1/3 of the width
} as const;

const interSectionGapVertical = 12;

export const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    padding: 30,
    backgroundColor: '#FFFFFF',
    color: color.defaultText,
    fontFamily: 'Roboto',
    fontWeight: fontWeight.documentTitle,
  },
  mainPanel: {
    flex: panelFlexWidth.main,
    paddingRight: 20,
    fontSize: fontSize.mainPanelDefault,
    fontWeight: fontWeight.default,
  },
  sidePanel: {
    flex: panelFlexWidth.side,
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: '#f0fdf5',
    fontWeight: fontWeight.default,
  },
  mainContentSection: {
    marginTop: interSectionGapVertical,
  },
  sidePanelSection: {
    marginBottom: interSectionGapVertical,
    fontSize: fontSize.sidePanelDefault,
  },
  ghostText: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    color: 'transparent',
    fontSize: 0.1, // Keep it tiny so it doesn't shift layout
  },
  name: {
    fontSize: fontSize.documentTitle,
    fontWeight: fontWeight.documentTitle,
  },
  designation: {
    fontSize: fontSize.documentSubtitle,
  },
  sectionHeading: {
    paddingBottom: 5,
    marginBottom: 5,
    color: color.brand,
    fontSize: fontSize.sectionHeading,
    fontWeight: fontWeight.header,
    textTransform: 'uppercase',
    borderBottomWidth: 0.5,
    borderBottomStyle: 'solid',
    borderBottomColor: '#cad5e2',
  },
  sidePanelItemContainer: {
    marginBottom: 4,
  },
  sidePanelItemHeader: {
    marginBottom: 1,
    fontWeight: fontWeight.header
  },
  sidePanelItemMutedText: {
    color: color.mutedText,
  },
  companyName: {
    fontSize: fontSize.sectionSubHeading,
    fontWeight: fontWeight.header,
    marginBottom: 1,
  },
  roleHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  roleNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  roleName: {
    fontWeight: fontWeight.header,
  },
  roleBullet: {
    marginRight: 6,
    color: color.brand,
    fontSize: 16,
    lineHeight: 1,
  },
  roleDate: {
    color: color.mutedText,
    fontSize: fontSize.mainPanelDefault - 1,
  },
  achievementContainer: {
    marginLeft: 12,
  },
  achievementBulletItemContainer: {
    flexDirection: 'row',
  },
  achievementBulletItemBullet: {
    width: 10
  },
  achievementBulletItemText: {
    flex: 1,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  contactIcon: {
    height: 8,
    width: 8,
    marginRight: 3,
  },
  contactLink: {
    color: color.defaultText,
    fontSize: fontSize.contactLink,
    textDecoration: 'none',
  },
  skillContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skillTag: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 6,
    marginBottom: 6,
    backgroundColor: '#f0f0f080', // Muted light gray
    borderRadius: 4,
  },
});
