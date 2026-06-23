import './styles/cv.css'
import DownloadButtons from './components/DownloadButtons'

const App: React.FC = () => {
  return (
    <>
      <DownloadButtons />

      {/* Name & Title */}
      <div id="printable-content">
        <div className="cv-name">AGITA FIRSTAWAN</div>
      <div className="cv-subtitle">Senior Frontend / Mobile Engineer / Fullstack Engineer</div>

      {/* Contact */}
      <div className="cv-contact">
        <div className="cv-contact-row">
          <span className="cv-contact-label">Yogyakarta, Indonesia</span>
        </div>
        <div className="cv-contact-row">
          <span className="cv-contact-label">Phone:</span>
          <span>+62 821-3712-6571</span>
        </div>
        <div className="cv-contact-row">
          <span className="cv-contact-label">Email:</span>
          <span>agitafirstawan26@gmail.com</span>
        </div>
        <div className="cv-contact-row">
          <span className="cv-contact-label">LinkedIn:</span>
          <a href="https://www.linkedin.com/in/agita-firstawan-298950a0/" target="_blank" rel="noopener noreferrer">
            https://www.linkedin.com/in/agita-firstawan-298950a0/
          </a>
        </div>
        <div className="cv-contact-row">
          <span className="cv-contact-label">Website:</span>
          <a href="https://agita-cv.my.id/" target="_blank" rel="noopener noreferrer">
            https://agita-cv.my.id/
          </a>
        </div>
      </div>

      {/* Professional Summary */}
      <div className="cv-section-title">PROFESSIONAL SUMMARY</div>
      <div className="cv-section-body">
        <p>
          Senior Frontend, Mobile, and Backend Engineer with extensive experience building high-performance web, mobile, and server-side applications for enterprise and international-scale products. Specialized in developing modern frontend and mobile solutions using React, React Native, Next.js, and Angular, with a proven track record of delivering scalable, production-ready applications, leading engineering teams, optimizing performance, and collaborating effectively with cross-functional stakeholders.
        </p>
        <p>
          In addition to strong frontend expertise, brings over 3 years of backend engineering experience using Node.js and Rust to design and develop secure, high-performance APIs, microservices, and distributed systems. Demonstrated ability to architect resilient server-side solutions, implement asynchronous and event-driven architectures, optimize system throughput and memory efficiency, and integrate frontend applications with robust backend infrastructures. Combines a deep commitment to clean architecture, maintainable code, and operational excellence to deliver reliable, scalable, and business-critical software solutions.
        </p>
      </div>

      {/* Technical Skills */}
      <div className="cv-section-title">TECHNICAL SKILLS</div>
      <div className="cv-section-body">
        <div className="cv-skill-row">
          <span className="cv-skill-label">Frontend:</span>
          <span className="cv-skill-value">React.js, Next.js, Angular, Vue.js, HTML, CSS, JavaScript, TypeScript</span>
        </div>
        <div className="cv-skill-row">
          <span className="cv-skill-label">Mobile:</span>
          <span className="cv-skill-value">React Native, Flutter</span>
        </div>
        <div className="cv-skill-row">
          <span className="cv-skill-label">Backend &amp; Services:</span>
          <span className="cv-skill-value">Node.js, Rest API Development, Express, Rust</span>
        </div>
        <div className="cv-skill-row">
          <span className="cv-skill-label">Database &amp; ORM:</span>
          <span className="cv-skill-value">Firebase (Firestore, Push Notifications), MySql, MongoDB, Express, Prisma</span>
        </div>
        <div className="cv-skill-row">
          <span className="cv-skill-label">State &amp; Monitoring:</span>
          <span className="cv-skill-value">Redux, Memoization, Sentry, Pinia, Zustand</span>
        </div>
        <div className="cv-skill-row">
          <span className="cv-skill-label">Tools &amp; Practices:</span>
          <span className="cv-skill-value">Storybook, Unit Testing, Code Review, CI/CD, Performance Optimization</span>
        </div>
      </div>

      {/* Professional Experience */}
      <div className="cv-section-title">PROFESSIONAL EXPERIENCE</div>
      <div className="cv-section-body">
        <div className="cv-exp-header">Senior Frontend Engineer — Cakap</div>
        <div className="cv-exp-date">January 2024 – Present</div>
        <ul className="cv-list">
          <li>Migrated legacy Angular applications to the latest Angular version</li>
          <li>Improved frontend code quality and resolved critical bugs</li>
          <li>Researched Micro Frontend architecture for future scalability</li>
          <li>Developed features based on business unit requirements</li>
          <li>Ensured squad goals and delivery targets were achieved</li>
          <li>Created technical documentation for new features</li>
          <li>Built a custom deep-linking service and removed Firebase Dynamic Links to reduce costs</li>
          <li>Developed internal reusable component libraries</li>
          <li>Revamped assessment, payment, and my course features</li>
          <li>Reduced bugs and improved stability in assessment features</li>
          <li>Increased user satisfaction and repeat usage through improved system stability</li>
          <li>Built an AI chat system to improve student understanding of educational content through real-time, interactive support.</li>
          <li>Enhanced AI chat system performance, significantly reducing response time and improving overall user experience.</li>
          <li>Leveraged AI tools to improve coding efficiency and accelerate development workflows.</li>
          <li>Implemented backend services for certificate editing and HTML-to-image generation for certificate exports.</li>
          <li>Researched and evaluated cost-effective AI coding tools, focusing on achieving high-quality development outcomes and improved productivity.</li>
          <li>Help BE and devops to reduce cost of AWS</li>
        </ul>

        <div className="cv-exp-header">Senior Mobile Engineer (React Native) — Edgeworks</div>
        <div className="cv-exp-date">May 2023 – December 2023</div>
        <ul className="cv-list">
          <li>Refactored and improved existing mobile application codebase</li>
          <li>Built reusable components and shared utility functions</li>
          <li>Optimized application performance using best-practice patterns</li>
          <li>Released applications to Google Play Store and Apple App Store</li>
          <li>Integrated Sentry for error tracking and performance monitoring</li>
          <li>Improved build speed using Hygen and multi-package configurations</li>
          <li>Conducted code reviews to maintain code quality</li>
          <li>Collaborated with backend teams to improve system scalability</li>
        </ul>

        <div className="cv-exp-header">Frontend Engineer / Frontend Lead — Selleri</div>
        <div className="cv-exp-date">November 2020 – March 2023</div>
        <ul className="cv-list">
          <li>Built a social commerce MVP for SMEs and resellers from scratch</li>
          <li>Delivered features on time with high stability and minimal defects</li>
          <li>Optimized web performance for production readiness</li>
          <li>Contributed to investor acquisition by delivering high-quality software</li>
          <li>Collaborated with designers to improve user experience and product flow</li>
          <li>Lead FE team and managed tasks on Jira</li>
          <li>Ensured good communication between FE team</li>
          <li>Code pairing with FE team</li>
          <li>Maintained existing apps and web apps</li>
          <li>Conducted code reviews</li>
          <li>Make unit tests and teach junior FE how to implement it</li>
          <li>Released apps and web apps to production</li>
          <li>Helped team operational and marketing to fix reported bugs</li>
          <li>Identified UI problems</li>
          <li>Improved web and app performance</li>
          <li>Research tools that can help for development productivity</li>
          <li>Implement code push for hot fixing on production</li>
          <li>Implement story book for component documentation</li>
        </ul>

        <div className="cv-exp-header">Senior Mobile Engineer (React Native) — Ralali</div>
        <div className="cv-exp-date">October 2019 – May 2020</div>
        <ul className="cv-list">
          <li>Built fintech features (KYC, payments) for production systems</li>
          <li>Ensured on-time delivery and feature stability</li>
          <li>Led code reviews and performance optimization in React Native</li>
          <li>Wrote unit tests and maintained technical documentation</li>
          <li>Mentored junior and intern frontend engineers</li>
          <li>Implemented Storybook for reusable components</li>
        </ul>

        <div className="cv-exp-header">Mobile Engineer - Codemi</div>
        <div className="cv-exp-date">2018 – 2019</div>
        <ul className="cv-list">
          <li>Built and optimized high-performance React applications</li>
          <li>Integrated third-party video and real-time chat services</li>
          <li>Delivered new features aligned with client and business needs</li>
          <li>Improved application stability through bug fixes and refactoring</li>
          <li>Increased performance using React memoization techniques</li>
          <li>Developed reusable internal component libraries</li>
        </ul>

        <div className="cv-exp-header">Frontend Engineer - Software Seni</div>
        <div className="cv-exp-date">2018 – 2019</div>
        <ul className="cv-list">
          <li>Built React Native mobile apps and React PWA websites</li>
          <li>Delivered projects on time and maintained client apps</li>
          <li>Troubleshot issues and improved application stability</li>
          <li>Advised PMs and collaborated with clients on product flow</li>
        </ul>
      </div>

      {/* Project Base Experience */}
      <div className="cv-section-title">PROJECT BASE EXPERIENCE</div>
      <div className="cv-section-body">
        <div className="cv-proj-header">Inventory System FIFO - LIFO</div>
        <ul className="cv-list">
          <li>Designed and developed APIs for inventory management, product management, sales reporting, sales, voucher, and expense management from scratch, ensuring scalable architecture, efficient data processing, and seamless system integration.</li>
          <li>Designed and developed frontend pages for inventory, product, reporting, sales, voucher, and expense management systems from scratch, focusing on scalability, maintainability, and an intuitive user experience.</li>
          <li>Designed and implemented gRPC-based services</li>
        </ul>

        <div className="cv-proj-header">Kementerian kesehatan - Freelance Frontend Developer (Nuxt JS)</div>
        <ul className="cv-list">
          <li>Developed and delivered a surveillance service feature to support data monitoring and reporting.</li>
          <li>Developed and delivered dashboard Infectious diseases for monitoring and reporting</li>
        </ul>

        <div className="cv-proj-header">JPT - Freelance Frontend Developer (Vue)</div>
        <ul className="cv-list">
          <li>Resolved existing bugs to enhance system stability, reliability, and overall performance.</li>
          <li>Designed and implemented request features for Courier and Collector modules, improving workflow efficiency and user experience.</li>
        </ul>

        <div className="cv-proj-header">Satu SDM Polri - Freelance FE Developer (Next.js)</div>
        <ul className="cv-list">
          <li>Resolved issues within the User and Role Management modules to ensure accurate access control and system reliability.</li>
          <li>Enhanced existing codebase and user interface to improve maintainability, performance, and user experience.</li>
          <li>Integrated the Pembinaan Jasmani Polri API to enable seamless data exchange and functionality.</li>
          <li>Implemented and optimized User and Role Management integration to support secure and scalable access management.</li>
        </ul>

        <div className="cv-proj-header">Better Social - Fullstack Engineer - (React Native, Node JS)</div>
        <ul className="cv-list">
          <li>Developed reusable components and utility functions to improve code consistency, scalability, and development efficiency.</li>
          <li>Identified and resolved existing bugs to enhance application stability and reliability.</li>
          <li>Optimized chat performance by implementing local data storage using SQLite.</li>
          <li>Wrote and maintained unit tests to ensure code quality and reduce regression issues.</li>
          <li>Managed application release process to the Google Play Store, ensuring compliance with platform guidelines.</li>
          <li>Managed application deployment to the Apple App Store, including build configuration and submission process.</li>
          <li>Continuously improved application performance through optimization and refactoring efforts.</li>
          <li>Implemented real-time data synchronization using WebSocket for improved responsiveness and user experience.</li>
          <li>Designed and developed chat and feed APIs, establishing scalable backend architecture, efficient data handling</li>
        </ul>
      </div>
      </div>
    </>
  )
}

export default App
