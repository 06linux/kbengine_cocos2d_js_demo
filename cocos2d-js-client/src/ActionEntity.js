var ActionEntity = ActionSprite.extend({
	destPosition:null,
	isOnGound:true,
    ctor:function (scene, res) {
        //////////////////////////////
        // super init first
        this._super(scene, res);
        
        this.destPosition = new KBEngine.Vector3(0.0, 0.0, 0.0);
        return true;
    },
    	
    /* -----------------------------------------------------------------------/
    							����ϵͳ���
    /------------------------------------------------------------------------ */
    motionUpdate : function(dt)
    {
    },
    	
    spriteUpdate : function(dt)
    {
        this._super(dt);
        this.motionUpdate();
    }
});