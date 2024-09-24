import { Aluno } from "./components/aluno";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
export default function App(){
  return(
    <div>
      <Header/>
      <h1>
        Meu primeiro projeto
      </h1>
      <Aluno nome="Vitor Giacomini" idade={24}/>
      <Footer/>
    </div>
  )
}
