import { motion } from "framer-motion";
import { MapPin, ExternalLink, Clock } from "lucide-react";

// trigger deploy

const WA_LINK =
  "https://wa.me/5561991364565?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20visita.";

const MAPS_LINK =
  "https://maps.google.com/?cid=9244899979831223762&hl=pt-BR&gl=BR&source=embed";

export default function Location() {
  return (
    <section id="localizacao" className="py-20 sm:py-28 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">
            Onde estamos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Localização
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground text-lg">
            Localização estratégica na Asa Norte, com fácil acesso para empresas e colaboradores
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden border border-border shadow-lg"
          >
            <iframe
              title="Localização AM Clínica"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.9!2d-47.88!3d-15.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3a515d3aed69%3A0x804c7b8cd1db25d2!2sAM%20Medicina%20do%20Trabalho!5e0!3m2!1spt-BR!2sbr!4v1"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="rounded-2xl bg-surface-elevated border border-border p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground flex-shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">AM Medicina do Trabalho</h3>
                  <p className="text-muted-foreground text-sm">
                    SEPN CRN 504 Ed Virgo, Bloco B - Asa Norte, Brasília - DF, 70836-100
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6 pt-6 border-t border-border">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground flex-shrink-0">
                  <Clock className="h-6 w-6" />
                </div>
                {/* Horario adicionado */}
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">Horário de funcionamento</h3>
                  <h4 className="text-base font-semibold text-foreground mt-3 mb-1">Medicina do Trabalho</h4>
                  <ul className="text-muted-foreground text-sm space-y-1 list-disc pl-4">
                    <li>Segunda, quarta e sexta: 08h00 às 12h00</li>
                    <li>Terça e quinta: 14h00 às 17h45</li>
                  </ul>
                  <h4 className="text-base font-semibold text-foreground mt-4 mb-1">Exames Toxicológicos para CNH</h4>
                  <ul className="text-muted-foreground text-sm space-y-1 list-disc pl-4">
                    <li>Segunda a sexta: 08h00 às 12h00 e 14h00 às 17h45</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-all hover:scale-105"
                >
                  Agendar visita
                </a>
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-muted"
                >
                  <ExternalLink className="h-4 w-4" />
                  Abrir no Maps
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
