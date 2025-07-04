const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado")

const perguntas = [
    {
        enunciado: "Em um futuro próximo, a inteligência artificial se tornou onipresente. Ao acordar, seu assistente de IA te informa sobre as notícias do dia e sua agenda. Qual é a sua reação?",
        alternativas: [
            {
                texto: "Que ótimo! Mal posso esperar para ver como a IA vai simplificar ainda mais minha vida.",
                afirmacao: "Com o tempo, você se adaptou completamente à conveniência da IA, integrando-a em todas as áreas do seu cotidiano."
            },
            {
                texto: "Me sinto um pouco desconfortável com tanta dependência da tecnologia.",
                afirmacao: "Você passou a questionar os limites da autonomia humana em um mundo cada vez mais mediado por algoritmos."
            }
        ]
    },
    {
        enunciado: "Sua escola implementou um novo sistema de aprendizado adaptativo, onde a IA personaliza o conteúdo e o ritmo das aulas para cada aluno. Como você se sente sobre isso?",
        alternativas: [
            {
                texto: "Isso é incrível! Finalmente um ensino que se adapta às minhas necessidades.",
                afirmacao: "Seu desempenho acadêmico disparou, e você se tornou um entusiasta do ensino personalizado por IA."
            },
            {
                texto: "Tenho receio de que isso diminua a interação humana e a criatividade.",
                afirmacao: "Você buscou ativamente atividades que promoviam a colaboração e o pensamento crítico, valorizando as conexões humanas."
            }
        ]
    },
    {
        enunciado: "No trabalho, um colega sugere usar uma IA avançada para automatizar uma tarefa complexa que levaria dias para ser concluída manualmente. Qual sua postura?",
        alternativas: [
            {
                texto: "Excelente ideia! Vamos otimizar nosso tempo e focar em tarefas mais estratégicas.",
                afirmacao: "A eficiência no seu trabalho aumentou drasticamente, e você se tornou um defensor da automação inteligente."
            },
            {
                texto: "Prefiro fazer manualmente para garantir a precisão e entender cada etapa do processo.",
                afirmacao: "Você se dedicou a aprimorar suas próprias habilidades, buscando um diferencial humano em um cenário cada vez mais automatizado."
            }
        ]
    },
    {
        enunciado: "Um novo aplicativo de realidade aumentada permite que você interaja com personagens históricos em sua casa. Você decide experimentar. O que mais te impressiona?",
        alternativas: [
            {
                texto: "A riqueza de detalhes e o realismo da interação me fazem sentir que estou realmente viajando no tempo.",
                afirmacao: "Sua paixão por história se aprofundou, e você usou a realidade aumentada para explorar diferentes épocas e culturas."
            },
            {
                texto: "A forma como a IA consegue simular a personalidade e o conhecimento dos personagens é fascinante.",
                afirmacao: "Você começou a estudar a ética e os limites da criação de inteligências artificiais com consciência e personalidade."
            }
        ]
    },
    {
        enunciado: "Você está em um encontro social e a conversa se volta para o futuro da sociedade com a IA. Como você contribui para o debate?",
        alternativas: [
            {
                texto: "Acredito que a IA trará uma era de prosperidade sem precedentes, resolvendo muitos dos problemas atuais da humanidade.",
                afirmacao: "Você se tornou um otimista quanto ao futuro, compartilhando sua visão de um mundo impulsionado pela inovação e tecnologia."
            },
            {
                texto: "É crucial que desenvolvamos a IA com responsabilidade, garantindo que ela sirva à humanidade e não o contrário.",
                afirmacao: "Você se envolveu em discussões sobre regulamentação e ética da IA, defendendo um futuro mais justo e seguro para todos."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
