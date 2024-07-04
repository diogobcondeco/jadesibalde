import { AboutProps, AtuacaoProps, DiferenciaisProps, SocialNetworksProps } from "./types";

export const atuacaoInfo: AtuacaoProps[] = [
  {
    logo: "/images/direito_sucessorio.png",
    title: "Direito Sucessório"
  },
  {
    logo: "/images/contratos.png",
    title: "Contratos"
  },
  {
    logo: "/images/direito_eleitoral.png",
    title: "Direito Eleitoral"
  },
  {
    logo: "/images/direito_digital.png",
    title: "Direito Digital"
  },
  {
    logo: "/images/propriedade_intelectual.png",
    title: "Propriedade Intelectual"
  },
  {
    logo: "/images/direito_familia_internacional.png",
    title: "Direito de Família Internacional"
  },
  {
    logo: "/images/curatela.png",
    title: "Curatela (Interdição)"
  },
  {
    logo: "/images/compliance.png",
    title: "Compliance e Governança"
  },
]

export const diferenciaisInfo: DiferenciaisProps[] = [
    {
      logo: "/images/atuacao_brasil_exterior.png",
      title: "Atuação em Todo o Brasil e Exterior",
      description: "Ofereço serviços jurídicos em todo o território nacional, com atendimentos on-line para sua conveniência. Para clientes no exterior, disponibilizo atendimento especializado em questões de família e migração."
    },
    {
      logo: "/images/alta_especializacao.png",
      title: "Alta Especialização",
      description: "Formação diferenciada para oferecer as melhores soluções para seu caso."
    },
    {
      logo: "/images/abordagem_humanizada.png",
      title: "Abordagem Humanizada",
      description: "Cada pessoa é única, assim como seu processo! Minhas soluções jurídicas são personalizadas para atender às suas necessidades específicas."
    },
    {
      logo: "/images/atualizacoes_periodicas.png",
      title: "Atualizações Periódicas",
      description: "Saiba sobre seu caso! Mensalmente dou retorno aos meus clientes sobre seus casos através de um relatório simplificado de acompanhamento."
    },
    {
      logo: "/images/acesso_facil_comunicacao_clara.png",
      title: "Acesso Fácil e Comunicação Clara",
      description: "Acredito na importância de uma comunicação clara e acessível, estando sempre disponível para esclarecer dúvidas e te manter bem informado(a)."
    },
];

export const aboutInfo: AboutProps = {
  title: "Sobre A Advogada",
  description: [
    "Eu acredito que cada caso é único, carregando consigo uma história distinta e um contexto especial. Para mim, um caso é muito mais do que um número; é uma oportunidade de fazer a diferença na vida das pessoas.",
    "Acredito firmemente que a combinação de preparo científico e a aplicação prática é essencial para oferecer uma advocacia de excelência. Minha formação me permite abordar os casos com uma perspectiva aprofundada e técnica, enquanto minha experiência prática me ensina a adaptar essas teorias à realidade de cada cliente.",
    "Meu compromisso é com a excelência e a integridade, priorizando sempre que possível a via extrajudicial.  Se você procura uma advogada que compreenda a singularidade do seu caso e esteja comprometida com a defesa dos seus interesses com rigor e dedicação, estou aqui para ajudá-lo. Juntos, podemos transformar desafios legais em oportunidades de sucesso."
  ],
  imageUrl: "/jade2.jpg",
  additionalText: "Bacharel em Direito pela Universidade Federal da Bahia, pós-graduada em Compliance e Integridade Corporativa pela Pontifícia Universidade Católica de Minas Gerais, Pós-Graduada em Direito Intelectual pela Associação Portuguesa de Direito Intelectual. Em 2022, iniciei o mestrado em Direito Intelectual pela Universidade de Lisboa e atualmente sou doutoranda em Ciências Jurídico-Políticas pela mesma instituição."
} 

export const socialNetworksInfo: SocialNetworksProps[] = [
  {
    icon: "mdi:youtube",
    linkUrl: "https://www.youtube.com/@direitoporjade"
  },
  {
    icon: "mdi:linkedin",
    linkUrl: "https://www.linkedin.com/in/jade-sibalde-9866b422a"
  }
];
