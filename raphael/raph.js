GNS.raph.setPaper=function(paper){
    this.paper=paper;
}.bind(GNS.raph);

GNS.raph.draw=function(array){//balances array

    //private
    var pap=this.paper,
        papW=pap.width,
        papH=pap.height,
        bals=array,
        balsLength=bals.length,
        balCoords=[],
        balPts=[],
        plotGap=papW/(balsLength-1), //horizontal separation between data points - 20 gutter ene either side
        balMin=Math.min.apply(Math,array),
        balMax=Math.max.apply(Math,array),
        scale=(papH-40)/balMax,
        pathDef,
        path;

    //construct balance coordinates array + path definition
    pathDef='M0 '+(papH-(bals[0]*scale));//start the path definition
    $(bals).each(function(i){
        balCoords.push({x:i*plotGap,y:papH-(bals[i]*scale)});//bal coordinates array
        pathDef+='L'+balCoords[i].x+' '+balCoords[i].y;//path construction
    });

    //draw path
    path=pap.path().attr({
        stroke:'#007700',
        'stroke-width':2,
        path:pathDef
    });

    //attach balance points
    $(balCoords).each(function(i,el){
        balPts[i]=pap.circle(el.x,el.y,3).attr({
            stroke:'#070',
            fill:'#070'
        });
        $(balPts[i].node).hover(
            function(){
                balPts[i].scale(2,2);
            },
            function(){
                balPts[i].scale(1,1);
            }
        )
    });

}.bind(GNS.raph);