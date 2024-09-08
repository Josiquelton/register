
import './App.css'
import Computer from"../src/assets/ComputadorTabletCelularSOBLEC.jpg";
import Copy from "../src/assets/copy.jpeg";
function App() {
  

  return (
    <>
    {/* Inicio do código*/}
      <div className="menu">
        <nav>
        
          <h1>Blog</h1><ul><li><a href="http://127.0.0.1:5500/copywriting/cadastro/index.html">Pagina Principal</a></li></ul>
          <img id="img" src={Copy} alt="copy"/>
        </nav>
      </div>
      <div className='text'>
        
         <h5>
         É fundamental que um 
         produtor de conteúdo entenda 
         os princípios da escrita para conseguir<br/>
          engajar os seus leitores com informações<br/>
           úteis e de qualidade. Por isso, você precisa 
         conhecer os melhores exemplos de <span>Copywriting.</span>
         </h5>
        </div>
        <img src={Computer} alt="computer"/>
        <h1 className='copy'>Copywriting:<br/>
         Guia Completo de Carreira,<br/> Dicas e Técnicas.</h1>
         <p/><p/>
         <div className='body'>
          <h6>
           No universo do marketing digital, o poder das palavras é inegável — <br/>e quando se 
           trata de alcançar o seu público-alvo de forma impactante,<br/>
            as técnicas de <span>copywriters</span> podem ser o segredo do sucesso.<br/> Neste artigo,
             mergulharemos na arte de utilizar gatilhos
             mentais no <br/>conteúdo de textos para sites, anúncios, 
            postagens em redes sociais,<br/>
           emails e muito mais. Vamos revelar como <span>copywriters</span> empregam 
           essas<br/> estratégias para conquistar a atenção e o coração dos leitores.

          <br/>Os gatilhos mentais, por sua natureza persuasiva, têm o poder de transformar simples parágrafos 
          <br/>em mensagens cativantes e irresistíveis.<br/> Ao conhecer e aplicar
           essas técnicas,<br/> você poderá criar campanhas 
          que não apenas geram interesse, mas também impulsionam ações desejadas, <br/>
          de conversões em vendas a engajamento com o conteúdo ou o fortalecimento da conexão entre marca e cliente.
          </h6>
         </div>

         <span className='link'><a href="http://localhost:5173">Ir para o Topo</a></span>
    </>
  )
}

export default App
