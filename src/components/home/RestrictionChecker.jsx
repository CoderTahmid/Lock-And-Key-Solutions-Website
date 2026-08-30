import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

export default function RestrictionChecker() {
  const context = useOutletContext();
  const openConsultation = context?.openConsultation || (() => {});

  const [issueType, setIssueType] = useState('banned_page');
  const [duration, setDuration] = useState('1_month');
  const [appealHistory, setAppealHistory] = useState('denied_once');
  const [analyzed, setAnalyzed] = useState(false);

  const handleAnalyze = (e) => {
    e.preventDefault();
    setAnalyzed(true);
  };

  const getResults = () => {
    switch (issueType) {
      case 'banned_page':
        return {
          probability: '96%',
          timeframe: '3 - 5 Business Days',
          difficulty: 'Moderate',
          legalPathway: 'Direct Legal Compliance Appeal & Trademark Ownership Verification',
          statusColor: 'text-blue-600',
        };
      case 'bm_disabled':
        return {
          probability: '92%',
          timeframe: '2 - 4 Business Days',
          difficulty: 'Standard',
          legalPathway: 'Meta Internal Business Manager Policy Clearing',
          statusColor: 'text-blue-600',
        };
      case 'hacked':
        return {
          probability: '99%',
          timeframe: '24 - 48 Hours',
          difficulty: 'High Priority',
          legalPathway: 'Meta Asset Theft & Corporate Ownership Reclaim Protocol',
          statusColor: 'text-blue-600',
        };
      case 'monetization':
        return {
          probability: '94%',
          timeframe: '4 - 7 Business Days',
          difficulty: 'Policy Audit Required',
          legalPathway: 'Page Content Sanitization & Partner Monetization Appeal',
          statusColor: 'text-amber-600',
        };
      default:
        return {
          probability: '95%',
          timeframe: '3 - 5 Business Days',
          difficulty: 'Moderate',
          legalPathway: 'Direct Meta Compliance Representation',
          statusColor: 'text-blue-600',
        };
    }
  };

  const results = getResults();

  return (
    <section id="checker" className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Check Your Facebook Page Unban Feasibility
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Select your restriction parameters to evaluate unban feasibility and estimated turnaround timeframe.
          </p>
        </div>

        {/* Checker Form Card */}
        <div className="max-w-3xl mx-auto bg-slate-50/80 rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm">
          <form onSubmit={handleAnalyze} className="space-y-6">
            
            {/* Field 1 */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                1. What restriction is your Facebook Page / Account facing?
              </label>
              <select
                value={issueType}
                onChange={(e) => {
                  setIssueType(e.target.value);
                  setAnalyzed(false);
                }}
                className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm font-medium"
              >
                <option value="banned_page">Permanently Banned / Unpublished Facebook Page</option>
                <option value="bm_disabled">Disabled Meta Business Manager / Ad Account</option>
                <option value="hacked">Hacked Admin / Stolen Page Ownership</option>
                <option value="monetization">Monetization & Policy Violation Restriction</option>
              </select>
            </div>

            {/* Field 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  2. How long has it been restricted?
                </label>
                <select
                  value={duration}
                  onChange={(e) => {
                    setDuration(e.target.value);
                    setAnalyzed(false);
                  }}
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm font-medium"
                >
                  <option value="recent">Less than 2 weeks</option>
                  <option value="1_month">1 - 3 Months</option>
                  <option value="6_months">3 - 6 Months</option>
                  <option value="over_year">Over 6 Months / Year+</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  3. What is your appeal history with Meta?
                </label>
                <select
                  value={appealHistory}
                  onChange={(e) => {
                    setAppealHistory(e.target.value);
                    setAnalyzed(false);
                  }}
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm font-medium"
                >
                  <option value="no_appeal">No appeals submitted yet</option>
                  <option value="denied_once">Automated appeal denied once</option>
                  <option value="denied_multiple">Multiple support tickets rejected</option>
                  <option value="final_decision">Marked as "Final Decision"</option>
                </select>
              </div>
            </div>

            {/* Analyze Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl shadow-md shadow-blue-600/20 transition-all cursor-pointer text-base flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <span>Evaluate Unban Feasibility Report</span>
              </button>
            </div>
          </form>

          {/* Diagnosis Results Card */}
          {analyzed && (
            <div className="mt-8 pt-8 border-t border-slate-200 animate-fadeIn space-y-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div>
                  <span className="text-xs uppercase tracking-widest text-slate-500 font-semibold">Estimated Unban Probability</span>
                  <div className={`text-4xl font-extrabold ${results.statusColor} mt-1`}>
                    {results.probability}
                  </div>
                </div>
                <div className="text-center sm:text-right">
                  <span className="text-xs uppercase tracking-widest text-slate-500 font-semibold">Estimated Timeframe</span>
                  <div className="text-2xl font-bold text-slate-900 mt-1">
                    {results.timeframe}
                  </div>
                </div>
              </div>

              <div className="space-y-2 bg-blue-50/70 p-6 rounded-2xl border border-blue-100 text-sm">
                <p className="text-slate-800">
                  <strong className="text-slate-900">Recommended Legal Channel:</strong> {results.legalPathway}
                </p>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Even if Meta marked your account as "Final Decision", our legal compliance team can submit escalated documentation directly to Meta's legal wing.
                </p>
              </div>

              <div className="text-center pt-2">
                <button
                  onClick={openConsultation}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3.5 rounded-full shadow-md shadow-blue-600/20 transition-all cursor-pointer text-sm"
                >
                  Claim Unban Consultation for This Page →
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
