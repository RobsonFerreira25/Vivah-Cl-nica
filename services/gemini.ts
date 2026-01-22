
import { GoogleGenAI } from "@google/genai";

// Initialize the Gemini API client with the environment variable API_KEY.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export async function askAssistant(question: string) {
  try {
    // Generate content using the gemini-3-flash-preview model.
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: question,
      config: {
        systemInstruction: `Você é um assistente virtual da Vivah Clínica, uma clínica médica premium e humanizada em Votuporanga, SP.
        Seu objetivo é responder dúvidas básicas de saúde de forma acolhedora, mas SEMPRE reforçando que você é uma IA e que o diagnóstico final deve ser feito em consulta.
        Seja elegante, use um vocabulário polido e incentive o agendamento na clínica. 
        Não forneça prescrições médicas.`,
      },
    });
    // Use the .text property to access the generated text content.
    return response.text || "Desculpe, não consegui processar sua dúvida no momento.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Ocorreu um erro ao consultar o assistente. Por favor, tente novamente.";
  }
}
