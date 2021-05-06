import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://static.vecteezy.com/ti/vetor-gratis/p1/2002247-icone-de-avatar-de-mulher-negra-bonita-gr%C3%A1tis-vetor.jpg" 
          nome="Adriana Elias Ferreira" 
          descricao="Economista com experiência em Compras, Faturamento, Customer Management Service e Logística e Estudante Dev Full Stack."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://www.dicasdecurriculo.com.br/wp-content/uploads/2013/06/images-63.jpg" 
          nome="RelyOn Nutec Brasil (anterior Falck Safety Services Brasil)" 
          descricao=" Aquisição de insumos e equipamentos; emissão de notas fiscais e gerenciamento das faturas em aberto;
          organização da logística pessoal de embarque e desembarque de funcionários offshore;
          gerenciamento de serviços ao cliente." 
        />
        
        <CardGrande 
          imagem="https://www.dicasdecurriculo.com.br/wp-content/uploads/2013/06/images-63.jpg" 
          nome="Correios" 
          descricao="Gerenciamento de agências de atendimento único; execução de atividades bancárias e teusouraria;
          organização da logística pessoal de embarque e desembarque de funcionários offshore." 
        />
      </div>

      <div className="page-section-container">
        <h2>Contato</h2>
        <CardPequeno
          imagem="https://www.dicasdecurriculo.com.br/wp-content/uploads/2013/06/images-63.jpg" 
          nome="Contato" 
          descricao="E-mail: adrianaelifer@yahoo.com -
          Endereço: Rua Batista de Oliveira, 1013 Jardim Bonito - Rio das Ostras/RJ"
          />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
