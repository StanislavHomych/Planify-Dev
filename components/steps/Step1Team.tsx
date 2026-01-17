'use client';

import { useState } from 'react';
import { useCalculatorStore } from '@/store/calculator';
import { TeamMember, Role, Level } from '@/types/calculator';
import { ROLE_NAMES, LEVEL_NAMES, RECOMMENDED_RATES } from '@/data/features';
import * as FiIcons from 'react-icons/fi';
import Select from '@/components/ui/Select';

const FiPlus = FiIcons.FiPlus;
const FiTrash2 = FiIcons.FiTrash2;
const FiUsers = FiIcons.FiUsers;
const FiInfo = FiIcons.FiInfo;
const FiEdit = FiIcons.FiEdit;

export default function Step1Team() {
  const { team, projectName, setProjectName, addTeamMember, updateTeamMember, removeTeamMember } = useCalculatorStore();
  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddMember = () => {
    const newMember: TeamMember = {
      id: `member-${Date.now()}`,
      role: 'frontend-developer',
      level: 'middle',
      hourlyRate: RECOMMENDED_RATES['frontend-developer']['middle'],
      hoursPerDay: 8,
      quantity: 1,
    };
    addTeamMember(newMember);
    setShowAddForm(false);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <FiUsers className="text-xl text-jira-blue" />
        <div>
          <h2 className="text-lg font-semibold text-jira-darkBlue">Team & Rates</h2>
          <p className="text-jira-textSecondary text-xs">
            Add team members and specify their hourly rates
          </p>
        </div>
      </div>

      <div className="card bg-primary-50 border border-jira-blue">
        <label className="label text-jira-darkBlue text-xs">Project Name</label>
        <input
          type="text"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          placeholder="e.g., E-commerce Platform, Mobile App, etc."
          className="input-field mt-1 text-sm"
        />
        <div className="flex items-center space-x-1.5 mt-1.5 text-xs text-jira-textSecondary">
          <FiInfo className="flex-shrink-0 text-xs" />
          <p>This name will be used in the PDF export</p>
        </div>
      </div>

      <div className="space-y-2">
        {team.map((member) => (
          <div key={member.id} className="card hover:shadow-jira-md transition-all duration-150">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div className="md:col-span-2">
                    <label className="label text-xs">Role Type</label>
                    <div className="flex space-x-2">
                      <button
                        type="button"
                        onClick={() => {
                          if (member.isCustomRole) {
                            // Switch to standard role
                            const newRole = 'frontend-developer' as Role;
                            const newRate = RECOMMENDED_RATES[newRole][member.level];
                            updateTeamMember(member.id, { 
                              isCustomRole: false, 
                              customRoleName: undefined,
                              role: newRole,
                              hourlyRate: newRate
                            });
                          }
                        }}
                        className={`flex-1 px-3 py-2 text-xs rounded border transition-all ${
                          !member.isCustomRole
                            ? 'bg-jira-blue text-white border-jira-blue'
                            : 'bg-white text-jira-text border-jira-border hover:bg-primary-50'
                        }`}
                      >
                        Standard Role
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          if (!member.isCustomRole) {
                            // Switch to custom role
                            updateTeamMember(member.id, { 
                              isCustomRole: true,
                              customRoleName: member.customRoleName || 'Custom Role'
                            });
                          }
                        }}
                        className={`flex-1 px-3 py-2 text-xs rounded border transition-all ${
                          member.isCustomRole
                            ? 'bg-jira-blue text-white border-jira-blue'
                            : 'bg-white text-jira-text border-jira-border hover:bg-primary-50'
                        }`}
                      >
                        Custom Role
                      </button>
                    </div>
                  </div>

                  {!member.isCustomRole ? (
                    <div>
                      <label className="label text-xs">Role</label>
                      <Select
                        value={member.role}
                        onChange={(value) => {
                          const newRole = value as Role;
                          const newRate = RECOMMENDED_RATES[newRole]?.[member.level] || member.hourlyRate;
                          updateTeamMember(member.id, { role: newRole, hourlyRate: newRate });
                        }}
                        options={Object.entries(ROLE_NAMES).map(([value, label]) => ({
                          value,
                          label,
                        }))}
                      />
                    </div>
                  ) : (
                    <div>
                      <label className="label text-xs">Custom Role Name</label>
                      <input
                        type="text"
                        value={member.customRoleName || ''}
                        onChange={(e) =>
                          updateTeamMember(member.id, { customRoleName: e.target.value })
                        }
                        placeholder="e.g., Data Scientist, ML Engineer"
                        className="input-field text-sm"
                      />
                    </div>
                  )}

                  <div>
                    <label className="label text-xs">Level</label>
                    <Select
                      value={member.level}
                      onChange={(value) => {
                        const newLevel = value as Level;
                        const newRate = RECOMMENDED_RATES[member.role][newLevel];
                        updateTeamMember(member.id, { level: newLevel, hourlyRate: newRate });
                      }}
                      options={Object.entries(LEVEL_NAMES).map(([value, label]) => ({
                        value,
                        label,
                      }))}
                    />
                  </div>

                  <div>
                    <label className="label text-xs">Hourly Rate ($)</label>
                    <input
                      type="number"
                      value={member.hourlyRate}
                      onChange={(e) =>
                        updateTeamMember(member.id, { hourlyRate: Number(e.target.value) })
                      }
                      className="input-field text-sm"
                      min="1"
                    />
                  </div>

                  <div>
                    <label className="label text-xs">Hours per Day</label>
                    <input
                      type="number"
                      value={member.hoursPerDay}
                      onChange={(e) =>
                        updateTeamMember(member.id, { hoursPerDay: Number(e.target.value) })
                      }
                      className="input-field text-sm"
                      min="1"
                      max="16"
                    />
                    <p className="text-xs text-jira-textSecondary mt-0.5">Usually 6-8 hours</p>
                  </div>

                  <div>
                    <label className="label text-xs">Number of Workers</label>
                    <input
                      type="number"
                      value={member.quantity}
                      onChange={(e) =>
                        updateTeamMember(member.id, { quantity: Number(e.target.value) })
                      }
                      className="input-field text-sm"
                      min="1"
                    />
                  </div>
                </div>

                <div className="mt-2 p-2 bg-primary-50 rounded border border-jira-border">
                  <div className="font-medium text-jira-darkBlue text-xs">
                    {member.isCustomRole ? (
                      <span>{member.customRoleName || 'Custom Role'}</span>
                    ) : (
                      <span>{ROLE_NAMES[member.role] || member.role}</span>
                    )}
                    {' - '}
                    Rate: ${member.hourlyRate}/hr
                    {member.quantity > 1 && ` × ${member.quantity} people`}
                  </div>
                  <div className="text-xs text-jira-textSecondary mt-0.5">
                    ~${(member.hourlyRate * member.hoursPerDay).toLocaleString()}/day per person
                  </div>
                </div>
              </div>

              <button
                onClick={() => removeTeamMember(member.id)}
                className="ml-2 p-1.5 text-jira-error hover:bg-red-50 rounded transition-colors"
                title="Delete"
              >
                <FiTrash2 className="text-base" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handleAddMember}
        className="w-full py-2.5 sm:py-2 border-2 border-dashed border-jira-border rounded text-jira-blue text-xs sm:text-sm font-medium hover:bg-primary-50 hover:border-jira-blue transition-all flex items-center justify-center space-x-2"
      >
        <FiPlus className="text-sm sm:text-base" />
        <span>Add Team Member</span>
      </button>

      {team.length > 0 && (
        <div className="card bg-jira-blue text-white shadow-jira-md">
          <div className="text-center px-2">
            <div className="text-xs uppercase tracking-wide opacity-90 mb-1">Team Configured</div>
            <div className="text-lg sm:text-xl font-bold mb-1">{team.length} {team.length === 1 ? 'role' : 'roles'}</div>
            <div className="text-xs opacity-90">
              Cost and time will be calculated after selecting features
            </div>
          </div>
        </div>
      )}

      {team.length === 0 && (
        <div className="text-center py-8 text-jira-textSecondary">
          <div className="w-12 h-12 bg-gray-100 rounded mx-auto mb-3 flex items-center justify-center">
            <FiUsers className="text-2xl text-gray-400" />
          </div>
          <p className="font-medium text-sm">Add team members to start calculation</p>
          <p className="text-xs mt-1">Cost will be calculated automatically based on selected features</p>
        </div>
      )}
    </div>
  );
}

