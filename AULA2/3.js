
aluno = {
    "nome": "João",
    "idade": 20,
    "curso": "Informática"
}

print("Nome do aluno:", aluno["nome"])

alunos = {
    1: {"nome": "Gabriel", "idade": 20, "curso": "Informática"},
    2: {"nome": "Murillo", "idade": 22, "curso": "Administração"}
}

alunos[3] = {"nome": "Pedro", "idade": 19, "curso": "Engenharia"}

alunos[1]["nome"] = "João Silva"


alunos[2]["idade"] = 23

del alunos[3]

print("\nLista de alunos:")
for id_aluno, dados in alunos.items():
    print("ID:", id_aluno)
    print("Nome:", dados["nome"])
    print("Idade:", dados["idade"])
    print("Curso:", dados["curso"])
    print("----------------")

print("\nCadastro de novo aluno")

novo_aluno = {}
novo_aluno["nome"] = input("Digite o nome: ")
novo_aluno["idade"] = int(input("Digite a idade: "))
novo_aluno["curso"] = input("Digite o curso: ")

print("\nDados do aluno cadastrado:")
print(novo_aluno)