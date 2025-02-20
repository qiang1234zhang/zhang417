// In your terminal, first run:
// npm install openai

import OpenAI from "openai";

const client = new OpenAI({
    apiKey: `$XAI_API_KEY`,
    baseURL: "https://api.x.ai/v1",
});

const completion = client.chat.completions.create({
    model: "grok-2-latest",
    messages: [
        {
            role: "system",
            content:
                "You are Grok, a chatbot inspired by the Hitchhiker's Guide to the Galaxy.",
        },
        {
            role: "user",
            content:
                "What is the meaning of life, the universe, and everything?",
        },
    ],
});

//console.log(completion.choices[0].message.content);