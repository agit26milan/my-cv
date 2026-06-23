import { useCallback } from 'react'
import html2pdf from 'html2pdf.js'

/* Inline SVG icons — no external dependencies */
const PrintIcon = () => (
  <svg className="cv-btn-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M5 6V3C5 2.44772 5.44772 2 6 2H14C14.5523 2 15 2.44772 15 3V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 11C3 9.89543 3.89543 9 5 9H15C16.1046 9 17 9.89543 17 11V15C17 16.1046 16.1046 17 15 17H5C3.89543 17 3 16.1046 3 15V11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 13H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M7 13V15H13V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="13" y="10" width="2" height="1" rx="0.5" fill="currentColor" />
  </svg>
)

const DownloadIcon = () => (
  <svg className="cv-btn-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M10 2V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 8.5L10 13.5L15 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 15V17C3 17.5523 3.44772 18 4 18H16C16.5523 18 17 17.5523 17 17V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const DownloadButtons: React.FC = () => {
  const handlePrint = useCallback(() => {
    window.print()
  }, [])

  const handleDownload = useCallback(() => {
    const element = document.getElementById('printable-content')
    if (!element) return
    const opt = {
      margin:       0.5,
      filename:     'Agita_Firstawan_CV.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2, useCORS: true, letterRendering: true },
      jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' },
    }
    html2pdf().set(opt).from(element).save()
  }, [])

  return (
    <div className="cv-actions no-print">
      <button className="cv-btn cv-btn--primary" onClick={handlePrint} type="button" aria-label="Print or save as PDF">
        <PrintIcon />
        <span className="cv-btn-label">Print / Save PDF</span>
      </button>
      <button className="cv-btn" onClick={handleDownload} type="button" aria-label="Download as PDF">
        <DownloadIcon />
        <span className="cv-btn-label">Download PDF</span>
      </button>
    </div>
  )
}

export default DownloadButtons
