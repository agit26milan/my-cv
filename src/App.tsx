import './styles/cv.css'
import DownloadButtons from './components/DownloadButtons'
import {
  cvContact,
  cvName,
  cvProjects,
  cvRoles,
  cvSkills,
  cvSummary,
  cvTitle,
  SECTION_TITLES,
} from './cvData'

const App: React.FC = () => {
  return (
    <>
      <DownloadButtons />

      <div id="printable-content" className="cv-page">
        <div className="cv-name">{cvName}</div>
        <div className="cv-subtitle">{cvTitle}</div>

        <div className="cv-contact">
          {cvContact.map((line, i) => (
            <div className="cv-contact-line" key={i}>
              {line.segments.map((seg, j) => (
                <span key={j}>
                  {j > 0 && <span className="cv-contact-sep"> | </span>}
                  {seg.label && <span>{seg.label} </span>}
                  {seg.href ? <a href={seg.href}>{seg.text}</a> : <span>{seg.text}</span>}
                </span>
              ))}
            </div>
          ))}
        </div>

        <h2 className="cv-section-title">{SECTION_TITLES.summary}</h2>
        <div className="cv-section-body cv-summary">
          {cvSummary.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <h2 className="cv-section-title">{SECTION_TITLES.skills}</h2>
        <div className="cv-section-body">
          {cvSkills.map((skill) => (
            <div className="cv-skill-row" key={skill.label}>
              <span className="cv-skill-label">{skill.label}:</span>{' '}
              <span>{skill.value}</span>
            </div>
          ))}
        </div>

        <h2 className="cv-section-title">{SECTION_TITLES.experience}</h2>
        <div className="cv-section-body">
          {cvRoles.map((role) => (
            <div key={`${role.title}-${role.company}`}>
              <div className="cv-role-title">
                {role.title} &mdash; {role.company}
              </div>
              <div className="cv-role-period">{role.period}</div>
              <ul className="cv-list">
                {role.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h2 className="cv-section-title">{SECTION_TITLES.projects}</h2>
        <div className="cv-section-body">
          {cvProjects.map((project) => (
            <div key={project.name}>
              <div className="cv-project-name">{project.name}</div>
              <ul className="cv-list">
                {project.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
