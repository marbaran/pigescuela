from django import forms


class ContactoForm(forms.Form):
    nombre = forms.CharField(label="NOMBRE", required=True)
    apellido = forms.CharField(label="APELLIDO", required=True)
    email = forms.EmailField(label="EMAIL", required=True)
    #mensaje = forms.TextInput(label="MENSAJE", required=True)
    mensaje = forms.CharField(label="MENSAJE", widget=forms.Textarea(attrs={'rows': 10}))