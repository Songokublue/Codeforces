const xhr=new XMLHttpRequest();

xhr.onload=function(){
  if(this.status==200){
    try{
      const obj=JSON.parse(this.responseText);
      var arr=obj.result;

      var table=document.getElementById("myTable");
      table.innerHTML="";
      var tr="";
      for(var i=30;i<200;i++){
        if(arr[i].phase!="BEFORE"){
        var duration=arr[i].durationSeconds/3600;
        duration=duration.toFixed(2);
        tr+='<tr>';
        tr+='<td>'+arr[i].name+'</td>'+'<td>'+arr[i].type+'</td>'+'<td>'+duration+'</td>';
        tr+='</tr>';
      }
      }
      table.innerHTML+=tr;

    }catch(error){
      console.warn("ERROR");
    }
  }else{
    console.warn("ERROR");
  }



};

xhr.open('get','https://codeforces.com/api/contest.list');
xhr.send();
