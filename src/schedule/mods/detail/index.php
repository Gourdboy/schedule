<link rel="stylesheet" href="../../mods/detail/index.css"/>
<!--arrival start-->
<div class="detail">
    <div class="hd">
        <a href="#" class="close"></a>
    </div>
    <div class="bd" id="J_Slide">
        <div class="tab-content">
            <!--item-->
            <div class="tab-pannel">
                <div class="title">
                    <span class="field">2013-12-12</span>
                    <span class="field">国际航空</span>
                    <span class="field">CA1710</span>
                    <span class="field">机型：737</span>
                </div>
                <div class="content">
                    <div class="item inline-block ">
                        <h2>北京首都T3</h2>

                        <div class="weather">
                            2 ~ 5 晴
                        </div>
                        <div class="wind">
                            风力 2级
                        </div>
                        <div class="line inline-block"></div>
                        <div class="planned-time">计划起飞 14:00</div>
                        <div class="fact-time">预计起飞 14:06</div>
                        <div class="gate">登机口 C05</div>
                    </div>

                    <div class="middle inline-block">
                        <div class="sign inline-block arrival">
                            <div class="status ">到达</div>
                            <div class="statistics">
                                93%准点率
                            </div>
                        </div>

                        <span class="arrow"></span>
                        <div class="distance">距离：1195公里</div>
                        <div class="duration">时长：1小时45分</div>
                    </div>

                    <div class="item inline-block  right">
                        <h2>北京首都T3</h2>

                        <div class="weather">
                            2 ~ 5 晴
                        </div>
                        <div class="wind">
                            风力 2级
                        </div>
                        <div class="line inline-block"></div>
                        <div class="planned-time">计划起飞 14:00</div>
                        <div class="fact-time">预计起飞 14:06</div>
                        <div class="gate">登机口 C05</div>
                    </div>
                </div>
                <div class="remark">
                    谦虚航班CA1797（杭州-北京）已与11:02起飞，预计于13:20到达
                </div>
            </div>
            <!--item end-->
            <!--item-->
            <div class="tab-pannel hidden">
                <div class="title">
                    <span class="field">2013-12-13</span>
                    <span class="field">东方航空</span>
                    <span class="field">CA1710</span>
                    <span class="field">机型：537</span>
                </div>
                <div class="content">
                    <div class="item inline-block ">
                        <h2>杭州萧山机场</h2>

                        <div class="weather">
                            2 ~ 5 晴
                        </div>
                        <div class="wind">
                            风力 2级
                        </div>
                        <div class="line inline-block"></div>
                        <div class="planned-time">计划起飞 15:00</div>
                        <div class="fact-time">预计起飞 16:06</div>
                        <div class="gate">登机口 C05</div>
                    </div>

                    <div class="middle inline-block">
                        <div class="sign inline-block arrival">
                            <div class="status ">延误</div>
                            <div class="statistics">
                                12%准点率
                            </div>
                        </div>

                        <div class="arrow"></div>
                        <div class="distance">距离：3622公里</div>
                        <div class="duration">时长：2小时45分</div>
                    </div>

                    <div class="item inline-block  right">
                        <h2>成都双流机场</h2>

                        <div class="weather">
                            2 ~ 5 晴
                        </div>
                        <div class="wind">
                            风力 2级
                        </div>
                        <div class="line inline-block"></div>
                        <div class="planned-time">计划起飞 14:00</div>
                        <div class="fact-time">预计起飞 14:06</div>
                        <div class="gate">登机口 1</div>
                    </div>
                </div>
                <div class="remark">
                    谦虚航班CA1797（杭州-北京）已与11:02起飞，预计于13:20到达
                </div>
            </div>
            <!--item end-->
        </div>
        <div class="tab-nav">
            <span class="tab-nav-item selected"></span>
            <span class="tab-nav-item"></span>
        </div>
    </div>
</div>
<!--需要切换-->
<script>
    KISSY.use('gallery/slide/1.2/' , function (S,Slide){
        new Slide('J_Slide' , {
            eventype:'click',//tab上的触发事件
            triggerSelector :'.tab-nav-item',
            autoSlide:false,//自动播放
            effect:'hSlide',//切换效果为纵向滚动
            speed:300,//切换速度，越小越快，单位为毫秒
            hoverStop:true//鼠标经过内容是否停止播放
        })
    });
