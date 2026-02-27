import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User, Minimize2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Message {
  id: number;
  text: string;
  sender: "bot" | "user";
  time: string;
}

const BOT_RESPONSES: Record<string, string> = {
  hola: "¡Hola! 👋 Soy el asistente virtual de MICLICKAWEB. Estoy aquí para ayudarte con cualquier pregunta sobre nuestros servicios de diseño web. ¿En qué puedo ayudarte?",
  precio: "Nuestros precios son muy competitivos:\n\n💻 **Landing Page:** 150€ - 400€ (entrega en 3-5 días)\n🏢 **Web Corporativa:** 500€ - 1.200€ (entrega en 7-10 días)\n🛒 **E-commerce:** 1.000€ - 3.000€+ (entrega en 15-20 días)\n\n¿Te interesa alguno de estos servicios?",
  presupuesto: "Para recibir un presupuesto personalizado sin compromiso, puedes:\n\n📧 Escribirnos a **miclickaweb@gmail.com**\n📝 Rellenar el formulario de contacto en nuestra web\n\nNos pondremos en contacto contigo en menos de 24 horas. ¿Qué tipo de web necesitas?",
  tiempo: "Los tiempos de entrega dependen del tipo de proyecto:\n\n⚡ Landing Page: **3-5 días**\n📅 Web Corporativa: **7-10 días**\n🗓️ E-commerce: **15-20 días**\n\nTodos los plazos son desde la confirmación del proyecto y el pago inicial.",
  contacto: "Puedes contactarnos de varias formas:\n\n📧 **Email:** miclickaweb@gmail.com\n📝 **Formulario:** Sección de contacto en esta web\n\n¡Respondemos en menos de 24 horas!",
  portafolio: "Hemos creado webs para sectores muy variados:\n\n🌿 **CaminoWeb** - Servicios profesionales\n📋 **TramiteClaro** - Gestión administrativa\n💐 **La Florista** - Negocio local\n🔮 **Reina Tarot** - Servicios especializados\n🧵 **Entre Hilos** - E-commerce\n\nPuedes ver todos los proyectos en la sección Portafolio.",
  garantia: "Sí, ofrecemos garantías en todos nuestros proyectos:\n\n✅ Revisiones incluidas hasta tu satisfacción\n✅ Soporte técnico post-entrega\n✅ Web 100% responsive (móvil, tablet, ordenador)\n✅ Optimización SEO básica incluida\n\n¿Tienes alguna pregunta más?",
  pago: "Trabajamos con un sistema de pago seguro:\n\n💳 **50%** al inicio del proyecto\n💳 **50%** al finalizar y aprobar el resultado\n\nAceptamos transferencia bancaria y otros métodos. ¿Necesitas más información?",
  default: "Gracias por tu mensaje. Para darte la mejor atención posible, te recomiendo contactarnos directamente:\n\n📧 **miclickaweb@gmail.com**\n\nO puedes preguntarme sobre: precios, tiempos, portafolio, garantías, formas de pago o cómo contactarnos.",
};

function getResponse(message: string): string {
  const lower = message.toLowerCase();
  if (lower.includes("hola") || lower.includes("buenos") || lower.includes("buenas") || lower.includes("hey")) return BOT_RESPONSES.hola;
  if (lower.includes("precio") || lower.includes("cuánto") || lower.includes("cuanto") || lower.includes("coste") || lower.includes("costo") || lower.includes("tarifa")) return BOT_RESPONSES.precio;
  if (lower.includes("presupuesto")) return BOT_RESPONSES.presupuesto;
  if (lower.includes("tiempo") || lower.includes("plazo") || lower.includes("días") || lower.includes("dias") || lower.includes("entrega") || lower.includes("cuándo") || lower.includes("cuando")) return BOT_RESPONSES.tiempo;
  if (lower.includes("contacto") || lower.includes("contactar") || lower.includes("email") || lower.includes("correo") || lower.includes("teléfono") || lower.includes("telefono")) return BOT_RESPONSES.contacto;
  if (lower.includes("portafolio") || lower.includes("portfolio") || lower.includes("trabajo") || lower.includes("ejemplo") || lower.includes("proyecto")) return BOT_RESPONSES.portafolio;
  if (lower.includes("garantía") || lower.includes("garantia") || lower.includes("revisión") || lower.includes("revision") || lower.includes("soporte")) return BOT_RESPONSES.garantia;
  if (lower.includes("pago") || lower.includes("pagar") || lower.includes("transferencia") || lower.includes("factura")) return BOT_RESPONSES.pago;
  return BOT_RESPONSES.default;
}

