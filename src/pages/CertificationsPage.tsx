import React, { useState } from 'react';
import { Award, ShieldCheck, ExternalLink, Search, CheckCircle2, QrCode } from 'lucide-react';
import { mockCertifications } from '../data/mockData';

export const CertificationsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [verifyId, setVerifyId] = useState('');
  const [verifiedResult, setVerifiedResult] = useState<any | null>(null);

  const filtered = mockCertifications.filter((cert) =>
    cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cert.issuer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (verifyId.trim()) {
      setVerifiedResult({
        id: verifyId,
        studentName: 'Student Account',
        course: 'Generative AI & LLM Engineering',
        issuedDate: 'August 2026',
        issuer: 'SkillSphere Education Hub'
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
          <Award className="w-4 h-4" />
          <span>Credibility & Employability</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
          Verified Certifications & Badges
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 max-w-2xl">
          Validate your skills with official certifications from tech giants, government ministries, and SkillSphere verified badges.
        </p>
      </div>

      {/* Verification Tool Banner */}
      <div className="p-6 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl space-y-4">
        <div className="flex items-center space-x-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
          <QrCode className="w-4 h-4" />
          <span>SkillSphere Public Certificate Validator</span>
        </div>
        <h3 className="text-lg font-bold">Verify Any Student Certificate ID</h3>
        
        <form onSubmit={handleVerify} className="flex flex-col sm:flex-row gap-3 max-w-xl">
          <input
            type="text"
            value={verifyId}
            onChange={(e) => setVerifyId(e.target.value)}
            placeholder="Enter Certificate ID (e.g. SKILL-2026-9812)"
            className="flex-1 px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-800 text-xs font-mono text-white placeholder-slate-500 focus:outline-none"
          />
          <button
            type="submit"
            className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md"
          >
            Verify Certificate
          </button>
        </form>

        {verifiedResult && (
          <div className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-800 text-emerald-200 text-xs space-y-1">
            <div className="flex items-center space-x-1.5 font-bold text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              <span>Certificate Status: AUTHENTIC & VERIFIED</span>
            </div>
            <p>Issued to: <span className="font-bold text-white">{verifiedResult.studentName}</span> for <span className="font-bold text-white">{verifiedResult.course}</span> ({verifiedResult.issuedDate})</p>
          </div>
        )}
      </div>

      {/* Certifications Directory */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Popular Industry & Government Certifications</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((cert) => (
            <div
              key={cert.id}
              className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-xs hover:shadow-xl transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500">{cert.issuer}</span>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                    {cert.category}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                  {cert.title}
                </h4>

                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400 block">{cert.costType}</span>
                  <span className="text-[10px] text-slate-400">Exam Code: {cert.examCode || 'N/A'}</span>
                </div>

                <a
                  href={cert.officialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-sm flex items-center space-x-1"
                >
                  <span>Official Page</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
