var tx = new Array ("Lucas'","Résumé");
var txcount=2, i=1, wo=0, ud=1;
function animatetitle() {
	window.document.title=tx[wo].substr(0, i)+"_";
	if (ud==0) i--;
	if (ud==1) i++;
	if (i==-1) {ud=1;i=0;wo++;wo=wo%txcount;}
	if (i==tx[wo].length+10) {ud=0;i=tx[wo].length;}
	parent.window.document.title=tx[wo].substr(0, i)+"_";
	setTimeout("animatetitle()",100);
}
