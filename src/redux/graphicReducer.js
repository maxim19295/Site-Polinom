/* eslint-disable no-lone-blocks */
const BUILDING_GRAPHIC='BUILDING_GRAPHIC';
let initialState = {
    graphic: []
}
const graphicReducer = (state=initialState, action) => {
    switch(action.type){
        case BUILDING_GRAPHIC: 
            {
                let graphicPoints=[];
                switch(action.method){
                    case 'Лагранжа':{
                        let x, y;
                        for(let n=action.graphicSetting.min; n<action.graphicSetting.max; n++){
                        x=(n-action.graphicSetting.startX)/action.graphicSetting.scaleX;
                        let l=[];
                        for(let i=0;i<action.data.length;i++){
                            l[i]=1;
                            for(let j=0;j<action.data.length;j++){
                                if(j!==i)
                                    l[i]*=((x-action.data[j].x)/(action.data[i].x-action.data[j].x));
                            }
                        }
                        let L=0;
                        for(let i=0; i<action.data.length;i++){
                            L+=action.data[i].y*l[i];
                        }
                        y=action.graphicSetting.startY-L*action.graphicSetting.scaleY;
                        graphicPoints.push({x: n,y});
                        }
                    };
                    break;
                    case 'Ньютона':{
                        let x,y;
                for(let n=action.graphicSetting.min; n<action.graphicSetting.max; n++){
                    x=(n-action.graphicSetting.startX)/action.graphicSetting.scaleX;
                    //конечные разности
                    let deltaY=[];
                    let range=action.data.length-1;
                    let numberDifferents=range;
                    for(let i=0;i<range;i++){
                        let tempArr = [];
                        for(let j=0;j<numberDifferents;j++){
                            if(i==0)
                            tempArr[j]=(action.data[j+1].y-action.data[j].y)/(action.data[j+1].x-action.data[j].x);
                        else
                            tempArr[j]=(deltaY[i-1][j+1]-deltaY[i-1][j])/(action.data[i+j+1].x-action.data[j].x);
                        }
                        numberDifferents--;
                        deltaY.push(tempArr);
                }
                    let N = parseFloat(action.data[0].y);
                    let P = [];
                    for(let i=0;i<range;i++){
                        P[i]=deltaY[i][0];
                        for(let j=0;j<i+1;j++){
                            P[i]*=(x-action.data[j].x);
                        }
                    }
                    for(let i=0;i<P.length;i++){
                        N+=P[i];
                    }
                    y=action.graphicSetting.startY-N*action.graphicSetting.scaleY;
                    graphicPoints.push({x: n,y});
                    }
                };
                    break;
                    default:{}
                }
                state.graphic=graphicPoints;
                return {state};
            };
        default: return state;
    }
}
export const buildingGraphicAC = (method,startX,startY,min,max,scaleX,scaleY,data) => ({type: BUILDING_GRAPHIC, method, graphicSetting: {startX, startY,min,max,scaleX,scaleY},data});
export default graphicReducer;