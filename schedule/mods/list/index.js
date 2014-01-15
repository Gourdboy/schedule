KISSY.add(function (S,Base){
    var ResultList = Base.extend({
        initializer : function (){
            this.renderUI();
            this.bindUI();
        },
        renderUI : function (){
        },
        bindUI : function (){
        },
        destructor : function (){

        }
    },{
        ATTRS : {
            node: {
                value: null,
                setter : function(val){
                    return S.one(val);
                }
            },
            template :{
                value :""
            },
            pageSize : {
                value :10
            },
            model : {
                value : [
                    {
                        cabin      : "CA1475",                      //舱位
                        airport    : ['北京首都机场', '上海浦东机场'],  //出发到达机场
                        plannedTime: ['14:00' , '15:00'],           //出发到达的计划时间
                        factTime   : ['14:00' , '15:00'],           //实际出发到达时间
                        weather    : ['2~5 晴天', '3~6 阴天'],        //出发到达城市天气
                        gate       : ["C05" , "A05"],               //出发到达的登机口
                        wind       : ["风力2级", "风力3级"],          //出发到达城市风力
                        status     : "delay",                       //航班状态
                        distance   : 2345,                          //两地的距离
                        duration   : 234523423,                     //飞行时间 单位秒
                        remark     : "前续航班CA1797（杭州-北京）已与11:02起飞，预计于13:20到达" //额外的文字说明
                    }
                ]
            }
        }
    });
    return ResultList;
},{requires : ['base','gallery/juicer/1.3/','node' , 'event']});