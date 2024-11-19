<?php

class WorldClock_List_View extends Vtiger_Index_View {
    public function process(Vtiger_Request $request){
        $viewer = $this->getViewer($request);
        $viewer->view('ListViewContents.tpl', $request->getModule());
    }

    //Register loading client-scripts for the UI
    public function getHeaderScripts(Vtiger_Request $request){
        $allJS = parent::getHeaderScripts($request);
        $moduleName = $request->getModule();

        //dot.separated paths will be resolved with respect to active layout
        //example: layouts/v7/...
        $jsFileNames = array(
            "modules.Vtiger.resources.List",
            "modules.$moduleName.resources.List"
        );

        $newJS = $this->checkAndConvertJsScripts($jsFileNames);
        $allJS = array_merge($allJS, $newJS);
        return $allJS;
    }
}