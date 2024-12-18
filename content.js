// Retrieve saved colors and extension state from Chrome storage
chrome.storage.sync.get(['bgColor', 'textColor', 'extensionEnabled'], (data) => {
    if (data.extensionEnabled) {
      if (data.bgColor) {
        // Apply the background color to the body
        document.body.style.setProperty('background-color', data.bgColor, 'important');
      }
      if (data.textColor) {
        // Apply the text color to the body
        document.body.style.setProperty('color', data.textColor, 'important');
        
        // Apply the text color to all elements
        const elements = document.querySelectorAll('body, body *');
        elements.forEach(element => {
          if (element.nodeType === Node.ELEMENT_NODE) {
            element.style.setProperty('color', data.textColor, 'important');
          }
        });
      }
    }
  });