function formatTime() {
  return new Date().toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" });
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "¡Hola! 👋 Soy el asistente de MICLICKAWEB. Puedo ayudarte con información sobre precios, tiempos de entrega, portafolio y más. ¿En qué puedo ayudarte?",
      sender: "bot",
      time: formatTime(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg: Message = {
      id: Date.now(),
      text: input,
      sender: "user",
      time: formatTime(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const botMsg: Message = {
        id: Date.now() + 1,
        text: getResponse(input),
        sender: "bot",
        time: formatTime(),
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1000 + Math.random() * 500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const quickQuestions = ["¿Cuáles son los precios?", "¿Cuánto tarda?", "Ver portafolio", "¿Cómo contactar?"];

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-200 group"
          aria-label="Abrir chat de atención"
        >
          <MessageCircle className="w-7 h-7 text-white" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full border-2 border-white animate-pulse" />
          <div className="absolute right-16 bg-foreground text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
            ¿Tienes alguna duda?
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className={`fixed bottom-6 right-6 z-50 w-80 md:w-96 bg-white rounded-2xl shadow-2xl border border-border flex flex-col overflow-hidden transition-all duration-300 ${isMinimized ? "h-14" : "h-[500px]"}`}>
          {/* Header */}
          <div className="bg-primary px-4 py-3 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Asistente MICLICKAWEB</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <p className="text-white/80 text-xs">En línea ahora</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => setIsMinimized(!isMinimized)} className="text-white/70 hover:text-white transition-colors">
                <Minimize2 className="w-4 h-4" />
              </button>
              <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex items-end gap-2 ${msg.sender === "user" ? "flex-row-reverse" : "flex-row"}`}>
                    {msg.sender === "bot" && (
                      <div className="w-7 h-7 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                    )}
                    {msg.sender === "user" && (
                      <div className="w-7 h-7 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="w-4 h-4 text-accent-foreground" />
                      </div>
                    )}
                    <div className={`max-w-[75%] ${msg.sender === "user" ? "items-end" : "items-start"} flex flex-col gap-1`}>
                      <div className={`px-3 py-2 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                        msg.sender === "user"
                          ? "bg-primary text-white rounded-br-sm"
                          : "bg-white text-foreground rounded-bl-sm shadow-sm border border-border"
                      }`}>
                        {msg.text}
                      </div>
                      <span className="text-xs text-muted-foreground px-1">{msg.time}</span>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex items-end gap-2">
                    <div className="w-7 h-7 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-sm shadow-sm border border-border">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                        <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                        <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Questions */}
              <div className="px-3 py-2 bg-white border-t border-border flex gap-2 overflow-x-auto flex-shrink-0">
                {quickQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => {
                      setInput(q);
                      setTimeout(() => {
                        const userMsg: Message = { id: Date.now(), text: q, sender: "user", time: formatTime() };
                        setMessages((prev) => [...prev, userMsg]);
                        setInput("");
                        setIsTyping(true);
                        setTimeout(() => {
                          const botMsg: Message = { id: Date.now() + 1, text: getResponse(q), sender: "bot", time: formatTime() };
                          setMessages((prev) => [...prev, botMsg]);
                          setIsTyping(false);
                        }, 1000);
                      }, 0);
                    }}
                    className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full whitespace-nowrap hover:bg-primary/20 transition-colors flex-shrink-0 font-medium"
                  >
                    {q}
                  </button>
                ))}
              </div>

              {/* Input */}
              <div className="p-3 bg-white border-t border-border flex gap-2 flex-shrink-0">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Escribe tu pregunta..."
                  className="flex-1 px-3 py-2 text-sm border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30 bg-gray-50"
                />
                <Button
                  onClick={sendMessage}
                  disabled={!input.trim()}
                  size="sm"
                  className="bg-primary hover:opacity-90 text-white rounded-xl px-3"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
