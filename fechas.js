const fechas = [
  {
    "id": 1,
    "fechaTitulo": "SigloVI-VII",
    "fechaColor": "#63CFC2",
    "fechaDescription": "Llegada de los chorotegas a los actuales territorios de Costa Rica, Honduras y Nicaragua. (Mange, Cholultecas, Dirián y Orotina). Chorotega significa habitantes de Cholula, (actualmente Estado de Puebla, México) de donde procede este pueblo indígena."
  },
  {
    "id": 2,
    "fechaTitulo": "1520-1540",
    "fechaColor": "#9ACD32",
    "fechaDescription": "Los conquistadores llevaron a los indígenas chorotegas esclavizados, los vendieron y los enviaron en barcos hacia primero Panamá para luego enviarles a Perú a la construcción de Lima. El tráfico solamente duró cuarenta años porque acabaron con la vida de la mayoría de los indígenas que eran enviados."
  },
  {
    "id": 3,
    "fechaTitulo": 1821,
    "fechaColor": "#63CFC2",
    "fechaDescription": "Independencia de la Capitanía General de Guatemala"
  },
  {
    "id": 4,
    "fechaTitulo": "1824-1838",
    "fechaColor": "#63CFC2",
    "fechaDescription": "Existencia de la República Federal de Centro América"
  },
  {
    "id": 5,
    "fechaTitulo": 1840,
    "fechaColor": "#63CFC2",
    "fechaDescription": "Inicio de tensiones por límites fronterizos entre Costa Rica y Nicaragua"
  },
  {
    "id": 6,
    "fechaTitulo": 1856,
    "fechaColor": "#fc4ebf",
    "fechaDescription": "William Walker se declara presidente de Nicaragua y, posteriormente, es derrotado en la batalla de San Jacinto por un ejercito del norte el cual incluía indios flecheros. Filibustero imperialista, supremacista blanco. Luego de declararse presidente, restablecer la esclavitud y e intentar convertir a Nicaragua en una colonia gringa, el filibustero gringo William Walker es derrotado en la Batalla de San Jacinto. El personaje de William Walker se ha comenzado a estudiar también desde una perspectiva de género como una persona que no encaja en los roles del género masculino."
  },
  {
    "id": 7,
    "fechaTitulo": 1857,
    "fechaColor": "#63CFC2",
    "fechaDescription": "Estalla la guerra entre Costa Rica y Nicaragua por la delimitación de emas fronterizos: principalmente la navegación en el río San Juan y la eventual construcción de un canal interoceánico a través del río San Juan y el lago Nicaragua."
  },
  {
    "id": 8,
    "fechaTitulo": "sin Fecha - 1900s",
    "fechaColor": "gray",
    "fechaDescription": ""
  },
  {
    "id": 9,
    "fechaTitulo": 1909,
    "fechaColor": "#63CFC2",
    "fechaDescription": "El autocratata Nacionalista Jose Santos Zelaya se exilia de Nicaragua luego de una intervencion estadounidense."
  },
  {
    "id": 10,
    "fechaTitulo": 1914,
    "fechaColor": "#63CFC2",
    "fechaDescription": "Tratado Chamorro-Bryan concede derechos perpetuos a Estado Unidos para la construccion y mantenimiento del canal interoceanico."
  },
  {
    "id": 11,
    "fechaTitulo": 1934,
    "fechaColor": "#63CFC2",
    "fechaDescription": "Luego de expulsar al ejercito la ocupacion militar de EEUU en Nicaragua, el nacionalista Nicaraguense, el General Augusto Cesar Sandino, es traicionado y asesinado."
  },
  {
    "id": 12,
    "fechaTitulo": 1956,
    "fechaColor": "#fc4ebf",
    "fechaDescription": "En Nicaragua - El poeta homosexual Rigoberto Lopez Perez atenta contra la vida de Anastasio Somoza Garcia en la ciudad de Leon. Rigoberto es acribillado en el momento y Somoza muere unos días después en la ciudad de Panamá. Los cómplices del poeta, incluyendo a su amante quien lo dejó entrar con privilegio al vals del dictador, son brutalmente perseguidos, torturados y ejecutados por la dictadura."
  },
  {
    "id": 13,
    "fechaTitulo": 1950,
    "fechaColor": "#9ACD32",
    "fechaDescription": "Centroamérica experimentó una aceleración de sus procesos migratorios tanto en migraciones intrarregionales como hacia los Estados Unidos. Lesión a los derechos humanos y aumento de la vulnerabilidad de esas poblaciones."
  },
  {
    "id": 14,
    "fechaTitulo": 1960,
    "fechaColor": "#fc4ebf",
    "fechaDescription": "En Costa Rica, durante las décadas de los 50 y 60 la policía realizaba detenciones a aquellos homosexuales que identificaba en Ia calle o en ciertos bares de San José a quienes se encarcelaba unos días y se rapaban. Esto se extendio hasta la década de 1990."
  },
  {
    "id": 15,
    "fechaTitulo": 1960,
    "fechaColor": "#fc4ebf",
    "fechaDescription": "En Costa Rica existían bares dirigidos a la comunidad LGTBIQ+ como La Torre, Los Cucarachones y Julian's que operaban en forma semiclandestina en San José."
  },
  {
    "id": 16,
    "fechaTitulo": "1968-1970",
    "fechaColor": "#fc4ebf",
    "fechaDescription": "En Nicaragua, es el momento de apogeo de “La Tortuga Morada”, una discoteca hippie en la vieja Managua. Esta discoteca, fundada por el Diriambino Roberto Rapaccioli, se vuelve un emblema de los círculos gay, la cultura y las drogas en su tiempo."
  },
  {
    "id": 17,
    "fechaTitulo": 1970,
    "fechaColor": "#fc4ebf",
    "fechaDescription": "En Costa Rica inicia el momento de la institucionalización de las redadas en los bares que ya no son tan clandestinos. La policía podía irrumpir aduciendo tráfico de drogas o actuaciones en contra de la moral. Lxs dueñxs de los bares pagaban cuotas a la policía para evitar las redadas, sin embargo no eran suficiente garantía."
  },
  {
    "id": 18,
    "fechaTitulo": 1970,
    "fechaColor": "#fc4ebf",
    "fechaDescription": "Al mismo tiempo las lesbianas comienzan a tener más presencia pública"
  },
  {
    "id": 19,
    "fechaTitulo": 1972,
    "fechaColor": "#63CFC2",
    "fechaDescription": "Devastador terremoto destruye Managua"
  },
  {
    "id": 20,
    "fechaTitulo": 1975,
    "fechaColor": "#63CFC2",
    "fechaDescription": "Se consolida el Grupo Gradas, que trató de aglutinar a los distintos sectores vinculados al arte que en la década de los sesenta habían desarrollado iniciativas de renovación estética y compromiso político. Integró a pintores, escritores, poetas y músicxs, desde la promoción de la literatura comprometida, la difusión del teatro callejero y la nueva canción latinoamericana. Posteriormente, junto con el Grupo de los Doce serían las apuestas más claras por consolidar un política cultural sandinista."
  },
  {
    "id": 21,
    "fechaTitulo": 1975,
    "fechaColor": "#9ACD32",
    "fechaDescription": "Aumento de migrantes económicos de Nicaragua a Costa Rica, que se ocupan de labores agrícolas, la construcción, el servicio doméstico y la maquila. Están sujetos a estereotipos alrededor de la xenofobia y el racismo y la discriminaciòn."
  },
  {
    "id": 22,
    "fechaTitulo": "sin Fecha - 1970s",
    "fechaColor": "gray",
    "fechaDescription": ""
  },
  {
    "id": 23,
    "fechaTitulo": 1978,
    "fechaColor": "#fc4ebf",
    "fechaDescription": "En Nicaragua, la guerrillera lesbiana Dora Maria Tellez junto con el Comandante Victor Hugo Tinoco dirigen la toma del Palacio Nacional, suceso marca el rápido declive de la dictadura Somocista."
  },
  {
    "id": 24,
    "fechaTitulo": 1979,
    "fechaColor": "#63CFC2",
    "fechaDescription": "Triunfo de la Revolución Sandinista en Nicaragua y fin de la dictadura Somocista."
  },
  {
    "id": 25,
    "fechaTitulo": 1979,
    "fechaColor": "#fc4ebf",
    "fechaDescription": "Se crea el bar la Avispa en Costa Rica, cuya clientela fue casi desde el inicio predominantemente lesbica. Se posiciona en los 80´s y en adelante se convertiría en un lugar de apoyo político, de reunión, encuentro y organización con otros grupos, colectivos, asociaciones y activistas."
  },
  {
    "id": 26,
    "fechaTitulo": "sin Fecha - finales 70s",
    "fechaColor": "gray",
    "fechaDescription": ""
  },
  {
    "id": 27,
    "fechaTitulo": "sin Fecha - finales 70s",
    "fechaColor": "gray",
    "fechaDescription": ""
  },
  {
    "id": 28,
    "fechaTitulo": 1980,
    "fechaColor": "#63CFC2",
    "fechaDescription": "Se diagnostica el primer caso de SIDA en CR en una persona con hemofilia."
  },
  {
    "id": 29,
    "fechaTitulo": 1980,
    "fechaColor": "#9ACD32",
    "fechaDescription": "Migración centroamericana (Honduras, El Salvador y Guatemala, Panamá) a Costa Rica que escapan de la violencia de paramilitares o pandillas, Ia revolución y triunfo del sandinismo en Nicaragua, la insurrección de Ia izquierda salvadoreña, y Ia contracción económica de Ia región en general. Esto debilita el poder represivo del Estado costarricense."
  },
  {
    "id": 30,
    "fechaTitulo": 1980,
    "fechaColor": "#fc4ebf",
    "fechaDescription": "También hay un migración centroamericana de personas con VIH a Costa Rica."
  },
  {
    "id": 31,
    "fechaTitulo": 1980,
    "fechaColor": "#fc4ebf",
    "fechaDescription": "Fuerte migración de mujeres trans de Costa Rica a Panamá para realizar comercio sexual"
  },
  {
    "id": 32,
    "fechaTitulo": 1980,
    "fechaColor": "#63CFC2",
    "fechaDescription": "Nicaragua impone restricciones a Costa Rica para la navegación en el  río San Juan."
  },
  {
    "id": 33,
    "fechaTitulo": 1980,
    "fechaColor": "#fc4ebf",
    "fechaDescription": "En Costa Rica, el bar La Avispa, tenía un bombillo que se encendía cuando llegara la policía: era una señal para dejar de bailar con la pareja, cambiar a una pareja heterosexual, o solamente sentarse a conversar."
  },
  {
    "id": 34,
    "fechaTitulo": 1985,
    "fechaColor": "#fc4ebf",
    "fechaDescription": "Primer caso de SIDA en Costa Rica de un hombre homosexual."
  },
  {
    "id": 35,
    "fechaTitulo": 1987,
    "fechaColor": "#fc4ebf",
    "fechaDescription": "En Costa Rica se intensifican las redadas en La Avista y Julian´s al iniciarse una cacería pública hacia las personas homosexuales, para “intentar” limitar los encuentros, contactos y espacios para esta población en relación al temor al SIDA."
  },
  {
    "id": 36,
    "fechaTitulo": 1987,
    "fechaColor": "#fc4ebf",
    "fechaDescription": "Ese año, en Costa Rica nace el Colectivo Las Ententidas (espacio de trabajo político afectivo) quienes trabajaban desde el apoyo mutuo, la visibilidad, la formación feminista y el posicionamiento frente a la comunidad lésbica del país."
  },
  {
    "id": 37,
    "fechaTitulo": "5-mar-1987",
    "fechaColor": "#fc4ebf",
    "fechaDescription": "Redada en el bar La Torre donde se detienen 253 personas"
  },
  {
    "id": 38,
    "fechaTitulo": "5-abr-1987",
    "fechaColor": "#fc4ebf",
    "fechaDescription": "Denuncia pública sobre la violencia contra la población que es publicada en el periódico La Nación y firmada por personas políticas, artistas, intelectuales, académicas. Esto lleva a la eventual desinstitucionalización de las redadas."
  },
  {
    "id": 39,
    "fechaTitulo": 1990,
    "fechaColor": "#63CFC2",
    "fechaDescription": "Elecciones en Nicaragua. Violeta Chamorro, candidata de la Unión Nacional Opositora, supera al Frente Sandinista por la Liberación Nacional"
  },
  {
    "id": 40,
    "fechaTitulo": "11-15-abril-1990",
    "fechaColor": "#fc4ebf",
    "fechaDescription": "Se realiza en CR el II Encuentro Lésbico Feminista de Latinoamérica y el Caribe (II ELFLAC). Las autoridades costarricenses prohibieron, extender visas o el ingreso de mujeres que viajasen “solas”. Las autoridades religiosas por su parte, también censuraron esa “reunión de lesbianas” porque las lesbianas ocasionaban daños a la “moral y buenas costumbres”."
  },
  {
    "id": 41,
    "fechaTitulo": "sin Fecha - finales 90s",
    "fechaColor": "gray",
    "fechaDescription": ""
  },
  {
    "id": 42,
    "fechaTitulo": 1998,
    "fechaColor": "#63CFC2",
    "fechaDescription": "Nicaragua detiene a miembros de la Guardia Civil costarricense que navegaban por el río San Juan. Costa Rica presentó una solicitud ante la Corte Internacional de la Haya al sentir violentados sus derechos de navegación en el río San Juan”"
  },
  {
    "id": 43,
    "fechaTitulo": 2000,
    "fechaColor": "#fc4ebf",
    "fechaDescription": "En Costa Rica Nace CIPAC (Centro de Investigación y Promoción para América Central de Derechos Humanos). Busca el pleno reconocimiento y ejercicio de los derechos humanos, de las poblaciones vulnerabilizadas por su orientación sexual o género."
  },
  {
    "id": 44,
    "fechaTitulo": 2003,
    "fechaColor": "#fc4ebf",
    "fechaDescription": "CIPAC organiza el Primer Festival del Orgullo Gay en Costa Rica"
  },
  {
    "id": 45,
    "fechaTitulo": 2005,
    "fechaColor": "#fc4ebf",
    "fechaDescription": "En Costa Rica Se organiza el grupo “Orgullo Lésbico” con la intención de rescatar la memoria de los últimos treinta años de luchas. Producen una obra de teatro así como el Festival del Orgullo."
  },
  {
    "id": 46,
    "fechaTitulo": 2005,
    "fechaColor": "#63CFC2",
    "fechaDescription": "Costa Rica presenta una solicitud ante la Corte Internacional de Justicia de La Haya, contra Nicaragua por los derechos de navegación en el Río.."
  },
  {
    "id": 47,
    "fechaTitulo": "8-mar-05",
    "fechaColor": "#9ACD32",
    "fechaDescription": "Asalto al Banco Nacional de Santa Elena, Monteverde, Costa Rica por parte de tres hermanos de origen nicaraguense. El asalto falla desde el inicio y deriva en el secuestro de 33 personas, de las cuales 5 resultaron muertas, a las que se le suman dos de los tres asaltantes. Es el hecho más sangriento - hasta ese momento- de la historia de la delincuencia común en Costa Rica."
  },
  {
    "id": 48,
    "fechaTitulo": "10-nov-2005",
    "fechaColor": "#9ACD32",
    "fechaDescription": "Natividad Canda Mairena es un joven migrante nicaragüense en Costa Rica que muere como consecuencia del ataque de tres perros, dos de raza rottweiler y un pastor alemán, al ingresar sin permiso a una propiedad privada. El Estado Costarricense eximió -dos veces- de responsabilidad a las personas señaladas como responsables de la muerte: el dueño del taller, el vigilante de seguridad privada y dos miembros de la Fuerza Pública. Este caso pone en evidencia casos de discriminación y xenofobia contra migrantes nicaragüenses en suelo costarricense"
  },
  {
    "id": 49,
    "fechaTitulo": 2007,
    "fechaColor": "#fc4ebf",
    "fechaDescription": "Nace la Coordinadora del Beso Diverso. Esta colectiva fue la primera en utilizar las herramientas performáticas para ocupar el espacio público, quienes organizan las Rutas del Beso Diverso, dirigidas a comercios que violentan el contacto afectivo entre personas de la población LGTBIQ+. Llegaron a realizar más de 15 ediciones de la Ruta entre el 2007 y el 2015."
  },
  {
    "id": 50,
    "fechaTitulo": 2009,
    "fechaColor": "#fc4ebf",
    "fechaDescription": "Nace la Asociación TRANSVIDA en Costa Rica dirigida a apoyar a mujeres trans que realizan comercio sexual y/o que están en condiciones de vulnerabilidad."
  },
  {
    "id": 51,
    "fechaTitulo": "sin Fecha - finales 2000s",
    "fechaColor": "gray",
    "fechaDescription": ""
  },
  {
    "id": 52,
    "fechaTitulo": 2010,
    "fechaColor": "#63CFC2",
    "fechaDescription": "Nicaragua inicia trabajos de dragado a lo largo del río San Juan, trabajos a los que el gobierno costarricense se oponía aduciendo temas ambientales. El conflicto fue aumentando a partir de acusaciones mutuas de incursiones en territorio ajeno y alusiones a la presencia de narcotraficantes en el área de conflicto. En esta ocasión Costa Rica recurre primero a la OEA y después, nuevamente a la Corte Internacional de Justicia de La Haya, que dicta su sentencia en 2015 mayoritariamente a favor de las demandas de Costa Rica."
  },
  {
    "id": 53,
    "fechaTitulo": 2011,
    "fechaColor": "#fc4ebf",
    "fechaDescription": "Se realiza en Costa Rica la manifestación Invisibles una convocatoria por parte del activismo joven y universitario lgtbi para organizar una de las manifestaciones más significativas e importantes para la comunidad porque articuló, organizó y vio madurar al activismo LGBTIQ."
  },
  {
    "id": 54,
    "fechaTitulo": "sin Fecha - inicios 2010s",
    "fechaColor": "gray",
    "fechaDescription": ""
  },
  {
    "id": 55,
    "fechaTitulo": 2012,
    "fechaColor": "#fc4ebf",
    "fechaDescription": "Por primera vez en la historia del certamen “Miss Gay” en Nicaragua, se realiza en el Teatro Nacional Ruben Dario, auspiciado por el mismo estado y transmitido por televisión Nacional."
  },
  {
    "id": 56,
    "fechaTitulo": 2013,
    "fechaColor": "#fc4ebf",
    "fechaDescription": "En Nicaragua se realiza la primera edición de “Operación Queer”, una fiesta marica con una vision critica a las celebraciones del orgullo gay capitalista. La fiesta se da en la “El Caramanchel, una popular disco en la Loma de Tiscapa."
  },
  {
    "id": 57,
    "fechaTitulo": 2015,
    "fechaColor": "#fc4ebf",
    "fechaDescription": "Costa Rica incluyó la orientación sexual y la identidad de género como parte de los elementos de vulnerabilidad, en el análisis de la situaciòn de las personas que solicitan refugio."
  },
  {
    "id": 58,
    "fechaTitulo": 2018,
    "fechaColor": "#fc4ebf",
    "fechaDescription": "Se realiza la última marcha del orgullo gay en Nicaragua."
  },
  {
    "id": 59,
    "fechaTitulo": 2018,
    "fechaColor": "#9ACD32",
    "fechaDescription": "Ola masiva de migración de Nicaragüenses hacia Costa Rica."
  },
  {
    "id": 60,
    "fechaTitulo": 2018,
    "fechaColor": "#fc4ebf",
    "fechaDescription": "La Corte Interamericana de Derechos Humanos resolvió para Costa Rica que la población trans debe de tener el derecho al cambio de nombre en los documentos nacionales de identidad."
  },
  {
    "id": 61,
    "fechaTitulo": 2018,
    "fechaColor": "#fc4ebf",
    "fechaDescription": "El gobierno de Costa Rica firmó una política para que las personas trans migrantes puedan cambiar su nombre registral, por el que está de acuerdo con su identidad"
  },
  {
    "id": 62,
    "fechaTitulo": "sin Fecha - finales 2010",
    "fechaColor": "gray",
    "fechaDescription": ""
  },
  {
    "id": 63,
    "fechaTitulo": "sin Fecha - finales 2010",
    "fechaColor": "gray",
    "fechaDescription": ""
  },
  {
    "id": 64,
    "fechaTitulo": "sin Fecha - finales 2010",
    "fechaColor": "gray",
    "fechaDescription": ""
  },
  {
    "id": 65,
    "fechaTitulo": "sin Fecha - finales 2010",
    "fechaColor": "gray",
    "fechaDescription": ""
  },
  {
    "id": 66,
    "fechaTitulo": 2020,
    "fechaColor": "#63CFC2",
    "fechaDescription": "Pandemia del Covid-19"
  },
  {
    "id": 67,
    "fechaTitulo": "26-may-2020",
    "fechaColor": "#fc4ebf",
    "fechaDescription": "Se deroga la prohibición legal para que personas del mismo sexo puedan acceder a la figura legal del matrimonio en Costa Rica."
  }
]