const fs = require('fs');

// Read the file
const filePath = 'src/DirectoryListing.jsx';
let content = fs.readFileSync(filePath, 'utf8');

// Find and replace the FormData logic
const oldPattern = `      Object.keys(form).forEach(key => {
        if (form[key] !== null) {
          formData.append(key, form[key]);
        }
      });`;

const newPattern = `      Object.keys(form).forEach(key => {
        if (key === "city" || key === "state" || key === "country") {
          formData.append(key, form[key] || "");
        } else if (form[key] !== null) {
          formData.append(key, form[key]);
        }
      });`;

// Replace the pattern
content = content.replace(oldPattern, newPattern);

// Add debugging before FormData creation
const beforeFormData = `    try {
      const formData = new FormData();`;
const withDebugging = `    try {
      console.log("📝 Form data before submission:", form);
      const formData = new FormData();`;

content = content.replace(beforeFormData, withDebugging);

// Add debugging after FormData creation
const afterFormData = `      // Add userPackage to the form data
      formData.append('userPackage', user.package);`;
const withFormDataDebug = `      // Add userPackage to the form data
      formData.append('userPackage', user.package);
      
      console.log("📋 FormData contents:");
      for (let [key, value] of formData.entries()) {
        console.log(\`  \${key}: \${value}\`);
      }`;

content = content.replace(afterFormData, withFormDataDebug);

// Write the fixed file
fs.writeFileSync(filePath, content, 'utf8');
console.log('✅ Form logic fixed successfully!');
console.log('📝 Added debugging to see what data is being sent');
console.log('🔧 Location fields will now always be included in FormData'); 