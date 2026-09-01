import { View, Text } from 'react-native';

function CartaoProduto({ nome, preco }) {
  return (
    <View>
      <Text>{nome}</Text>
      <Text>R$ {preco.toFixed(2)}</Text>
    </View>
  );
}

export default function App() {
  const nome = 'Augusto';
  const idade = 17;
  const cidade = 'Cascavel';

  const produtos = [
    { nome: 'Teclado', preco: 120.00 },
    { nome: 'Mouse', preco: 60.00 },
    { nome: 'Monitor', preco: 900.00 }
  ];

  return (
    <View>
      <Text style={{ color: 'blue' }}>{nome}</Text>
      <Text>{idade} anos</Text>
      <Text>{cidade}</Text>

      {produtos.map((produto) => (
        <Text key={produto.nome}>
          {produto.nome} - R${produto.preco.toFixed(2)}
        </Text>
      ))}

      {produtos.map((p) => (
        <CartaoProduto
          key={p.nome}
          nome={p.nome}
          preco={p.preco}
        />
      ))}
    </View>
  );
}