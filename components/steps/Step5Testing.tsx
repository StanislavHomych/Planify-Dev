'use client';

import { useCalculatorStore } from '@/store/calculator';
import * as FiIcons from 'react-icons/fi';

const FiCheckSquare = FiIcons.FiCheckSquare;
const FiSliders = FiIcons.FiSliders;
const FiInfo = FiIcons.FiInfo;

export default function Step5Testing() {
  const { testing, updateTesting } = useCalculatorStore();

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <FiCheckSquare className="text-xl text-jira-blue" />
        <div>
          <h2 className="text-lg font-semibold text-jira-darkBlue">Testing & QA</h2>
          <p className="text-jira-textSecondary text-xs">
            Configure testing and quality assurance parameters
          </p>
        </div>
      </div>

      {/* Manual Testing */}
      <div className="card">
        <label className="flex items-center space-x-3 cursor-pointer">
          <input
            type="checkbox"
            checked={testing.manualTesting}
            onChange={(e) => updateTesting({ manualTesting: e.target.checked })}
            className="checkbox-field"
          />
          <div>
            <div className="font-semibold text-sm text-jira-darkBlue">Manual Testing</div>
            <div className="text-xs text-jira-textSecondary">
              Functionality testing by QA engineer
            </div>
          </div>
        </label>

        {testing.manualTesting && (
          <div className="mt-4 pl-7">
            <label className="label">Percentage of development time</label>
            <div className="flex items-center space-x-4 mt-2">
              <input
                type="range"
                min="10"
                max="40"
                step="5"
                value={testing.manualTestingPercent}
                onChange={(e) =>
                  updateTesting({ manualTestingPercent: Number(e.target.value) })
                }
                className="flex-1 accent-jira-blue"
              />
              <span className="font-semibold text-lg w-16 text-right text-jira-darkBlue">
                {testing.manualTestingPercent}%
              </span>
            </div>
            <p className="text-xs text-jira-textSecondary mt-2">
              Recommended: 15-25% of total development time
            </p>
          </div>
        )}
      </div>

      {/* Automated Testing */}
      <div className="card">
        <label className="flex items-center space-x-3 cursor-pointer">
          <input
            type="checkbox"
            checked={testing.automatedTesting}
            onChange={(e) => updateTesting({ automatedTesting: e.target.checked })}
            className="checkbox-field"
          />
          <div>
            <div className="font-semibold text-sm text-jira-darkBlue">Automated Testing</div>
            <div className="text-xs text-jira-textSecondary">
              Writing automated tests
            </div>
          </div>
        </label>

        {testing.automatedTesting && (
          <div className="mt-4 pl-7">
            <label className="label">Additional hours for automated tests</label>
            <input
              type="number"
              value={testing.automatedHours}
              onChange={(e) => updateTesting({ automatedHours: Number(e.target.value) })}
              className="input-field mt-2"
              min="0"
              placeholder="Enter number of hours"
            />
            <p className="text-xs text-jira-textSecondary mt-2">
              Typical: 40-80 hours for basic coverage
            </p>

            {/* Test Types */}
            <div className="mt-4 space-y-2">
              <label className="flex items-center space-x-2 text-xs cursor-pointer">
                <input
                  type="checkbox"
                  checked={testing.unitTests}
                  onChange={(e) => updateTesting({ unitTests: e.target.checked })}
                  className="checkbox-field"
                />
                <span className="text-jira-darkBlue">Unit tests</span>
              </label>

              <label className="flex items-center space-x-2 text-xs cursor-pointer">
                <input
                  type="checkbox"
                  checked={testing.integrationTests}
                  onChange={(e) => updateTesting({ integrationTests: e.target.checked })}
                  className="checkbox-field"
                />
                <span className="text-jira-darkBlue">Integration tests</span>
              </label>

              <label className="flex items-center space-x-2 text-xs cursor-pointer">
                <input
                  type="checkbox"
                  checked={testing.e2eTests}
                  onChange={(e) => updateTesting({ e2eTests: e.target.checked })}
                  className="checkbox-field"
                />
                <span className="text-jira-darkBlue">E2E tests (End-to-End)</span>
              </label>

              <label className="flex items-center space-x-2 text-xs cursor-pointer">
                <input
                  type="checkbox"
                  checked={testing.performanceTests}
                  onChange={(e) => updateTesting({ performanceTests: e.target.checked })}
                  className="checkbox-field"
                />
                <span className="text-jira-darkBlue">Performance tests</span>
              </label>
            </div>
          </div>
        )}
      </div>

      {/* Info Box */}
      <div className="card bg-primary-50 border border-jira-blue">
        <div className="flex items-start space-x-3">
          <FiInfo className="text-lg text-jira-blue flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-jira-darkBlue mb-2 text-sm">Recommendations</h3>
            <ul className="text-xs text-jira-textSecondary space-y-1.5">
              <li className="flex items-start space-x-1.5">
                <span className="text-jira-blue">•</span>
                <span>Manual testing: required for all projects</span>
              </li>
              <li className="flex items-start space-x-1.5">
                <span className="text-jira-blue">•</span>
                <span>Automated tests: recommended for medium and large projects</span>
              </li>
              <li className="flex items-start space-x-1.5">
                <span className="text-jira-blue">•</span>
                <span>Unit tests: basic coverage of critical business logic</span>
              </li>
              <li className="flex items-start space-x-1.5">
                <span className="text-jira-blue">•</span>
                <span>E2E tests: verification of main user flows</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
