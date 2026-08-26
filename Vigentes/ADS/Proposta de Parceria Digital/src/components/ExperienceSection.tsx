import { ArrowRight } from 'lucide-react';

export default function ExperienceSection() {
  return (
    <section className="py-20 bg-slate-50" aria-label="Experiência Comprovada">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-900 text-center">
          Confie em quem tem Experiência Comprovada
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200 text-center">
            <a
              href="https://skillshop.credential.net/4cb63ddf-a7ed-41a6-8bdd-9024115ae0f1#acc.Amzc3rE7"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="mb-6">
                <img
                  src="https://iili.io/KgqxZqg.png"
                  alt="Certificação oficial Google Ads da equipe Veacci"
                  loading="lazy"
                  width="384"
                  height="384"
                  className="w-full max-w-sm mx-auto rounded-lg shadow-md group-hover:shadow-xl transition-shadow cursor-pointer"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                Certificados pelo Google
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Nossa equipe possui as certificações oficiais do Google, garantindo as melhores práticas em suas
                campanhas.
              </p>
              <span className="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                Verificar Certificação
                <ArrowRight className="w-4 h-4" />
              </span>
            </a>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200 text-center">
            <div className="mb-6">
              <img
                src="https://iili.io/KgqM7xn.png"
                alt="Comprovação de investimento de R$ 5.6 milhões em Google Ads desde 2020"
                loading="lazy"
                width="384"
                height="384"
                className="w-full max-w-sm mx-auto rounded-lg shadow-md cursor-pointer hover:shadow-xl transition-shadow"
              />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">+R$ 5.6 Milhões Gerenciados</h3>
            <p className="text-slate-600 leading-relaxed">
              Gerenciamos uma conta administradora (MCC) com mais de 5.6 milhões de reais investidos em Google Ads desde
              2020. Experiência comprovada para otimizar seu orçamento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
