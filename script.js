function clik() {

  const result = document.getElementById('result')

  const data = document.getElementById('input').value;
  const arr = data.split(" ");
  let arr1='';
  for(let i = 0; i<arr.length;i++){
    for(let j=1;j<arr.length;j++){
      if(arr[i].length < arr[j].length){
        arr1 = arr[j]
      }
    }
  }
  result.innerHTML = arr1 +' : '+ arr1.length +' character'
  
}