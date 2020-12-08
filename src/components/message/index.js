/**
 * Msg 方法说明
 * @type {string} 消息类型 success | error | warning | info | warn | loading
 * @str {string} 消息内容
 * @time {number} 提示时间 单位秒 默认3秒
 */
export function Msg (type,str,time){
    if((!!time ? typeof time !== 'number' : false) || typeof type !== 'string' || typeof str !== 'string'){
        this.$message.warning('请注意你传递的参数类型，与预期参数类型不符！');
        return
    }
    time = time || 3;
    switch (type) {
        case 'success':
            this.$message.success(str,time);
            break;
        case 'error':
            this.$message.error(str,time);
            break;
        case 'warning':
            this.$message.warning(str,time);
            break;
        case 'info':
            this.$message.info(str,time);
            break;
        case 'warn':
            this.$message.warn(str,time);
            break;
        case 'loading':
            this.$message.loading(str,time);
            break;
        default:
            this.$message.info(str,time);
            break;
    }
}

