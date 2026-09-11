import type {
  AboutProps,
  AtuacaoProps,
  DiferenciaisProps,
  ServicesListProps,
  SocialNetworksProps,
  UrlsProps,
} from "./types";

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
  title: "Sobre a Advogada",
  description: [
    "Eu acredito que cada caso é único, carregando consigo uma história distinta e um contexto especial. Para mim, um caso é muito mais do que um número; é uma oportunidade de fazer a diferença na vida das pessoas.",
    "Acredito firmemente que a combinação de preparo científico e a aplicação prática é essencial para oferecer uma advocacia de excelência. Minha formação me permite abordar os casos com uma perspectiva aprofundada e técnica, enquanto minha experiência prática me ensina a adaptar essas teorias à realidade de cada cliente.",
    "Meu compromisso é com a excelência e a integridade, priorizando sempre que possível a via extrajudicial.  Se você procura uma advogada que compreenda a singularidade do seu caso e esteja comprometida com a defesa dos seus interesses com rigor e dedicação, estou aqui para ajudá-lo. Juntos, podemos transformar desafios legais em oportunidades de sucesso."
  ],
  imageUrl: "/jade_about.jpg",
  additionalText: "Bacharel em Direito pela Universidade Federal da Bahia, pós-graduada em Compliance e Integridade Corporativa pela Pontifícia Universidade Católica de Minas Gerais, Pós-Graduada em Direito Intelectual pela Associação Portuguesa de Direito Intelectual. Em 2022, iniciei o mestrado em Direito Intelectual pela Universidade de Lisboa e atualmente sou doutoranda em Ciências Jurídico-Políticas pela mesma instituição."
}

export const socialNetworksInfo: SocialNetworksProps[] = [
  {
    icon: "ph:globe",
    label: "Site Direito por Jade",
    linkUrl: "https://direitoporjade.com/",
  },
  {
    icon: "mdi:youtube",
    label: "YouTube",
    linkUrl: "https://www.youtube.com/@direitoporjade",
  },
  {
    icon: "mdi:instagram",
    label: "Instagram",
    linkUrl: "https://www.instagram.com/jadesibalde.adv/",
  },
  {
    icon: "mdi:linkedin",
    label: "LinkedIn",
    linkUrl: "https://www.linkedin.com/in/jade-sibalde-9866b422a",
  },
];

export const urls: UrlsProps = {
  whatsapp: "https://api.whatsapp.com/send?phone=351911749476"
}

export const servicesList: ServicesListProps[] = [
  {
    title: "Sucessão e Família (Brasil e Exterior)",
    list: ["Inventário e Arrolamento de Bens", "Testamento", "Testamento Vital", "Curatela (Interdição)", "Reconhecimento e Dissolução de União Estável", "Pacto Antenupcial, Contrato de União Estável e Contrato de Namoro", "Divórcio", "Ação de Guarda"]
  },
  {
    title: "Contratos",
    list: ["Contratos"]
  },
  {
    title: "Direito Digital",
    list: ["Responsabilidade Civil e Penal na Internet", "Proteção do Direito à Imagem", "Elaboração e Revisão de Política de Proteção de Dados"]
  },
  {
    title: "Ações Constitucionais",
    list: ["Mandado de Segurança", "Mandado de Injunção", "Ação Direta de Inconstitucionalidade", "Ação Declaratória de Constitucionalidade", "Arguição de Descumprimento de Preceito Fundamental", "Ação Popular"]
  },
  {
    title: "Direito Eleitoral",
    list: ["Consulta Eleitoral", "Ação de Impugnação de Mandato Eletivo - AIME", "Ação de Investigação Judicial Eleitoral - AIJE", "Planejamento de Campanha Eleitoral", "Assessoria em Período Eleição"]
  },
  {
    title: "Compliance e Governança",
    list: ["Implementação, Revisão e Monitorização de Programas de Compliance", "Diagnóstico e Análise de Riscos Jurídicos", "Elaboração e Implementação de Políticas Internas"]
  },
  {
    title: "Propriedade Intelectual",
    list: ["Registro de Marca", "Análise de Viabilidade e Registro de Patente", "Registro de Desenho Industrial", "Registro de Música", "Registro de Livro", "Elaboração de Pareceres em Matéria Intelectual", "Contratos de Cessão e Licenciamento de Direitos Intelectuais"]
  },
  {
    title: "Cidadania Internacional",
    list: ["Assessoria de Migração para Portugal (Solicitação de Visto)", "Solicitação de Cidadania Portuguesa e Italiana para Brasileiros", "Assessoria de Migração para o Brasil (Solicitação de Visto)", "Solicitação de Cidadania Brasileira para Estrangeiros"]
  }
]
