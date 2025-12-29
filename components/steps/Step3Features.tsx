'use client';

import { useState } from 'react';
import { useCalculatorStore } from '@/store/calculator';
import { FEATURE_CATEGORIES } from '@/data/features';
import * as FiIcons from 'react-icons/fi';

const FiTarget = FiIcons.FiTarget;
const FiChevronDown = FiIcons.FiChevronDown;
const FiChevronRight = FiIcons.FiChevronRight;
const FiCheck = FiIcons.FiCheck;
const FiClock = FiIcons.FiClock;
const FiCode = FiIcons.FiCode;

export default function Step3Features() {
  const { features, toggleFeature, updateFeatureHours } = useCalculatorStore();
  const [expandedCategories, setExpandedCategories] = useState<string[]>([
    FEATURE_CATEGORIES.AUTH,
  ]);

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  const groupedFeatures = features.reduce((acc, feature) => {
    if (!acc[feature.category]) {
      acc[feature.category] = [];
    }
    acc[feature.category].push(feature);
    return acc;
  }, {} as Record<string, typeof features>);

  const selectedCount = features.filter((f) => f.selected).length;

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <FiTarget className="text-xl text-jira-blue" />
        <div>
          <h2 className="text-lg font-semibold text-jira-darkBlue">Features & Capabilities</h2>
          <p className="text-jira-textSecondary text-xs">
            Select the required features for your project
          </p>
        </div>
      </div>

      {/* Selected Count */}
      {selectedCount > 0 && (
        <div className="card bg-primary-50 border border-jira-blue">
          <div className="flex items-center space-x-3">
            <FiCheck className="text-xl text-jira-blue" />
            <p className="text-jira-darkBlue font-medium text-sm">
              Selected features: <span className="text-xl font-bold ml-2">{selectedCount}</span>
            </p>
          </div>
        </div>
      )}

      {/* Features by Category */}
      <div className="space-y-3">
        {Object.entries(groupedFeatures).map(([category, categoryFeatures]) => {
          const isExpanded = expandedCategories.includes(category);
          const selectedInCategory = categoryFeatures.filter((f) => f.selected).length;

          return (
            <div key={category} className="card hover:shadow-jira-md transition-all duration-150">
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(category)}
                className="w-full flex items-center justify-between text-left"
              >
                <div className="flex items-center space-x-3">
                  {isExpanded ? (
                    <FiChevronDown className="text-lg text-jira-textSecondary" />
                  ) : (
                    <FiChevronRight className="text-lg text-jira-textSecondary" />
                  )}
                  <div>
                    <h3 className="font-semibold text-jira-darkBlue">{category}</h3>
                    {selectedInCategory > 0 && (
                      <span className="text-xs text-jira-blue font-medium">
                        {selectedInCategory} selected
                      </span>
                    )}
                  </div>
                </div>
                {selectedInCategory > 0 && (
                  <div className="w-6 h-6 bg-jira-blue text-white rounded-full flex items-center justify-center text-xs font-bold">
                    {selectedInCategory}
                  </div>
                )}
              </button>

              {/* Category Features */}
              {isExpanded && (
                <div className="mt-3 space-y-2 pl-7">
                  {categoryFeatures.map((feature) => (
                    <div
                      key={feature.id}
                      className={`p-3 rounded border transition-all ${
                        feature.selected
                          ? 'border-jira-blue bg-primary-50 shadow-jira'
                          : 'border-jira-border hover:border-jira-blue hover:shadow-jira'
                      }`}
                    >
                      <label className="flex items-start space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={feature.selected}
                          onChange={() => toggleFeature(feature.id)}
                          className="checkbox-field mt-0.5"
                        />
                        <div className="flex-1">
                          <div className="font-medium text-sm text-jira-darkBlue mb-2">{feature.name}</div>
                          
                          <div className="grid grid-cols-2 gap-2 text-xs">
                            <div className="flex items-center space-x-1.5">
                              <FiCode className="text-jira-textSecondary" />
                              <span className="text-jira-textSecondary">Frontend: </span>
                              <span className="font-medium text-jira-darkBlue">
                                {feature.frontendHours.min}-{feature.frontendHours.max} hrs
                              </span>
                            </div>
                            <div className="flex items-center space-x-1.5">
                              <FiCode className="text-jira-textSecondary" />
                              <span className="text-jira-textSecondary">Backend: </span>
                              <span className="font-medium text-jira-darkBlue">
                                {feature.backendHours.min}-{feature.backendHours.max} hrs
                              </span>
                            </div>
                          </div>

                          {/* Custom Hours (shown when selected) */}
                          {feature.selected && (
                            <div className="mt-3 pt-3 border-t border-jira-border">
                              <div className="text-xs text-jira-textSecondary mb-2 flex items-center space-x-1">
                                <FiClock className="text-xs" />
                                <span>Customize hours (optional):</span>
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                <input
                                  type="number"
                                  placeholder={`${feature.frontendHours.min}-${feature.frontendHours.max}`}
                                  value={feature.customHours?.frontend || ''}
                                  onChange={(e) =>
                                    updateFeatureHours(
                                      feature.id,
                                      e.target.value ? Number(e.target.value) : undefined,
                                      feature.customHours?.backend
                                    )
                                  }
                                  className="input-field text-xs py-1.5"
                                  min="0"
                                />
                                <input
                                  type="number"
                                  placeholder={`${feature.backendHours.min}-${feature.backendHours.max}`}
                                  value={feature.customHours?.backend || ''}
                                  onChange={(e) =>
                                    updateFeatureHours(
                                      feature.id,
                                      feature.customHours?.frontend,
                                      e.target.value ? Number(e.target.value) : undefined
                                    )
                                  }
                                  className="input-field text-xs py-1.5"
                                  min="0"
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {selectedCount === 0 && (
        <div className="text-center py-12 text-jira-textSecondary">
          <div className="w-16 h-16 bg-gray-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
            <FiTarget className="text-3xl text-gray-400" />
          </div>
          <p className="font-medium">Select the features you need for your project</p>
        </div>
      )}
    </div>
  );
}

