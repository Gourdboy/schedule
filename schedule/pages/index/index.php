<!doctype html>
<?
$piVersion = "1.1.6";
?>
<html>
<head>
    <meta charset="utf-8"/>
    <title>航班时刻表</title>
    <link rel="stylesheet" href="http://g.tbcdn.cn/tpi/pi/<?=$piVersion;?>/??base/index-min.css,msg/index-min.css">
    <script src="http://g.tbcdn.cn/??kissy/k/1.4.1/seed-min.js,tpi/pi/<?=$piVersion?>/seed-min.js"></script>
</head>
<body>
<?
include("../../mods/list/index.php");
include("../../mods/detail/index.php");
?>
<script src="index.js"></script>
</body>
</html>