function load1(){
    var x = document.getElementById("cardsload1");
    x.style.display = "block";
    var y= document.getElementById("load1div");
    y.style.display = "none";
    var z= document.getElementById("load2div");
    z.style.display = "flex";
}
function load2(){
    var x = document.getElementById("cardsload2");
    x.style.display = "block";
    var y= document.getElementById("load2div");
    y.style.display = "none";
    var z= document.getElementById("load3div");
    z.style.display = "flex";
}
function load3(){
    var x = document.getElementById("cardsload3");
    x.style.display = "block";
    var y= document.getElementById("load3div");
    y.style.display = "none";
}
function rank(){
    var rank = document.getElementById("rank").value;
    if(rank>16 && rank<305){
     document.getElementById("IITB").style.display = "block";
    }
    if(rank>112 && rank<305){
     document.getElementById("IITKGP").style.display = "block";
    }
    if(rank>1201 && rank<1366){
        document.getElementById("IITGN").style.display = "block";
       }
       if(rank>1702 && rank<2769){
        document.getElementById("IITBBN").style.display = "block";
       }
       if(rank>6 && rank<175){
        document.getElementById("IITMAD").style.display = "block";
       }
       if(rank>415 && rank<589){
        document.getElementById("IITGUW").style.display = "block";
       }
       if(rank>671 && rank<1204){
        document.getElementById("IITIND").style.display = "block";
       }
       if(rank>107 && rank<237){
        document.getElementById("IITKAN").style.display = "block";
       }
	if(rank>1319 && rank<2430){
        document.getElementById("IITJOD").style.display = "block";
       }
if(rank>368 && rank<608){
        document.getElementById("IITHYD").style.display = "block";
       }
if(rank>1491 && rank<2685){
        document.getElementById("IITPAT").style.display = "block";
       }
if(rank>29 && rank<102){
        document.getElementById("IITDEL").style.display = "block";
       }
if(rank>945 && rank<1883){
        document.getElementById("IITRPR").style.display = "block";
       }
       if(rank>1846 && rank<3017){
        document.getElementById("IITMAN").style.display = "block";
       }
if(rank>271 && rank<413){
        document.getElementById("IITROR").style.display = "block";
       }
if(rank>426 && rank<897){
        document.getElementById("IITBHU").style.display = "block";
       }
if(rank>3062 && rank<4602){
        document.getElementById("IITJK").style.display = "block";
       }
if(rank>1133 && rank<4011){
        document.getElementById("IITTP").style.display = "block";
       }
if(rank>2538 && rank<3839){
        document.getElementById("IITGOA").style.display = "block";
       }
if(rank>3952 && rank<5172){
        document.getElementById("IITBHI").style.display = "block";
       }
if(rank>3944 && rank<4777){
        document.getElementById("IITDHAR").style.display = "block";
       }
if(rank>1389 && rank<3009){
        document.getElementById("IITDHAN").style.display = "block";
       }
}