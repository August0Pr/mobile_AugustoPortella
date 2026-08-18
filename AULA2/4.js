def verificar_acesso(idade):
    return idade >= 18


def calcular_salario_liquido(salario_bruto):
    imposto = salario_bruto * 0.10
    return salario_bruto - imposto


# Programa principal

# Verificação de acesso
idade = int(input("Digite sua idade: "))

if verificar_acesso(idade):
    print("Acesso Liberado")
else:
    print("Acesso Negado")

print("-" * 30)

# Cálculo de salário
salario = float(input("Digite o salário bruto: R$ "))

salario_final = calcular_salario_liquido(salario)

print(f"Salário líquido: R$ {salario_final:.2f}")