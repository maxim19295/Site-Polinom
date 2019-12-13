let rerenderTree = () =>{
        console.log('empty function');
    };
export let subscribe = (observer) =>{
        rerenderTree=observer;
    };
export let state = {
        methods: [{type: 'none', text: '(не выбрано)'},{type: 'newton', text: 'Ньютона'},{type: 'Lagrangh', text: 'Лагранжа'}],
        method: '(не выбрано)',
        coordinates: {
            point: [],
            newX: '',
            newY: ''
        },
        graphic: {
            graphicPoint: []
        }
    };
export let functions = {
    methodFunctions: {
        onChangeMethod(value){
        if(value==='Ньютона') state.method=value;
           else if(value==='Лагранжа') state.method=value;
     else if(value==='(не выбрано)') state.method=value;
        rerenderTree(state);
        console.log(state);
        }
    },
    coordsFunctions: {
        onInputNewCoordinate(coordinate,newValue){
        if(coordinate==='X')
            state.coordinates.newX=newValue;
        else if(coordinate==='Y')
            state.coordinates.newY=newValue;
        console.log(state);
            rerenderTree(state);
        },
        saveCoordinates(){
            let newPoint={x: state.coordinates.newX,
                         y: state.coordinates.newY};
            state.coordinates.point.push(newPoint);
            state.coordinates.newX='';
            state.coordinates.newY='';
            rerenderTree(state);
        }
    },
    graphicFunctions: {
        approximationFunction(method,startX,startY,min,max,scaleX,scaleY){
            if(method==='Лагранжа'){
                let x,y;
                for(let n=min; n<max; n++){
                x=(n-startX)/scaleX;
                let l=[];
                for(let i=0;i<state.coordinates.point.length;i++){
                    l[i]=1;
                    for(let j=0;j<state.coordinates.point.length;j++){
                        if(j!=i)
                            l[i]*=((x-state.coordinates.point[j].x)/(state.coordinates.point[i].x-state.coordinates.point[j].x));
                    }
                }
                let L=0;
                for(let i=0; i<state.coordinates.point.length;i++){
                    L+=state.coordinates.point[i].y*l[i];
                }
                y=startY-L*scaleY;
                state.graphic.graphicPoint.push({x: n,y: y});
                }
            }
            else if(method==='Ньютона'){
                    let x,y;
                for(let n=min; n<max; n++){
                    x=(n-startX)/scaleX;
                    //конечные разности
                    let deltaY=[];
                    let range=state.coordinates.point.length-1;
                    let numberDifferents=range;
                    for(let i=0;i<range;i++){
                        let tempArr = [];
                        debugger;
                        for(let j=0;j<numberDifferents;j++){
                            if(i==0)
                            tempArr[j]=(state.coordinates.point[j+1].y-state.coordinates.point[j].y)/(state.coordinates.point[j+1].x-state.coordinates.point[j].x);
                        else
                            tempArr[j]=(deltaY[i-1][j+1]-deltaY[i-1][j])/(state.coordinates.point[i+j+1].x-state.coordinates.point[j].x);
                        }
                        numberDifferents--;
                        deltaY.push(tempArr);
                }
                    let N = parseFloat(state.coordinates.point[0].y);
                    
                    console.log(deltaY);
                    let P = [];
                    for(let i=0;i<range;i++){
                        P[i]=deltaY[i][0];
                        for(let j=0;j<i+1;j++){
                            P[i]*=(x-state.coordinates.point[j].x);
                        }
                    }
                    for(let i=0;i<P.length;i++){
                        N+=P[i];
                    }
                    y=startY-N*scaleY;
                    state.graphic.graphicPoint.push({x: n,y: y});
                }
                    }
        }
    },
    generalFunctions:{
        clearState(){
            state.method='(не выбрано)';
            state.coordinates.point=[];
            state.graphic.graphicPoint=[];
            rerenderTree(state);
        }
    }
};