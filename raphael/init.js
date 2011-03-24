//init page
//fire request for data and publish result on receipt
GNS.init.page=function(){

    //private
    var that=this;

    $.ajax({
        url: 'https://spreadsheets.google.com/feeds/list/0AhIGCcLPfszddG5XQi1QWTJYTGc3QnBSTEZxYzN3ZGc/od6/public/values?alt=json',
        dataType: 'json',
        success:function(data,textStatus,jqXHR){
            that.publish.apply(that,[data,'initPage_dataReceived']);//====================================== publication
        }
    });
};

//init data array
//turn received json data into usable array
GNS.init.arr=function(data){//data = google's JSON obj passed from publisher

    //private
    var i,
        arr=[],
        dfe=data.feed.entry;

    for(i in dfe){
        arr.push(dfe[i].gsx$balance.$t);
    }
    this.publish(arr,'initArr_arrayConstructed');//========================================================= publication
}.bind(GNS.init);//bound here to init b/c this actually gets fired under a different context

//init raphael
GNS.init.raph=function(){
    var paper = Raphael('raphaelCanvas',647,400);
    var c = paper.rect(0,0,647,400,5);
    c.attr('fill','#eeeeee');
    this.publish(paper,'initRaph_paperReady');//============================================================ publication
};