目前Clash支持的规则类型如下:

DOMAIN-SUFFIX：域名后缀匹配
DOMAIN：域名匹配
DOMAIN-KEYWORD：域名关键字匹配
IP-CIDR：IP段匹配
SRC-IP-CIDR：源IP段匹配
GEOIP：GEOIP数据库（国家代码）匹配
DST-PORT：目标端口匹配
SRC-PORT：源端口匹配
PROCESS-NAME：源进程名匹配
RULE-SET：Rule Provider规则匹配
MATCH：全匹配
其中我们使用最多的就是DOMAIN-SUFFIX域名后缀了。其余规则类型根据说明大家也可以自行探索。