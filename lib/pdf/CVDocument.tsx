import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { cvData } from '@/lib/data/cv';

// Define styles for the PDF
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 10,
    fontFamily: 'Helvetica',
    lineHeight: 1.5,
  },
  header: {
    marginBottom: 20,
    borderLeftWidth: 3,
    borderLeftColor: '#FF006E',
    paddingLeft: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  contactGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 10,
  },
  contactItem: {
    fontSize: 9,
    width: '48%',
  },
  about: {
    backgroundColor: '#F9FAFB',
    padding: 12,
    borderLeftWidth: 3,
    borderLeftColor: '#00F0FF',
    marginBottom: 20,
    fontSize: 9,
    lineHeight: 1.6,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    paddingBottom: 6,
  },
  workItem: {
    marginBottom: 16,
    paddingBottom: 16,
    borderLeftWidth: 3,
    borderLeftColor: '#E5E7EB',
    paddingLeft: 15,
  },
  workHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  employer: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  role: {
    fontSize: 10,
    color: '#6B7280',
    marginTop: 2,
  },
  duration: {
    fontSize: 8,
    backgroundColor: '#F3F4F6',
    padding: '4 8',
    borderWidth: 1,
    borderColor: '#D1D5DB',
  },
  responsibility: {
    fontSize: 9,
    marginBottom: 6,
    paddingLeft: 10,
    lineHeight: 1.5,
  },
  techStack: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
    marginTop: 8,
  },
  techBadge: {
    fontSize: 7,
    padding: '3 6',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D1D5DB',
  },
  educationItem: {
    backgroundColor: '#F9FAFB',
    padding: 12,
    marginBottom: 12,
    borderLeftWidth: 3,
    borderLeftColor: '#FFBE0B',
  },
  educationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  schoolName: {
    fontSize: 11,
    fontWeight: 'bold',
  },
  course: {
    fontSize: 9,
    marginTop: 2,
  },
  major: {
    fontSize: 9,
    color: '#6B7280',
    fontStyle: 'italic',
    marginTop: 1,
  },
  highlight: {
    fontSize: 8,
    marginBottom: 3,
    paddingLeft: 10,
  },
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
  },
  skillBadge: {
    fontSize: 8,
    padding: '4 8',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  projectsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  projectCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    padding: 10,
    marginBottom: 8,
  },
  projectName: {
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  projectUrl: {
    fontSize: 7,
    color: '#00F0FF',
    marginBottom: 6,
  },
  projectDescription: {
    fontSize: 8,
    lineHeight: 1.4,
    marginBottom: 6,
  },
  projectStack: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 3,
  },
  projectTech: {
    fontSize: 6,
    padding: '2 4',
    backgroundColor: '#F3F4F6',
    borderWidth: 1,
    borderColor: '#D1D5DB',
  },
});

// PDF Document Component
export const CVDocument = () => {
  const { work_experiences, education, skills, tools, side_projects } = cvData;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>Mark Chavez</Text>
          <View style={styles.contactGrid}>
            <Text style={styles.contactItem}>Manila, Philippines, PHT</Text>
            <Text style={styles.contactItem}>https://markchavez.dev</Text>
            <Text style={styles.contactItem}>mjfchavez@gmail.com</Text>
            <Text style={styles.contactItem}>github.com/markfchavez</Text>
          </View>
        </View>

        {/* About */}
        <View style={styles.about}>
          <Text>
            Ruby on Rails specialist with 10+ years of experience building web applications across childcare,
            healthcare, finance, and telecom industries. Expert in Hotwire and Stimulus for creating modern,
            interactive experiences with minimal JavaScript. Focused on Rails conventions, clean architecture, and
            pragmatic solutions that scale. Self-learner who enjoys diving deep into frameworks and solving complex
            technical challenges.
          </Text>
        </View>

        {/* Work Experience */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Work Experience</Text>
          {work_experiences.map((work, index) => (
            <View key={index} style={styles.workItem}>
              <View style={styles.workHeader}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.employer}>{work.employer}</Text>
                  <Text style={styles.role}>{work.role}</Text>
                </View>
                <Text style={styles.duration}>{work.duration}</Text>
              </View>
              {work.responsibilities.slice(0, 3).map((r, idx) => (
                <Text key={idx} style={styles.responsibility}>
                  {r}
                </Text>
              ))}
              <View style={styles.techStack}>
                {work.technologies.slice(0, 8).map((tech) => (
                  <Text key={tech} style={styles.techBadge}>
                    {tech}
                  </Text>
                ))}
              </View>
            </View>
          ))}
        </View>

        {/* Education */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          {education.map((school, index) => (
            <View key={index} style={styles.educationItem}>
              <View style={styles.educationHeader}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.schoolName}>{school.name}</Text>
                  <Text style={styles.course}>{school.course}</Text>
                  <Text style={styles.major}>{school.major}</Text>
                </View>
                <Text style={styles.duration}>{school.years}</Text>
              </View>
              {school.highlights.map((h, idx) => (
                <Text key={idx} style={styles.highlight}>
                  {h}
                </Text>
              ))}
            </View>
          ))}
        </View>

        {/* Skills & Tools */}
        <View style={{ flexDirection: 'row', gap: 16, marginBottom: 20 }}>
          <View style={{ flex: 1 }}>
            <Text style={styles.sectionTitle}>Skills</Text>
            <View style={styles.skillsGrid}>
              {skills.map((skill) => (
                <Text key={skill} style={styles.skillBadge}>
                  {skill}
                </Text>
              ))}
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.sectionTitle}>Tools</Text>
            <View style={styles.skillsGrid}>
              {tools.map((tool) => (
                <Text key={tool} style={styles.skillBadge}>
                  {tool}
                </Text>
              ))}
            </View>
          </View>
        </View>

        {/* Side Projects */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Side Projects</Text>
          <View style={styles.projectsGrid}>
            {side_projects.slice(0, 6).map((project) => (
              <View key={project.name} style={styles.projectCard}>
                <Text style={styles.projectName}>{project.name}</Text>
                {project.web_url && <Text style={styles.projectUrl}>{project.web_url}</Text>}
                <Text style={styles.projectDescription}>{project.description}</Text>
                <View style={styles.projectStack}>
                  {project.stack.slice(0, 4).map((tech) => (
                    <Text key={tech} style={styles.projectTech}>
                      {tech}
                    </Text>
                  ))}
                </View>
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
};
