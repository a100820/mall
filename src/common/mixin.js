import { debounce } from "common/utils.js";

export const imageListenerMix = {
    data() {
        return {
            ietmImageListener: null,
        }
    },
    mouted() {
        // 防抖
        this.ietmImageListener = () => {
            // this.$refs.Scroll && this.$refs.Scroll.imageRefresh();
            refresh();
        };
        const refresh = debounce(this.$refs.Scroll.imageRefresh, 500);
        this.$bus.$on("ietmImageLoad", this.ietmImageListener);
    }
}