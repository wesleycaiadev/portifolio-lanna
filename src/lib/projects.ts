export interface InstagramItem {
  label: string;
  url: string;
}

export interface Project {
  slug: string;
  titlePt: string;
  titleEn: string;
  categoryPt: string;
  categoryEn: string;
  subtitle?: string;
  bodyTextPt?: string;
  bodyTextEn?: string;
  synopsisPt: string;
  synopsisEn: string;
  creditsPt: string;
  creditsEn: string;
  metricsPt: { label: string; value: string }[];
  metricsEn: { label: string; value: string }[];
  thumbnail: string;
  videoPreview: string;
  videoFull: string;
  year: string;
  color: string;
  instagramItems?: InstagramItem[];
}

export const projects: Project[] = [
  {
    slug: "institucional",
    titlePt: "Institucional",
    titleEn: "Corporate",
    categoryPt: "Vídeo Institucional · Direção",
    categoryEn: "Corporate Video · Direction",
    subtitle: undefined,
    bodyTextPt: "O segmento institucional demanda uma visão cinematográfica profunda para humanizar empresas corporativas. Com mais de 10.000 espectadores atingidos nos últimos eventos, este trabalho transforma valores abstratos em comunicação em vídeo altamente retentora.",
    bodyTextEn: "The corporate segment demands a deep cinematic vision to humanize corporate companies. With over 10,000 viewers reached in recent events, this work transforms abstract values into highly engaging video communication.",
    synopsisPt: "Produção audiovisual institucional de alto padrão. Através do olhar da direção de Lanna Anjos, eventos como a 'Corrida Rústica' e o 'Encontro Cultural' foram documentados com impacto brutal, resultando em um aumento de 45% na retenção do público-alvo nas redes.",
    synopsisEn: "High-end corporate audiovisual production. Through the lens of Lanna Anjos's direction, events like the 'Rustic Race' and 'Cultural Meeting' were documented with brutal impact, resulting in a 45% increase in target audience retention on networks.",
    creditsPt: "Direção & Produção: Lanna Anjos",
    creditsEn: "Direction & Production: Lanna Anjos",
    metricsPt: [
      { label: "Espectadores", value: "+10.000" },
      { label: "Retenção", value: "+45%" },
      { label: "Eventos", value: "15+" },
    ],
    metricsEn: [
      { label: "Viewers", value: "+10,000" },
      { label: "Retention", value: "+45%" },
      { label: "Events", value: "15+" },
    ],
    thumbnail: "/images/covers/institucional.png",
    videoPreview: "",
    videoFull: "",
    year: "2024",
    color: "#c4956a",
    instagramItems: [
      { label: 'Corrida Rústica', url: 'https://www.instagram.com/p/DXXJmNRDuCp/' },
      { label: 'Corrida Rústica — Reel', url: 'https://www.instagram.com/reel/DXVGI9BkQRd/' },
      { label: 'Páscoa do Bem', url: 'https://www.instagram.com/reel/DWoAoSxhiNc/' },
      { label: 'Cidade Resolve', url: 'https://www.instagram.com/lannaanjoss/' },
      { label: 'Obras em parceria com o Governo', url: 'https://www.instagram.com/lannaanjoss/' },
      { label: 'Encontro Cultural', url: 'https://www.instagram.com/lannaanjoss/' }
    ]
  },
  {
    slug: "festival",
    titlePt: "Festival",
    titleEn: "Festival",
    categoryPt: "Cobertura de Evento · Filmagem",
    categoryEn: "Event Coverage · Filming",
    subtitle: "Festival da Mandioca 2025",
    bodyTextPt: "A cobertura do Festival da Mandioca exigiu dinamismo e resistência. O foco principal foi traduzir a energia caótica de mais de 50 mil pessoas em um compilado visceral e cinematográfico para as redes, com foco nos detalhes e na iluminação estroboscópica do palco.",
    bodyTextEn: "The coverage of the Mandioca Festival required dynamism and endurance. The main focus was to translate the chaotic energy of over 50 thousand people into a visceral and cinematic compilation for the networks, focusing on the details and the strobe lighting of the stage.",
    synopsisPt: "Captação cinematográfica de festivais e shows de grande escala. Ritmo, transições rápidas e color grading de alto contraste que fizeram os vídeos baterem a marca de +100k visualizações combinadas em menos de 24 horas do evento.",
    synopsisEn: "Cinematic capture of festivals and large-scale concerts. Rhythm, fast transitions, and high-contrast color grading that made the videos hit the mark of +100k combined views in less than 24 hours of the event.",
    creditsPt: "Direção & Câmera: Lanna Anjos",
    creditsEn: "Direction & Camera: Lanna Anjos",
    metricsPt: [
      { label: "Público Alvo", value: "50K+" },
      { label: "Visualizações", value: "+100K" },
      { label: "Horas Gravadas", value: "48h" },
    ],
    metricsEn: [
      { label: "Target Audience", value: "50K+" },
      { label: "Views", value: "+100K" },
      { label: "Hours Recorded", value: "48h" },
    ],
    thumbnail: "/images/covers/festival.png",
    videoPreview: "",
    videoFull: "",
    year: "2024",
    color: "#e8a045",
    instagramItems: [
      { label: 'Festival da Mandioca — Reel 1', url: 'https://www.instagram.com/reel/DLbmxXQtKIQ/' },
      { label: 'Festival da Mandioca — Reel 2', url: 'https://www.instagram.com/reel/DLSq5ePREng/' },
      { label: 'Festival da Mandioca — Reel 3', url: 'https://www.instagram.com/reel/DLdPvKHSaHh/' },
      { label: 'Madereta', url: 'https://www.instagram.com/lannaanjoss/' }
    ]
  },
  {
    slug: "kalainne-professional",
    titlePt: "Beleza",
    titleEn: "Beauty",
    categoryPt: "Conteúdo · Ramo da Beleza",
    categoryEn: "Content · Beauty Sector",
    subtitle: "Kalainne Professional | Make Up KS",
    bodyTextPt: "Estou fazendo parte da equipe já faz 1 ano. Eles me encontraram através de um vídeo que editei, que julgaram 'revolucionário'. Desde então, atuo como Head de Comunicação Digital. O uso de trends e um olhar super apurado para texturas e cores aumentou o engajamento da marca em +180%.",
    bodyTextEn: "I have been part of the team for 1 year now. They found me through a video I edited, which they considered 'revolutionary'. Since then, I work as Head of Digital Communication. The use of trends and a very refined eye for textures and colors increased the brand's engagement by +180%.",
    synopsisPt: "Criação de conteúdo visual para o mercado da beleza. Estética sofisticada, close-ups cinematográficos e storytelling imersivo, gerando mais de 250 mil visualizações mensais orgânicas.",
    synopsisEn: "Visual content creation for the beauty market. Sophisticated aesthetics, cinematic close-ups, and immersive storytelling, generating more than 250 thousand organic monthly views.",
    creditsPt: "Direção Criativa & Filmagem: Lanna Anjos",
    creditsEn: "Creative Direction & Filming: Lanna Anjos",
    metricsPt: [
      { label: "Engajamento", value: "+180%" },
      { label: "Acessos", value: "250K/mês" },
      { label: "Tempo de Parceira", value: "1 Ano" },
    ],
    metricsEn: [
      { label: "Engagement", value: "+180%" },
      { label: "Accesses", value: "250K/mo" },
      { label: "Partnership Time", value: "1 Year" },
    ],
    thumbnail: "/images/covers/beleza.png",
    videoPreview: "",
    videoFull: "",
    year: "2024",
    color: "#e845a0",
    instagramItems: [
      { label: 'Make Up KS', url: 'https://www.instagram.com/lannaanjoss/' },
      { label: 'Kalainne Professional', url: 'https://www.instagram.com/kalainneprofessional' }
    ]
  },
  {
    slug: "jfilhos-construtora",
    titlePt: "Construção",
    titleEn: "Construction",
    categoryPt: "Institucional · Construtora",
    categoryEn: "Corporate · Construction",
    subtitle: "JFilhos Construtora",
    bodyTextPt: "Uma grande honra ter prestado serviços para uma empresa tão renomada. Focamos em registrar não apenas os tijolos e cimento, mas a solidez, a segurança e a magnitude das construções civis.",
    bodyTextEn: "A great honor to have provided services for such a renowned company. We focused on recording not only the bricks and cement but the solidity, safety, and magnitude of civil constructions.",
    synopsisPt: "Registro audiovisual monumental da J.Filhos Construtora. Imagens aéreas de alta magnitude e cobertura corporativa pesada que aumentou o reconhecimento da marca nas redes sociais com um alcance médio de 50.000 contas alcançadas por vídeo.",
    synopsisEn: "Monumental audiovisual record of J.Filhos Construtora. High-magnitude aerial images and heavy corporate coverage that increased brand recognition on social networks with an average reach of 50,000 accounts reached per video.",
    creditsPt: "Direção & Produção: Lanna Anjos | Cliente: J.Filhos",
    creditsEn: "Direction & Production: Lanna Anjos | Client: J.Filhos",
    metricsPt: [
      { label: "Obras", value: "5+ Gigantes" },
      { label: "Formato", value: "Drone + 4K" },
      { label: "Alcance", value: "50K+/vídeo" },
    ],
    metricsEn: [
      { label: "Sites", value: "5+ Giant" },
      { label: "Format", value: "Drone + 4K" },
      { label: "Reach", value: "50K+/video" },
    ],
    thumbnail: "/images/covers/construcao.png",
    videoPreview: "",
    videoFull: "",
    year: "2024",
    color: "#d4a843",
    instagramItems: [
      { label: 'JFilhos Construtora', url: 'https://www.instagram.com/reel/DNnhFQ7utfr/' }
    ]
  },
  {
    slug: "clinica-e-laboratorio-check-up",
    titlePt: "Saúde",
    titleEn: "Health",
    categoryPt: "Conteúdo · Clínica & Laboratório",
    categoryEn: "Content · Clinic & Lab",
    subtitle: "Dr. Naiara Rodrigues | Clínica Check-Up",
    bodyTextPt: "Na área da saúde, credibilidade e confiança são fundamentais. A produção para a Dra. Naiara focou em vídeos educacionais altamente qualificados, que transformaram os perfis em referências regionais, multiplicando a taxa de conversão de agendamentos online em 12%.",
    bodyTextEn: "In healthcare, credibility and trust are fundamental. The production for Dr. Naiara focused on highly qualified educational videos, which transformed the profiles into regional references, multiplying the online booking conversion rate by 12%.",
    synopsisPt: "Conteúdo audiovisual humanizado e estético para a Clínica Check-Up. Comunicação visual limpa, roteiros engajadores e vídeos curtos que cresceram as redes de saúde em +220%.",
    synopsisEn: "Humanized and aesthetic audiovisual content for Check-Up Clinic. Clean visual communication, engaging scripts, and short videos that grew health networks by +220%.",
    creditsPt: "Direção & Produção: Lanna Anjos",
    creditsEn: "Direction & Production: Lanna Anjos",
    metricsPt: [
      { label: "Peças Editadas", value: "30+" },
      { label: "Agendamentos", value: "+12%" },
      { label: "Crescimento de Rede", value: "+220%" },
    ],
    metricsEn: [
      { label: "Edited Pieces", value: "30+" },
      { label: "Bookings", value: "+12%" },
      { label: "Network Growth", value: "+220%" },
    ],
    thumbnail: "/images/covers/saude.png",
    videoPreview: "",
    videoFull: "",
    year: "2023",
    color: "#45b8e8",
    instagramItems: [
      { label: 'Dr. Naiara Rodrigues', url: 'https://www.instagram.com/dranaiararodrigues_' },
      { label: 'Clínica e Laboratório Check Up', url: 'https://www.instagram.com/clinicacheckup' }
    ]
  },
  {
    slug: "tecnologia",
    titlePt: "Tecnologia",
    titleEn: "Technology",
    categoryPt: "Conteúdo · Tech & Eletrônicos",
    categoryEn: "Content · Tech & Electronics",
    subtitle: "Impacto Cell",
    bodyTextPt: "Meu primeiro cliente e está comigo até hoje. Sempre testamos novos formatos criativos e dinâmicos para mostrar o peso tecnológico dos produtos. O foco é visualização acelerada, unboxings agressivos e som imersivo que, só neste ano, movimentaram +150% das conversões digitais diretas da loja.",
    bodyTextEn: "My first client and still with me today. We always test new creative and dynamic formats to show the technological weight of the products. The focus is accelerated visualization, aggressive unboxings, and immersive sound that, this year alone, drove +150% of the store's direct digital conversions.",
    synopsisPt: "Produção de vídeo de altíssimo nível para o segmento tech. Movimentos de câmera cirúrgicos, macro fotografia de eletrônicos e mais de 100 mil visualizações acumuladas nas redes.",
    synopsisEn: "Top-level video production for the tech segment. Surgical camera movements, macro photography of electronics, and over 100 thousand accumulated views on networks.",
    creditsPt: "Direção Criativa & Filmagem: Lanna Anjos",
    creditsEn: "Creative Direction & Filming: Lanna Anjos",
    metricsPt: [
      { label: "Vídeos Produzidos", value: "40+" },
      { label: "Visualizações", value: "+100K" },
      { label: "Conversão Digital", value: "+150%" },
    ],
    metricsEn: [
      { label: "Videos Produced", value: "40+" },
      { label: "Views", value: "+100K" },
      { label: "Digital Conversion", value: "+150%" },
    ],
    thumbnail: "/images/covers/tecnologia.png",
    videoPreview: "",
    videoFull: "",
    year: "2024",
    color: "#4a8fe8",
    instagramItems: [
      { label: 'Impacto Cell', url: 'https://www.instagram.com/impacto_cell_' }
    ]
  },
  {
    slug: "esporte",
    titlePt: "Esporte",
    titleEn: "Sports",
    categoryPt: "Conteúdo · Esportivo",
    categoryEn: "Content · Sports",
    subtitle: "079 Sports",
    bodyTextPt: "No esporte, a câmera não pode piscar. Meu trabalho para a 079 Sports equilibra estética suja (brutal), dinamismo e muita estratégia rítmica (edição sincronizada na batida). Isso elevou a taxa de visualização em 300% entre os fãs, conectando torcedores e impulsionando as vendas da loja.",
    bodyTextEn: "In sports, the camera cannot blink. My work for 079 Sports balances dirty aesthetics (brutal), dynamism, and a lot of rhythmic strategy (beat-synced editing). This increased the view rate by 300% among fans, connecting supporters and boosting store sales.",
    synopsisPt: "Captação de alta performance focado na adrenalina pura. Edição com cortes secos, slow-motion intenso e storytelling de superação que atingiu mais de 75.000 pessoas organicamente.",
    synopsisEn: "High-performance capture focused on pure adrenaline. Editing with hard cuts, intense slow-motion, and overcoming storytelling that reached more than 75,000 people organically.",
    creditsPt: "Direção & Câmera: Lanna Anjos",
    creditsEn: "Direction & Camera: Lanna Anjos",
    metricsPt: [
      { label: "Atletas/Ação", value: "Alta Tensão" },
      { label: "Alcance Orgânico", value: "+75K" },
      { label: "View Rate", value: "+300%" },
    ],
    metricsEn: [
      { label: "Athletes/Action", value: "High Tension" },
      { label: "Organic Reach", value: "+75K" },
      { label: "View Rate", value: "+300%" },
    ],
    thumbnail: "/images/covers/esporte.png",
    videoPreview: "",
    videoFull: "",
    year: "2024",
    color: "#e85a45",
    instagramItems: [
      { label: '079 Sports', url: 'https://www.instagram.com/reel/DMnYvW9xeNd/' }
    ]
  },
  {
    slug: "educacao",
    titlePt: "Educação",
    titleEn: "Education",
    categoryPt: "Conteúdo · Educacional",
    categoryEn: "Content · Educational",
    subtitle: "Centro Educacional Dengoso",
    bodyTextPt: "A campanha de volta às aulas necessitava de uma comunicação doce, porém de extrema autoridade, para os pais confiarem o futuro de seus filhos à instituição. As filmagens priorizaram a segurança, os sorrisos e o zelo, que resultaram num boom de rematrículas de +20%.",
    bodyTextEn: "The back-to-school campaign required a sweet yet extremely authoritative communication for parents to entrust their children's future to the institution. The filming prioritized safety, smiles, and zeal, which resulted in a +20% re-enrollment boom.",
    synopsisPt: "Produção educacional sensível e institucional para o Centro Educacional Dengoso. Com narrativas claras, as campanhas geraram confiança maciça nas redes e mais de 10.000 impactos na comunidade local.",
    synopsisEn: "Sensitive and institutional educational production for Centro Educacional Dengoso. With clear narratives, the campaigns generated massive trust on networks and over 10,000 impacts in the local community.",
    creditsPt: "Direção & Produção: Lanna Anjos",
    creditsEn: "Direction & Production: Lanna Anjos",
    metricsPt: [
      { label: "Rematrículas", value: "+20%" },
      { label: "Vídeos da Campanha", value: "20+" },
      { label: "Impacto Local", value: "+10K" },
    ],
    metricsEn: [
      { label: "Re-enrollments", value: "+20%" },
      { label: "Campaign Videos", value: "20+" },
      { label: "Local Impact", value: "+10K" },
    ],
    thumbnail: "/images/covers/educacao.png",
    videoPreview: "",
    videoFull: "",
    year: "2023",
    color: "#45e89a",
    instagramItems: [
      { label: 'Centro Educacional Dengoso', url: 'https://www.instagram.com/reel/DQ6vwFkjtUw/' }
    ]
  },
  {
    slug: "saude-ocular",
    titlePt: "Saúde Ocular",
    titleEn: "Eye Health",
    categoryPt: "Conteúdo · Oftalmologia",
    categoryEn: "Content · Ophthalmology",
    subtitle: "Óticas Olho Vivo",
    bodyTextPt: "O mercado oftálmico precisa de uma comunicação onde os produtos e as lentes pareçam vitrines de joalherias. O conteúdo desenvolvido para as Óticas Olho Vivo foca nas texturas dos óculos e no atendimento, elevando o nível percebido da marca na cidade em 90%.",
    bodyTextEn: "The ophthalmic market needs a communication where products and lenses look like jewelry displays. The content developed for Óticas Olho Vivo focuses on the textures of the glasses and the service, raising the brand's perceived level in the city by 90%.",
    synopsisPt: "Conteúdo especializado e de alto requinte para as Óticas Olho Vivo (Salgado e Colônia 13). Foco brutal nos detalhes dos óculos, reflexos e design, entregando autoridade inquestionável.",
    synopsisEn: "Specialized and highly refined content for Óticas Olho Vivo (Salgado and Colônia 13). Brutal focus on the details of the glasses, reflections, and design, delivering unquestionable authority.",
    creditsPt: "Direção & Produção: Lanna Anjos",
    creditsEn: "Direction & Production: Lanna Anjos",
    metricsPt: [
      { label: "Filiais Atendidas", value: "2" },
      { label: "Autoridade Percebida", value: "+90%" },
      { label: "Visualizações Locais", value: "20K+" },
    ],
    metricsEn: [
      { label: "Branches Served", value: "2" },
      { label: "Perceived Authority", value: "+90%" },
      { label: "Local Views", value: "20K+" },
    ],
    thumbnail: "/images/covers/saude_ocular.png",
    videoPreview: "",
    videoFull: "",
    year: "2023",
    color: "#4acde8",
    instagramItems: [
      { label: 'Ótica', url: 'https://www.instagram.com/reel/DX-KlcJPHCh/' },
      { label: 'Óticas Olho Vivo Salgado', url: 'https://www.instagram.com/reel/DLYKBNWS2S8/' },
      { label: 'Óticas Olho Vivo Colônia 13', url: 'https://www.instagram.com/reel/DM-0aMVsbob/' }
    ]
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return projects.map((p) => p.slug);
}
