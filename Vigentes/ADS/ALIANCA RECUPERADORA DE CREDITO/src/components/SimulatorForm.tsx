import { useState } from 'react';
import type { FormEvent } from 'react';

const estados = [
  'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA',
  'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO',
];

const bancos = [
  'Banco do Brasil',
  'Bradesco',
  'Caixa Econômica',
  'Itaú',
  'Santander',
  'Nubank',
  'C6 Bank',
  'BV Financeira',
  'Banco Pan',
  'Outros',
];

export default function SimulatorForm() {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    whatsapp: '',
    estado: '',
    banco: '',
    veiculo: '',
    parcelas: '',
    valor: '',
    urgencia: 'Contato imediato',
  });

  const change =
    (campo: keyof typeof form) => (e: { target: { value: string } }) =>
      setForm({ ...form, [campo]: e.target.value });

  const enviar = (e: FormEvent) => {
    e.preventDefault();
    const texto = `Olá, gostaria de fazer uma simulação de redução do meu financiamento.

Dados informados:
Nome: ${form.nome}
E-mail: ${form.email}
WhatsApp: ${form.whatsapp}
Estado: ${form.estado}
Banco: ${form.banco}
Tipo de veículo: ${form.veiculo}
Quantidade de parcelas: ${form.parcelas}
Valor da parcela: ${form.valor}
Nível de urgência: ${form.urgencia}`;
    window.location.href = `https://wa.me/08005552569?text=${encodeURIComponent(texto)}`;
  };

  return (
    <section className="form-section" id="simulador">
      <div className="form-container">
        <div className="section-label">Simulador Gratuito</div>
        <h2 className="section-title">Simule agora mesmo</h2>
        <p className="section-sub">
          Preencha o formulário e receba em até 24h uma análise completa do seu contrato.
        </p>
        <div className="form-card">
          <form onSubmit={enviar}>
            <div className="form-grid">
              <div className="form-group full">
                <label className="form-label">
                  Nome completo <span>*</span>
                </label>
                <input
                  className="form-input"
                  placeholder="Seu nome"
                  value={form.nome}
                  onChange={change('nome')}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">
                  E-mail <span>*</span>
                </label>
                <input
                  className="form-input"
                  type="email"
                  placeholder="seu@email.com"
                  value={form.email}
                  onChange={change('email')}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">
                  WhatsApp <span>*</span>
                </label>
                <input
                  className="form-input"
                  placeholder="(00) 00000-0000"
                  value={form.whatsapp}
                  onChange={change('whatsapp')}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">
                  Estado <span>*</span>
                </label>
                <div className="select-wrap">
                  <select className="form-select" value={form.estado} onChange={change('estado')} required>
                    <option value="">Selecione seu Estado</option>
                    {estados.map((uf) => (
                      <option key={uf}>{uf}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">
                  Banco <span>*</span>
                </label>
                <div className="select-wrap">
                  <select className="form-select" value={form.banco} onChange={change('banco')} required>
                    <option value="">Selecione o banco</option>
                    {bancos.map((b) => (
                      <option key={b}>{b}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">
                  Tipo de veículo <span>*</span>
                </label>
                <div className="select-wrap">
                  <select className="form-select" value={form.veiculo} onChange={change('veiculo')} required>
                    <option value="">Selecione</option>
                    <option>Carro</option>
                    <option>Moto</option>
                    <option>Caminhonete</option>
                    <option>Caminhão</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">
                  Qtd. de parcelas <span>*</span>
                </label>
                <input
                  className="form-input"
                  type="number"
                  placeholder="Ex: 48"
                  value={form.parcelas}
                  onChange={change('parcelas')}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">
                  Valor da parcela <span>*</span>
                </label>
                <input
                  className="form-input"
                  placeholder="R$ 0,00"
                  value={form.valor}
                  onChange={change('valor')}
                  required
                />
              </div>
              <div className="form-group full">
                <label className="form-label">
                  Nível de urgência <span>*</span>
                </label>
                <div className="select-wrap">
                  <select className="form-select" value={form.urgencia} onChange={change('urgencia')}>
                    <option>Contato imediato</option>
                    <option>Em até 48h</option>
                    <option>Esta semana</option>
                    <option>Apenas consulta</option>
                  </select>
                </div>
              </div>
            </div>
            <button type="submit" className="form-submit">
              SIMULAR GRATUITAMENTE
            </button>
            <p className="form-privacy">🔒 Seus dados estão protegidos. Não compartilhamos com terceiros.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
