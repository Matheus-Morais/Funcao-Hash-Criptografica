;(function () {
  var arquivo = document.getElementById('arquivo')
  var arquivo2 = document.getElementById('arquivo2')
  var x, a1, a2
  document.getElementById('calcular').addEventListener(
    'click',
    function (event) {
      event.preventDefault()
      document.getElementById('hash').value = md5(arquivo.value)
      document.getElementById('hash2').value = md5(arquivo2.value)
      a1 = md5(arquivo.value)
      a2 = md5(arquivo2.value)
      if(a1 == a2){
          x = 'True'
      }
      else{
        x = 'False'
      }
      document.getElementById('resultado').value = x
    }
  )
}())