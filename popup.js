{
  "manifest_version": 3,
  "name": "OpenAI Extension",
  "description": "Get answers to questions using OpenAI API",
  "version": "1.0",
  "browser_action": {
    "default_popup": "popup.html",
    "default_icon": "icon.png"
  },
  "permissions": [
    "activeTab",
    "https://api.openai.com/",
    "storage"
  ],
  "icons": {
    "16": "icon16.png",
    "32": "icon32.png",
    "48": "icon48.png",
    "128": "icon128.png"
  }
}
