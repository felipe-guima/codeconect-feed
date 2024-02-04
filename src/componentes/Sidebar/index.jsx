import Logo from "./assets/Logo.svg";
import Feed from "./assets/feed.svg";
import Perfil from "./assets/account_circle.svg";
import Sobre from "./assets/info.svg";
import Sair from "./assets/logout.svg";
import styled from 'styled-components'

//  teste usando styled components
const ContainerSidbar = styled.aside`
background-color: var(--cinza-escuro);
padding: 2.5em 1em;
width: 177px;
border-radius: 8px;
`
const ListaSidbar = styled.ul`
display: flex;
flex-direction: column;
gap: 2.5em;
list-style-type: none;
margin-top: 5em;
`


const ItemSidbar = styled.a`
  display: flex;
  flex-direction:column;
  align-items: center;
  font-size: 22px;
  gap: 10px;
  text-decoration: none;
  color: var(--cinza-claro);
`

const ItemSidbarAtivo = styled.a`
  display: flex;
  flex-direction:column;
  align-items: center;
  font-size: 22px;
  gap: 10px;
  text-decoration: none;
  color: var(--branco);
`
const BotaoSidbarPublicar = styled.a`
  border: 1px solid var(--verde-destaque);
  color: var(--verde-destaque);
  padding: 0.75em 1em;
  border-radius: 8px;
  text-decoration: none;

  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 22px;
  gap: 10px;
`

export default function Sidbar() {
  return (
    <ContainerSidbar>
      <img src={Logo} alt="Logo da pagina codeconect"></img>
      <nav>
        <ListaSidbar>
          <li>
            <BotaoSidbarPublicar href="#">Publicar</BotaoSidbarPublicar>
          </li>
          <li>
            <ItemSidbarAtivo href="#">
              <img src={Feed} alt="" />
              <span>Feed</span>
            </ItemSidbarAtivo>
          </li>
          <li>
            <ItemSidbar href="#">
              <img src={Perfil} alt="" />
              <span>Perfil</span>
            </ItemSidbar>
          </li>
          <li>
          <ItemSidbar href="#">
              <img src={Sobre} alt="" />
              <span>Sobre Nós</span>
          </ItemSidbar>
          </li>
          <li>
          <ItemSidbar href="#">
              <img src={Sair} alt="" />
              <span>Sair</span>
          </ItemSidbar>
          </li>
        </ListaSidbar>
      </nav>
    </ContainerSidbar>
  );
}
