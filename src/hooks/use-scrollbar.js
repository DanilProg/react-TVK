import {useEffect} from "react";
import {OverlayScrollbars} from "overlayscrollbars";

const config = {}

export const useScrollbar = (root) => {
    useEffect(() => {
        if(root.current){
           OverlayScrollbars(root.current, config)
        }
    },[root])
}
