import React from 'react'
import { Heart, Shield, Clock, Star, Battery, Smartphone, MessageCircle, Check, Zap, Lock, Phone, Users, Award, Mail, Download, Calendar, MapPin } from 'lucide-react'

function App() {
  return (
    <div className="font-inter bg-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white border-b border-border py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-2">
              <Heart className="w-4 h-4 text-white" />
            </div>
            <span className="font-extrabold text-2xl text-text-primary">PawTrace</span>
          </div>
          <a 
            href="https://wa.me/+447428480059?text=Ol%C3%A1!%20Tenho%20uma%20d%C3%BAvida%20sobre%20o%20PawTrace" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-whatsapp text-white px-4 py-2 rounded-full font-semibold text-sm hover:bg-green-600 transition-colors"
          >
            Tirar dúvida no WhatsApp
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#0a4f5c] via-primary to-[#13a4b8] relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <div className="bg-white/10 backdrop-blur-sm inline-flex items-center px-4 py-1.5 rounded-full mb-6">
                <Shield className="w-4 extreme-4 text-white mr-2" />
                <span className="text-white text-sm font-semibold">PROTEÇÃO 24H PARA SEU PET</span>
              </div>
              
              <h1 className="text-white font-black text-4xl md:text-5xl lg:text-[58px] leading-tight mb-6">
                Seu pet escapa.
                <br />
                Alguém encontra.
                <br />
                Você recebe no WhatsApp em segundos.
              </h1>
              
              <p className="text-white/70 text-lg max-w-[520px] mb-8">
                Uma plaquinha com QR Code que conecta quem encontrou seu pet direto com você — sem app, sem bateria, sem complicação.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <Check className="text-secondary mr-3 w-5 h-5" />
                  <span className="text-white">Sem bateria — funciona para sempre</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-secondary mr-3 w-5 h-5" />
                  <span className="text-white">Qualquer celular consegue escanear</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-secondary mr-3 w-5 h-5" />
                  <span className="text-white">Contato direto no WhatsApp em segundos</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <a 
                  href="https://buy.stripe.com/test_00ge4aFz2TQ2es144" 
                  className="bg-secondary hover:bg-amber-600 text-white font-bold py-4 px-8 rounded-full text-center text-lg transition-colors shadow-cta animate-pulse-slow"
                >
                  Proteger meu pet agora →
                </a>
                <a 
                  href="https://wa.me/+447428480059?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20o%20PawTrace" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-whatsapp hover:bg-green-600 text-white font-semibold py-3.5 px-7 rounded-full text-center text-base transition-colors"
                >
                  Tirar dúvida no WhatsApp
                </a>
              </div>
              
              <p className="text-white/80 text-sm">
                🛡️ Perfil gratuito para sempre · Seu número fica privado
              </p>
            </div>
            
            <div className="lg:w-1/2 lg:pl-12 relative">
              <div className="absolute -z-10 -inset-16 bg-secondary/30 blur-3xl rounded-full"></div>
              <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-12 h-12 text-primary" />
                  </div>
                  <p className="text-white font-semibold">QR Code PawTrace</p>
                  <p className="text-white/70 text-sm">Scan me to contact owner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="bg-background-alt py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="text-primary font-black text-3xl mb-1">1.247</div>
              <div className="text-text-muted">🐾 Pets protegidos</div>
            </div>
            
            <div className="hidden md:block h-12 w-px bg-border"></div>
            
            <div className="text-center">
              <div className="text-text-primary font-black text-3xl mb-1">&lt; 3 min</div>
              <div className="text-text-muted">⚡ Tempo médio de resposta</div>
            </div>
            
            <div className="hidden md:block h-12 w-px bg-border"></div>
            
            <div className="text-center">
              <div className="text-text-primary font-black text-3xl mb-1">4.9 / 5</div>
              <div className="text-text-muted">⭐ Avaliação dos tutores</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-primary font-semibold mb-3">A dor que nenhum tutor quer sentir</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary mb-6">Em segundos, tudo pode mudar.</h2>
            <p className="text-text-muted">
              Um portão aberto. Um susto com fogos de artifício. Uma coleira que escapou.
              E começa o desespero: cartazes pelo bairro, posts no Instagram, noites sem dormir.
              1 em cada 3 tutores brasileiros já perdeu um pet. A maioria nunca voltou para casa.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-card border border-border shadow-soft text-center">
              <div className="text-3xl mb-4">📵</div>
              <h3 className="font-bold text-lg mb-3">Sem contato visível</h3>
              <p className="text-text-muted">Quem encontra seu pet não tem como te avisar rapidamente.</p>
            </div>
            
            <div className="bg-white p-6 rounded-card border border-border shadow-soft text-center">
              <div className="text-3xl mb-4">🔤</div>
              <h3 className="font-bold text-lg mb-3">Plaquinha ilegível</h3>
              <p className="text-text-muted">Plaquinhas gravadas desbotam e ficam impossíveis de ler.</p>
            </div>
            
            <div className="bg-white p-6 rounded-card border border-border shadow-soft text-center">
              <div className="text-3xl mb-4">⏱️</div>
              <h3 className="font-bold text-lg mb-3">Tempo é tudo</h3>
              <p className="text-text-muted">Cada minuto longe de casa aumenta o risco de perder seu pet para sempre.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0a4f5c] via-primary to-[#13a4b8]">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <div className="text-5xl mb-6">🐾</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
            Ele conta com você.
            <br />
            Proteja agora.
          </h2>
          <p className="text-white/90 text-lg mb-10">
            Em menos de 2 minutos, seu pet tem um perfil digital completo e uma proteção que funciona para sempre.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a 
              href="https://buy.stripe.com/test_00g3e4aFz2TQ2es144" 
              className="bg-secondary hover:bg-amber-600 text-white font-bold py-4 px-8 rounded-full text-center transition-colors shadow-cta animate-pulse-slow"
            >
              Proteger meu pet agora →
            </a>
            <a 
              href="https://wa.me/+447428480059?text=Ol%C3%A1!%20Quero%20proteger%20meu%20pet%20com%20o%20PawTrace" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-whatsapp hover:bg-green-600 text-white font-semibold py-3.5 px-7 rounded-full text-center transition-colors"
            >
              Falar no WhatsApp
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 text-white/80 text-sm">
            <span>🔒 Pagamento seguro</span>
            <span>💧 QR resistente</span>
            <span>🛡️ 7 dias de garantia</span>
            <span>⚡ Email em 60 seg</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-text-primary py-12 text-white">
        <div className="container mx-auto px-4 text-center">
          <p>© 2026 PawTrace · Feito com ❤️ em São Paulo 🐾</p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/+447428480059?text=Ol%C3%A1!%20Tenho%20uma%20d%C3%BAvida%20sobre%20o%20PawTrace" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-whatsapp text-white p-4 rounded-full shadow-lg hover:scale-105 transition-transform flex items-center gap-2 animate-pulse-slow"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="hidden sm:block">Tirar dúvida</span>
      </a>
    </div>
  )
}

export default App


