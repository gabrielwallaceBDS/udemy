from PySimpleGUI import PySimple as sg 


# Layout
sg.theme('Reddit')
layout = [
	[sg.Text('usuario'), sgInput(key='usuario', size=(20,1))]
	[sg.Text('senha'), sgInput(key='senha', password_char='*',
	size=(20,1))],
	[sg.Checbox('Salvar Login')],
	[sg.Button('entrar')]
]
#JANELA
JANELA = sgWindow('tela login', layout)
# ler eventos
while True : 
eventos, valores = janela.read()
if eventos == sg.WINDOW_CLOSED:
break
if valores == 'ENTRAR':
IF VALORES ['usuario'] == 'dede' and valores['senha']
=='bebedopai':
print('bem vindo')