</script>
<!--arrival end-->
<!--planned start-->
<div class="detail">
    <div class="hd">
        <a href="#" class="close"></a>
    </div>
    <div class="bd">
        <div class="title">
            <span class="field">2013-12-12</span>
            <span class="field">国际航空</span>
            <span class="field">CA1710</span>
            <span class="field">机型：737</span>
        </div>
        <div class="content">
            <div class="item inline-block ">
                <h2>北京首都T3</h2>

                <div class="weather">
                    2 ~ 5 晴
                </div>
                <div class="wind">
                    风力 2级
                </div>
                <div class="line inline-block"></div>
                <div class="planned-time">计划起飞 14:00</div>
                <div class="fact-time">预计起飞 14:06</div>
                <div class="gate">登机口 C05</div>
            </div>

            <div class="middle inline-block">
                <div class="sign inline-block planned">
                    <div class="status ">计划</div>
                    <div class="statistics">
                        93%准点率
                    </div>
                </div>
                <div class="arrow "></div>
                <div class="distance">距离：1195公里</div>
                <div class="duration">时长：1小时45分</div>
            </div>

            <div class="item inline-block  right">
                <h2>北京首都T3</h2>

                <div class="weather">
                    2 ~ 5 晴
                </div>
                <div class="wind">
                    风力 2级
                </div>
                <div class="line inline-block"></div>
                <div class="planned-time">计划到达 14:00</div>
                <div class="fact-time">预计到达 --:--</div>
                <div class="gate">值机关闭 13:50</div>
            </div>
        </div>
        <div class="remark">
            谦虚航班CA1797（杭州-北京）已与11:02起飞，预计于13:20到达
        </div>
    </div>
</div>
<!--planned end-->
<!--launch start-->
<div class="detail">
    <div class="hd">
        <a href="#" class="close"></a>
    </div>
    <div class="bd">
        <div class="title">
            <span class="field">2013-12-12</span>
            <span class="field">国际航空</span>
            <span class="field">CA1710</span>
            <span class="field">机型：737</span>
        </div>
        <div class="content">
            <div class="item inline-block ">
                <h2>北京首都T3</h2>

                <div class="weather">
                    2 ~ 5 晴
                </div>
                <div class="wind">
                    风力 2级
                </div>
                <div class="line inline-block"></div>
                <div class="planned-time">计划起飞 14:00</div>
                <div class="fact-time">预计起飞 14:06</div>
            </div>

            <div class="middle inline-block">
                <div class="sign inline-block launch">
                    <div class="status ">起飞</div>
                    <div class="statistics">
                        93%准点率
                    </div>
                </div>
                <div class="arrow "></div>
                <div class="distance">距离：1195公里</div>
                <div class="duration">时长：1小时45分</div>
            </div>

            <div class="item inline-block  right">
                <h2>北京首都T3</h2>

                <div class="weather">
                    2 ~ 5 晴
                </div>
                <div class="wind">
                    风力 2级
                </div>
                <div class="line inline-block"></div>
                <div class="planned-time">计划到达 14:00</div>
                <div class="fact-time">预计到达 14:06</div>
            </div>
        </div>
        <div class="remark">
            谦虚航班CA1797（杭州-北京）已与11:02起飞，预计于13:20到达
        </div>
    </div>
</div>
<!--launch end-->
<!--delay start-->
<div class="detail">
    <div class="hd">
        <a href="#" class="close"></a>
    </div>
    <div class="bd">
        <div class="title">
            <span class="field">2013-12-12</span>
            <span class="field">国际航空</span>
            <span class="field">CA1710</span>
            <span class="field">机型：737</span>
        </div>
        <div class="content">
            <div class="item inline-block ">
                <h2>北京首都T3</h2>

                <div class="weather">
                    2 ~ 5 晴
                </div>
                <div class="wind">
                    风力 2级
                </div>
                <div class="line inline-block"></div>
                <div class="planned-time">计划起飞 14:00</div>
                <div class="fact-time">预计起飞 14:06</div>
                <div class="gate">登机口 C05</div>
            </div>

            <div class="middle inline-block">
                <div class="sign inline-block delay">
                    <div class="status ">延误</div>
                    <div class="statistics">
                        93%准点率
                    </div>
                </div>
                <div class="arrow "></div>
                <div class="distance">距离：1195公里</div>
                <div class="duration">时长：1小时45分</div>
            </div>

            <div class="item inline-block  right">
                <h2>北京首都T3</h2>

                <div class="weather">
                    2 ~ 5 晴
                </div>
                <div class="wind">
                    风力 2级
                </div>
                <div class="line inline-block"></div>
                <div class="planned-time">计划到达 14:00</div>
                <div class="fact-time">预计到达 14:06</div>
                <div class="gate">值机关闭 13:50</div>
            </div>
        </div>
        <div class="remark">
            谦虚航班CA1797（杭州-北京）已与11:02起飞，预计于13:20到达
        </div>
    </div>
