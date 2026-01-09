import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import { cvData } from '@/lib/data/cv';
import path from 'path';

// Clean, professional CV styles
const styles = StyleSheet.create({
  page: {
    padding: 48,
    fontSize: 10,
    fontFamily: 'Helvetica',
    lineHeight: 1.4,
    color: '#000000',
  },
  header: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  headerText: {
    flex: 1,
  },
  profilePhoto: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginLeft: 16,
    border: '2px solid #000000',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  contactInfo: {
    fontSize: 9,
    color: '#333333',
  },
  summary: {
    fontSize: 9,
    lineHeight: 1.5,
    marginBottom: 16,
    marginTop: 8,
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    paddingBottom: 4,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  workItem: {
    marginBottom: 12,
  },
  workHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  employer: {
    fontSize: 11,
    fontWeight: 'bold',
  },
  role: {
    fontSize: 10,
    fontStyle: 'italic',
    marginBottom: 4,
  },
  duration: {
    fontSize: 9,
    color: '#333333',
  },
  bulletItem: {
    flexDirection: 'row',
    marginBottom: 4,
    paddingLeft: 12,
  },
  bullet: {
    width: 8,
    fontSize: 9,
  },
  bulletText: {
    flex: 1,
    fontSize: 9,
    lineHeight: 1.4,
  },
  techList: {
    fontSize: 9,
    marginTop: 4,
    color: '#333333',
  },
  educationItem: {
    marginBottom: 12,
  },
  educationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  schoolName: {
    fontSize: 11,
    fontWeight: 'bold',
  },
  degree: {
    fontSize: 9,
    marginBottom: 4,
  },
  skillsContainer: {
    fontSize: 9,
    lineHeight: 1.5,
  },
  projectItem: {
    marginBottom: 8,
  },
  projectName: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  projectDetails: {
    fontSize: 9,
    marginTop: 4,
    lineHeight: 1.4,
  },
});

// PDF Document Component
export const CVDocument = () => {
  const { work_experiences, education, skills, tools, side_projects } = cvData;
  const imagePath = path.join(process.cwd(), 'public', 'me.jpg');

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerText}>
            <Text style={styles.name}>MARK CHAVEZ</Text>
            <View>
                <Text style={styles.contactInfo}>Manila, Philippines</Text>
                <Text style={styles.contactInfo}>mjfchavez@gmail.com</Text>
                <Text style={styles.contactInfo}>markchavez.dev</Text>
                <Text style={styles.contactInfo}>github.com/markfchavez</Text>
            </View>
          </View>
          <Image src={imagePath} style={styles.profilePhoto} />
        </View>

        {/* Summary */}
        <Text style={styles.summary}>
          Ruby on Rails specialist with 10+ years of experience building web applications across childcare,
          healthcare, finance, and telecom industries. Comfortable with Hotwire and Stimulus for creating modern,
          interactive experiences with minimal JavaScript. Focused on Rails conventions, clean architecture,
          and pragmatic solutions that scale.
        </Text>

        {/* Work Experience */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>
          {work_experiences.map((work, index) => (
            <View key={index} style={styles.workItem}>
              <View style={styles.workHeader}>
                <Text style={styles.employer}>{work.employer}</Text>
                <Text style={styles.duration}>{work.duration}</Text>
              </View>
              <Text style={styles.role}>{work.role}</Text>
              {work.responsibilities.slice(0, 3).map((r, idx) => (
                <View key={idx} style={styles.bulletItem}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.bulletText}>{r}</Text>
                </View>
              ))}
              <Text style={styles.techList}>
                Technologies: {work.technologies.slice(0, 8).join(', ')}
              </Text>
            </View>
          ))}
        </View>

        {/* Education */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          {education.map((school, index) => (
            <View key={index} style={styles.educationItem}>
              <View style={styles.educationHeader}>
                <Text style={styles.schoolName}>{school.name}</Text>
                <Text style={styles.duration}>{school.years}</Text>
              </View>
              <Text style={styles.degree}>{school.course} - {school.major}</Text>
              {school.highlights.map((h, idx) => (
                <View key={idx} style={styles.bulletItem}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.bulletText}>{h}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>

        {/* Skills */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          <Text style={styles.skillsContainer}>{skills.join(' • ')}</Text>
        </View>

        {/* Tools */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tools</Text>
          <Text style={styles.skillsContainer}>{tools.join(' • ')}</Text>
        </View>

        {/* Side Projects */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Projects</Text>
          {side_projects.map((project) => (
            <View key={project.name} style={styles.projectItem}>
              <Text style={styles.projectName}>{project.name}</Text>
              <Text style={styles.projectDetails}>
                {project.description} — {project.stack.slice(0, 4).join(', ')}
              </Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};
