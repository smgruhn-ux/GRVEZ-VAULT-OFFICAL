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
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsOfUsePage } from './pages/TermsOfUsePage';
import { FaqPage } from './pages/FaqPage';

export function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/music" element={<MusicPage />} />
          <Route path="/archive" element={<ArchivePage />} />
          <Route path="/manuscripts" element={<ManuscriptsPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/vaultline" element={<VaultlinePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-use" element={<TermsOfUsePage />} />
          <Route path="/faq" element={<FaqPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}