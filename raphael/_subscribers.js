//Subscribers
//'this' references within subscribers need to be bound

//init
GNS.init.subscribe(GNS.init.arr,'initPage_dataReceived');

//raph
GNS.init.subscribe(GNS.raph.setPaper,'initRaph_paperReady');
GNS.init.subscribe(GNS.raph.draw,'initArr_arrayConstructed');