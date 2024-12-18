document.getElementById('changeColors').addEventListener('click', () => {
    const bgColor = document.getElementById('bgColor').value;
    const textColor = document.getElementById('textColor').value;
  
    // Save colors to Chrome storage
    chrome.storage.sync.set({ bgColor, textColor }, () => {
      console.log('Colors saved');
    });
  
    // Apply colors if the extension is enabled
    chrome.storage.sync.get('extensionEnabled', (data) => {
      if (data.extensionEnabled) {
        applyColors(bgColor, textColor);
      }
    });
  });
  
  document.getElementById('resetColors').addEventListener('click', () => {
    // Clear colors from Chrome storage
    chrome.storage.sync.remove(['bgColor', 'textColor'], () => {
      console.log('Colors reset');
    });
  
    // Reset colors
    resetColors();
  });
  
  function applyColors(bgColor, textColor) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: (bgColor, textColor) => {
          document.body.style.setProperty('background-color', bgColor, 'important');
          document.body.style.setProperty('color', textColor, 'important');
          const elements = document.querySelectorAll('body, body *');
          elements.forEach(element => {
            if (element.nodeType === Node.ELEMENT_NODE) {
              element.style.setProperty('color', textColor, 'important');
            }
          });
        },
        args: [bgColor, textColor]
      });
    });
  }
  
  function resetColors() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: () => {
          document.body.style.removeProperty('background-color');
          document.body.style.removeProperty('color');
          const elements = document.querySelectorAll('body, body *');
          elements.forEach(element => {
            if (element.nodeType === Node.ELEMENT_NODE) {
              element.style.removeProperty('color');
            }
          });
        }
      });
    });
  }
  
  // Initialize the toggle state and load saved colors on popup open
  chrome.storage.sync.get(['bgColor', 'textColor', 'extensionEnabled'], (data) => {
    if (data.bgColor && data.textColor) {
      document.getElementById('bgColor').value = data.bgColor;
      document.getElementById('textColor').value = data.textColor;
      if (data.extensionEnabled) {
        applyColors(data.bgColor, data.textColor);
      }
    }
    // Set the toggle to off by default if not set
    const isEnabled = data.extensionEnabled !== undefined ? data.extensionEnabled : false;
    document.getElementById('toggleExtension').checked = isEnabled;
    chrome.storage.sync.set({ extensionEnabled: isEnabled });
  });
  
  // Theme buttons
  document.getElementById('theme1').addEventListener('click', () => {
    const bgColor = '#f0f0f0';
    const textColor = '#333';
    document.getElementById('bgColor').value = bgColor;
    document.getElementById('textColor').value = textColor;
    chrome.storage.sync.set({ bgColor, textColor }, () => {
      console.log('Theme 1 colors saved');
    });
    chrome.storage.sync.get('extensionEnabled', (data) => {
      if (data.extensionEnabled) {
        applyColors(bgColor, textColor);
      }
    });
  });
  
  document.getElementById('theme2').addEventListener('click', () => {
    const bgColor = '#333';
    const textColor = '#f0f0f0';
    document.getElementById('bgColor').value = bgColor;
    document.getElementById('textColor').value = textColor;
    chrome.storage.sync.set({ bgColor, textColor }, () => {
      console.log('Theme 2 colors saved');
    });
    chrome.storage.sync.get('extensionEnabled', (data) => {
      if (data.extensionEnabled) {
        applyColors(bgColor, textColor);
      }
    });
  });
  
  document.getElementById('theme3').addEventListener('click', () => {
    const bgColor = '#ffebcd';
    const textColor = '#8b4513';
    document.getElementById('bgColor').value = bgColor;
    document.getElementById('textColor').value = textColor;
    chrome.storage.sync.set({ bgColor, textColor }, () => {
      console.log('Theme 3 colors saved');
    });
    chrome.storage.sync.get('extensionEnabled', (data) => {
      if (data.extensionEnabled) {
        applyColors(bgColor, textColor);
      }
    });
  });
  
  document.getElementById('theme4').addEventListener('click', () => {
    const bgColor = '#282c34';
    const textColor = '#61dafb';
    document.getElementById('bgColor').value = bgColor;
    document.getElementById('textColor').value = textColor;
    chrome.storage.sync.set({ bgColor, textColor }, () => {
      console.log('Theme 4 colors saved');
    });
    chrome.storage.sync.get('extensionEnabled', (data) => {
      if (data.extensionEnabled) {
        applyColors(bgColor, textColor);
      }
    });
  });
  
  document.getElementById('theme5').addEventListener('click', () => {
    const bgColor = '#ffffff';
    const textColor = '#007acc';
    document.getElementById('bgColor').value = bgColor;
    document.getElementById('textColor').value = textColor;
    chrome.storage.sync.set({ bgColor, textColor }, () => {
      console.log('Theme 5 colors saved');
    });
    chrome.storage.sync.get('extensionEnabled', (data) => {
      if (data.extensionEnabled) {
        applyColors(bgColor, textColor);
      }
    });
  });
  
  document.getElementById('theme6').addEventListener('click', () => {
    const bgColor = '#2e8b57';
    const textColor = '#ffffff';
    document.getElementById('bgColor').value = bgColor;
    document.getElementById('textColor').value = textColor;
    chrome.storage.sync.set({ bgColor, textColor }, () => {
      console.log('Theme 6 colors saved');
    });
    chrome.storage.sync.get('extensionEnabled', (data) => {
      if (data.extensionEnabled) {
        applyColors(bgColor, textColor);
      }
    });
  });
  
  document.getElementById('theme7').addEventListener('click', () => {
    const bgColor = '#ff6347';
    const textColor = '#ffffff';
    document.getElementById('bgColor').value = bgColor;
    document.getElementById('textColor').value = textColor;
    chrome.storage.sync.set({ bgColor, textColor }, () => {
      console.log('Theme 7 colors saved');
    });
    chrome.storage.sync.get('extensionEnabled', (data) => {
      if (data.extensionEnabled) {
        applyColors(bgColor, textColor);
      }
    });
  });
  
  document.getElementById('theme8').addEventListener('click', () => {
    const bgColor = '#8a2be2';
    const textColor = '#ffffff';
    document.getElementById('bgColor').value = bgColor;
    document.getElementById('textColor').value = textColor;
    chrome.storage.sync.set({ bgColor, textColor }, () => {
      console.log('Theme 8 colors saved');
    });
    chrome.storage.sync.get('extensionEnabled', (data) => {
      if (data.extensionEnabled) {
        applyColors(bgColor, textColor);
      }
    });
  });
  
  document.getElementById('theme9').addEventListener('click', () => {
    const bgColor = '#f5f5dc';
    const textColor = '#000000';
    document.getElementById('bgColor').value = bgColor;
    document.getElementById('textColor').value = textColor;
    chrome.storage.sync.set({ bgColor, textColor }, () => {
      console.log('Theme 9 colors saved');
    });
    chrome.storage.sync.get('extensionEnabled', (data) => {
      if (data.extensionEnabled) {
        applyColors(bgColor, textColor);
      }
    });
  });
  
  // Toggle extension
  document.getElementById('toggleExtension').addEventListener('change', (event) => {
    const isEnabled = event.target.checked;
    chrome.storage.sync.set({ extensionEnabled: isEnabled }, () => {
      console.log(`Extension ${isEnabled ? 'enabled' : 'disabled'}`);
      if (!isEnabled) {
        resetColors();
      } else {
        chrome.storage.sync.get(['bgColor', 'textColor'], (data) => {
          if (data.bgColor && data.textColor) {
            applyColors(data.bgColor, data.textColor);
          }
        });
      }
    });
  });