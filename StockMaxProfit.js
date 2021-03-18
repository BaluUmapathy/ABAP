var maxProfit = function(prices) {
    
    
//    var buyIndex = 0;
//    var sellIndex = 1;
//    var sell = prices[1];
//    var buy = prices[0];
//    var maxProfit = sell - buy;
//    
//    if ( maxProfit < 0) {
//        buy = sell;
//        maxProfit = sell = 0;
//        buyIndex = 1;
//        sellIndex = 2;
//    }
    
    if ( prices.length > 0 ) {
        
//          for(var i = 2; i< prices.length; i++){
//              
//              if ( prices[i] > sell && i > buyIndex) {
//                  sell = prices[i];
//                  sellIndex = i;
//              } else if ( prices[i] < buy && i < sellIndex ) {
//                  buy = prices[i];
//                   buyIndex = i;
//              }
//              
//              if ( sell  - buy > maxProfit){
//                  maxProfit = sell - buy;
//              }
//        }
        var maxProfit = 0;
        var buyIndex = 0;
        var sell = 0;
        for(var i = 1; i< prices.length; i++){

            
        if ( prices[i] < prices[buyIndex] ) {
            buyIndex = i;
        }
        
        if ( prices[i] - prices[buyIndex] > maxProfit){
            maxProfit = prices[i] - prices[buyIndex];
            
        }
          
    }

    return maxProfit < 0 ? 0 : maxProfit;
    }
};

var maxProfit2 = function(prices){
    
    var maxProfit = 0;
    var buy = 0;
    var sell = 0;
    var i = 0,j = 0;
    
    if (prices.length == 0 || prices.length == 1){
        return maxProfit;
    } else if (prices.length == 2){
        
        maxProfit = prices[1] - prices[0];
        
        return maxProfit > 0 ? maxProfit : 0;
    } else {
        
        for(var a = 0; a < prices.length ; a++ ){
            
            if (a == 0) {
                
                if( prices[a+1] > prices[a] ){
                    
                    buy = prices[a];
                    sell = prices[a+1]
                    maxProfit = sell - buy;
                    i = a;
                    j = a+1;
                        
                } else {
                    buy = prices[a+1];
                    i = a+1;
                }
                
            } else {
                if( prices[a] < buy){
                    buy = prices[a];
                    i = a;
                } else if (prices[a] > sell && a > i){
                    sell = prices[a];
                    j = a;
                    maxProfit = sell - buy;
                }
            }
        }
        
        return maxProfit;
    }
}

var result = 'The max profit is ' + maxProfit2([2,1,2,1,0,1,2]);

alert(result);