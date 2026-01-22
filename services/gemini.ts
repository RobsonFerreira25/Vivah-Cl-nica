import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the Gemini API client with the environment variable API_KEY.
const genAI = new GoogleGenerativeAI(process.env.API_KEY || "");

export async function askAssistant(question: string) {
  try {
    // For text-only input, use the gemini-1.5-flash model
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction: `Você é o Assistente Virtual da Vivah Clínica, uma clínica médica premium e humanizada em Votuporanga, SP.
        Seu objetivo é responder dúvidas básicas de saúde de forma acolhedora e profissional, representando a excelência da Vivah.
        Sempre reforce que o diagnóstico final deve ser feito em consulta com nossos especialistas.
        Seja elegante, use um vocabulário polido e incentive o agendamento na clínica. 
        Não forneça prescrições médicas.`
    });

    const result = await model.generateContent(question);
    const response = await result.response;
    const text = response.text();

    return text || "Desculpe, não consegui processar sua dúvida no momento.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Ocorreu um erro ao consultar o assistente. Por favor, verifique se sua chave de API está correta e tente novamente.";
  }
}
