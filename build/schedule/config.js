/*
combined files : 

tools/src/schedule/config

*/
/**
 * http://g.tbcdn.cn/trip/trip-home/0.1.4/config.js
 */
(function(){
    KISSY.config('tag', null); //去除?t时间戳

    if (KISSY.Config.debug !== true) {
        if (location.href.indexOf('waptest') > -1 || location.href.indexOf('wapa') > -1) {
            KISSY.Config.daily = true;
        }
    }
    KISSY.Config.debug = true;
	if (KISSY.Config.debug) {
		var srcPath = "../../../";
		KISSY.config({
			packages:[
				{
					name:"schedule",
					path:srcPath,
					charset:"utf-8",
					ignorePackageNameInUri:true,
					debug:true,
          combine:false
				}
			]
		});
	} else {
        KISSY.config({
			  combine:true,
            packages: [
                {
                    name: 'schedule',
                    // 修改 abc.json 中的 version 字段来生成版本号
                    path: window.g_config.assetsServer + 'trip/tools/schedule/',
                    ignorePackageNameInUri: true
                }
            ]
        });
	}
})();

