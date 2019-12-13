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
        approximationFunction(){
            
        }
    }
};