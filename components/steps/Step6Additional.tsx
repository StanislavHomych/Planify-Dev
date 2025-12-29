'use client';

import { useCalculatorStore } from '@/store/calculator';
import * as FiIcons from 'react-icons/fi';

const FiDollarSign = FiIcons.FiDollarSign;
const FiFileText = FiIcons.FiFileText;
const FiSliders = FiIcons.FiSliders;
const FiPackage = FiIcons.FiPackage;

export default function Step6Additional() {
  const { additional, updateAdditional } = useCalculatorStore();

  const supportOptions: { value: 0 | 1 | 3 | 6 | 12; label: string; percent: string }[] = [
    { value: 0, label: 'No support', percent: '0%' },
    { value: 1, label: '1 month', percent: '15%' },
    { value: 3, label: '3 months', percent: '25%' },
    { value: 6, label: '6 months', percent: '40%' },
    { value: 12, label: '1 year', percent: '60%' },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <FiDollarSign className="text-xl text-jira-blue" />
        <div>
          <h2 className="text-lg font-semibold text-jira-darkBlue">Additional Costs</h2>
          <p className="text-jira-textSecondary text-xs">
            Configure support, documentation, and other costs
          </p>
        </div>
      </div>

      {/* Support */}
      <div className="card">
        <label className="label text-xs">Post-launch Support</label>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mt-2">
          {supportOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => updateAdditional({ supportMonths: option.value })}
              className={`p-2 rounded border transition-all text-sm ${
                additional.supportMonths === option.value
                  ? 'border-jira-blue bg-primary-50 text-jira-blue font-medium shadow-jira'
                  : 'border-jira-border text-jira-textSecondary hover:border-jira-blue hover:shadow-jira'
              }`}
            >
              <div className="font-medium text-center mb-0.5">{option.label}</div>
              <div className="text-xs text-center opacity-75">{option.percent}</div>
            </button>
          ))}
        </div>
        <p className="text-xs text-jira-textSecondary mt-2">
          Percentage of base project cost (bugfixes, updates, consultations)
        </p>
      </div>

      {/* Documentation */}
      <div className="card">
        <div className="flex items-center space-x-2 mb-3">
          <FiFileText className="text-lg text-jira-textSecondary" />
          <label className="label mb-0">Documentation</label>
        </div>
        <div className="space-y-2">
          <label className="flex items-center space-x-3 cursor-pointer p-3 hover:bg-gray-50 rounded transition-colors border border-transparent hover:border-jira-border">
            <input
              type="checkbox"
              checked={additional.documentation.technical}
              onChange={(e) =>
                updateAdditional({
                  documentation: {
                    ...additional.documentation,
                    technical: e.target.checked,
                  },
                })
              }
              className="checkbox-field"
            />
            <div className="flex-1">
              <div className="font-medium text-sm text-jira-darkBlue">Technical Documentation</div>
              <div className="text-xs text-jira-textSecondary">
                API docs, architecture, deployment guides (~30 hours)
              </div>
            </div>
          </label>

          <label className="flex items-center space-x-3 cursor-pointer p-3 hover:bg-gray-50 rounded transition-colors border border-transparent hover:border-jira-border">
            <input
              type="checkbox"
              checked={additional.documentation.userGuide}
              onChange={(e) =>
                updateAdditional({
                  documentation: {
                    ...additional.documentation,
                    userGuide: e.target.checked,
                  },
                })
              }
              className="checkbox-field"
            />
            <div className="flex-1">
              <div className="font-medium text-sm text-jira-darkBlue">User Guide</div>
              <div className="text-xs text-jira-textSecondary">
                Instructions for end users (~15 hours)
              </div>
            </div>
          </label>
        </div>
      </div>

      {/* Buffer */}
      <div className="card">
        <div className="flex items-center space-x-2 mb-2">
          <FiSliders className="text-lg text-jira-textSecondary" />
          <label className="label mb-0">Buffer for Unexpected Costs</label>
        </div>
        <div className="flex items-center space-x-4 mt-3">
          <input
            type="range"
            min="0"
            max="40"
            step="5"
            value={additional.bufferPercent}
            onChange={(e) => updateAdditional({ bufferPercent: Number(e.target.value) })}
            className="flex-1 accent-jira-blue"
          />
          <span className="font-semibold text-xl w-16 text-right text-jira-darkBlue">
            {additional.bufferPercent}%
          </span>
        </div>
        <p className="text-xs text-jira-textSecondary mt-2">
          Recommended: 15-25% (requirement changes, additional revisions, unforeseen complexities)
        </p>
      </div>

      {/* Other Costs */}
      <div className="card">
        <div className="flex items-center space-x-2 mb-3">
          <FiPackage className="text-lg text-jira-textSecondary" />
          <label className="label mb-0">Other Costs</label>
        </div>
        <div className="space-y-2">
          <label className="flex items-center space-x-3 cursor-pointer p-3 hover:bg-gray-50 rounded transition-colors border border-transparent hover:border-jira-border">
            <input
              type="checkbox"
              checked={additional.other.domain}
              onChange={(e) =>
                updateAdditional({
                  other: { ...additional.other, domain: e.target.checked },
                })
              }
              className="checkbox-field"
            />
            <div className="flex-1">
              <div className="font-medium text-sm text-jira-darkBlue">Domain and SSL Certificate</div>
              <div className="text-xs text-jira-textSecondary">~$100-300/year</div>
            </div>
          </label>

          <label className="flex items-center space-x-3 cursor-pointer p-3 hover:bg-gray-50 rounded transition-colors border border-transparent hover:border-jira-border">
            <input
              type="checkbox"
              checked={additional.other.apis}
              onChange={(e) =>
                updateAdditional({
                  other: { ...additional.other, apis: e.target.checked },
                })
              }
              className="checkbox-field"
            />
            <div className="flex-1">
              <div className="font-medium text-sm text-jira-darkBlue">API Keys and Third-party Services</div>
              <div className="text-xs text-jira-textSecondary">
                Stripe, SendGrid, Firebase, Google Maps, etc. (~$500)
              </div>
            </div>
          </label>

          <label className="flex items-center space-x-3 cursor-pointer p-3 hover:bg-gray-50 rounded transition-colors border border-transparent hover:border-jira-border">
            <input
              type="checkbox"
              checked={additional.other.licenses}
              onChange={(e) =>
                updateAdditional({
                  other: { ...additional.other, licenses: e.target.checked },
                })
              }
              className="checkbox-field"
            />
            <div className="flex-1">
              <div className="font-medium text-sm text-jira-darkBlue">Software Licenses</div>
              <div className="text-xs text-jira-textSecondary">
                Fonts, libraries, tools (~$1,000)
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}