</div>
<!--delay end-->
<!--cancel start-->
<div class="detail">
    <div class="hd">
        <a href="#" class="close"></a>
    </div>
    <div class="bd">
        <div class="title">
            <span class="field">2013-12-12</span>
            <span class="field">国际航空</span>
            <span class="field">CA1710</span>
            <span class="field">机型：737</span>
        </div>
        <div class="content">
            <div class="item inline-block ">
                <h2>北京首都T3</h2>

                <div class="weather">
                    2 ~ 5 晴
                </div>
                <div class="wind">
                    风力 2级
                </div>
                <div class="line inline-block"></div>
                <div class="planned-time">计划起飞 14:00</div>
                <div class="fact-time">实际起飞 14:06</div>
            </div>

            <div class="middle inline-block">
                <div class="sign inline-block cancel">
                    <div class="status ">取消</div>
                    <div class="statistics">
                        93%准点率
                    </div>
                </div>
                <div class="arrow "></div>
                <div class="distance">距离：1195公里</div>
                <div class="duration">时长：1小时45分</div>
            </div>

            <div class="item inline-block  right">
                <h2>北京首都T3</h2>

                <div class="weather">
                    2 ~ 5 晴
                </div>
                <div class="wind">
                    风力 2级
                </div>
                <div class="line inline-block"></div>
                <div class="planned-time">计划到达 14:00</div>
                <div class="fact-time">实际到达 14:06</div>
            </div>
        </div>
        <div class="remark">
            谦虚航班CA1797（杭州-北京）已与11:02起飞，预计于13:20到达
        </div>
    </div>
</div>
<!--cancel end-->
<!--return start-->
<div class="detail">
    <div class="hd">
        <a href="#" class="close"></a>
    </div>
    <div class="bd">
        <div class="title">
            <span class="field">2013-12-12</span>
            <span class="field">国际航空</span>
            <span class="field">CA1710</span>
            <span class="field">机型：737</span>
        </div>
        <div class="content">
            <div class="item inline-block ">
                <h2>北京首都T3</h2>

                <div class="weather">
                    2 ~ 5 晴
                </div>
                <div class="wind">
                    风力 2级
                </div>
                <div class="line inline-block"></div>
                <div class="planned-time">计划起飞 14:00</div>
                <div class="fact-time">预计起飞 14:06</div>
            </div>

            <div class="middle inline-block">
                <div class="sign inline-block return">
                    <div class="status ">返航</div>
                    <div class="statistics">
                        93%准点率
                    </div>
                </div>
                <div class="arrow "></div>
                <div class="distance">距离：1195公里</div>
                <div class="duration">时长：1小时45分</div>
            </div>

            <div class="item inline-block  right">
                <h2>北京首都T3</h2>

                <div class="weather">
                    2 ~ 5 晴
                </div>
                <div class="wind">
                    风力 2级
                </div>
                <div class="line inline-block"></div>
                <div class="planned-time">备降到达 14:00</div>
                <div class="fact-time">备降后起飞 14:06</div>
                <div class="gate">登机口 C05</div>
            </div>
        </div>
        <div class="remark">
            谦虚航班CA1797（杭州-北京）已与11:02起飞，预计于13:20到达
        </div>
    </div>
</div>
<!--return end-->
<!--predrop start-->
<div class="detail">
    <div class="hd">
        <a href="#" class="close"></a>
    </div>
    <div class="bd">
        <div class="title">
            <span class="field">2013-12-12</span>
            <span class="field">国际航空</span>
            <span class="field">CA1710</span>
            <span class="field">机型：737</span>
        </div>
        <div class="content">
            <div class="item inline-block ">
                <h2>北京首都T3</h2>

                <div class="weather">
                    2 ~ 5 晴
                </div>
                <div class="wind">
                    风力 2级
                </div>
                <div class="line inline-block"></div>
                <div class="planned-time">计划起飞 14:00</div>
                <div class="fact-time">实际起飞 14:06</div>
                <div class="gate">登机口 C05</div>
            </div>

            <div class="middle inline-block">
                <div class="sign inline-block predrop">
                    <div class="status">备降</div>
                    <div class="statistics">
                        93%准点率
                    </div>
                </div>
                <div class="arrow "></div>
                <div class="distance">距离：1195公里</div>
                <div class="duration">时长：1小时45分</div>
            </div>

            <div class="item inline-block  right">
                <h2>北京首都T3</h2>

                <div class="weather">
                    2 ~ 5 晴
                </div>
                <div class="wind">
                    风力 2级
                </div>
                <div class="line inline-block"></div>
            </div>
        </div>
        <div class="remark">
            谦虚航班CA1797（杭州-北京）已与11:02起飞，预计于13:20到达
        </div>
    </div>
</div>
<!--predrop end-->