

const xhr1=new XMLHttpRequest();

xhr1.onload=function(){
  if(this.status==200){
    try{
      const obj=JSON.parse(this.responseText);
      var arr=obj.result;
      var table1=document.getElementById("myTable1");
      table1.innerHTML="";
      var tr1="";
      for(var i=0;i<20;i++){
        if(arr[i].phase=="BEFORE"){
        var duration=arr[i].durationSeconds/3600;
        tr1+='<tr>';
        tr1+='<td>'+arr[i].name+'</td>'+'<td>'+arr[i].type+'</td>'+'<td>'+duration+'</td>';
        tr1+='</tr>';
      }
      }
      table1.innerHTML+=tr1;


      var table2=document.getElementById("myTable2");
      table2.innerHTML="";
      var tr2="";
      for(var i=0;i<30;i++){
        if(arr[i].phase!="BEFORE"){
        var duration=arr[i].durationSeconds/3600;
        duration=duration.toFixed(2);
        tr2+='<tr>';
        tr2+='<td>'+arr[i].name+'</td>'+'<td>'+arr[i].type+'</td>'+'<td>'+duration+'</td>';
        tr2+='</tr>';
      }
      }
      table2.innerHTML+=tr2;

    }catch(error){
      console.warn("ERROR");
    }
  }else{
    console.warn("ERROR");
  }



};

xhr1.open('get','https://codeforces.com/api/contest.list');
xhr1.send();





const xhr2=new XMLHttpRequest();
var array;
xhr2.onload=function(){
  if(this.status==200){
    try{
      const obj=JSON.parse(this.responseText);

      var arr=obj.result;
      array=arr;

      var table3=document.getElementById("myTable3");
      table3.innerHTML="";
      var tr3="";
      for(var i=0;i<20;i++){

        tr3+='<tr>';
        tr3+='<td>'+arr[i].firstName+"  "+arr[i].lastName+'</td>'+'<td>'+arr[i].rating+'</td>'+'<td>'+arr[i].rank+'</td>';
        tr3+='</tr>';

      }
      table3.innerHTML+=tr3;

    }catch(error){
      console.warn("ERROR");
    }
  }else{
    console.warn("ERROR");
  }



};

xhr2.open('get','https://codeforces.com/api/user.ratedList?activeOnly=true');
xhr2.send();





function func1(){

  var userName=document.getElementById("username").value;
   if(userName==""){
     alert("No Such User Found");
     return;
   }




        var arrLength=array.length;

        var table1=document.getElementById("table");
        table1.innerHTML="";
        var tr1="";

        var table2=document.getElementById("tableHead");
        table2.innerHTML="";
        var tr2="";

        var i=0;
        for(i=0;i<arrLength;i++){


          if(array[i].handle==userName){

          tr2+='<tr>';
          tr2+='<th class="header4">'+"Name"+'</th>'+'<th class="header4">'+"Rating"+'</th>'+'<th class="header4">'+"Contribution"+'</th>';
          tr2+='</tr>';

          tr1+='<tr>';
          tr1+='<td>'+array[i].firstName+"  "+array[i].lastName+'</td>'+'<td>'+array[i].rating+'</td>'+'<td>'+array[i].contribution+'</td>';
          tr1+='</tr>';

          break;

        }

      }
      if(i==arrLength)
         alert("No Such User Found");

        table2.innerHTML+=tr2;
        table1.innerHTML+=tr1;











}
