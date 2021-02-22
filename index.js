/*function func1(username){
const xhr1=new XMLHttpRequest();

xhr1.onload=function(){
  if(this.status==200){
    try{
      const obj=JSON.parse(this.responseText);
      var arr=obj.result;


      var count=0;
      for(var i=0;i<arr.length;++i){
        if(arr[i].author.participantType=="CONTESTANT"&&arr[i].contestId!=1468){
        if(arr[i].contestId!=arr[i+1].contestId){
          count++;
          console.log(arr[i].contestId);

          func2(arr[i].contestId,username);

    /*      (function(i){
            setTimeout(func2,3000,arr[i].contestId,username);
          })(i);

        }
      */

    /*    if(count==5){
          break;
        }

}

      }
    }catch(error){
      console.warn("ERROR");
    }
  }else{
    console.warn("ERROR");
  }



};

xhr1.open('get',`https://codeforces.com/api/user.status?handle=${username}&from=1&count=250`);
xhr1.send();

}





const xhr2=new XMLHttpRequest();

xhr2.onload=function(){
  if(this.status==200){
    try{
      const obj=JSON.parse(this.responseText);
      var arr=obj.result;



/*      for(var i = 0; i < 10; i++){
          (function(i){
              setTimeout(function(){
                  console.log( i);
              }, 1000);
          })(i);
      }
*/


  /*    for(var i=0;i<2;++i){
        (function(i){
          setTimeout(func1,3000,arr[i].handle);
        })(i);
      }
*/



/*
        for(var i=0;i<1;++i){
        console.log(arr[i].handle);
        func1(arr[i].handle);
        }


    }catch(error){
      console.warn("ERROR");
    }
  }else{
    console.warn("ERROR");
  }



};

xhr2.open('get','https://codeforces.com/api/user.ratedList?activeOnly=true');
xhr2.send();



function func2(contestId,username){
  const xhr3=new XMLHttpRequest();

  xhr3.onload=function(){
    if(this.status==200){
      try{
        const obj=JSON.parse(this.responseText);
        var arr=obj.result;
        var arrLength=arr.length;

        let table2=document.getElementById("myTableBody");
        table2="";

        for(var i=0;i<arrLength;++i){


        if(arr[i].handle==username){



          break;
        }



        }
      }catch(error){
        console.warn("ERROR");
      }
    }else{
      console.warn("ERROR");
    }



  };

  xhr3.open('get',`https://codeforces.com/api/contest.ratingChanges?contestId=${contestId}`);
  xhr3.send();


}

*/


function myFunc(){
  var username=document.getElementById("handle").value;
  const xhr1=new XMLHttpRequest();

  xhr1.onload=function(){
    if(this.status==200){
      try{
        const obj=JSON.parse(this.responseText);
        var arr=obj.result;

        var table1=document.getElementById("myTableHead");
        table1.innerHTML="";
        var tr1="";

        var table2=document.getElementById("myTableBody");
        table2.innerHTML="";



        tr1+='<tr>';
        tr1+='<th class="header5">'+"Contest"+'</th>'+'<th class="header5">'+"Rank"+'<th class="header5">'+"Old Rating"+'</th>'+'<th class="header5">'+"New Rating"+'</th>';
        tr1+='</tr>';


        var count=0;
        for(let i=0;i<arr.length-1;++i){
          if(arr[i].author.participantType=="CONTESTANT"&&arr[i].contestId!=1468&&arr[i].contestId!=1356){
          if(arr[i].contestId!=arr[i+1].contestId){
            count++;

            console.log(arr[i].contestId);
            var contestId=arr[i].contestId;











function fnc(){

          const xhr3=new XMLHttpRequest();

          xhr3.onload=function(){
            if(this.status==200){
              try{
                const object=JSON.parse(this.responseText);
                var ar=object.result;
                var arLength=ar.length;



                for(var i=0;i<arLength;++i){


                if(ar[i].handle==username){
                console.log(ar[i].contestName);

                table2.innerHTML+='<tr>'+'<td>'+ar[i].contestName+'</td>'+'<td>'+ar[i].rank+'</td>'+'<td>'+ar[i].oldRating+'</td>'+'<td>'+ar[i].newRating+'</td>'+'</tr>';
                  break;
                }



                }



              }catch(error){
                console.warn("ERROR");
              }
            }else{
              console.warn("ERROR");
            }



          };

          xhr3.open('get',`https://codeforces.com/api/contest.ratingChanges?contestId=${contestId}`);
          xhr3.send();


}

fnc();








          if(count==5){
            break;
          }

  }

        }
      }

      table1.innerHTML+=tr1;


      }catch(error){
        console.warn("ERROR");
      }
    }else{
      console.warn("ERROR");
    }



  };

  xhr1.open('get',`https://codeforces.com/api/user.status?handle=${username}&from=1&count=250`);
  xhr1.send();

}
