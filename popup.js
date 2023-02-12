popup.js:
async function sendRequestToOpenAI(text) {
  const response = await fetch("https://api.openai.com/v1/engines/davinci/jobs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer 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"
    },
    body: JSON.stringify({
      prompt: text,
      max_tokens: 100,
      n: 1,
      stop: "",
      temperature: 0.5
    })
  });
  const json = await response.json();
  const reply = json.choices[0].text;
  document.getElementById("output").value = reply;
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("submit-button").addEventListener("click", function() {
    const text = document.getElementById("input").value;
    sendRequestToOpenAI(text);
  });
});
