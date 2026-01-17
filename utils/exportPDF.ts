import jsPDF from 'jspdf';
import { CostSummary } from '@/types/calculator';
import { ROLE_NAMES, LEVEL_NAMES } from '@/data/features';

export const exportToPDF = (summary: CostSummary, projectName: string = 'Project') => {
  const doc = new jsPDF();
  
  let yPos = 20;
  const lineHeight = 7;
  const leftMargin = 20;
  const pageWidth = doc.internal.pageSize.getWidth();
  
  // Title
  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  doc.text('Development Cost Estimate', leftMargin, yPos);
  
  yPos += 10;
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(20, 20, 20);
  doc.text(`Project: ${projectName}`, leftMargin, yPos);
  
  yPos += 8;
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(0, 0, 0);
  doc.text(`Date: ${new Date().toLocaleDateString('en-US')}`, leftMargin, yPos);
  
  yPos += 15;
  
  doc.setFillColor(14, 165, 233);
  doc.rect(leftMargin, yPos, pageWidth - 40, 25, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text(`Total Cost: $${summary.totalCost.toLocaleString()}`, leftMargin + 5, yPos + 8);
  doc.text(`Time: ${summary.estimatedMonths.toFixed(1)} months (${summary.totalHours.toLocaleString()} hrs)`, leftMargin + 5, yPos + 18);
  
  yPos += 35;
  doc.setTextColor(0, 0, 0);
  
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('Breakdown by Roles:', leftMargin, yPos);
  yPos += 10;
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  
  summary.teamCosts.forEach((roleCost) => {
    const roleName = roleCost.customRoleName || ROLE_NAMES[roleCost.role] || roleCost.role;
    const levelName = LEVEL_NAMES[roleCost.level] || roleCost.level;
    const text = `${roleName} (${levelName})`;
    const cost = `$${roleCost.cost.toLocaleString()}`;
    const hours = `${roleCost.hours.toFixed(1)} hrs`;
    
    doc.text(text, leftMargin, yPos);
    doc.text(hours, leftMargin + 80, yPos);
    doc.text(cost, pageWidth - 40, yPos);
    yPos += lineHeight;
  });
  
  yPos += 5;
  
  if (summary.featureCosts.length > 0) {
    if (yPos > 250) {
      doc.addPage();
      yPos = 20;
    }
    
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('Breakdown by Features:', leftMargin, yPos);
    yPos += 10;
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    
    summary.featureCosts.forEach((featureCost) => {
      if (yPos > 270) {
        doc.addPage();
        yPos = 20;
      }
      
      const featureName = featureCost.featureName.length > 50 
        ? featureCost.featureName.substring(0, 47) + '...'
        : featureCost.featureName;
      
      doc.text(featureName, leftMargin, yPos);
      doc.text(`$${featureCost.cost.toLocaleString()}`, pageWidth - 40, yPos);
      yPos += lineHeight;
      
      doc.setFontSize(8);
      doc.setTextColor(100, 100, 100);
      doc.text(
        `Frontend: ${featureCost.frontendHours.toFixed(1)}h | Backend: ${featureCost.backendHours.toFixed(1)}h`,
        leftMargin + 5,
        yPos
      );
      doc.setFontSize(10);
      doc.setTextColor(0, 0, 0);
      yPos += lineHeight;
    });
    
    yPos += 5;
  }
  
  if (yPos > 230) {
    doc.addPage();
    yPos = 20;
  }
  
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('Additional Costs:', leftMargin, yPos);
  yPos += 10;
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  
  const additionalItems = [
    { label: 'Design and mockups', value: summary.designCost },
    { label: 'Testing and QA', value: summary.testingCost },
  ];
  
  if (summary.supportCost > 0) {
    additionalItems.push({ label: 'Post-launch support', value: summary.supportCost });
  }
  if (summary.otherCosts > 0) {
    additionalItems.push({ label: 'Infrastructure and other', value: summary.otherCosts });
  }
  additionalItems.push({ label: 'Buffer (unexpected costs)', value: summary.bufferCost });
  
  additionalItems.forEach((item) => {
    doc.text(item.label, leftMargin, yPos);
    doc.text(`$${item.value.toLocaleString()}`, pageWidth - 40, yPos);
    yPos += lineHeight;
  });
  
  yPos += 10;
  
  doc.setFillColor(30, 30, 30);
  doc.rect(leftMargin, yPos, pageWidth - 40, 15, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Final Project Cost:', leftMargin + 5, yPos + 10);
  doc.text(`$${summary.totalCost.toLocaleString()}`, pageWidth - 60, yPos + 10);
  
  yPos += 20;
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(8);
  doc.setFont('helvetica', 'italic');
  
  const notes = [
    'Notes:',
    '- This is a preliminary estimate. Final cost may vary',
    '- Time calculated considering parallel team work',
    '- Does not include hosting and server costs',
  ];
  
  notes.forEach((note) => {
    if (yPos > 280) {
      doc.addPage();
      yPos = 20;
    }
    doc.text(note, leftMargin, yPos);
    yPos += 5;
  });
  
  const sanitizedProjectName = projectName
    .replace(/[^a-z0-9]/gi, '_')
    .toLowerCase()
    .substring(0, 50);
  const fileName = sanitizedProjectName 
    ? `${sanitizedProjectName}_estimate.pdf` 
    : `estimate_${Date.now()}.pdf`;
  doc.save(fileName);
};
