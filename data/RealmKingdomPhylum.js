// 所有域、界、门
// All realms and kingdoms, phylums

var RealmKingdom = {
  // 细胞
  Biota: "生物系",

  Animalia: "动物界",

  Archaea: "古菌界",

  Bacteria: "细菌界",
  Negibacteria: "",
  Posibacteria: "",

  Chromista: "色素界",

  Fungi: "真菌界",

  Plantae: "植物界",
  Bryobiotina: "",

  Protozoa: "原生生物界",

  // 病毒
  Viruses: "病毒系",

  Adnaviria: "A-DNA病毒域*",
  Zilligvirae: "",

  Duplodnaviria: "双链DNA病毒域*",
  Heunggongvirae: "",

  Monodnaviria: "单链DNA病毒域*",
  Loebvirae: "",
  Sangervirae: "",
  Shotokuvirae: "",
  Trapavirae: "",

  Riboviria: "核糖病毒域*",
  Orthornavirae: "",
  Pararnavirae: "",
  // Not assigned

  Ribozyviria: "核酶病毒域*",

  Varidnaviria: "多DNA病毒域*",
  Bamfordvirae: "",
  Helvetiavirae: "",

  // Not assigned

  Naldaviricetes: "",
};
// 部分亚门、下门、小门没有标注
var PhylumBiota = {
  // 动物界
  Acanthocephala: "",
  Annelida: "环节动物门",
  Arthropoda: "节肢动物门",
  Brachiopoda: "腕足动物门",
  Craniiformea: "", // 亚门
  Linguliformea: "", // 亚门
  Rhynchonelliformea: "", // 亚门
  Bryozoa: "苔藓动物门",
  Chaetognatha: "毛颚动物门*",
  Chordata: "脊索动物门",
  Cephalochordata: "头索动物亚门", // 亚门
  Tunicata: "被囊动物亚门(尾索动物亚门 Urochordate)*", // 亚门
  Vertebrata: "脊椎动物亚门", // 亚门
  Agnatha: "无颌类", // 下门
  Gnathostomata: "有颌类", // 下门
  Chondrichthyes: "软骨鱼纲", // 小门
  Osteichthyes: "硬骨鱼纲", // 小门
  Cnidaria: "刺胞动物门(腔肠动物门 Coelenterata)",
  Ctenophora: "栉水母门*",
  Dicyemida: "二胚虫门*", // 命名有争议，暂时这么处理：“Dicyemida 二胚虫门”下有一个“Rhombozoa 菱形虫纲”
  Echinodermata: "棘皮动物门",
  Asterozoa: "海星亚门*", // 亚门
  Crinozoa: "海百合亚门*", // 亚门
  Echinozoa: "海胆亚门*", // 亚门
  Gastrotricha: "",
  Gnathostomulida: "",
  Hemichordata: "",
  Kamptozoa: "",
  Kinorhyncha: "",
  Loricifera: "",
  Micrognathozoa: "",
  Mollusca: "",
  Nematoda: "",
  Nematomorpha: "",
  Nemertea: "",
  Onychophora: "",
  Orthonectida: "",
  Phoronida: "",
  Placozoa: "",
  Platyhelminthes: "",
  Catenulida: "", // 亚门
  Rhabditophora: "", // 亚门
  // Not assigned
  Porifera: "",
  Priapulida: "",
  Rotifera: "",
  Sipuncula: "",
  Tardigrada: "",
  Xenacoelomorpha: "",
  Acoelomorpha: "", // 亚门
  Xenoturbellida: "", // 亚门

  // 古菌界
  Crenarchaeota: "泉古菌门",
  Euryarchaeota: "广古菌门",

  // 细菌界
  // 以下分类属于 Negibacteria 亚界
  Acidobacteria: "",
  Aquificae: "",
  Armatimonadetes: "",
  Bacteroidetes: "拟杆菌门",
  Caldiserica: "",
  Chlamydiae: "",
  Chlorobi: "",
  Chrysiogenetes: "",
  Cyanobacteria: "",
  Deferribacteres: "",
  "Deinococcus-Thermus": "",
  Dictyoglomi: "",
  Elusimicrobia: "",
  Fibrobacteres: "",
  Fusobacteria: "",
  Gemmatimonadetes: "",
  Lentisphaerae: "",
  Nitrospira: "",
  Planctomycetes: "",
  Proteobacteria: "",
  Spirochaetae: "",
  Synergistetes: "",
  Thermodesulfobacteria: "",
  Thermotogae: "",
  Verrucomicrobia: "",
  // 以下分类属于 Posibacteria 亚界
  Actinobacteria: "放线菌门",
  Chloroflexi: "",
  Firmicutes: "",
  Tenericutes: "",

  // 色素界
  Acavomonidia: "",
  Bigyra: "",
  Cercozoa: "",
  Ciliophora: "",
  Cryptista: "",
  Palpitia: "",
  Rollomonadia: "",
  Foraminifera: "",
  Haptophyta: "",
  Heliozoa: "",
  Miozoa: "",
  Ochrophyta: "",
  Oomycota: "",
  Picozoa: "",
  Radiozoa: "",
  // Not assigned

  // 真菌界
  Ascomycota: "",
  Basidiomycota: "",
  Blastocladiomycota: "",
  Chytridiomycota: "",
  Entomophthoromycota: "",
  Glomeromycota: "",
  Zygomycota: "",
  // Not assigned

  // 植物界
  Anthocerotophyta: "",
  Bryophyta: "",
  Langiophytophyta: "",
  Marchantiophyta: "",
  // Not assigned
  Charophyta: "",
  Chlorophyta: "",
  Chlorophytina: "",
  Prasinophytina: "",
  // Not assigned
  Glaucophyta: "",
  Rhodophyta: "",
  Cyanidiophytina: "",
  Eurhodophytina: "",
  Metarhodophytina: "",
  Rhodellophytina: "",
  // Not assigned
  Tracheophyta: "",

  // 原生生物界
  Amoebozoa: "",
  Calcitarcha: "",
  Choanozoa: "",
  Euglenozoa: "",
  Euglenoida: "",
  Glycomonada: "",
  Postgaardia: "",
  Loukozoa: "",
  Eolouka: "",
  Neolouka: "",
  Metamonada: "",
  Microsporidia: "",
  Mycetozoa: "",
  Sarcomastigophora: "",
  Sulcozoa: "",
  Apusozoa: "",
  Varisulca: "",
  // Not assigned
};

