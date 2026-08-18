
produto = input("Digite o nome do produto: ")
preco = float(input("Digite o preço unitário do produto: R$ "))


quantidade = int(input("Quantos itens foram vendidos? "))

for i in range(1, quantidade + 1):
    print(f"Processando item {i}...")

total = preco * quantidade

if total >= 100:
    total *= 0.9  
    print("Desconto de 10% aplicado!")
else:
    print("Valor sem desconto")

print("\n--- Resumo da Venda ---")
print(f"Produto: {produto}")
print(f"Valor total final: R$ {total:.2f}")