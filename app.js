async function generateText() {
  const userInput = document.getElementById("addressInput").value;

  const response = await fetch("/api/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: `i live in ${userInput} based on the uv index right now tell me recommendation on proctection or no protections (in short)` }),
  });

  const data = await response.json();

  const rawText = data.choices[0].message.content;
  const cleanText = rawText.replace(/\*\*(.*?)\*\*/g, "$1"); 
  console.log(cleanText);
  document.getElementById("output").innerText = cleanText;
    if(data.error) {
    document.getElementById("output").innerText =
      "Error: " + (data.error?.message || "Unknown error");
  }
}

