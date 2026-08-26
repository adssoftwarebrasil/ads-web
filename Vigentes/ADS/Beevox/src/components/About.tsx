export default function About() {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Seção História da BEEVOX */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-6">
            <div className="inline-block bg-[rgb(246,182,31)] text-black font-bold px-6 py-2 rounded-full text-xl sm:text-2xl uppercase tracking-wide">
              HISTÓRIA DA BEEVOX
            </div>
            
            <div className="space-y-4 text-gray-700 text-base leading-relaxed text-justify font-medium">
              <p>
                A empresa BEEVOX nasceu como fruto de um sonho e define o início de uma nova era na vida profissional e nos negócios da família de Odil Benedito dos Santos, protético auditivo, e de Débora Lapinski, fonoaudióloga.
              </p>
              <p>
                Em 1998, Odil foi convidado por familiares, donos de um centro auditivo, voltado para vendas de aparelhos auditivos, para ajudá-los no projeto de montar um laboratório para assistência técnica. Desafio aceito, após deixar o emprego de vendedor, no setor de vestuário. Anos depois, passa a ser sócio nesta empresa.
              </p>
              <p>
                Foram muitos anos de dedicação e estudos buscando o aprendizado de técnicas e conhecimentos no universo da saúde auditiva, complementados com a formação universitária em Administração de Empresas.
              </p>
              <p className="font-bold">
                Durante todo esse tempo, Odil foi alimentando o desejo de ter sua própria empresa, apoiado na certeza de que o ato de cuidar de pessoas, disponibilizando atenção e soluções para que elas pudessem melhorar a audição, o fazia feliz e realizado.
              </p>
              <p>
                Com 28 anos de experiência no ramo, a materialização do sonho se deu em fevereiro de 2023, após a esposa Débora Lapinski concluir o curso de Fonoaudiologia. O casal adquiriu a empresa Audiocare, a transformou em BEEVOX, a nova marca, com novas cores, novos e grandes propósitos de realizações. O histórico da empresa e a jornada percorrida se mantêm preservados como combustível sustentável para o presente e para o futuro.
              </p>
              <p className="font-bold">
                E a missão da BEEVOX é proporcionar soluções para os problemas auditivos das pessoas.
                <br />
                Mais do que uma crença, a BEEVOX é compromisso e realização pessoal, um ideal que se materializa como propósito de vida.
              </p>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=beevox%2Falteracoes%2Fabout.png&version_id=null"
              alt="Fachada da BEEVOX"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Seção Origem da Marca */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
           <div className="space-y-6">
            <div className="inline-block bg-[rgb(246,182,31)] text-black font-bold px-6 py-2 rounded-full text-xl sm:text-2xl uppercase tracking-wide">
              HISTÓRIA DA MARCA
            </div>
            
             <div className="space-y-4 text-gray-700 text-base leading-relaxed text-justify font-medium">
               <p className="font-bold">
                 Novos tempos, novos desafios exigem inovação.
               </p>
               <p className="font-bold">
                 A marca BEEVOX reúne muitos significados e expectativas. Sob o aspecto conceitual, foi idealizada de forma composta: Bee (palavra da língua inglesa que significa abelha), Vox (do latim, que significa voz, som).
               </p>
               <p className="font-bold">
                 A palavra bee (abelha) está associada a significados universais: trabalho, dedicação, reunião de pessoas para tarefas coletivas.
                 <br />
                 E são as abelhas que produzem o mel. Na definição encontrada na Bíblia, representa "o alimento, a fartura, a riqueza e a produtividade da terra de Canaã, o território que Deus prometeu a Israel". Também chamado de sangue das flores, o mel simboliza o amor, a doçura e a tranquilidade.
               </p>
               <p className="font-bold">
                 Na biologia, as abelhas são as responsáveis por polinizar as plantas. Ao voar de flor em flor, para coletar o pólen, acaba por fecundar a flora e, assim, reproduz o ciclo da fertilização. Sem elas, portanto, o mundo viveria a escassez de alimentos.
               </p>
               <p className="font-bold">
                 E, por fim, é homenagem à fonoaudióloga e sócio-proprietária, responsável pelo atendimento fonoaudiológico na BEEVOX: Débora, em hebraico, significa abelha.
               </p>
             </div>
           </div>

           <div className="flex items-center justify-center h-full">
              <div className="relative p-6 bg-gray-100 rounded-xl max-w-sm mx-auto shadow-lg">
                <div className="absolute inset-0 bg-[rgb(246,182,31)] transform translate-x-4 translate-y-4 rounded-xl -z-10"></div>
                {/* ATENÇÃO: Substitua este link pela imagem correta do logotipo e mãos */}
                <img
                  src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=beevox%2Falteracoes%2Fbevox2_1-removebg-preview.png&version_id=null"
                  alt="Significado da marca BEEVOX"
                  className="w-full h-auto object-cover rounded shadow"
                />
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}