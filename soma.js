<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Somando Valores</title>
    <style>
        body {
            font: normal 18pt arial;
        }
        input {
            font: normal 18pt Arial;
            width: 180px;
        }
        div#res {
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <h1>Somando Valores</h1>
    <input type="number" name="txtn1" id="txtn1"> + <!-- Input serve para fazer um espaço de interação -->
    <input type="number" name="txtn2" id="txtn2">
    <input type="button" value="Somar" onclick="somar()">
    <div id="res">Resultado</div>
    <script>
        function somar() { 
          var tn1 = document.getElementById('txtn1')
          var tn2 = document.querySelector('input#txtn2')
          var res = document.getElementById('res')
          var n1 = Number(tn1.value)
          var n2 = Number(tn2.value)
          var s = n1 + n2
          res.innerHTML = `A soma entre <strong>${n1}</strong> e <strong>${n2}</strong> é igual a: <strong>${s}</strong>`
        }
    </script>
</body>
</html>
