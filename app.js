async function generateText() {
    const location = document.getElementById('addressInput').value;
  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer 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`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "z-ai/glm-4.5-air:free",
      messages: [
        { role: "assistant", content: `i live in ${location} based on the uv index right now tell me recommendation on proctection or no protections (in short)` },
      ],
    }),
  });

  const data = await response.json();
//   console.log("Full API response:", JSON.stringify(data, null, 2));

  if (data.choices && data.choices.length > 0) {
    const rawText = data.choices[0].message.content;
    const cleanText = rawText.replace(/\*\*(.*?)\*\*/g, "$1"); 
    document.getElementById("output").innerText = cleanText;
  } else if (data.error) {
    console.error("API Error:", data.error.message);
  } else {
    console.error("Unexpected response:", data);
}
}



