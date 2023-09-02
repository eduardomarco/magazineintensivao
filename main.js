import { renderizarCatalogo } from "./src/cartaoProduto";
import { inicializarCarrinho, renderizarProdutosCarrinho } from "./src/menuCarrinho";
import { atualizarPrecoCarrinho } from "./src/menuCarrinho";
import { inicializarFiltros } from "./src/filtrosCatalogo";

renderizarCatalogo();
inicializarCarrinho();
renderizarProdutosCarrinho();
atualizarPrecoCarrinho();
inicializarFiltros();

