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
    bodyTextPt: undefined,
    bodyTextEn: undefined,
    synopsisPt:
      "Produção audiovisual institucional de alto padrão para empresas que buscam comunicar sua essência, valores e posicionamento de marca com impacto visual e narrativo.",
    synopsisEn:
      "High-end corporate audiovisual production for companies looking to communicate their essence, values, and brand positioning with visual and narrative impact.",
    creditsPt: "Direção & Produção: Lanna Anjos",
    creditsEn: "Direction & Production: Lanna Anjos",
    metricsPt: [
      { label: "Projetos", value: "15+" },
      { label: "Clientes", value: "10+" },
      { label: "Formato", value: "4K" },
    ],
    metricsEn: [
      { label: "Projects", value: "15+" },
      { label: "Clients", value: "10+" },
      { label: "Format", value: "4K" },
    ],
    thumbnail: "https://cdn.myportfolio.com/fcd9c018-d503-43d4-99c4-be3629b07a30/03e88d17-dad0-4267-99a2-f1d00603dbe7_rwc_0x266x960x750x960.jpeg",
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
    subtitle: "FESTIVAL DA MANDIOCA 2025",
    bodyTextPt: "Acesse o conteúdo clicando no ícone do instagram abaixo.",
    bodyTextEn: "Access the content by clicking on the Instagram icon below.",
    synopsisPt:
      "Captação cinematográfica de festivais e eventos culturais. Registrando a energia, as emoções e os momentos que definem cada experiência coletiva.",
    synopsisEn:
      "Cinematic capture of festivals and cultural events. Recording the energy, emotions, and moments that define each collective experience.",
    creditsPt: "Direção & Câmera: Lanna Anjos",
    creditsEn: "Direction & Camera: Lanna Anjos",
    metricsPt: [
      { label: "Eventos", value: "8+" },
      { label: "Horas", value: "200+" },
      { label: "Entregas", value: "Mesma Semana" },
    ],
    metricsEn: [
      { label: "Events", value: "8+" },
      { label: "Hours", value: "200+" },
      { label: "Delivery", value: "Same Week" },
    ],
    thumbnail: "https://cdn.myportfolio.com/fcd9c018-d503-43d4-99c4-be3629b07a30/c5e40731-e26a-4364-8f5b-855c746f717b_rwc_225x0x1151x900x1151.jpeg",
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
    bodyTextPt: "Estou fazendo parte da equipe já faz 1 ano, uma curiosidade muito legal é que eles me encontraram através de um vídeo que eu editei e eles acharam revolucionário, desde então, faço parte da equipe. Atuo como Head de Comunicação Digital, cuido de todo calendário de conteúdo e presença digital.\n\nA Make Up KS veio através de indicações, utilizamos sempre trend em alta com conteúdos que são mais populares em visualizações.",
    bodyTextEn: "I have been part of the team for 1 year now. A really cool fact is that they found me through a video I edited and they thought it was revolutionary. Since then, I have been part of the team. I work as Head of Digital Communication, managing the entire content calendar and digital presence.\n\nMake Up KS came through referrals. We always use trending formats with content that is most popular in views.",
    synopsisPt:
      "Criação de conteúdo visual para a marca Kalainne Professional. Estética sofisticada, close-ups cinematográficos e storytelling voltado para o mercado de beleza e cuidados pessoais.",
    synopsisEn:
      "Visual content creation for the Kalainne Professional brand. Sophisticated aesthetics, cinematic close-ups, and storytelling aimed at the beauty and personal care market.",
    creditsPt: "Direção Criativa & Filmagem: Lanna Anjos | Cliente: Kalainne Professional",
    creditsEn: "Creative Direction & Filming: Lanna Anjos | Client: Kalainne Professional",
    metricsPt: [
      { label: "Peças", value: "25+" },
      { label: "Engajamento", value: "+180%" },
      { label: "Plataformas", value: "3" },
    ],
    metricsEn: [
      { label: "Pieces", value: "25+" },
      { label: "Engagement", value: "+180%" },
      { label: "Platforms", value: "3" },
    ],
    thumbnail: "https://cdn.myportfolio.com/fcd9c018-d503-43d4-99c4-be3629b07a30/66c379be-16d8-45b2-87fd-2b98408b069e_rwc_0x331x900x703x900.jpeg",
    videoPreview: "",
    videoFull: "",
    year: "2024",
    color: "#e845a0",
    instagramItems: [
      { label: 'Make Up KS', url: 'https://www.instagram.com/lannaanjoss/' },
      { label: 'Kalainne Porfessional', url: 'https://www.instagram.com/kalainneprofessional' }
    ]
  },
  {
    slug: "jfilhos-construtora",
    titlePt: "Construção",
    titleEn: "Construction",
    categoryPt: "Institucional · Construtora",
    categoryEn: "Corporate · Construction",
    subtitle: "JFilhos Construtora",
    bodyTextPt: "Uma grande honra ter prestado serviços para uma empresa tão renomada, além das captações também realizei cobertura de eventos.",
    bodyTextEn: "A great honor to have provided services for such a renowned company. In addition to the shoots, I also covered events.",
    synopsisPt:
      "Registro audiovisual do progresso e das entregas da J.Filhos Construtora. Imagens aéreas, timelapses de obra e vídeos que traduzem solidez e confiança em cada empreendimento.",
    synopsisEn:
      "Audiovisual record of the progress and deliveries of J.Filhos Construtora. Aerial images, construction timelapses, and videos that convey solidity and trust in each enterprise.",
    creditsPt: "Direção & Produção: Lanna Anjos | Cliente: J.Filhos Construtora",
    creditsEn: "Direction & Production: Lanna Anjos | Client: J.Filhos Construtora",
    metricsPt: [
      { label: "Obras", value: "5+" },
      { label: "Formato", value: "Drone + 4K" },
      { label: "Alcance", value: "50K+" },
    ],
    metricsEn: [
      { label: "Sites", value: "5+" },
      { label: "Format", value: "Drone + 4K" },
      { label: "Reach", value: "50K+" },
    ],
    thumbnail: "https://cdn.myportfolio.com/fcd9c018-d503-43d4-99c4-be3629b07a30/d313779a-9101-4ed3-a4a9-2ed54fb33e9c_rwc_0x80x736x575x736.jpeg",
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
    bodyTextPt: "Acesse o conteúdo clicando no ícone do instagram abaixo.",
    bodyTextEn: "Access the content by clicking on the Instagram icon below.",
    synopsisPt:
      "Conteúdo audiovisual para a Clínica e Laboratório Check-Up. Comunicação visual humanizada, transmitindo confiança e cuidado ao paciente.",
    synopsisEn:
      "Audiovisual content for Check-Up Clinic and Laboratory. Humanized visual communication, conveying trust and care to the patient.",
    creditsPt: "Direção & Produção: Lanna Anjos | Cliente: Clínica Check-Up",
    creditsEn: "Direction & Production: Lanna Anjos | Client: Clínica Check-Up",
    metricsPt: [
      { label: "Peças", value: "30+" },
      { label: "Redes", value: "Instagram + YT" },
      { label: "Crescimento", value: "+220%" },
    ],
    metricsEn: [
      { label: "Pieces", value: "30+" },
      { label: "Networks", value: "Insta + YT" },
      { label: "Growth", value: "+220%" },
    ],
    thumbnail: "https://cdn.myportfolio.com/fcd9c018-d503-43d4-99c4-be3629b07a30/f888044c-18b0-4185-9c1d-8b9f64f1caf3_rwc_0x68x626x489x626.jpeg",
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
    bodyTextPt: "Meu primeiro cliente e está comigo até hoje, sempre testamos novos formatos criativos, todos os conteúdos são voltados a atrair vendas online.",
    bodyTextEn: "My first client and still with me today. We always test new creative formats, all content is focused on driving online sales.",
    synopsisPt:
      "Criação de conteúdo para o segmento de tecnologia e eletrônicos. Unboxings cinematográficos, reviews com estética premium e campanhas visuais que convertem.",
    synopsisEn:
      "Content creation for the technology and electronics segment. Cinematic unboxings, premium aesthetic reviews, and visual campaigns that convert.",
    creditsPt: "Direção Criativa & Filmagem: Lanna Anjos",
    creditsEn: "Creative Direction & Filming: Lanna Anjos",
    metricsPt: [
      { label: "Vídeos", value: "40+" },
      { label: "Visualizações", value: "100K+" },
      { label: "Conversão", value: "+150%" },
    ],
    metricsEn: [
      { label: "Videos", value: "40+" },
      { label: "Views", value: "100K+" },
      { label: "Conversion", value: "+150%" },
    ],
    thumbnail: "https://cdn.myportfolio.com/fcd9c018-d503-43d4-99c4-be3629b07a30/c0abdea1-8782-41bc-9ec3-1471e3f050b1_rwc_6x0x718x562x718.jpeg",
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
    subtitle: "079",
    bodyTextPt: "Meu trabalho no segmento equilibra estética, dinamismo e estratégia, entregando conteúdos que conectam torcedores, movimentam vendas e fortalecem a presença digital de cada projeto.",
    bodyTextEn: "My work in this segment balances aesthetics, dynamism, and strategy, delivering content that connects fans, drives sales, and strengthens the digital presence of each project.",
    synopsisPt:
      "Captação de alta performance para o segmento esportivo. Slow-motion, ângulos dinâmicos e edição rítmica que transmitem a adrenalina e a superação de cada atleta.",
    synopsisEn:
      "High-performance capture for the sports segment. Slow-motion, dynamic angles, and rhythmic editing that convey the adrenaline and overcoming of each athlete.",
    creditsPt: "Direção & Câmera: Lanna Anjos",
    creditsEn: "Direction & Camera: Lanna Anjos",
    metricsPt: [
      { label: "Atletas", value: "10+" },
      { label: "Formato", value: "Slow-Mo" },
      { label: "Alcance", value: "75K+" },
    ],
    metricsEn: [
      { label: "Athletes", value: "10+" },
      { label: "Format", value: "Slow-Mo" },
      { label: "Reach", value: "75K+" },
    ],
    thumbnail: "https://cdn.myportfolio.com/fcd9c018-d503-43d4-99c4-be3629b07a30/8aa390a1-2e30-4822-a596-1a2f53998c57_rwc_0x82x700x547x700.jpeg",
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
    bodyTextPt: "Ainda está acontecendo a campanha de volta às aulas dessa instituição. Foram direcionadas a atrair um público novo e passar confiança mostrando toda responsabilidade e preocupação da escola com os alunos.",
    bodyTextEn: "The back-to-school campaign for this institution is still ongoing. It was designed to attract a new audience and build trust by showing the school's full responsibility and concern for its students.",
    synopsisPt:
      "Produção de vídeos educacionais e institucionais para o setor de ensino. Narrativas claras e visuais envolventes que comunicam conhecimento de forma acessível e inspiradora.",
    synopsisEn:
      "Production of educational and corporate videos for the teaching sector. Clear narratives and engaging visuals that communicate knowledge in an accessible and inspiring way.",
    creditsPt: "Direção & Produção: Lanna Anjos",
    creditsEn: "Direction & Production: Lanna Anjos",
    metricsPt: [
      { label: "Instituições", value: "4+" },
      { label: "Vídeos", value: "20+" },
      { label: "Impacto", value: "10K+" },
    ],
    metricsEn: [
      { label: "Institutions", value: "4+" },
      { label: "Videos", value: "20+" },
      { label: "Impact", value: "10K+" },
    ],
    thumbnail: "https://cdn.myportfolio.com/fcd9c018-d503-43d4-99c4-be3629b07a30/52c76fa7-3d17-4050-88ce-5a12fc9bfa79_rwc_0x280x1081x845x1081.jpeg",
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
    bodyTextPt: "Acesse o conteúdo clicando no ícone do instagram abaixo.",
    bodyTextEn: "Access the content by clicking on the Instagram icon below.",
    synopsisPt:
      "Conteúdo especializado para o segmento de saúde ocular. Comunicação visual didática e profissional, trazendo credibilidade e aproximação com o público.",
    synopsisEn:
      "Specialized content for the eye health segment. Didactic and professional visual communication, bringing credibility and a closer connection with the public.",
    creditsPt: "Direção & Produção: Lanna Anjos",
    creditsEn: "Direction & Production: Lanna Anjos",
    metricsPt: [
      { label: "Peças", value: "15+" },
      { label: "Especialidade", value: "Óticas" },
      { label: "Crescimento", value: "+90%" },
    ],
    metricsEn: [
      { label: "Pieces", value: "15+" },
      { label: "Specialty", value: "Optics" },
      { label: "Growth", value: "+90%" },
    ],
    thumbnail: "https://cdn.myportfolio.com/fcd9c018-d503-43d4-99c4-be3629b07a30/2aee3dba-4a5b-432c-99be-9b1f150bafa5_rwc_0x202x719x562x719.jpeg",
    videoPreview: "",
    videoFull: "",
    year: "2023",
    color: "#4acde8",
    instagramItems: [
      { label: 'Ótica', url: 'https://www.instagram.com/reel/DX-KlcJPHCh/' },
      { label: 'Óticas Olho Vivo Salgado', url: 'https://www.instagram.com/reel/DLYKBNWS2S8/' },
      { label: 'Óticas Olho Vivo Colônia 13', url: 'https://www.instagram.com/reel/DM-0aMVsbob/' }
    ]
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return projects.map((p) => p.slug);
}