var PhylumViruses = {
  // A-DNA病毒域*
  // Zilligvirae 界
  Taleaviricota: "",

  // 双链DNA病毒域*
  // Heunggongvirae 界
  Peploviricota: "",
  Uroviricota: "",

  // 单链DNA病毒域*
  // Loebvirae 界
  Hofneiviricota: "",
  // Sangervirae 界
  Phixviricota: "",
  // Shotokuvirae 界
  Cossaviricota: "",
  Cressdnaviricota: "",
  // Trapavirae 界
  Saleviricota: "",

  // 核糖病毒域*
  // Orthornavirae 界
  Duplornaviricota: "",
  Kitrinoviricota: "",
  Lenarviricota: "",
  Negarnaviricota: "",
  Pisuviricota: "",
  // Not assigned
  // Pararnavirae 界
  Artverviricota: "",
  // 未细分的界

  // 核酶病毒域*

  // 多DNA病毒域*
  // Bamfordvirae 界
  Nucleocytoviricota: "",
  Preplasmiviricota: "",
  // Helvetiavirae 界
  Dividoviricota: "",

  // 未细分的域
};

var RealmKingdomPhylum = Object.assign(
  {},
  RealmKingdom,
  PhylumBiota,
  PhylumViruses
);

export default RealmKingdomPhylum;
