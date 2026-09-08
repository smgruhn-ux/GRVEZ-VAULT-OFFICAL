import { Layout } from './Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { MusicPage } from './pages/MusicPage';
import { VaultlinePage } from './pages/VaultlinePage';
import { ContactPage } from './pages/ContactPage';
import { ArchivePage } from './pages/ArchivePage';
import { ManuscriptsPage } from './pages/ManuscriptsPage';
import { MediaPage } from './pages/MediaPage';
import { VisualDetailPage } from './pages/VisualDetailPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsOfUsePage } from './pages/TermsOfUsePage';
import { FaqPage } from './pages/FaqPage';
import { RecordPage } from './pages/RecordPage';
import { GizzyGravesPage } from './pages/GizzyGravesPage';
import { DmonixPage } from './pages/DmonixPage';
import { DxxdGrvezPage } from './pages/DxxdGrvezPage';
import { RelationalContinuityPage } from './pages/RelationalContinuityPage';
import { FilmsPage } from './pages/FilmsPage';
import { DocumentaryQuestionPage } from './pages/DocumentaryQuestionPage';
import { ForensicIntegrityAuditPage } from './pages/ForensicIntegrityAuditPage';
import { NotFoundPage } from './pages/NotFoundPage';

export function App() {
  return (<BrowserRouter><Layout><Routes>
    <Route path="/" element={<HomePage />} /><Route path="/about" element={<AboutPage />} /><Route path="/about/gizzy-graves" element={<GizzyGravesPage />} /><Route path="/about/dmonix" element={<DmonixPage />} /><Route path="/dxxd-grvez" element={<DxxdGrvezPage />} /><Route path="/music" element={<MusicPage />} /><Route path="/archive" element={<ArchivePage />} /><Route path="/archive/forensic-integrity-audit" element={<ForensicIntegrityAuditPage />} /><Route path="/manuscripts" element={<ManuscriptsPage />} /><Route path="/relational-continuity" element={<RelationalContinuityPage />} /><Route path="/films" element={<FilmsPage />} /><Route path="/films/questions/:question" element={<DocumentaryQuestionPage />} /><Route path="/record/:id" element={<RecordPage />} /><Route path="/media" element={<MediaPage />} /><Route path="/media/:slug" element={<VisualDetailPage />} /><Route path="/vaultline" element={<VaultlinePage />} /><Route path="/contact" element={<ContactPage />} /><Route path="/privacy-policy" element={<PrivacyPolicyPage />} /><Route path="/terms-of-use" element={<TermsOfUsePage />} /><Route path="/faq" element={<FaqPage />} /><Route path="*" element={<NotFoundPage />} />
  </Routes></Layout></BrowserRouter>);
}
