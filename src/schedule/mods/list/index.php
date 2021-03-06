<link rel="stylesheet" href="../../mods/list/index.css"/>
<div class="list" id="J_List">
    <div class="tab-content">
        <div class="tab-pannel">
            <table class="result">
            <thead>
            <tr>
                <th width="70">航班</th>
                <th width="140">始发地</th>
                <th>计划起飞</th>
                <th>实际起飞</th>
                <th width="140">目的地</th>
                <th>计划到达</th>
                <th>实际到达</th>
                <th>状态</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>MU5146</td>
                <td>首都机场</td>
                <td>14:00</td>
                <td>14:05</td>
                <td>虹桥机场</td>
                <td>18:00</td>
                <td>18:10</td>
                <td><span class="status arrival">到达</span></td>
            </tr>
            <tr>
                <td>MU5146</td>
                <td>首都机场</td>
                <td>14:00</td>
                <td>14:05</td>
                <td>虹桥机场</td>
                <td>18:00</td>
                <td>18:10</td>
                <td><span class="status launch">起飞</span></td>
            </tr>
            <tr>
                <td>MU5146</td>
                <td>首都机场</td>
                <td>14:00</td>
                <td>14:05</td>
                <td>虹桥机场</td>
                <td>18:00</td>
                <td>18:10</td>
                <td><span class="status planned">计划</span></td>
            </tr>
            <tr>
                <td>MU5146</td>
                <td>首都机场</td>
                <td>14:00</td>
                <td>14:05</td>
                <td>虹桥机场</td>
                <td>18:00</td>
                <td>18:10</td>
                <td><span class="status predrop">备降</span></td>
            </tr>
            <tr>
                <td>MU5146</td>
                <td>首都机场</td>
                <td>14:00</td>
                <td>14:05</td>
                <td>虹桥机场</td>
                <td>18:00</td>
                <td>18:10</td>
                <td><span class="status delay">延误</span></td>
            </tr>
            <tr>
                <td>MU5146</td>
                <td>首都机场</td>
                <td>14:00</td>
                <td>14:05</td>
                <td>虹桥机场</td>
                <td>18:00</td>
                <td>18:10</td>
                <td><span class="status cancel">取消</span></td>
            </tr>
            <tr>
                <td>MU5146</td>
                <td>首都机场</td>
                <td>14:00</td>
                <td>14:05</td>
                <td>虹桥机场</td>
                <td>18:00</td>
                <td>18:10</td>
                <td><span class="status return">返航</span></td>
            </tr>
            </tbody>
        </table>
        </div>
        <div class="tab-pannel">
            <table class="result">
            <thead>
            <tr>
                <th width="70">航班</th>
                <th width="140">始发地</th>
                <th>计划起飞</th>
                <th>实际起飞</th>
                <th width="140">目的地</th>
                <th>计划到达</th>
                <th>实际到达</th>
                <th>状态</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>MU5146</td>
                <td>萧山机场</td>
                <td>14:00</td>
                <td>14:05</td>
                <td>虹桥机场</td>
                <td>18:00</td>
                <td>18:10</td>
                <td><span class="status arrival">到达</span></td>
            </tr>
            <tr>
                <td>MU5146</td>
                <td>白云山机场</td>
                <td>14:00</td>
                <td>14:05</td>
                <td>虹桥机场</td>
                <td>18:00</td>
                <td>18:10</td>
                <td><span class="status launch">起飞</span></td>
            </tr>
            <tr>
                <td>MU5146</td>
                <td>双流机场</td>
                <td>14:00</td>
                <td>14:05</td>
                <td>虹桥机场</td>
                <td>18:00</td>
                <td>18:10</td>
                <td><span class="status planned">计划</span></td>
            </tr>
            <tr>
                <td>MU5146</td>
                <td>杭州萧山国际机场</td>
                <td>14:00</td>
                <td>14:05</td>
                <td>虹桥机场</td>
                <td>18:00</td>
                <td>18:10</td>
                <td><span class="status predrop">备降</span></td>
            </tr>
            <tr>
                <td>MU5146</td>
                <td>首都机场</td>
                <td>14:00</td>
                <td>14:05</td>
                <td>虹桥机场</td>
                <td>18:00</td>
                <td>18:10</td>
                <td><span class="status delay">延误</span></td>
            </tr>
            <tr>
                <td>MU5146</td>
                <td>首都机场</td>
                <td>14:00</td>
                <td>14:05</td>
                <td>虹桥机场</td>
                <td>18:00</td>
                <td>18:10</td>
                <td><span class="status cancel">取消</span></td>
            </tr>
            <tr>
                <td>MU5146</td>
                <td>首都机场</td>
                <td>14:00</td>
                <td>14:05</td>
                <td>虹桥机场</td>
                <td>18:00</td>
                <td>18:10</td>
                <td><span class="status return">返航</span></td>
            </tr>
            </tbody>
        </table>
        </div>
    </div>
    <div class="pager">
        <div class="tab-nav">
            <span class="page-item selected"></span>
            <span class="page-item"></span>
        </div>
    </div>
</div>

<script>
    KISSY.use('gallery/slide/1.2/' , function (S,Slide){
        new Slide('J_List' , {
            eventype:'click',//tab上的触发事件
            triggerSelector :'.page-item',
            effect:'hSlide',//切换效果为纵向滚动
            speed:300,//切换速度，越小越快，单位为毫秒
            hoverStop:true//鼠标经过内容是否停止播放
        })
    });
</script>
