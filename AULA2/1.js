
print("1) Números de 1 até 10:")
for i in range(1, 11):
    print(i)

print("----------------------")

print("2) Números de 1 até 20:")
for i in range(1, 21):
    print(i)

print("----------------------")

print("3) Números de 10 até 1:")
for i in range(10, 0, -1):
    print(i)

print("----------------------")


print("4) Contagem até o número digitado:")
numero = int(input("Digite um número: "))

i = 1
while i <= numero:
    print(i)
    i += 1

print("----------------------")


print("5) Soma dos números de 1 até 10:")
soma = 0

for i in range(1, 11):
    soma += i

print("A soma é:", soma)