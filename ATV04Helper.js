({   
    showToast : function(component, event, helper) {
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "title": "Successo!",
            "type": "success",
            "message": "Um Novo produto foi inserido na lista de compras"
        });
        toastEvent.fire();
        $A.get('e.force:refreshView').fire();
    }
})
