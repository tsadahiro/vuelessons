let app = new Vue({
    el: "#app",
    data:{
	conf:[[1,2,3],[4,5,6],[7,8," "]],
	x: 2,
	y: 2,
    },
    methods:{
	neighbors: function(i,j){
	    let nei = [];
	    if (i>0){
		nei.push({x:i-1,y:j});
	    }
	    if (i<2){
		nei.push({x:i+1,y:j});
	    }
	    if (j>0){
		nei.push({x:i,y:j-1});
	    }
	    if (j<2){
		nei.push({x:i,y:j+1});
	    }
	    return nei;
	},
	swap: function(p,q){
	    let buf = this.conf[p.x][p.y];
	    this.conf[p.x].splice(p.y,1,this.conf[q.x][q.y]);
	    this.conf[q.x].splice(q.y,1,buf);
	},
	shuffle: function(){
	    let nei = this.neighbors(this.x, this.y);
	    let s = Math.floor(Math.random()*nei.length);
	    console.log(nei[s]);
	    this.swap(nei[s],{x:this.x,y:this.y});
	    this.x = nei[s].x;
	    this.y = nei[s].y;
	}
    }
    
})
