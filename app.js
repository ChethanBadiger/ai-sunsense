async function generateText() {
  const userInput = document.getElementById("addressInput").value;

  const response = await fetch("/api/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: `i live in ${userInput} based on the uv index right now tell me recommendation on proctection or no protections (in short)` }),
  });

  const data = await response.json();

  if (data.choices && data.choices.length > 0) {
    document.getElementById("result").innerText =
      data.choices[0].message.content;
  } else {
    document.getElementById("result").innerText =
      "Error: " + (data.error?.message || "Unknown error");
  }
}

