/* 
	һ�������ʵ���࣬������������NPC/MONSTER/������/�ɽ����ķ����ʵ�����
*/	
var ActionEntity = ActionSprite.extend({
	isOnGound:true,
    ctor:function (scene, res) {
        //////////////////////////////
        // super init first
        this._super(scene, res);
        return true;
    },
    	
    /* -----------------------------------------------------------------------/
    							����ϵͳ���
    /------------------------------------------------------------------------ */
    spriteUpdate : function(dt)
    {
        this._super(dt);
    }
});