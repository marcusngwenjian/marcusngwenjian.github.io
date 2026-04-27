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

const defaultFontColor = '#18181b';

export const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    fontFamily: 'Roboto',
    padding: 30,
    fontSize: 10,
    fontWeight: 400,
    color: defaultFontColor,
  },
  mainContent: {
    flex: 2.2, // Takes up 2/3 of the width
    paddingRight: 20,
  },
  sidebar: {
    flex: 0.8, // Takes up 1/3 of the width
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: '#f0fdf5',
  },
  name: {
    fontSize: 18,
    fontWeight: 900,
  },
  designation: {
    fontSize: 14,
  },
  mainContentSection: {
    marginTop: 12,
  },
  sidebarSection: {
    marginBottom: 5,
    fontSize: 8,
  },
  sectionHeading: {
    textTransform: 'uppercase',
    fontSize: 11,
    fontWeight: 700,
    color: "#17c85e",
    borderBottomWidth: 0.5,
    borderBottomColor: '#cad5e2',
    borderBottomStyle: 'solid',
    paddingBottom: 5,
    marginBottom: 5
  },
  companyName: {
    fontSize: 12,
    fontWeight: 700,
    marginBottom: 4,
  },
  roleContainer: {
    marginBottom: 10,
  },
  roleHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  roleBullet: {
    fontSize: 16,
    color: '#17c85e',
    marginRight: 6,
    lineHeight: 1,
  },
  roleTitle: {
    fontSize: 11,
    fontWeight: 700,
  },
  duration: {
    fontSize: 9,
    color: '#71717a',
  },
  achievementList: {
    marginLeft: 16,
  },
  listItem: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  bulletPoint: {
    width: 10,
    fontSize: 10,
    marginLeft: 5,
  },
  listItemContent: {
    flex: 1,
    fontSize: 10,
    lineHeight: 1.4,
  },
  contactRow: {
    flexDirection: 'row',     // Horizontal layout
    alignItems: 'center',     // Vertically centers icon with text
    marginBottom: 4,          // Spacing between rows
  },
  contactIcon: {
    height: 8,
    width: 8,
    marginRight: 3,
  },
  contactLink: {
    fontSize: 8,
    color: defaultFontColor,
    textDecoration: 'none',
  },
  imgAltText: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    color: 'transparent',
    fontSize: 0.1, // Keep it tiny so it doesn't shift layout
  },
  skillContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
  },
  skillTag: {
    backgroundColor: '#f0f0f080', // Muted light gray
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginRight: 6,
    marginBottom: 6,
  },
  certificateRow: {
    marginBottom: 4,
  },
  certificateName: {
    fontWeight: 700
  }
});
