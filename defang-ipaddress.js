var defangIP = (address)=>{
    let defang="";
    for(var i=0;i<address.length;i++){
	    if(address.charAt(i)==='.')
		    defang+="[.]";
	    else
		    defang+=address.charAt(i);
    }
    return defang;
};