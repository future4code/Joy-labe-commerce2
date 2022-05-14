import barbieAstronauta from "../barbie-astronauta.jpg"
import estacaoEspacial from "../estacao-espacial.jpeg"
import onibusEspacial from "../onibus-espacial.jpg"
import ursinhoAstronauta from "../ursinho-astronauta.jpg"
import camiseta1 from "../camiseta1.jpg"
import camiseta3 from "../camiseta3.jpg"
import camiseta4 from "../camiseta4.jpg"
import macacaoAstronauta from "../macacao-astronauta.jpeg"
import capaceteAstronauta from "../capacete-astronauta.jpg"
import kitAstronauta from "../kit-astronauta.jpg"


 // página responsável por listar os produtos da loja virtual;
 
export const listaDeProdutos = [
    //brinquedos
    {
      id: 1,
      name: "Barbie Astronauta",
      valor: 99.99,
      imageUrl: barbieAstronauta,
      categoria: "Brinquedos com tema espacial",
    },
  
    {
      id: 2,
      name: "Estação Espacial",
      valor: 200.10,
      imageUrl: estacaoEspacial,
      categoria: "Brinquedos com tema espacial"
    },
    {
      id: 3,
      name: "Ônibus Espacial",
      valor: 200.60,
      imageUrl: onibusEspacial,
      categoria: "Brinquedos com tema espacial"
    },
    {
      id: 4,
      name: "Ursinho Astronauta",
      valor: 20000,
      imageUrl: ursinhoAstronauta,
      categoria: "Brinquedos com tema espacial"
    },
    //camisetas com estampa
    {
      id: 5,
      name: "Camiseta estampa astronauta",
      valor: 300.50,
      imageUrl: camiseta1,
      categoria: "Camisetas com estampas divertidas do espaço"
    },
    {
      id: 6,
      name: "Camiseta estampa nasa",
      valor: 90.50,
      imageUrl: camiseta3,
      categoria: "Camisetas com estampas divertidas do espaço"
    },
    {
      id: 7,
      name: "Camiseta estampa balões planetas",
      valor: 100.50,
      imageUrl: camiseta4,
      categoria: "Camisetas com estampas divertidas do espaço"
    },
  
    //roupas espaciais
    {
      id: 8,
      name: "Macacão Astronauta",
      valor: 100.50,
      imageUrl: macacaoAstronauta,
      categoria: "Roupas espaciais"
    },
  
    {
      id: 9,
      name: "Capacete de astronauta",
      valor: 100.50,
      imageUrl: capaceteAstronauta,
      categoria: "Roupas espaciais"
    },
  
    {
      id: 10,
      name: "Kit de Astronauta",
      valor: 230.50,
      imageUrl: kitAstronauta,
      categoria: "Roupas espaciais"
    }  
]