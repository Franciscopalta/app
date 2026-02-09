import { GoogleGenAI } from "@google/genai";

export const getWebsiteAdvice = async (userPrompt: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: `Eres el consultor estratégico senior de 'VentaFlow IA'. 
        REGLAS CRÍTICAS DE NEGOCIO:
        1. OFERTA ACTUAL: Estamos ofreciendo 10 DÍAS DE PRUEBA GRATUITA de todo nuestro sistema para nuevos clientes.
        2. WEB GRATIS: La 'Página Web Inicial' es GRATUITA únicamente al adquirir el PAQUETE PREMIUM INTEGRAL (Calendario de Reservas + WhatsApp Bot Inteligente + Tarjetas Digitales Pro).
        3. OBJETIVO: Convencer al cliente de la potencia de la automatización 24/7.
        4. ESTILO: Profesional, visionario, persuasivo y elegante. 
        5. CIERRE: Invita siempre a concretar los detalles finales o solicitar su demo personalizada vía WhatsApp (https://wa.link/k90a0j) si muestran interés.`,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "¡Hola! Soy tu asistente de VentaFlow IA. Actualmente tenemos una promoción de 10 días de prueba gratuita. Además, si adquieres nuestro paquete integral de automatización, tu página web es 100% gratuita. ¿Te gustaría agendar una breve consultoría por WhatsApp?";
  }
};