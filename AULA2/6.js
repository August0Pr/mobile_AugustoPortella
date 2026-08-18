class Produto:
    def __init__(self, nome, preco_inicial):
        self.nome = nome
        self.__preco = preco_inicial  # Encapsulamento

    @property
    def preco(self):
        return self.__preco

    @preco.setter
    def preco(self, novo_preco):
        if novo_preco > 0:
            self.__preco = novo_preco
        else:
            print(f"❌ Erro: O preço do produto '{self.nome}' deve ser positivo!")
class FormaPagamento:
    def processar_pagamento(self, valor):
        # Método que será sobrescrito pelas filhas
        pass

class PagamentoPix(FormaPagamento): # Herança
    def processar_pagamento(self, valor): # Polimorfismo (Sobrescrita)
        valor_com_desconto = valor * 0.90
        print(f"⚡ Pix processado! Valor original: R${valor:.2f} | Com 10% de desconto: R${valor_com_desconto:.2f}")

class PagamentoCartao(FormaPagamento): # Herança
    def processar_pagamento(self, valor): # Polimorfismo (Sobrescrita)
        valor_com_taxa = valor + 2.00
        print(f"💳 Cartão processado! Valor original: R${valor:.2f} | Com taxa de R$2,00: R${valor_com_taxa:.2f}")

class CarrinhoDeCompras:
    def __init__(self):
        self.__itens = [] # Lista encapsulada

    def adicionar_produto(self, produto):
        self.__itens.append(produto)
        print(f"🛒 {produto.nome} adicionado ao carrinho.")

    def calcular_total(self):
        total = 0
        for produto in self.__itens:
            total += produto.preco
        return total

    def finalizar_compra(self, forma_pagamento):
        total = self.calcular_total()
        if total == 0:
            print("⚠️ O carrinho está vazio!")
            return
        
        print(f"\n--- FECHAMENTO REQUISITADO ---")
        # Polimorfismo em ação: Não importa qual pagamento foi passado, o carrinho só chama o método padrão
        forma_pagamento.processar_pagamento(total)

# 1. Instanciando Objetos (Produtos)
p1 = Produto("Notebook Gamer", 4500.0)
p2 = Produto("Mouse Sem Fio", 150.0)

# Testando o encapsulamento (tentando colocar preço negativo)
p2.preco = -50  # Deve exibir a mensagem de erro

# 2. Criando o Carrinho e adicionando os produtos
meu_carrinho = CarrinhoDeCompras()
meu_carrinho.adicionar_produto(p1)
meu_carrinho.adicionar_produto(p2)

# 3. Criando as formas de pagamento
pix = PagamentoPix()
cartao = PagamentoCartao()

# 4. Finalizando a compra (Testando Polimorfismo)
# Teste 1: Pagando com Pix
meu_carrinho.finalizar_compra(pix)

# Teste 2: Pagando com Cartão
meu_carrinho.finalizar_compra(cartao)
